import React from 'react';
import { churchInfo } from '../data/content';
import { MapPin, Calendar, HeartHandshake, BookOpen, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreInitiatives: () => void;
  onOpenVolunteer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreInitiatives, onOpenVolunteer }) => {
  return (
    <section id="home" className="relative">
      {/* Visual Focal Anchor: Hero Banner */}
      <div className="relative min-h-[520px] lg:min-h-[580px] w-full flex items-center justify-center overflow-hidden bg-stone-900">
        <img
          src={churchInfo.heroImage}
          alt="Grace Haven stone chapel and peaceful children's home gardens in morning sunlight"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-95 transform scale-100 transition-transform duration-700"
        />
        {/* Measured Scrim for Media Overlays (Section 1.F) */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-900/40" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center text-white z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20 text-xs sm:text-sm font-sans tracking-wide text-amber-200 mb-6">
            <span>A Christ-Centered Sanctuary & Community Hub</span>
            <span aria-hidden="true">·</span>
            <span>Serving Since {churchInfo.established}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white max-w-4xl mx-auto leading-tight text-balance">
            A Humble Home of Faith, Compassion & Neighborhood Hope
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-stone-200 font-sans max-w-2xl mx-auto leading-relaxed">
            Welcome to Grace Haven. We are a small local fellowship providing loving residential care and schooling for 38 orphaned children, alongside practical skills, clean water, and community farming for our village.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenVolunteer}
              className="w-full sm:w-auto px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-sm rounded shadow transition-colors cursor-pointer text-center"
            >
              Volunteer With Our Children
            </button>
            <button
              onClick={onExploreInitiatives}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-medium text-sm rounded transition-colors cursor-pointer text-center"
            >
              Explore Community Initiatives
            </button>
          </div>

          {/* Humble scripture verse callout */}
          <div className="mt-10 pt-6 border-t border-white/15 max-w-xl mx-auto text-xs sm:text-sm text-stone-300 italic font-serif">
            “Pure and genuine religion in the sight of God the Father means caring for orphans and widows in their distress and refusing to let the world corrupt you.”
            <span className="block mt-1 not-italic font-sans text-xs tracking-wider uppercase text-amber-300">
              — James 1:27
            </span>
          </div>

        </div>
      </div>

      {/* Operational Utility Strip (Mandatory Reference Pattern A) */}
      <div id="service-times" className="bg-[#F3EFE6] border-y border-stone-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-800">
            
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                  Sunday Worship Fellowship
                </h4>
                <p className="text-sm font-serif text-stone-700 mt-0.5">
                  9:00 AM (Children's Sunday School) &amp; 11:30 AM (Family Service)
                </p>
                <span className="text-xs text-stone-500">Wednesday Prayer &amp; Study at 5:30 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                  Sanctuary &amp; Home Grounds
                </h4>
                <p className="text-sm font-serif text-stone-700 mt-0.5">
                  Plot 14, St. Jude Ridge Road
                </p>
                <span className="text-xs text-stone-500">800m past Valley Ridge Market · White Gates</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                  Children's Home Safeguarding
                </h4>
                <p className="text-sm font-serif text-stone-700 mt-0.5">
                  Visitor Hours: Weekends 2:00 PM – 5:00 PM
                </p>
                <span className="text-xs text-stone-500">Prior arrangement required to protect study hours</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Quantitative Impact Ribbon */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {churchInfo.stats.map((stat, idx) => (
            <div key={idx} className="p-5 bg-white border border-stone-200 rounded shadow-xs">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-stone-800 mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-stone-500 mt-1.5 leading-normal">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
