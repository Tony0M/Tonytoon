
"use client";

import { motion } from "framer-motion";

const LOGO_URL = "/logo-tonytoon.png";
const COVER_URL = "/cover-tonytoon.jpg";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* HEADER */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="TonyToon Logo" className="h-10 w-10 rounded-xl object-contain" />
            <span className="font-extrabold tracking-tight text-slate-900">TonyToon World</span>
          </a>
          <button className="rounded-2xl bg-yellow-400 text-slate-900 hover:bg-yellow-300 px-4 py-2 text-sm">Coming Soon</button>
        </div>
      </header>

      {/* HERO WITH COVER */}
      <section className="relative overflow-hidden">
        <div
          className="relative"
          style={{
            backgroundImage: `url(${COVER_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/50">
            <div className="max-w-4xl mx-auto px-4 py-24 text-center text-white">
              <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
                🚀 TonyToon World is Coming!
              </motion.h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                مغامرتك الأولى مع توني تبدأ قريبًا… أول كتاب تفاعلي من TonyToon World في الطريق!
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <input placeholder="إدخل إيميلك عشان توصلك أول نسخة" className="rounded-2xl max-w-xs px-4 py-2 text-slate-900" />
                <button className="rounded-2xl bg-yellow-400 text-slate-900 hover:bg-yellow-300 px-5 py-2">Notify Me</button>
              </div>
              <p className="mt-3 text-sm text-gray-300">إشترك عشان تكون من أوائل اللي يجربوا الكتاب.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN (Placeholder) */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">العد التنازلي للإطلاق</h2>
          <p className="text-lg text-slate-600 mb-6">جاهزين؟ أول كتاب هيتوفر قريب جدًا ✨</p>
          <div className="flex justify-center gap-4 text-center">
            {['أيام','ساعات','دقايق','ثواني'].map((label,i) => (
              <div key={i} className="bg-slate-100 rounded-2xl shadow p-4 w-20">
                <div className="text-3xl font-bold text-slate-900">00</div>
                <div className="text-xs text-slate-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="TonyToon Logo" className="h-8 w-8 rounded-lg object-contain" />
            <div className="font-bold">TonyToon World</div>
          </div>
          <p className="text-slate-500">© {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
