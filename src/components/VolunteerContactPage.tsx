import React, { useState, useEffect } from 'react';
import { churchInfo, initiativesData } from '../data/content';
import { VolunteerFormData, GeneralContactFormData } from '../types';
import { 
  HeartHandshake, Mail, Phone, MapPin, Calendar, Clock, 
  CheckCircle2, ShieldCheck, Send, MessageSquare, AlertCircle, Compass 
} from 'lucide-react';

interface VolunteerContactPageProps {
  initialInitiative?: string | null;
}

export const VolunteerContactPage: React.FC<VolunteerContactPageProps> = ({ initialInitiative }) => {
  const [activeFormTab, setActiveFormTab] = useState<'volunteer' | 'inquiry'>('volunteer');

  // Volunteer form state
  const [volunteerData, setVolunteerData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phone: '',
    availability: 'Saturday Mornings (8:30 AM – 12:30 PM)',
    interests: [],
    experience: '',
    backgroundCheckConsent: true,
  });

  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerSubmitting, setVolunteerSubmitting] = useState(false);
  const [volunteerError, setVolunteerError] = useState<string | null>(null);

  // General inquiry form state
  const [inquiryData, setInquiryData] = useState<GeneralContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'visit',
    message: '',
  });

  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquirySubmitting, setInquirySubmitting] = useState(false);

  // Set initial initiative interest if passed
  useEffect(() => {
    if (initialInitiative && !volunteerData.interests.includes(initialInitiative)) {
      setVolunteerData(prev => ({
        ...prev,
        interests: [...prev.interests, initialInitiative]
      }));
    }
  }, [initialInitiative]);

  const volunteerAreas = [
    { id: 'tutoring', label: 'After-School Tutoring & Reading Buddy', desc: 'Grade 1–8 homework & phonics' },
    { id: 'garden', label: 'Community Garden & Farming', desc: 'Soil prep, planting, harvesting' },
    { id: 'kitchen', label: 'Kitchen & Weekend Meal Prep', desc: 'Communal cooking for children & elders' },
    { id: 'vocational', label: 'Vocational Guilds & Tailoring', desc: 'Sewing, cutting, machine upkeep' },
    { id: 'sunday-school', label: 'Sunday School & Children’s Choir', desc: 'Bible stories, songs & games' },
    { id: 'maintenance', label: 'Facility Maintenance & Carpentry', desc: 'Painting, plumbing, minor repairs' },
  ];

  const handleInterestToggle = (label: string) => {
    setVolunteerData(prev => {
      const exists = prev.interests.includes(label);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter(i => i !== label)
          : [...prev.interests, label]
      };
    });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerData.fullName.trim() || !volunteerData.phone.trim()) {
      setVolunteerError('Please provide your full name and a contact phone number.');
      return;
    }
    if (volunteerData.interests.length === 0) {
      setVolunteerError('Please select at least one area where you would like to help.');
      return;
    }

    setVolunteerError(null);
    setVolunteerSubmitting(true);

    setTimeout(() => {
      setVolunteerSubmitting(false);
      setVolunteerSubmitted(true);
    }, 700);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name.trim() || !inquiryData.message.trim()) {
      return;
    }
    setInquirySubmitting(true);
    setTimeout(() => {
      setInquirySubmitting(false);
      setInquirySubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 bg-[#F3EFE6] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-900 mb-2">
            Get Involved · Serve With Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            Volunteer &amp; Community Contact
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Grace Haven thrives through the hands, prayers, and dedicated presence of our local neighbors. Whether you have two hours on a Saturday or would like to mentor a child weekly, there is a warm seat for you.
          </p>
        </div>

        {/* Two Column Layout: Forms on Left, Contact & Visiting Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Form (8 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200 rounded p-6 sm:p-8 shadow-xs">
              
              {/* Form Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-stone-200 pb-4 mb-6">
                <button
                  type="button"
                  onClick={() => setActiveFormTab('volunteer')}
                  className={`text-sm font-semibold pb-2 border-b-2 transition-colors cursor-pointer ${
                    activeFormTab === 'volunteer'
                      ? 'border-amber-800 text-amber-950 font-serif'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Volunteer Application
                </button>
                <span className="text-stone-300">|</span>
                <button
                  type="button"
                  onClick={() => setActiveFormTab('inquiry')}
                  className={`text-sm font-semibold pb-2 border-b-2 transition-colors cursor-pointer ${
                    activeFormTab === 'inquiry'
                      ? 'border-amber-800 text-amber-950 font-serif'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  General Inquiry &amp; Visiting
                </button>
              </div>

              {/* VOLUNTEER APPLICATION TAB */}
              {activeFormTab === 'volunteer' && (
                <div>
                  {volunteerSubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-stone-900">
                        Thank You, {volunteerData.fullName.split(' ')[0]}!
                      </h3>
                      <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                        Your volunteer application has been received by our fellowship coordinator. We will contact you at <strong>{volunteerData.phone}</strong> within 48 hours for a brief welcoming orientation.
                      </p>

                      <div className="p-4 bg-stone-50 border border-stone-200 rounded max-w-md mx-auto text-left text-xs space-y-1.5 text-stone-700">
                        <div><strong>Selected Areas:</strong> {volunteerData.interests.join(', ')}</div>
                        <div><strong>Preferred Schedule:</strong> {volunteerData.availability}</div>
                        <div><strong>Child Safeguarding:</strong> Brief orientation required prior to working with children.</div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() => {
                            setVolunteerSubmitted(false);
                            setVolunteerData({
                              fullName: '',
                              email: '',
                              phone: '',
                              availability: 'Saturday Mornings (8:30 AM – 12:30 PM)',
                              interests: [],
                              experience: '',
                              backgroundCheckConsent: true,
                            });
                          }}
                          className="text-xs font-semibold text-amber-900 hover:underline cursor-pointer"
                        >
                          Submit another application or edit details
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                      
                      {volunteerError && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-xs flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{volunteerError}</span>
                        </div>
                      )}

                      {/* Personal Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                            Full Name <span className="text-amber-800">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={volunteerData.fullName}
                            onChange={(e) => setVolunteerData({ ...volunteerData, fullName: e.target.value })}
                            placeholder="e.g. Grace Achieng"
                            className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-800 text-stone-900"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                            Phone / WhatsApp <span className="text-amber-800">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={volunteerData.phone}
                            onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                            placeholder="e.g. 0712 345 678"
                            className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-800 text-stone-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={volunteerData.email}
                          onChange={(e) => setVolunteerData({ ...volunteerData, email: e.target.value })}
                          placeholder="e.g. grace@example.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-800 text-stone-900"
                        />
                      </div>

                      {/* Volunteer Areas Selection */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                          Where Would You Like to Serve? (Select all that apply) <span className="text-amber-800">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {volunteerAreas.map((area) => {
                            const isChecked = volunteerData.interests.includes(area.label);
                            return (
                              <label
                                key={area.id}
                                className={`flex items-start gap-2.5 p-3 rounded border text-xs cursor-pointer transition-colors ${
                                  isChecked
                                    ? 'bg-amber-50/70 border-amber-800 text-stone-900'
                                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleInterestToggle(area.label)}
                                  className="mt-0.5 rounded text-amber-800 focus:ring-amber-800 cursor-pointer"
                                />
                                <div>
                                  <div className="font-semibold">{area.label}</div>
                                  <div className="text-[11px] text-stone-500 mt-0.5">{area.desc}</div>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Availability */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          General Availability
                        </label>
                        <select
                          value={volunteerData.availability}
                          onChange={(e) => setVolunteerData({ ...volunteerData, availability: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-800 text-stone-900"
                        >
                          <option value="Saturday Mornings (8:30 AM – 12:30 PM)">Saturday Mornings (8:30 AM – 12:30 PM)</option>
                          <option value="Sunday Afternoons (1:30 PM – 4:30 PM)">Sunday Afternoons (1:30 PM – 4:30 PM)</option>
                          <option value="Weekday Afternoons (4:00 PM – 6:00 PM Tutoring)">Weekday Afternoons (4:00 PM – 6:00 PM Tutoring)</option>
                          <option value="Flexible / Monthly Community Projects">Flexible / Monthly Community Projects</option>
                        </select>
                      </div>

                      {/* Experience / Notes */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Brief Note, Profession, or Skills
                        </label>
                        <textarea
                          rows={3}
                          value={volunteerData.experience}
                          onChange={(e) => setVolunteerData({ ...volunteerData, experience: e.target.value })}
                          placeholder="Tell us a little about yourself, your background, or any special skills (teaching, sewing, cooking, carpentry, etc.)."
                          className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-800 text-stone-900"
                        />
                      </div>

                      {/* Child Safeguarding Agreement */}
                      <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                        <label className="flex items-start gap-2.5 text-xs text-stone-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={volunteerData.backgroundCheckConsent}
                            onChange={(e) => setVolunteerData({ ...volunteerData, backgroundCheckConsent: e.target.checked })}
                            required
                            className="mt-0.5 rounded text-amber-800 focus:ring-amber-800"
                          />
                          <span>
                            I agree to adhere to Grace Haven's Child Safeguarding &amp; Protection Policy and understand that an informal background verification with village elders or reference may be required before one-on-one child interaction.
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={volunteerSubmitting}
                        className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        {volunteerSubmitting ? (
                          <span>Submitting Application...</span>
                        ) : (
                          <>
                            <HeartHandshake className="w-4 h-4" />
                            <span>Submit Volunteer Application</span>
                          </>
                        )}
                      </button>

                    </form>
                  )}
                </div>
              )}

              {/* GENERAL INQUIRY TAB */}
              {activeFormTab === 'inquiry' && (
                <div>
                  {inquirySubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-12 h-12 bg-amber-100 text-amber-900 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-stone-900">
                        Message Sent to Pastor Ezekiel
                      </h3>
                      <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. We will respond promptly by phone or email. God bless you.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setInquirySubmitted(false);
                          setInquiryData({
                            name: '',
                            email: '',
                            phone: '',
                            subject: 'visit',
                            message: '',
                          });
                        }}
                        className="text-xs font-semibold text-amber-900 hover:underline cursor-pointer"
                      >
                        Send another note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                            Your Name <span className="text-amber-800">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={inquiryData.name}
                            onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                            placeholder="Your name"
                            className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                            Phone or Email <span className="text-amber-800">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={inquiryData.phone}
                            onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                            placeholder="Phone number or email"
                            className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Inquiry Subject
                        </label>
                        <select
                          value={inquiryData.subject}
                          onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value as any })}
                          className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                        >
                          <option value="visit">Arranging a Visit to the Children's Home</option>
                          <option value="general">Sunday Service &amp; Church Fellowship</option>
                          <option value="donation">Material / In-Kind Supplies Donation</option>
                          <option value="prayer">Pastoral Prayer Request</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Message <span className="text-amber-800">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={inquiryData.message}
                          onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                          placeholder="How can our church or home assist you, or when would you like to visit?"
                          className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={inquirySubmitting}
                        className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  )}
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Direct Contact & Visiting Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="p-6 bg-white border border-stone-200 rounded shadow-xs">
              <h3 className="text-base font-serif font-semibold text-stone-900 mb-4">
                Direct Pastoral &amp; Office Contacts
              </h3>

              <div className="space-y-4 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">Pastor Ezekiel Mwangi</span>
                    <a href={`tel:${churchInfo.phone}`} className="text-amber-900 hover:underline">
                      {churchInfo.phone}
                    </a>
                    <span className="block text-stone-500 mt-0.5">Calls &amp; WhatsApp (7:00 AM – 8:00 PM)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">Sarah Mwangi (Children's Home Mother)</span>
                    <a href={`tel:${churchInfo.secondaryPhone}`} className="text-amber-900 hover:underline">
                      {churchInfo.secondaryPhone}
                    </a>
                    <span className="block text-stone-500 mt-0.5">Children's welfare, meals &amp; health needs</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">Postal &amp; Email</span>
                    <span className="block">{churchInfo.email}</span>
                    <span className="text-stone-500">{churchInfo.postalAddress}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visiting Guidelines Box */}
            <div className="p-6 bg-white border border-stone-200 rounded shadow-xs">
              <h3 className="text-base font-serif font-semibold text-stone-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800" />
                <span>Visiting Hours &amp; Etiquette</span>
              </h3>
              
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                To protect our children's school study hours, therapy sessions, and private rest, we welcome visitors during designated slots:
              </p>

              <div className="space-y-2 text-xs text-stone-700 border-t border-stone-100 pt-3">
                <div className="flex justify-between">
                  <span className="font-medium">Saturdays:</span>
                  <span>2:00 PM – 5:00 PM (Garden &amp; Games)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sundays:</span>
                  <span>1:00 PM – 4:00 PM (Post-Service Fellowship)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Weekdays:</span>
                  <span className="text-stone-500">By advance notification only</span>
                </div>
              </div>

              <div className="mt-4 p-2.5 bg-amber-50/70 border border-amber-200 rounded text-[11px] text-amber-950 leading-normal">
                <strong>Child Privacy Notice:</strong> Photography of resident children for social media without formal parental and church committee consent is strictly restricted to safeguard their dignity and privacy.
              </div>
            </div>

            {/* Directions & Landmark Map Card */}
            <div className="p-6 bg-white border border-stone-200 rounded shadow-xs">
              <h3 className="text-base font-serif font-semibold text-stone-900 mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-800" />
                <span>How to Find Us</span>
              </h3>
              
              <p className="text-xs text-stone-600 leading-relaxed">
                {churchInfo.location}
              </p>

              <div className="mt-3 p-3 bg-stone-50 rounded border border-stone-200 text-xs text-stone-700 space-y-1.5">
                <div><strong>By Public Transit (Matatu):</strong> Board the Valley Ridge route from town terminal. Alight at Valley Market stage.</div>
                <div><strong>Landmark:</strong> Take the stone road branch heading towards St. Jude Hill. Walk 800m; our compound has white stone gates with the carved wooden cross and green tin roof.</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
