import React from 'react';
import { churchInfo } from '../data/content';
import { Heart, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800 text-xs">
          
          {/* Brand & Purpose */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif font-semibold text-white tracking-tight">
              {churchInfo.name}
            </h3>
            <p className="text-stone-400 leading-relaxed">
              A local, non-profit community sanctuary and home caring for 38 resident orphans, operating youth vocational guilds, and practicing Christ-centered hospitality in Valley Ridge.
            </p>
            <div className="pt-2 text-stone-400">
              <span className="block font-medium text-stone-300">Registered Local Fellowship &amp; Trust</span>
              <span>Sub-County Registry No. C-4419/14</span>
            </div>
          </div>

          {/* Fellowship & Gatherings */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-200">
              Weekly Gatherings
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <strong className="text-stone-300 block">Sunday Worship:</strong>
                9:00 AM (Children) · 11:30 AM (Family)
              </li>
              <li>
                <strong className="text-stone-300 block">Wednesday Prayer &amp; Study:</strong>
                5:30 PM – 7:00 PM
              </li>
              <li>
                <strong className="text-stone-300 block">Saturday Community Workday:</strong>
                8:00 AM – 12:00 PM (Garden &amp; Food Kitchen)
              </li>
            </ul>
          </div>

          {/* Quick Site Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-200">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Sanctuary Home</a>
              </li>
              <li>
                <a href="#orphanage" className="hover:text-amber-400 transition-colors">The Children’s Home &amp; Daily Life</a>
              </li>
              <li>
                <a href="#initiatives" className="hover:text-amber-400 transition-colors">Community Empowerment Initiatives</a>
              </li>
              <li>
                <a href="#wishlist" className="hover:text-amber-400 transition-colors">Current Needs &amp; Stewardship</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Volunteer Opportunities</a>
              </li>
            </ul>
          </div>

          {/* Contact & Stewardship */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-200">
              Community Office
            </h4>
            <div className="space-y-2 text-stone-400">
              <p>{churchInfo.location}</p>
              <p>Pastor Ezekiel: {churchInfo.phone}</p>
              <p>Sarah Mwangi: {churchInfo.secondaryPhone}</p>
              <p>{churchInfo.email}</p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-amber-300 text-[11px]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Full Child Protection Policy Enforced</span>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {churchInfo.name}. All rights reserved.</p>
          <p className="italic font-serif text-stone-400">
            “Faith expressing itself through love.” — Galatians 5:6
          </p>
        </div>

      </div>
    </footer>
  );
};
