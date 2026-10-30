"use client";

import { Modal } from "@/components/Modal";
import React from "react";
import { X, Video } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl">
        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          <h2 className="sr-only">Aurora Hills site tour</h2>
          <video
            src="/videos/drone-2-compressed.mp4"
            autoPlay
            controls
            playsInline
            preload="none"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </Modal>
  );
};
