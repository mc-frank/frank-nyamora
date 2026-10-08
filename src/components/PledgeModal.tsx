import React, { useState } from 'react';
import { WishlistItem } from '../types';
import { churchInfo } from '../data/content';
import { X, CheckCircle, Package, Heart } from 'lucide-react';

interface PledgeModalProps {
  item: WishlistItem | null;
  onClose: () => void;
  onSuccess: (itemId: string, pledgeAmount: number) => void;
}

export const PledgeModal: React.FC<PledgeModalProps> = ({ item, onClose, onSuccess }) => {
  if (!item) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pledgeDetail, setPledgeDetail] = useState('1 unit / portion');
  const [dropoffDate, setDropoffDate] = useState('This upcoming Saturday (9:00 AM – 4:00 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitted(true);
    setTimeout(() => {
      onSuccess(item.id, 1);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="bg-white border border-stone-200 rounded max-w-lg w-full p-6 sm:p-8 relative shadow-lg">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1 rounded"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-stone-900">
              Pledge Recorded with Gratitude!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm mx-auto">
              Thank you, {name.split(' ')[0]}. Your generosity for <strong>{item.title}</strong> helps keep our children nourished, educated, and cared for.
            </p>
            <p className="text-xs text-stone-500">
              Please drop off your contribution during weekend hours or contact Pastor Ezekiel at {churchInfo.phone}.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-5 py-2 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
              <span>{item.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-amber-900">{item.status} Need</span>
            </div>

            <h3 className="text-xl font-serif font-semibold text-stone-900">
              Pledge Support: {item.title}
            </h3>

            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              {item.description}
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Samuel Karanja"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0722 000 000"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Pledge Quantity / Detail
                  </label>
                  <input
                    type="text"
                    value={pledgeDetail}
                    onChange={(e) => setPledgeDetail(e.target.value)}
                    placeholder="e.g. 10 exercise books"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Estimated Drop-off
                  </label>
                  <select
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                  >
                    <option value="This upcoming Saturday (9:00 AM – 4:00 PM)">This upcoming Saturday</option>
                    <option value="Sunday After Service">Sunday After Service</option>
                    <option value="Next Week / By Arrangement">Next Week / By Arrangement</option>
                    <option value="Sending via Courier / Mobile Delivery">Sending via Courier / Delivery</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Additional Note (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any detail (e.g. brand, sizes, or coordination notes)"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-amber-800 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Confirm Pledge
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
