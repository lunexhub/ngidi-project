import { useState, useEffect } from "react";
import { Star, Heart, ChevronDown, ChevronUp, X } from "lucide-react";
import { supabase, type Review } from "@/lib/supabase";

const INITIAL_VISIBLE = 3;

const StarRating = ({
  value,
  onChange,
  readonly = false,
  size = "md",
}: {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
  size?: "sm" | "md";
}) => {
  const [hovered, setHovered] = useState(0);
  const sz = size === "sm" ? "w-4 h-4" : "w-6 h-6";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sz} transition-colors ${
            star <= (readonly ? value : hovered || value)
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          } ${!readonly ? "cursor-pointer" : ""}`}
          onMouseEnter={() => !readonly && setHovered(star)}
          onMouseLeave={() => !readonly && setHovered(0)}
          onClick={() => !readonly && onChange?.(star)}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({
  review,
  onLike,
  liked,
}: {
  review: Review;
  onLike: (id: string) => void;
  liked: boolean;
}) => {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    "bg-pink-500",
    "bg-purple-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
  ];
  const colorIndex =
    review.name.charCodeAt(0) % colors.length;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-3 border border-gray-100">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${colors[colorIndex]}`}
          >
            {initials}
          </div>
          <div>
            <p className="font-heading font-semibold text-gray-900 text-sm leading-tight">
              {review.name}
            </p>
            <p className="text-gray-400 text-xs mt-0.5">
              {new Date(review.created_at).toLocaleDateString("en-ZA", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <StarRating value={review.rating} readonly size="sm" />
        </div>
      </div>

      <p className="font-body text-gray-700 text-sm leading-relaxed">
        {review.comment}
      </p>

      <button
        onClick={() => onLike(review.id)}
        className={`flex items-center gap-1.5 w-fit text-sm font-medium transition-all duration-200 group ${
          liked
            ? "text-pink-500"
            : "text-gray-400 hover:text-pink-400"
        }`}
      >
        <Heart
          className={`w-4 h-4 transition-transform group-active:scale-125 ${
            liked ? "fill-pink-500 text-pink-500" : ""
          }`}
        />
        <span>{review.likes}</span>
      </button>
    </div>
  );
};

const ReviewModal = ({
  reviews,
  likedIds,
  onLike,
  onClose,
}: {
  reviews: Review[];
  likedIds: Set<string>;
  onLike: (id: string) => void;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-50 flex flex-col justify-end sm:items-center sm:justify-center bg-black/50 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-[85vh]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* drag handle — mobile only */}
      <div className="flex justify-center pt-3 pb-1 sm:hidden">
        <div className="w-10 h-1 rounded-full bg-gray-300" />
      </div>

      {/* header */}
      <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-100 flex-shrink-0">
        <div>
          <h3 className="font-heading text-gray-900 text-lg sm:text-xl font-bold leading-tight">
            All Reviews
          </h3>
          <p className="text-gray-400 text-xs mt-0.5">
            {reviews.length} review{reviews.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center transition-colors flex-shrink-0 ml-3"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* scrollable list */}
      <div className="overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 flex flex-col gap-4 overscroll-contain pb-safe">
        {reviews.map((r) => (
          <ReviewCard
            key={r.id}
            review={r}
            onLike={onLike}
            liked={likedIds.has(r.id)}
          />
        ))}
        {/* bottom breathing room on mobile */}
        <div className="h-2 sm:hidden" />
      </div>
    </div>
  </div>
);

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [likedIds, setLikedIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem("liked_reviews");
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [form, setForm] = useState({
    name: "",
    rating: 0,
    comment: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [ratingError, setRatingError] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setReviews(data as Review[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();

    const channel = supabase
      .channel("reviews_live")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "reviews" },
        (payload) => {
          setReviews((prev) => {
            if (prev.find((r) => r.id === (payload.new as Review).id)) return prev;
            return [payload.new as Review, ...prev];
          });
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "reviews" },
        (payload) => {
          setReviews((prev) =>
            prev.map((r) =>
              r.id === (payload.new as Review).id ? (payload.new as Review) : r
            )
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleLike = async (id: string) => {
    if (likedIds.has(id)) return;
    const review = reviews.find((r) => r.id === id);
    if (!review) return;

    const newLikes = review.likes + 1;
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: newLikes } : r))
    );
    const newLiked = new Set(likedIds).add(id);
    setLikedIds(newLiked);
    localStorage.setItem("liked_reviews", JSON.stringify([...newLiked]));

    await supabase.from("reviews").update({ likes: newLikes }).eq("id", id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) {
      setRatingError(true);
    }
    if (!form.name.trim() || !form.comment.trim() || form.rating === 0) {
      setSubmitError("Please fill in all fields and select a star rating.");
      return;
    }
    setRatingError(false);
    setSubmitting(true);
    setSubmitError("");

    const { data, error } = await supabase
      .from("reviews")
      .insert([{ name: form.name.trim(), rating: form.rating, comment: form.comment.trim(), likes: 0 }])
      .select()
      .single();

    if (error) {
      setSubmitError("Failed to submit review. Please try again.");
    } else {
      setReviews((prev) => [data as Review, ...prev]);
      setForm({ name: "", rating: 0, comment: "" });
      setRatingError(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 4000);
    }
    setSubmitting(false);
  };

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
      : 0;

  const visible = reviews.slice(0, INITIAL_VISIBLE);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-pink-600 text-sm uppercase tracking-[0.2em] mb-2">
            Client Experiences
          </p>
          <h2 className="font-heading text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our Patients Say
          </h2>

          {reviews.length > 0 && (
            <div className="flex flex-col items-center gap-1 mt-4">
              <div className="flex items-center gap-2">
                <span className="font-heading text-4xl font-bold text-gray-900">
                  {avgRating.toFixed(1)}
                </span>
                <StarRating value={Math.round(avgRating)} readonly />
              </div>
              <p className="text-gray-500 text-sm">
                Based on {reviews.length} review{reviews.length !== 1 ? "s" : ""}
              </p>
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {reviews.length === 0 ? (
              <p className="text-center text-gray-400 py-10 text-sm">
                No reviews yet. Be the first to leave one below!
              </p>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {visible.map((r) => (
                    <ReviewCard
                      key={r.id}
                      review={r}
                      onLike={handleLike}
                      liked={likedIds.has(r.id)}
                    />
                  ))}
                </div>

                {reviews.length > INITIAL_VISIBLE && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAll(true)}
                      className="flex items-center gap-2 bg-white border border-pink-200 text-pink-600 font-body font-semibold px-6 py-3 rounded-full hover:bg-pink-50 hover:border-pink-400 transition-all duration-200 shadow-sm text-sm"
                    >
                      View all {reviews.length} reviews
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* Write a review form */}
        <div className="mt-16 max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="font-heading text-gray-900 text-xl font-bold mb-1">
              Write a Review
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Share your experience with others
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block font-body text-gray-700 text-sm font-medium mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Thandi Mokoena"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className={`block font-body text-sm font-medium mb-1.5 ${ratingError ? "text-red-500" : "text-gray-700"}`}>
                  Rating <span className="text-red-500">*</span>
                </label>
                <div className={`inline-flex p-1.5 rounded-xl transition-all ${ratingError ? "ring-2 ring-red-400 bg-red-50" : ""}`}>
                  <StarRating
                    value={form.rating}
                    onChange={(v) => {
                      setForm((f) => ({ ...f, rating: v }));
                      setRatingError(false);
                    }}
                  />
                </div>
                {ratingError && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">Please select a star rating to continue.</p>
                )}
              </div>

              <div>
                <label className="block font-body text-gray-700 text-sm font-medium mb-1.5">
                  Your Review
                </label>
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                  placeholder="Tell us about your experience..."
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition resize-none"
                />
              </div>

              {submitError && (
                <p className="text-red-500 text-sm">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="text-green-600 text-sm font-medium">
                  Thank you! Your review has been posted.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="bg-pink-500 text-white font-body font-semibold py-3 rounded-xl hover:bg-pink-600 active:bg-pink-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
              >
                {submitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showAll && (
        <ReviewModal
          reviews={reviews}
          likedIds={likedIds}
          onLike={handleLike}
          onClose={() => setShowAll(false)}
        />
      )}
    </section>
  );
};

export default ReviewsSection;
