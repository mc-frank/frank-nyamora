import React from 'react';
import { churchInfo } from '../data/content';
import { BookOpen, Users, Heart, Sun, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenVolunteer: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenVolunteer }) => {
  return (
    <section id="orphanage" className="py-16 bg-[#FBF9F5] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-2">
            The Children’s Home &amp; Fellowship Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            Nurturing Children Not as an Institution, But as a Family
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Grace Haven began in 2014 when our village church took in four orphaned siblings whose parents had passed. Today, our humble sanctuary provides a loving family home to 38 boys and girls, while serving as the heartbeat of community support in Valley Ridge.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed font-sans text-base">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-900">
              W
              e believe that every child deserves more than shelter; they deserve belonging, unconditional dignity, and the tools to chart their own future. Unlike cold dormitory facilities, our children live in small family-style cottages supervised by dedicated resident house-mothers—loving village women known fondly as &lsquo;Mamas&rsquo;.
            </p>
            
            <p>
              Each child is enrolled in nearby public primary and secondary schools. We provide full tuition, uniforms, textbooks, and daily after-school academic guidance. On weekends, the children participate in music, community gardening, sports, and church choir, remaining warmly integrated with their village peers and cultural heritage.
            </p>

            <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-stone-200 rounded">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Holistic Child Care</span>
                </div>
                <p className="text-xs text-stone-500 leading-normal">
                  Three balanced daily meals, annual medical checkups, and individualized trauma-informed emotional counseling.
                </p>
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Lifelong Independence</span>
                </div>
                <p className="text-xs text-stone-500 leading-normal">
                  Vocational apprenticeships and university support for high school graduates transitioning to adult life.
                </p>
              </div>
            </div>

            {/* A Word from the Pastor */}
            <div className="p-5 bg-[#F4EFE6] border-l-4 border-amber-800 rounded-r text-stone-800">
              <p className="font-serif italic text-sm sm:text-base leading-relaxed">
                “We never turn a child away because our pantry is small. When neighbors come together with two loaves of bread or an hour of reading time, God multiplies hope right here on this ridge.”
              </p>
              <div className="mt-2 text-xs font-semibold text-stone-700">
                — Pastor Ezekiel &amp; Sarah Mwangi, Directors &amp; Guardians
              </div>
            </div>

          </div>

          {/* Right Visual & Daily Rhythm Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Image with Caption (Skill 4 Visual Editorial Elements) */}
            <div className="bg-white p-3 border border-stone-200 rounded shadow-xs">
              <div className="aspect-4/3 overflow-hidden rounded bg-stone-100">
                <img
                  src={churchInfo.classroomImage}
                  alt="Children learning inside the sunlit after-school study room"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-serif text-stone-500 italic mt-2.5 text-center">
                Fig. 1 — Afternoon reading hour in the children's study sanctuary.
              </p>
            </div>

            {/* Daily Rhythm Box */}
            <div className="p-5 bg-white border border-stone-200 rounded shadow-xs">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-600" />
                <span>Daily Life &amp; Rhythm at Grace Haven</span>
              </h3>
              
              <ul className="space-y-3 text-xs text-stone-600">
                <li className="flex items-start justify-between gap-3 border-b border-stone-100 pb-2">
                  <span className="font-medium text-stone-800">6:00 AM – 7:30 AM</span>
                  <span className="text-right">Morning prayers, chores &amp; breakfast porridge</span>
                </li>
                <li className="flex items-start justify-between gap-3 border-b border-stone-100 pb-2">
                  <span className="font-medium text-stone-800">8:00 AM – 3:30 PM</span>
                  <span className="text-right">Local primary &amp; secondary schooling</span>
                </li>
                <li className="flex items-start justify-between gap-3 border-b border-stone-100 pb-2">
                  <span className="font-medium text-stone-800">4:00 PM – 5:30 PM</span>
                  <span className="text-right">Afternoon tutoring, reading &amp; garden duties</span>
                </li>
                <li className="flex items-start justify-between gap-3 border-b border-stone-100 pb-2">
                  <span className="font-medium text-stone-800">5:30 PM – 6:30 PM</span>
                  <span className="text-right">Playtime, soccer &amp; choir practice</span>
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span className="font-medium text-stone-800">7:00 PM – 8:30 PM</span>
                  <span className="text-right">Family dinner, evening devotion &amp; bed</span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-stone-100 text-center">
                <button
                  onClick={onOpenVolunteer}
                  className="text-xs font-semibold text-amber-900 hover:text-amber-800 underline underline-offset-4 cursor-pointer"
                >
                  Want to assist with reading or weekend activities? Join as a volunteer →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
