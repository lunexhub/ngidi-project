import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export type ReviewStats = {
  count: number;
  avg: number;
};

export const useReviewStats = () => {
  const [stats, setStats] = useState<ReviewStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const { data, error } = await supabase.from("reviews").select("rating");
      if (!error && data) {
        const count = data.length;
        const avg =
          count > 0 ? data.reduce((s, r) => s + r.rating, 0) / count : 0;
        setStats({ count, avg });
      }
    };

    fetchStats();

    const channel = supabase
      .channel("hero_review_stats")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "reviews" },
        () => fetchStats()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return stats;
};
