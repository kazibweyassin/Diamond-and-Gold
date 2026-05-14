'use client';

import { useState, useRef, useEffect } from 'react';
import { CONTACT } from '@/lib/constants';

type ChatStep = 'greeting' | 'name' | 'quantity' | 'email' | 'complete';

interface Message {
  from: 'bot' | 'user';
  text: string;
}

const BOT_SCRIPT: Record<ChatStep, string> = {
  greeting: "Hi there 👋 I can help you get a gold price quote in under a minute. Ready to start?",
  name: "What's your name?",
  quantity: "How many kilograms of gold are you interested in?",
  email: "What's your email address? (optional — skip if you prefer)",
  complete: "Perfect! Here's a summary of your request. Tap below to continue on WhatsApp and we'll get back to you with a quote.",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>('greeting');
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: BOT_SCRIPT.greeting },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({ name: '', quantity: '', email: '' });
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && step !== 'greeting' && step !== 'complete') {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [step, isOpen]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', text }]);
    }, 700);
  };

  const handleGreeting = () => {
    setMessages((prev) => [...prev, { from: 'user', text: "Yes, let's go!" }]);
    setStep('name');
    addBotMessage(BOT_SCRIPT.name);
  };

  const handleSubmit = () => {
    const value = inputValue.trim();

    if (step === 'name') {
      if (!value) return;
      setFormData((prev) => ({ ...prev, name: value }));
      setMessages((prev) => [...prev, { from: 'user', text: value }]);
      setInputValue('');
      setStep('quantity');
      addBotMessage(`Nice to meet you, ${value}! ${BOT_SCRIPT.quantity}`);
    } else if (step === 'quantity') {
      if (!value) return;
      setFormData((prev) => ({ ...prev, quantity: value }));
      setMessages((prev) => [...prev, { from: 'user', text: `${value} kg` }]);
      setInputValue('');
      setStep('email');
      addBotMessage(BOT_SCRIPT.email);
    } else if (step === 'email') {
      const emailVal = value;
      setFormData((prev) => ({ ...prev, email: emailVal }));
      setMessages((prev) => [
        ...prev,
        { from: 'user', text: emailVal || 'No email, thanks' },
      ]);
      setInputValue('');
      setStep('complete');
      addBotMessage(BOT_SCRIPT.complete);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const handleSkipEmail = () => {
    setFormData((prev) => ({ ...prev, email: '' }));
    setMessages((prev) => [...prev, { from: 'user', text: 'Skip' }]);
    setInputValue('');
    setStep('complete');
    addBotMessage(BOT_SCRIPT.complete);
  };

  const handleWhatsApp = () => {
    const message = `Hi, my name is ${formData.name}. I'm interested in ${formData.quantity} kg of gold.${formData.email ? ` My email is ${formData.email}.` : ''} Could you send me a price quote?`;
    window.open(`https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    resetChat();
  };

  const resetChat = () => {
    setStep('greeting');
    setFormData({ name: '', quantity: '', email: '' });
    setMessages([{ from: 'bot', text: BOT_SCRIPT.greeting }]);
    setInputValue('');
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
        className="group fixed bottom-5 left-5 z-40 flex items-center gap-2.5 rounded-full bg-zinc-900 pl-4 pr-5 py-3 shadow-xl transition-all duration-200 hover:bg-zinc-700 sm:bottom-6 sm:left-6"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-sm font-medium text-white">Get a quote</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 flex w-[340px] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl sm:bottom-6 sm:left-6 sm:w-[360px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-900 px-4 py-3.5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-zinc-700 text-xs font-semibold text-zinc-200">
            GQ
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-900 bg-emerald-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Gold Quote</p>
            <p className="text-xs text-zinc-400">Typically replies instantly</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close chat"
          className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-700 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex h-64 flex-col gap-3 overflow-y-auto bg-zinc-50 p-4">
        {messages.map((msg, i) =>
          msg.from === 'bot' ? (
            <div key={i} className="flex items-end gap-2">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-white">
                G
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 text-sm text-zinc-800 shadow-sm ring-1 ring-zinc-200">
                {msg.text}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-zinc-900 px-3.5 py-2.5 text-sm text-white">
                {msg.text}
              </div>
            </div>
          )
        )}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-end gap-2">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-white">
              G
            </div>
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3.5 py-3 shadow-sm ring-1 ring-zinc-200">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:300ms]" />
            </div>
          </div>
        )}

        {/* Summary card */}
        {step === 'complete' && !isTyping && (
          <div className="mx-1 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              Your request
            </p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Name</span>
                <span className="font-medium text-zinc-800">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Quantity</span>
                <span className="font-medium text-zinc-800">{formData.quantity} kg</span>
              </div>
              {formData.email && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Email</span>
                  <span className="font-medium text-zinc-800">{formData.email}</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-zinc-100 bg-white p-3">
        {step === 'greeting' && (
          <button
            onClick={handleGreeting}
            className="w-full rounded-xl bg-zinc-900 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.98]"
          >
            Yes, let's go →
          </button>
        )}

        {(step === 'name' || step === 'quantity' || step === 'email') && (
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type={step === 'quantity' ? 'number' : step === 'email' ? 'email' : 'text'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                min={step === 'quantity' ? 1 : undefined}
                placeholder={
                  step === 'name'
                    ? 'Your name…'
                    : step === 'quantity'
                    ? 'Amount in kg…'
                    : 'your@email.com'
                }
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-900/10"
              />
            </div>
            {step === 'email' && (
              <button
                onClick={handleSkipEmail}
                className="rounded-xl border border-zinc-200 px-3 py-2.5 text-xs text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-700"
              >
                Skip
              </button>
            )}
            <button
              onClick={handleSubmit}
              disabled={step !== 'email' && !inputValue.trim()}
              aria-label="Send"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white transition hover:bg-zinc-700 active:scale-95 disabled:opacity-30"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M12 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        )}

        {step === 'complete' && !isTyping && (
          <button
            onClick={handleWhatsApp}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5a] active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.768.966-.941 1.165-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006c-1.052 0-2.082.398-2.836 1.123-.755.726-1.172 1.71-1.172 2.745 0 1.035.417 2.019 1.172 2.745.754.725 1.784 1.123 2.836 1.123h.006c1.052 0 2.082-.398 2.836-1.123.755-.726 1.172-1.71 1.172-2.745 0-1.035-.417-2.019-1.172-2.745-.754-.725-1.784-1.123-2.836-1.123M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0" />
            </svg>
            Continue on WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}