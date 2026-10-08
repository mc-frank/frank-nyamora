import React, { useState } from 'react';
import { initiativesData } from '../data/content';
import { Initiative, InitiativeCategory } from '../types';
import { Calendar, CheckCircle, ArrowRight, Sprout, Scissors, BookOpen, Droplets } from 'lucide-react';

interface InitiativesSectionProps {
  onVolunteerForInitiative: (initiativeTitle: string) => void;
}

export const InitiativesSection: React.FC<InitiativesSectionProps> = ({ onVolunteerForInitiative }) => {
  const [selectedCategory, setSelectedCategory] = useState<InitiativeCategory>('all');
  const [activeInitiativeId, setActiveInitiativeId] = useState<string | null>(null);

  const categories: { id: InitiativeCategory; label: string }[] = [
    { id: 'all', label: 'All Initiatives' },
    { id: 'food-security', label: 'Food & Farming' },
    { id: 'vocational', label: 'Vocational Guilds' },
    { id: 'education', label: 'Youth & Literacy' },
    { id: 'health-water', label: 'Clean Water' },
  ];

  const filteredInitiatives = selectedCategory === 'all'
    ? initiativesData
    : initiativesData.filter(item => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'food-security':
        return <Sprout className="w-4 h-4 text-emerald-800" />;
      case 'vocational':
        return <Scissors className="w-4 h-4 text-amber-800" />;
      case 'education':
        return <BookOpen className="w-4 h-4 text-sky-800" />;
      case 'health-water':
        return <Droplets className="w-4 h-4 text-cyan-800" />;
      default:
        return null;
    }
  };

  return (
    <section id="initiatives" className="py-16 bg-[#F3EFE6] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-300 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-900 mb-1.5">
              Self-Reliance &amp; Community Resilience
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
              Community Empowerment Initiatives
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              We believe sustainable charity creates ladders out of poverty. Our church and children's home operate hands-on community projects that train hands, feed bellies, and equip our neighbors with lasting economic independence.
            </p>
          </div>

          {/* Functional Filter Tabs (Skill 1.A interactive buttons permitted) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-stone-950 shadow-xs font-semibold'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-white/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredInitiatives.map((item) => {
            const isExpanded = activeInitiativeId === item.id;

            return (
              <article
                key={item.id}
                className="bg-white border border-stone-200 rounded overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Photo container with fallback */}
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded flex items-center gap-1.5">
                      <span className="font-serif font-bold text-amber-300 tabular-nums">
                        {item.impactMetric}
                      </span>
                      <span className="text-stone-300">· {item.impactLabel}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Unboxed Metadata with Dot Separator (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="inline-flex items-center gap-1 font-medium text-stone-700">
                        {getCategoryIcon(item.category)}
                        {item.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        {item.schedule}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-stone-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 text-xs text-stone-500 leading-normal">
                      {item.description}
                    </p>

                    {/* Key Tangible Outputs */}
                    <div className="mt-5 pt-4 border-t border-stone-100">
                      <h4 className="text-xs uppercase font-semibold tracking-wider text-stone-700 mb-2">
                        Tangible Community Impact:
                      </h4>
                      <ul className="space-y-1.5">
                        {item.keyOutputs.map((output, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                            <span>{output}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Volunteer Roles Callout */}
                    <div className="mt-4 p-3 bg-stone-50 border border-stone-200 rounded">
                      <span className="block text-xs font-semibold text-stone-800 mb-1">
                        Volunteer Roles Needed:
                      </span>
                      <p className="text-xs text-stone-600">
                        {item.volunteerRoles.join(' · ')}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 bg-stone-50/80 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    Open to community volunteers &amp; partners
                  </span>
                  <button
                    onClick={() => onVolunteerForInitiative(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    <span>Volunteer Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </article>
            );
          })}
        </div>

        {/* Co-Op Partnership Note */}
        <div className="mt-12 p-6 bg-white border border-stone-200 rounded max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-lg font-semibold text-stone-900">
            Have a Skill or Tool to Share with Valley Ridge?
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Whether you are an agronomist, retired teacher, seamstress, mechanic, or plumber—our community welcomes short-term and weekly mentors.
          </p>
          <div className="mt-4">
            <button
              onClick={() => onVolunteerForInitiative('General Community Skills Mentorship')}
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Sign Up as a Skills Mentor
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
