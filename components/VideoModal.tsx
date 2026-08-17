"use client";

import React, { useState } from "react";
import { X, Youtube, Video, ExternalLink } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose,
  youtubeId = "lTfIzK3zkpc"
}) => {
  const [useYoutube, setUseYoutube] = useState(true);

  if (!isOpen) return null;

  const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 animate-fade-in">
      <div className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl">
        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
          <button
            onClick={() => setUseYoutube(!useYoutube)}
            className="px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold backdrop-blur-md transition-colors flex items-center gap-1.5"
          >
            {useYoutube ? <Video className="w-3.5 h-3.5" /> : <Youtube className="w-3.5 h-3.5 text-red-500" />}
            <span>{useYoutube ? "Switch to Drone MP4" : "Switch to YouTube"}</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          {useYoutube ? (
            <iframe
              src={youtubeEmbedUrl}
              title="The Aurora Hills Walkthrough Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              src="/aurora-hills.mp4"
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};
