import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle2, Sparkles, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { spaConfig } from '../data/spaConfig';
import { SpaBranch, BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialBranchId?: string;
  initialDuration?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialBranchId,
  initialDuration,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  
  // Selection States
  const [bookingType, setBookingType] = useState<'service' | 'package'>('service');
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<number>(60);
  const [selectedBranchId, setSelectedBranchId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('12:00 PM');
  const [guestsCount, setGuestsCount] = useState<number>(1);
  const [therapistPref, setTherapistPref] = useState<string>('any');
  
  // Contact Info
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [bookingRefId, setBookingRefId] = useState<string>('');

  const timeSlots = [
    '10:30 AM', '11:30 AM', '12:30 PM', '01:30 PM',
    '02:30 PM', '03:30 PM', '04:30 PM', '05:30 PM',
    '06:30 PM', '07:30 PM', '08:30 PM', '09:30 PM'
  ];

  // Initialize values when modal opens
  useEffect(() => {
    if (isOpen) {
      // Check if initialServiceId matches a package or service
      const isPkg = spaConfig.packages.some((p) => p.id === initialServiceId);
      if (isPkg) {
        setBookingType('package');
        setSelectedItemId(initialServiceId || spaConfig.packages[0].id);
        const pkg = spaConfig.packages.find((p) => p.id === initialServiceId);
        if (pkg) setSelectedDuration(pkg.totalDurationMins);
      } else {
        setBookingType('service');
        setSelectedItemId(initialServiceId || spaConfig.services[0].id);
        if (initialDuration) {
          setSelectedDuration(initialDuration);
        } else {
          const s = spaConfig.services.find((serv) => serv.id === (initialServiceId || spaConfig.services[0].id));
          if (s) setSelectedDuration(s.durations[0].minutes);
        }
      }

      setSelectedBranchId(initialBranchId || spaConfig.branches[0].id);
      
      // Default to today's date formatted as YYYY-MM-DD
      const today = new Date().toISOString().split('T')[0];
      setSelectedDate(today);
      setStep(1);
    }
  }, [isOpen, initialServiceId, initialBranchId, initialDuration]);

  if (!isOpen) return null;

  const currentService = spaConfig.services.find((s) => s.id === selectedItemId);
  const currentPackage = spaConfig.packages.find((p) => p.id === selectedItemId);
  const currentBranch = spaConfig.branches.find((b) => b.id === selectedBranchId) || spaConfig.branches[0];

  // Calculate pricing
  let calculatedPrice = 0;
  let originalPrice = 0;
  let itemName = '';

  if (bookingType === 'service' && currentService) {
    itemName = currentService.name;
    const dur = currentService.durations.find((d) => d.minutes === selectedDuration) || currentService.durations[0];
    calculatedPrice = dur.price * guestsCount;
    originalPrice = (dur.originalPrice || dur.price) * guestsCount;
  } else if (bookingType === 'package' && currentPackage) {
    itemName = currentPackage.name;
    calculatedPrice = currentPackage.price * guestsCount;
    originalPrice = currentPackage.originalPrice * guestsCount;
  }

  const handleNextStep = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) {
      if (!fullName.trim() || !phoneNumber.trim()) {
        alert('Please provide your name and phone number to confirm the booking.');
        return;
      }
      // Generate unique booking reference ID
      const ref = `NT-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRefId(ref);
      setStep(4);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) setStep((step - 1) as any);
  };

  const handleWhatsAppConfirmation = () => {
    const message = `*New Spa Appointment Request*\n` +
      `*Booking Ref:* ${bookingRefId}\n` +
      `*Guest Name:* ${fullName}\n` +
      `*Phone:* ${phoneNumber}\n` +
      `*Service/Package:* ${itemName} (${selectedDuration} Mins)\n` +
      `*Guests:* ${guestsCount}\n` +
      `*Branch:* ${currentBranch.name} (${currentBranch.city})\n` +
      `*Date & Time:* ${selectedDate} at ${selectedTimeSlot}\n` +
      `*Estimated Total:* ₹${calculatedPrice}\n` +
      `*Special Notes:* ${specialNotes || 'None'}\n\n` +
      `Please confirm my slot. Thank you!`;

    const url = `https://wa.me/${currentBranch.whatsapp || spaConfig.brand.primaryWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#141619] border border-[#d4af37]/40 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative my-auto flex flex-col justify-between">
        
        {/* Header with Step Progress */}
        <div className="p-5 sm:p-6 border-b border-[#252830] flex items-center justify-between sticky top-0 bg-[#141619] z-20">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider">
                Instant Slot Reservation
              </span>
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#f5f2eb]">
              {step === 4 ? 'Appointment Reserved!' : 'Book Your Royal Session'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1e2126] text-white/80 hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="bg-[#1c1f24] px-6 py-2 border-b border-[#252830] flex items-center justify-between text-xs text-[#a09a8d]">
            <span className={step >= 1 ? 'text-[#d4af37] font-bold' : ''}>1. Therapy</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#d4af37] font-bold' : ''}>2. Slot & Branch</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-[#d4af37] font-bold' : ''}>3. Details</span>
          </div>
        )}

        {/* Body Content by Step */}
        <div className="p-5 sm:p-8 flex-1">
          
          {/* STEP 1: Select Service / Package & Duration */}
          {step === 1 && (
            <div className="space-y-6">
              
              {/* Type Switcher */}
              <div className="grid grid-cols-2 gap-2 bg-[#0e1012] p-1.5 rounded-xl border border-[#272a32]">
                <button
                  type="button"
                  onClick={() => {
                    setBookingType('service');
                    setSelectedItemId(spaConfig.services[0].id);
                    setSelectedDuration(spaConfig.services[0].durations[0].minutes);
                  }}
                  className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    bookingType === 'service'
                      ? 'bg-[#d4af37] text-black shadow-md'
                      : 'text-[#a39d8f] hover:text-white'
                  }`}
                >
                  Individual Therapies
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBookingType('package');
                    setSelectedItemId(spaConfig.packages[0].id);
                    setSelectedDuration(spaConfig.packages[0].totalDurationMins);
                  }}
                  className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    bookingType === 'package'
                      ? 'bg-[#d4af37] text-black shadow-md'
                      : 'text-[#a39d8f] hover:text-white'
                  }`}
                >
                  All-Inclusive Packages
                </button>
              </div>

              {/* Service/Package Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-[#d4af37] mb-2 uppercase tracking-wider">
                  Select {bookingType === 'service' ? 'Therapy' : 'Package'}
                </label>
                <select
                  value={selectedItemId}
                  onChange={(e) => {
                    setSelectedItemId(e.target.value);
                    if (bookingType === 'service') {
                      const s = spaConfig.services.find((serv) => serv.id === e.target.value);
                      if (s) setSelectedDuration(s.durations[0].minutes);
                    } else {
                      const p = spaConfig.packages.find((pkg) => pkg.id === e.target.value);
                      if (p) setSelectedDuration(p.totalDurationMins);
                    }
                  }}
                  className="w-full bg-[#1a1d22] border border-[#343844] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {bookingType === 'service' ? (
                    spaConfig.services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (from ₹{s.durations[0].price})
                      </option>
                    ))
                  ) : (
                    spaConfig.packages.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.totalDurationMins}m @ ₹{p.price})
                      </option>
                    ))
                  )}
                </select>
              </div>

              {/* Duration Options for Services */}
              {bookingType === 'service' && currentService && (
                <div>
                  <label className="block text-xs font-semibold text-[#d4af37] mb-2 uppercase tracking-wider">
                    Select Duration
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {currentService.durations.map((d) => (
                      <button
                        key={d.minutes}
                        type="button"
                        onClick={() => setSelectedDuration(d.minutes)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          selectedDuration === d.minutes
                            ? 'bg-[#d4af37] border-[#d4af37] text-black font-bold shadow-md'
                            : 'bg-[#181a1e] border-[#2c303a] text-[#c2bdb2] hover:bg-[#22252c]'
                        }`}
                      >
                        <p className="text-xs">{d.minutes} Mins</p>
                        <p className="text-sm font-bold">₹{d.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Guests Count */}
              <div>
                <label className="block text-xs font-semibold text-[#d4af37] mb-2 uppercase tracking-wider">
                  Number of Guests
                </label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setGuestsCount(count)}
                      className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        guestsCount === count
                          ? 'bg-[#d4af37] border-[#d4af37] text-black'
                          : 'bg-[#181a1e] border-[#2c303a] text-[#c2bdb2] hover:bg-[#22252c]'
                      }`}
                    >
                      {count} {count === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: Branch, Date, Time Slot & Preference */}
          {step === 2 && (
            <div className="space-y-6">
              
              {/* Branch Select */}
              <div>
                <label className="block text-xs font-semibold text-[#d4af37] mb-2 uppercase tracking-wider">
                  Choose Spa Center
                </label>
                <select
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="w-full bg-[#1a1d22] border border-[#343844] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {spaConfig.branches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.city} - {b.name} ({b.area})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-[#8e887a] mt-1.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  <span>{currentBranch.address}</span>
                </p>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#d4af37] mb-2 uppercase tracking-wider">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#1a1d22] border border-[#343844] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="block text-xs font-semibold text-[#d4af37] mb-2 uppercase tracking-wider">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 px-1 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        selectedTimeSlot === slot
                          ? 'bg-[#d4af37] border-[#d4af37] text-black font-bold shadow-md'
                          : 'bg-[#181a1e] border-[#2c303a] text-[#c2bdb2] hover:bg-[#22252c]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Therapist Preference */}
              <div>
                <label className="block text-xs font-semibold text-[#d4af37] mb-2 uppercase tracking-wider">
                  Therapist Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'any', label: 'No Preference' },
                    { id: 'female', label: 'Female Therapist' },
                    { id: 'male', label: 'Male Therapist' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setTherapistPref(p.id)}
                      className={`py-2 rounded-lg border text-xs transition-all cursor-pointer ${
                        therapistPref === p.id
                          ? 'bg-[#d4af37] border-[#d4af37] text-black font-bold'
                          : 'bg-[#181a1e] border-[#2c303a] text-[#c2bdb2] hover:bg-[#22252c]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* STEP 3: Customer Details & Summary */}
          {step === 3 && (
            <div className="space-y-6">
              
              {/* Order Summary Box */}
              <div className="bg-[#101214] border border-[#d4af37]/30 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#d4af37] uppercase">Booking Summary</span>
                  <span className="text-xs text-[#25D366] font-bold">Pay at Spa Available</span>
                </div>
                <div className="space-y-1 text-xs text-[#ded9cb]">
                  <p><strong className="text-white">Service:</strong> {itemName} ({selectedDuration} Mins)</p>
                  <p><strong className="text-white">Center:</strong> {currentBranch.name}, {currentBranch.city}</p>
                  <p><strong className="text-white">Date & Time:</strong> {selectedDate} at {selectedTimeSlot}</p>
                  <p><strong className="text-white">Guests:</strong> {guestsCount} Guest(s)</p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#252830] flex items-baseline justify-between">
                  <span className="text-xs text-[#a09a8d]">Estimated Total Amount:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-luxury text-2xl font-bold text-[#f5ecd0]">
                      ₹{calculatedPrice}
                    </span>
                    {originalPrice > calculatedPrice && (
                      <span className="text-xs text-[#7d776a] line-through">
                        ₹{originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-[#d4af37] mb-1.5 uppercase tracking-wider">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8a8579] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suraj Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#1a1d22] border border-[#343844] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-xs font-semibold text-[#d4af37] mb-1.5 uppercase tracking-wider">
                  Mobile / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8a8579] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98200 12345"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-[#1a1d22] border border-[#343844] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <p className="text-[10px] text-[#8e887a] mt-1">
                  We will send instant slot confirmation to this WhatsApp number.
                </p>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#d4af37] mb-1.5 uppercase tracking-wider">
                  Special Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anniversary setup, extra shoulder pressure, quiet suite"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-[#1a1d22] border border-[#343844] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

            </div>
          )}

          {/* STEP 4: Success & Confirmation */}
          {step === 4 && (
            <div className="text-center py-4 space-y-6">
              
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">
                  Reference: #{bookingRefId}
                </span>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#f5ecd0] mt-1 mb-2">
                  Reservation Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#b8b3a5] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{fullName}</strong>. Your appointment request for <strong className="text-white">{itemName}</strong> at <strong className="text-white">{currentBranch.name}</strong> has been logged.
                </p>
              </div>

              {/* Appointment Card */}
              <div className="bg-[#101214] border border-[#2c303a] rounded-2xl p-4 text-xs text-left space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#20232a] pb-2">
                  <span className="text-[#8a8579]">Date & Slot:</span>
                  <span className="text-[#f5f2eb] font-semibold">{selectedDate} • {selectedTimeSlot}</span>
                </div>
                <div className="flex justify-between border-b border-[#20232a] pb-2">
                  <span className="text-[#8a8579]">Center:</span>
                  <span className="text-[#f5f2eb] font-semibold">{currentBranch.city} ({currentBranch.area.split(',')[0]})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8a8579]">Total Estimate:</span>
                  <span className="text-[#d4af37] font-bold">₹{calculatedPrice} (Pay at Spa)</span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0c0d0e] font-extrabold text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Confirmation to WhatsApp</span>
                </button>

                <a
                  href={`tel:${currentBranch.phoneRaw}`}
                  className="w-full bg-[#1b1e23] hover:bg-[#252830] text-[#e8e4da] border border-[#373b47] font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call {currentBranch.name} ({currentBranch.phone})</span>
                </a>
              </div>

            </div>
          )}

        </div>

        {/* Footer Controls */}
        {step < 4 && (
          <div className="p-5 sm:p-6 border-t border-[#252830] flex items-center justify-between sticky bottom-0 bg-[#141619] z-20">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="bg-[#1b1e23] hover:bg-[#242831] text-[#c2bdb2] text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="bg-gradient-to-r from-[#d4af37] to-[#aa8022] hover:from-[#e5c250] hover:to-[#be922c] text-[#0c0d0e] text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <span>{step === 3 ? 'Confirm Reservation' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
