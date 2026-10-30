"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
const tours = [
  { title: "Project overview", src: "/videos/aurora-hills-main-web.mp4", poster: "/images/welcome-gate-sunset.jpg" },
  { title: "Site walkthrough", src: "/videos/drone-1-web.mp4", poster: "/images/posters/drone-1-poster.jpg" },
  { title: "Aerial flyover", src: "/videos/drone-2-compressed.mp4", poster: "/images/posters/drone-2-poster.jpg" },
  { title: "Hillside views", src: "/videos/drone-3-web.mp4", poster: "/images/posters/drone-3-poster.jpg" },
  { title: "Development tour", src: "/videos/drone-4-compressed.mp4", poster: "/images/posters/drone-4-poster.jpg" },
];
export function DevelopmentVideo({ onOpenSiteVisit }: { onOpenSiteVisit: () => void }) {
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(false);
  const tour = tours[selected];
  return <section id="development" className="py-12 lg:py-20 bg-white px-4 sm:px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center">Explore the site, at your pace</h2>
      <p className="text-base text-center text-gray-600 mt-3 mb-6">Choose a tour to see the roads, plot boundaries and hillside setting.</p>
      <div className="relative aspect-video bg-emerald-950 rounded-2xl overflow-hidden">
        {playing ? <video key={tour.src} src={tour.src} poster={tour.poster} autoPlay controls playsInline preload="none" className="w-full h-full" aria-label={tour.title} /> :
          <button className="relative w-full h-full group" onClick={() => setPlaying(true)} aria-label={`Play ${tour.title}`}>
            <Image src={tour.poster} alt={tour.title} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
            <span className="absolute inset-0 bg-black/25 flex items-center justify-center"><span className="rounded-full bg-white p-5 text-emerald-900"><Play className="w-7 h-7" /></span></span>
          </button>}
      </div>
      <div className="flex gap-2 overflow-x-auto py-4" aria-label="Choose a site video">
        {tours.map((item, index) => <button key={item.src} aria-pressed={selected === index} onClick={() => { setSelected(index); setPlaying(false); }} className={`min-h-11 px-4 py-2 rounded-xl text-sm shrink-0 border ${selected === index ? 'bg-emerald-800 text-white border-emerald-800' : 'bg-white text-emerald-950 border-gray-300'}`}>{item.title}</button>)}
      </div>
      <div className="text-center"><button className="secondary-button" onClick={onOpenSiteVisit}>Book a Free Site Visit</button></div>
    </div>
  </section>;
}
