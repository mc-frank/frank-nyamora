import React, { useState } from 'react';
import { Menu, X, Heart, MapPin, Clock, Phone } from 'lucide-react';
import { churchInfo } from '../data/content';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenVolunteer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenVolunteer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'initiatives', label: 'Initiatives' },
    { id: 'orphanage', label: 'The Children’s Home' },
    { id: 'wishlist', label: 'Needs & Giving' },
    { id: 'contact', label: 'Volunteer & Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-stone-200 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight block">
              {churchInfo.shortName}
            </span>
            <span className="text-xs text-stone-500 font-sans tracking-wide block">
              Church & Children's Home
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors pb-1 border-b-2 cursor-pointer ${
                  activeTab === link.id
                    ? 'text-amber-900 border-amber-800 font-semibold'
                    : 'border-transparent text-stone-600 hover:text-stone-950 hover:border-stone-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVolunteer}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded transition-colors cursor-pointer whitespace-nowrap"
            >
              Volunteer With Us
            </button>
            <a
              href="#service-times"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer whitespace-nowrap"
            >
              Sunday Services
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-stone-200 bg-[#FBF9F5] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                activeTab === link.id
                  ? 'bg-amber-50 text-amber-900 font-semibold'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVolunteer();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-amber-950 bg-amber-100 border border-amber-300 rounded"
            >
              Volunteer With Us
            </button>
            <a
              href="#service-times"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 rounded"
            >
              Sunday Services
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
