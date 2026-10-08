import React, { useState } from 'react';
import { siteData } from './data/churchData';
import pastorDuncanPhoto from './assets/images/pastor_dancun.jpeg';
import churchCommunityPhoto from './assets/images/church_community_gathering_real.jpg';
import childrenHomeLivingPhoto from './assets/images/children_home_living_real.jpg';
import churchChildrenOutdoorsPhoto from './assets/images/church_children_community_outdoors.jpg';
import churchSanctuaryPhoto from './assets/images/church_children_congregation_sanctuary.jpg';
import { 
  Heart, Clock, MapPin, Phone, Mail, 
  CheckCircle2, ShieldCheck, Copy, Check, ExternalLink,
  Sprout, Scissors, BookOpen, ArrowRight, ZoomIn
} from 'lucide-react';

export default function App() {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('25');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    area: 'Child Care & Tutoring',
    availability: 'Saturday Mornings',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerForm.fullName.trim() || !volunteerForm.phone.trim()) return;
    setFormSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const rawPhone = siteData.contact.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Pastor Duncan,\n\nMy name is ${volunteerForm.fullName || 'a supporter'}.\nI am contacting you from the Devine Church website regarding:\n*Area of Interest:* ${volunteerForm.area}\n*My Phone:* ${volunteerForm.phone}\n*My Email:* ${volunteerForm.email || 'N/A'}\n*Notes / Message:* ${volunteerForm.notes || 'I would like to get involved and support the children and community.'}\n\nGod bless you!`
    );
    return `https://wa.me/${rawPhone}?text=${text}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Volunteer & Get Involved Request: ${volunteerForm.fullName}`);
    const body = encodeURIComponent(
      `Hello Pastor Duncan,\n\nName: ${volunteerForm.fullName}\nPhone: ${volunteerForm.phone}\nEmail: ${volunteerForm.email || 'N/A'}\nInterest Area: ${volunteerForm.area}\nMessage: ${volunteerForm.notes || 'N/A'}\n`
    );
    return `mailto:${siteData.contact.email}?subject=${subject}&body=${body}`;
  };

  const selectVolunteerArea = (areaName: string) => {
    setVolunteerForm(prev => ({ ...prev, area: areaName }));
    const formElement = document.getElementById('volunteer-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans antialiased">
      
      {/* 1. Clean Top Header */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div>
            <a href="#top" className="font-serif font-bold text-base sm:text-lg text-stone-900 tracking-tight block">
              DEVINE CHURCH &amp; CHILDREN CENTER
            </a>
            <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-sans">
              Kisii, Kenya
            </span>
          </div>

          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-stone-700">
            <a href="#about" className="hover:text-amber-900 transition-colors hidden sm:inline">About</a>
            <a href="#empowerment" className="hover:text-amber-900 transition-colors">Empowerment</a>
            <a href="#services" className="hover:text-amber-900 transition-colors hidden sm:inline">Services</a>
            <a href="#needs" className="hover:text-amber-900 transition-colors hidden sm:inline">Needs</a>
            <a href="#volunteer-form" className="hover:text-amber-900 transition-colors">Volunteer</a>
            <button
              onClick={() => setShowDonateModal(true)}
              className="px-3.5 py-1.5 bg-amber-800 hover:bg-amber-900 text-white rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
              <span>Donate</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main id="top" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-14">
        
        {/* 2. Hero Section */}
        <section className="bg-white border border-stone-200 rounded-lg p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 tracking-wide">
                <span>Kisii, Kenya</span>
                <span>•</span>
                <span>Caring for Orphans &amp; Empowering Community</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
                A place of simple faith, loving care for children, and community empowerment.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
                {siteData.subTitle}
              </p>

              {/* Scripture Verse Quote */}
              <div className="pt-2 text-xs sm:text-sm italic font-serif text-stone-700 border-l-2 border-amber-800 pl-3">
                “{siteData.scripture.verse}” — <span className="font-sans font-semibold not-italic">{siteData.scripture.reference}</span>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowDonateModal(true)}
                  className="px-6 py-3 bg-amber-800 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donate via PayPal</span>
                </button>
                <a
                  href="#empowerment"
                  className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider rounded border border-stone-300 transition-colors"
                >
                  Empowerment Program
                </a>
                <a
                  href="#volunteer-form"
                  className="px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  Volunteer With Us
                </a>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-md group bg-stone-100">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={churchCommunityPhoto}
                    alt="Community gathering and fellowship at Devine Church and Children Center in Kisii"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-200 block">
                      Local Fellowship &amp; Children
                    </span>
                    <span className="text-xs font-serif">Kisii, Kenya</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPhotoModal(churchCommunityPhoto)}
                    className="p-1.5 bg-white/20 hover:bg-white/30 rounded backdrop-blur-xs text-white transition-colors cursor-pointer"
                    title="Enlarge photo"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Key Overview Cards */}
          <div className="mt-8 pt-8 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-xl font-serif font-bold text-amber-900">Residential Care</div>
              <div className="text-xs font-medium text-stone-700 mt-0.5">Family-Style Home</div>
              <div className="text-[11px] text-stone-500">Loving shelter, clothing &amp; healthcare</div>
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-amber-900">3 Daily Meals</div>
              <div className="text-xs font-medium text-stone-700 mt-0.5">Nutrition &amp; Pantry</div>
              <div className="text-[11px] text-stone-500">Wholesome, balanced food daily</div>
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-amber-900">Empowerment</div>
              <div className="text-xs font-medium text-stone-700 mt-0.5">Skills &amp; Community Training</div>
              <div className="text-[11px] text-stone-500">Vocational sewing &amp; farming skills</div>
            </div>
          </div>
        </section>

        {/* 3. Lead Pastor & About The Children's Home & Church */}
        <section id="about" className="scroll-mt-20 space-y-5">
          {/* Lead Pastor Profile Card (Immediately visible at the top of About) */}
          <div className="bg-white border border-stone-200 rounded-lg p-5 sm:p-7 shadow-xs">
            <div className="border-b border-stone-100 pb-3 mb-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">Ministry Leadership</span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  Lead Pastor &amp; Director
                </h2>
              </div>
              <span className="text-xs text-stone-500 font-sans hidden sm:inline">DEVINE CHURCH &amp; CHILDREN CENTER</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              
              {/* Pastor Duncan Sagana Portrait Photo */}
              <div className="shrink-0 relative group">
                <button
                  type="button"
                  onClick={() => setSelectedPhotoModal(pastorDuncanPhoto)}
                  title="Click to view full photo of Pastor Duncan"
                  className="block w-28 h-36 sm:w-36 sm:h-48 rounded-xl overflow-hidden border-2 border-amber-900/20 shadow-md bg-stone-100 relative group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-amber-800"
                >
                  <img
                    src={pastorDuncanPhoto}
                    alt={siteData.pastorProfile.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent pointer-events-none" />
                  
                  <span className="absolute bottom-2 inset-x-0 text-center text-[10px] uppercase font-bold tracking-wider text-amber-200">
                    Lead Pastor
                  </span>

                  <span className="absolute top-2 right-2 bg-stone-900/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </button>
                <div className="absolute -bottom-1.5 -right-1.5 bg-amber-800 text-white rounded-full p-1.5 border-2 border-white shadow-xs">
                  <Heart className="w-3.5 h-3.5 fill-white" />
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                      {siteData.pastorProfile.name}
                    </h3>
                    <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider block">
                      {siteData.pastorProfile.role} · Kisii, Kenya
                    </span>
                  </div>
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1 rounded w-fit mx-auto sm:mx-0 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{siteData.contact.phone}</span>
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans pt-1">
                  {siteData.pastorProfile.bio}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-amber-900" />
                    <span>{siteData.contact.email}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-900" />
                    <span>{siteData.contact.location}</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div className="border-b border-stone-200 pb-2 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900">Children's Home Overview</span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              About The Children &amp; Fellowship
            </h3>
          </div>

          {/* Church Congregation Life Showcase Banner */}
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-7 relative group overflow-hidden bg-stone-950 min-h-[220px] sm:min-h-[280px]">
              <img
                src={childrenHomeLivingPhoto}
                alt="Church congregation and fellowship gathering at DEVINE CHURCH & CHILDREN CENTER"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-xs font-serif font-medium bg-stone-900/70 px-2.5 py-1 rounded backdrop-blur-xs border border-white/20">
                  Church Congregation &amp; Worship Gathering in Kisii
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPhotoModal(childrenHomeLivingPhoto)}
                  className="px-2 py-1 bg-amber-800/90 hover:bg-amber-800 text-white rounded text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-[#FCFAF6] border-t md:border-t-0 md:border-l border-stone-200">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                  Church Family &amp; Worship
                </span>
                <h3 className="font-serif font-bold text-xl text-stone-900 leading-snug">
                  United in Prayer, Praise &amp; Service
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  The church congregation gathers together inside Devine Church to worship the Lord, hear the Word of God, and support the orphaned children and families in our community.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Weekly Church Worship</span>
                <button
                  onClick={() => setShowDonateModal(true)}
                  className="text-amber-900 hover:text-amber-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Support Ministry</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="md:col-span-2 space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
              <p>
                {siteData.homeOverview.summary}
              </p>
              <p>
                Our mission is to ensure every orphaned and vulnerable child in our care grows up with dignity, spiritual nurture, and education. We provide a safe, stable home environment where each child receives school tuition, books, clothing, and compassionate pastoral support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {siteData.homeOverview.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-stone-200 rounded">
                    <h4 className="text-xs font-semibold text-stone-900 mb-1">{pillar.title}</h4>
                    <p className="text-[11px] text-stone-600 leading-normal">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Location Card */}
            <div className="bg-stone-50 border border-stone-200 rounded p-5 space-y-3.5 text-xs text-stone-700">
              <h3 className="font-serif font-bold text-sm text-stone-900 border-b border-stone-200 pb-2">
                Visiting &amp; Center Office
              </h3>
              <div>
                <span className="font-semibold block text-stone-900">Lead Pastor:</span>
                <span className="text-amber-950 font-medium">{siteData.contact.pastor}</span>
              </div>
              <div>
                <span className="font-semibold block text-stone-900">Phone / WhatsApp:</span>
                <a href={`tel:${siteData.contact.phone}`} className="text-amber-900 font-medium hover:underline block">
                  {siteData.contact.phone}
                </a>
              </div>
              <div>
                <span className="font-semibold block text-stone-900">Location:</span>
                <span className="font-medium text-stone-900">{siteData.contact.location}</span>
                <span className="text-stone-500 block mt-0.5">{siteData.contact.directions}</span>
              </div>
              <div>
                <span className="font-semibold block text-stone-900">Email:</span>
                <span>{siteData.contact.email}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Community Empowerment Program */}
        <section id="empowerment" className="scroll-mt-20 space-y-6">
          <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">Community Outreach</span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                {siteData.empowermentProgram.title}
              </h2>
            </div>
            <p className="text-xs text-stone-500 max-w-sm">
              Hands-on skills, youth outreach, and self-reliance initiatives for families across Kisii.
            </p>
          </div>

          {/* Children & Community Outdoor Outreach Banner */}
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-7 relative group overflow-hidden bg-stone-950 min-h-[220px] sm:min-h-[280px]">
              <img
                src={churchChildrenOutdoorsPhoto}
                alt="Community children and youth gathered outdoors at Devine Church and Children Center in Kisii"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-xs font-serif font-medium bg-stone-900/70 px-2.5 py-1 rounded backdrop-blur-xs border border-white/20">
                  Children &amp; Community Outreach Outdoors in Kisii
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPhotoModal(churchChildrenOutdoorsPhoto)}
                  className="px-2 py-1 bg-amber-800/90 hover:bg-amber-800 text-white rounded text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-[#FCFAF6] border-t md:border-t-0 md:border-l border-stone-200">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                  Youth &amp; Community Care
                </span>
                <h3 className="font-serif font-bold text-xl text-stone-900 leading-snug">
                  Nurturing the Next Generation
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  Beyond Sunday services, we reach out to vulnerable children and youth across the village with wholesome activities, mentorship, education support, and life skills training.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Mentorship &amp; Support</span>
                <a
                  href="#volunteer-form"
                  className="text-amber-900 hover:text-amber-700 font-semibold inline-flex items-center gap-1"
                >
                  <span>Volunteer Mentorship</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed">
            {siteData.empowermentProgram.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {siteData.empowermentProgram.initiatives.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-stone-200 rounded-lg p-5 flex flex-col justify-between shadow-xs hover:border-amber-300 transition-colors"
              >
                <div>
                  <div className="text-[11px] font-semibold text-amber-900 uppercase tracking-wide mb-1">
                    {item.focus}
                  </div>
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 text-[11px] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {item.schedule}
                  </span>
                  <button
                    onClick={() => selectVolunteerArea(item.title)}
                    className="text-amber-900 hover:text-amber-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Help Out</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Weekly Church Services */}
        <section id="services" className="scroll-mt-20 space-y-6">
          <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">Weekly Gatherings</span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Worship &amp; Visiting Times
              </h2>
            </div>
            <span className="text-xs text-stone-500">All visitors and partners are warmly welcome</span>
          </div>

          {/* Fellowship Gathering Feature Card */}
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-7 relative group overflow-hidden bg-stone-950 min-h-[220px] sm:min-h-[280px]">
              <img
                src={churchCommunityPhoto}
                alt="Community fellowship gathering at DEVINE CHURCH & CHILDREN CENTER"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-xs font-serif font-medium bg-stone-900/70 px-2.5 py-1 rounded backdrop-blur-xs border border-white/20">
                  Devine Church Fellowship in Kisii
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPhotoModal(churchCommunityPhoto)}
                  className="px-2 py-1 bg-amber-800/90 hover:bg-amber-800 text-white rounded text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-[#FCFAF6] border-t md:border-t-0 md:border-l border-stone-200">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                  Fellowship &amp; Community
                </span>
                <h3 className="font-serif font-bold text-xl text-stone-900 leading-snug">
                  Gathering Together in Faith &amp; Mutual Love
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  Every week, our church congregation, resident children, caregivers, and local Kisii neighbors come together to worship, share testimonies, and strengthen one another in Christian faith.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Join us this Sunday</span>
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="text-amber-900 hover:text-amber-700 font-semibold inline-flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteData.services.map((service, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.time}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-stone-900">
                    {service.day}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 leading-normal">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sanctuary Worship & Congregation Life Showcase */}
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-7 relative group overflow-hidden bg-stone-950 min-h-[240px] sm:min-h-[300px]">
              <img
                src={churchSanctuaryPhoto}
                alt="Children and congregation worshiping inside the sanctuary at Devine Church in Kisii"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-xs font-serif font-medium bg-stone-900/70 px-2.5 py-1 rounded backdrop-blur-xs border border-white/20">
                  Children &amp; Congregation Inside Devine Church Sanctuary
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPhotoModal(churchSanctuaryPhoto)}
                  className="px-2 py-1 bg-amber-800/90 hover:bg-amber-800 text-white rounded text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-[#FCFAF6] border-t md:border-t-0 md:border-l border-stone-200">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                  Sanctuary &amp; Sunday School
                </span>
                <h3 className="font-serif font-bold text-xl text-stone-900 leading-snug">
                  Heartfelt Praise &amp; Spiritual Upbringing
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  The children and congregation fill our sanctuary with praise songs, joyful smiles, and prayers. Here, every young life is rooted in faith, biblical values, and community encouragement.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Visiting Welcome</span>
                <button
                  type="button"
                  onClick={() => setShowDonateModal(true)}
                  className="text-amber-900 hover:text-amber-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Support Sunday Care</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Support & PayPal Donation Section */}
        <section id="donate" className="scroll-mt-20 bg-amber-50/60 border border-amber-200 rounded-lg p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200/80 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">Support Our Children</span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Make a Donation
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 mt-1">
                Your support directly feeds, clothes, houses, and educates the children in our home in Kisii, Kenya.
              </p>
            </div>
            <button
              onClick={() => setShowDonateModal(true)}
              className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-xs w-fit"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate via PayPal</span>
            </button>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-5 max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-stone-900 text-lg">Direct PayPal Giving</span>
              <span className="text-xs bg-sky-50 text-sky-800 border border-sky-200 px-2.5 py-1 rounded font-medium">Verified Giving</span>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              You can send financial gifts securely via PayPal. All donations are directed toward daily food staples, clean drinking water, school tuition, books, and medical care for the children.
            </p>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded text-xs space-y-1.5">
              <span className="text-stone-500 block">PayPal Recipient Address:</span>
              <div className="flex items-center justify-between font-mono font-semibold text-stone-900 text-sm">
                <span>{siteData.donationInfo.paypalEmail}</span>
                <button
                  onClick={() => copyToClipboard(siteData.donationInfo.paypalEmail, 'paypal')}
                  className="text-amber-800 hover:text-amber-900 p-1 flex items-center gap-1 cursor-pointer text-xs font-sans"
                  title="Copy PayPal Email"
                >
                  {copiedType === 'paypal' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'paypal' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=dancanob@yahoo.com&currency_code=USD&item_name=DEVINE+CHURCH+%26+CHILDREN+CENTER`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#0070ba] hover:bg-[#005ea6] text-white text-xs font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Give Directly via PayPal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setShowDonateModal(true)}
                className="px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Choose Custom Amount
              </button>
            </div>
          </div>
        </section>

        {/* 7. Current Needs & Supplies */}
        <section id="needs" className="space-y-4">
          <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">Current Provisions</span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Food &amp; School Supplies Needed
              </h2>
            </div>
            <span className="text-xs text-stone-500">Physical drop-offs welcomed in Kisii</span>
          </div>

          <div className="bg-white border border-stone-200 rounded divide-y divide-stone-100">
            {siteData.weeklyNeeds.map((need, idx) => (
              <div key={idx} className="p-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-semibold text-stone-900 text-sm block sm:inline mr-2">
                    {need.item}
                  </span>
                  <span className="text-stone-500">for {need.target}</span>
                </div>
                <span className="text-xs font-medium text-amber-900 bg-amber-50 px-2.5 py-1 rounded w-fit border border-amber-200">
                  {need.category}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3 bg-stone-50 border border-stone-200 rounded text-xs text-stone-600 flex flex-col sm:flex-row justify-between gap-2">
            <span><strong>Donation Drop-off:</strong> Saturdays 9:00 AM – 1:00 PM or Sundays after worship in Kisii.</span>
            <span><strong>Contact Pastor Duncan:</strong> {siteData.contact.phone}</span>
          </div>
        </section>

        {/* 8. Volunteer & Contact Form */}
        <section id="volunteer-form" className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900">Get Involved</span>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              Contact Pastor Duncan &amp; Volunteer
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Whether you want to volunteer in our empowerment programs, help with the children, or visit the center in Kisii, please reach out below.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-6 px-4 bg-amber-50/50 border border-amber-200 rounded-lg text-center space-y-4 max-w-xl mx-auto">
              <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Thank you, {volunteerForm.fullName.split(' ')[0]}!
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Your inquiry for <strong>{volunteerForm.area}</strong> is ready. Connect directly with <strong>Pastor Duncan Sagana</strong> right now:
                </p>
              </div>

              {/* Action buttons: WhatsApp & Email */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Open in WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getMailtoLink()}
                  className="w-full sm:w-auto px-5 py-2.5 bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send via Email</span>
                </a>
              </div>

              <div className="pt-2 border-t border-amber-200/60 text-xs text-stone-600">
                <span>Or call directly: </span>
                <a href={`tel:${siteData.contact.phone}`} className="font-bold text-amber-900 hover:underline">
                  {siteData.contact.phone}
                </a>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setVolunteerForm({
                      fullName: '',
                      phone: '',
                      email: '',
                      area: 'Child Care & Kitchen Support',
                      availability: 'Saturday Mornings',
                      notes: ''
                    });
                  }}
                  className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Your Full Name <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={volunteerForm.fullName}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, fullName: e.target.value })}
                    placeholder="e.g. Samuel Onchoke"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:border-amber-800 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Phone / WhatsApp Number <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={volunteerForm.phone}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                    placeholder="e.g. +254 700 000 000"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:border-amber-800 text-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Area of Interest
                  </label>
                  <select
                    value={volunteerForm.area}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, area: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:border-amber-800 text-stone-900"
                  >
                    <option value="Vocational Skills & Tailoring">Empowerment: Vocational Sewing &amp; Tailoring</option>
                    <option value="Sustainable Community Farming">Empowerment: Community Farming &amp; Poultry</option>
                    <option value="Child Care & Kitchen Support">Children's Center: Meal Prep &amp; Daily Care</option>
                    <option value="Sunday School & Music">Sunday School &amp; Children's Music</option>
                    <option value="General Visiting">Arranging a Visit to the Children's Center</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                    placeholder="e.g. name@example.com"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:border-amber-800 text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Message or Availability
                </label>
                <textarea
                  rows={3}
                  value={volunteerForm.notes}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, notes: e.target.value })}
                  placeholder="Share a short note about how you would like to help, your questions, or when you are available..."
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:border-amber-800 text-stone-900"
                />
              </div>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded text-[11px] text-stone-600 leading-normal flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Child Protection:</strong> For the safety and dignity of the children residing at DEVINE CHURCH &amp; CHILDREN CENTER in Kisii, all visiting and regular volunteering is coordinated directly with Pastor Duncan Sagana.
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Send Message / Volunteer Request
              </button>
            </form>
          )}

          {/* Quick Direct Contacts */}
          <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
            <div>
              <span className="font-semibold block text-stone-900">Pastor Duncan Sagana:</span>
              <a href={`tel:${siteData.contact.phone}`} className="text-amber-900 hover:underline">
                {siteData.contact.phone}
              </a>
            </div>
            <div>
              <span className="font-semibold block text-stone-900">Location:</span>
              <span>{siteData.contact.location}</span>
            </div>
            <div>
              <span className="font-semibold block text-stone-900">Email:</span>
              <span>{siteData.contact.email}</span>
            </div>
          </div>
        </section>

      </main>

      {/* 9. Footer */}
      <footer className="border-t border-stone-200 bg-white py-8 text-xs text-stone-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-serif font-bold text-stone-900 block text-sm">
              DEVINE CHURCH &amp; CHILDREN CENTER
            </span>
            <span>{siteData.contact.location} · Pastor Duncan Sagana ({siteData.contact.phone})</span>
          </div>

          <div className="text-center sm:text-right">
            <p>© {new Date().getFullYear()} DEVINE CHURCH &amp; CHILDREN CENTER. All rights reserved.</p>
            <p className="italic font-serif text-stone-400 mt-0.5">
              “Faith expressing itself through love.” — Galatians 5:6
            </p>
          </div>
        </div>
      </footer>

      {/* 10. Dedicated PayPal Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
          <div className="bg-white border border-stone-200 rounded-lg max-w-md w-full p-6 space-y-5 relative shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-800 fill-amber-800" />
                <h3 className="font-serif font-bold text-lg text-stone-900">Support DEVINE CHURCH &amp; CHILDREN CENTER</h3>
              </div>
              <button
                onClick={() => setShowDonateModal(false)}
                className="text-stone-400 hover:text-stone-700 text-sm font-semibold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              Your gift directly supports the orphaned and vulnerable children in Kisii, Kenya with daily meals, school tuition, books, and medical care.
            </p>

            {/* Quick Amount Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                Select or Enter Amount (USD)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['10', '25', '50', '100'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setCustomAmount(amt)}
                    className={`py-2 text-xs font-bold rounded border cursor-pointer transition-colors ${
                      customAmount === amt
                        ? 'bg-amber-800 text-white border-amber-800'
                        : 'bg-stone-50 border-stone-300 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs text-stone-500 font-bold">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Custom amount"
                  className="w-full px-3 py-1.5 text-sm bg-stone-50 border border-stone-300 rounded focus:bg-white text-stone-900"
                />
              </div>
            </div>

            {/* PayPal Button */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=dancanob@yahoo.com&currency_code=USD&amount=${customAmount || '25'}&item_name=DEVINE+CHURCH+%26+CHILDREN+CENTER`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#0070ba] hover:bg-[#005ea6] text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Donate ${customAmount || '0'} with PayPal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded text-xs space-y-1">
                <div className="flex items-center justify-between text-stone-600">
                  <span>PayPal recipient:</span>
                  <span className="font-mono font-medium text-stone-800">{siteData.donationInfo.paypalEmail}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setShowDonateModal(false)}
                className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox / Enlarged Photo Modal */}
      {selectedPhotoModal && (
        <div 
          className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhotoModal(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-stone-900 text-white flex items-center justify-between text-xs">
              <span className="font-serif font-semibold">
                {selectedPhotoModal === pastorDuncanPhoto 
                  ? `${siteData.pastorProfile.name} · ${siteData.pastorProfile.role}` 
                  : selectedPhotoModal === churchSanctuaryPhoto
                  ? "Sanctuary Worship & Children Praise · DEVINE CHURCH & CHILDREN CENTER"
                  : selectedPhotoModal === churchChildrenOutdoorsPhoto
                  ? "Children & Community Outreach Outdoors · DEVINE CHURCH & CHILDREN CENTER"
                  : selectedPhotoModal === childrenHomeLivingPhoto
                  ? "Church Congregation & Worship Gathering · DEVINE CHURCH & CHILDREN CENTER"
                  : 'Devine Church Fellowship Gathering · Kisii, Kenya'}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPhotoModal(null)}
                className="text-stone-400 hover:text-white px-2 py-1 cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>
            <div className="max-h-[75vh] overflow-hidden bg-stone-950 flex items-center justify-center">
              <img
                src={selectedPhotoModal}
                alt="Enlarged photo preview"
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
            <div className="p-4 bg-stone-50 text-xs text-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-stone-200">
              <span>{siteData.contact.location} · Pastor Duncan Sagana ({siteData.contact.phone})</span>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded font-medium text-center"
                >
                  Call Pastor
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPhotoModal(null);
                    setShowDonateModal(true);
                  }}
                  className="px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white rounded font-medium text-center"
                >
                  Support Children
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
