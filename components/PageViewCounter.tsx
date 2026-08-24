"use client";

import React, { useEffect, useState } from "react";
import { Users } from "lucide-react";

export const PageViewCounter: React.FC = () => {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    // Fetch and increment page views once per session/mount
    const fetchViews = async () => {
      try {
        const res = await fetch("/api/page-views");
        if (res.ok) {
          const data = await res.json();
          setViewCount(data.count);
        }
      } catch (error) {
        console.error("Failed to load page views", error);
      }
    };

    fetchViews();
  }, []);

  if (viewCount === null) {
    return null; // Don't show anything while loading
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm text-emerald-800 text-sm font-bold tracking-wider">
      <Users className="w-4 h-4 text-emerald-600" />
      <span>{viewCount.toLocaleString()} Total Visitors</span>
    </div>
  );
};
