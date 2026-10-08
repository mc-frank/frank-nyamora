import React, { useState } from 'react';
import { wishlistItemsData, churchInfo } from '../data/content';
import { WishlistItem } from '../types';
import { Package, Check, Heart, HandHeart, Sparkles } from 'lucide-react';

interface WishlistSectionProps {
  onPledgeItem: (item: WishlistItem) => void;
}

export const WishlistSection: React.FC<WishlistSectionProps> = ({ onPledgeItem }) => {
  const [filter, setFilter] = useState<'all' | 'Urgent' | 'Ongoing'>('all');

  const filteredItems = filter === 'all'
    ? wishlistItemsData
    : wishlistItemsData.filter(i => i.status === filter);

  return (
    <section id="wishlist" className="py-16 bg-[#FBF9F5] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-900 mb-1.5">
              Transparent Stewardship &amp; Daily Provisions
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
              Current Orphanage &amp; Kitchen Needs
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              We maintain an honest, real-time list of tangible physical supplies needed for the 38 resident children and our Saturday soup kitchen. You can pledge to bring or drop off items during our weekend visiting hours.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-lg shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Provisions ({wishlistItemsData.length})
            </button>
            <button
              onClick={() => setFilter('Urgent')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filter === 'Urgent'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Urgent Priority
            </button>
            <button
              onClick={() => setFilter('Ongoing')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filter === 'Ongoing'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ongoing Staples
            </button>
          </div>
        </div>

        {/* Wishlist Items Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 rounded p-5 flex flex-col justify-between shadow-xs hover:border-amber-300 transition-colors"
            >
              <div>
                {/* Status line with zero-pill typography */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-medium text-stone-700">{item.categoryLabel}</span>
                  <span className="font-semibold text-amber-900">
                    {item.status === 'Urgent' ? '● Urgent Shortage' : '○ Ongoing Need'}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-stone-900 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500">Target Needed:</span>
                  <span className="font-semibold text-stone-800 tabular-nums">
                    {item.quantityNeeded}
                  </span>
                </div>

                <div className="mt-1 flex items-center justify-between text-xs text-stone-500">
                  <span>Community Pledges:</span>
                  <span className="font-medium text-amber-900 tabular-nums">
                    {item.pledgedCount} pledged so far
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100">
                <button
                  onClick={() => onPledgeItem(item)}
                  className="w-full py-2 px-3 text-xs font-semibold uppercase tracking-wider text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <HandHeart className="w-3.5 h-3.5 text-amber-800" />
                  <span>Pledge This Supply</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Drop-off & Monetary Stewardship Note */}
        <div className="mt-12 bg-[#F3EFE6] border border-stone-300 rounded p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-xl font-semibold text-stone-900">
                Physical Drop-off Guidelines
              </h3>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                Physical donations (dry cereals, toiletries, school items, and clean clothing) can be delivered to our Church Office and Children's Kitchen:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-stone-600">
                <li>• <strong>Saturdays:</strong> 9:00 AM – 4:00 PM (Church Steward on duty)</li>
                <li>• <strong>Sundays:</strong> 8:30 AM – 1:30 PM (During and after fellowship services)</li>
                <li>• <strong>Weekdays:</strong> By appointment via Pastor Ezekiel ({churchInfo.phone})</li>
              </ul>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-stone-900 mb-2">
                Mobile Money &amp; Church Account
              </h4>
              <p className="text-xs text-stone-600 mb-3">
                For financial contributions towards fresh milk, medical fees, and high school tuitions:
              </p>
              <div className="space-y-1.5 text-xs font-mono text-stone-800">
                <div className="flex justify-between border-b border-stone-100 pb-1">
                  <span className="text-stone-500 font-sans">M-Pesa Paybill:</span>
                  <span className="font-bold">400200</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-1">
                  <span className="text-stone-500 font-sans">Account Name:</span>
                  <span className="font-bold">GRACEHAVEN</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-stone-500 font-sans">Bank:</span>
                  <span>Co-operative Bank, Valley Branch</span>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-stone-500 italic">
                Receipts issued immediately. Financial accounts audited and shared quarterly with the church committee.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
