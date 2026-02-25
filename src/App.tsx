/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Wallet, 
  ArrowRight, 
  Shield, 
  Zap, 
  Gift, 
  Smartphone, 
  CheckCircle2, 
  MousePointerClick,
  Download
} from "lucide-react";

const NAVI_REFERRAL_LINK = "https://r.navi.com/QbxSxB";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-display selection:bg-primary/30">
      {/* Floating Action Button for Mobile */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-[60] md:hidden"
      >
        <a 
          href={NAVI_REFERRAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 active:scale-90 transition-transform"
        >
          <Download className="w-8 h-8" />
        </a>
      </motion.div>

      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-100 px-6 md:px-20 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 text-primary">
          <Wallet className="w-8 h-8" />
          <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">Navi UPI Smarter</h2>
        </div>
        <a 
          href={NAVI_REFERRAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary text-white text-sm font-bold leading-normal hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
        >
          Get Started
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8 order-2 lg:order-1"
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-slate-900 text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                  Switch to a Smarter <span className="text-primary">Navi UPI Experience 💳</span>
                </h1>
                <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-lg">
                  Fast payments. Secure transactions. Get up to <span className="text-primary font-bold">₹10 back instantly</span> on your first payment!
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a 
                  href={NAVI_REFERRAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full md:w-fit min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-bold leading-normal shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all group"
                >
                  <span className="truncate">Claim Your ₹10 Reward</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-4 h-4" />
                  Official Navi Referral • Secure & Instant • Easy Signup
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <a 
                href={NAVI_REFERRAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full aspect-square md:aspect-video lg:aspect-square bg-slate-50 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform group"
              >
                <img 
                  alt="Mobile phone showing digital payment confirmation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6sV7D1g_x9KjtVNUsXPbdYjpeYcjjIT5U0jLrGSwNIzljYqBJa6pPYvXsPec8L1wfVnTyGr-8Vohp4snVizHC7WWRHe9ndeuVaDXelToTsneen0XyWn_FcVH0K1K6AeVCre3oW3dROb6OehhKe1OelMQSTEs-ZAo40d8grxghW_8SJrwV-MZqnbMqN8HsIV0M9JLlo_nfcIGqWJJ2YLy-HQqJnGtVRWfG0lrsG74H6qubplK2I-2ENbKEt9NUxxBpZB-1tdyb7Gg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-xl flex items-center gap-2 text-primary font-bold">
                    <Download className="w-5 h-5" />
                    Get App Now
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-4">Why Use This UPI App?</h2>
              <p className="text-slate-600 text-lg">Experience the future of digital payments with these core features.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Instant Transfers", desc: "Send and receive money anytime using UPI." },
                { icon: Shield, title: "Strong Security", desc: "Protected with multi-layer authentication." },
                { icon: Gift, title: "Referral Benefits", desc: "Earn rewards when friends sign up using your link." }
              ].map((feature, idx) => (
                <motion.a 
                  key={idx}
                  href={NAVI_REFERRAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 text-xl font-bold">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-slate-900 text-3xl font-bold mb-16 text-center">How It Works</h2>
            <div className="flex flex-col gap-12 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block"></div>
              
              {[
                { icon: MousePointerClick, title: "Click Get Started", desc: "Tap the referral link to begin your journey toward smarter payments." },
                { icon: Smartphone, title: "Install & Register", desc: "Download the official app and complete a quick verification process." },
                { icon: Gift, title: "Start Using UPI & Earn Rewards", desc: "Complete your first transaction and unlock your exclusive referral bonus." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col md:flex-row gap-8 items-start relative"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy-custom py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">Start Using Navi UPI the Smart Way</h2>
              <p className="text-slate-400 text-lg max-w-xl">Join thousands of users making faster, safer, and more rewarding payments every day.</p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={NAVI_REFERRAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-primary text-white text-xl font-bold leading-normal shadow-xl shadow-primary/20"
              >
                <Download className="mr-3 w-6 h-6" />
                <span className="truncate">Download & Continue</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary justify-center md:justify-start">
                <Wallet className="w-6 h-6" />
                <span className="text-slate-900 font-bold text-lg">Navi UPI Smarter</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                This page contains a referral link. Rewards are subject to the official app terms and conditions. This is not an official website.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end justify-center">
              <p className="text-slate-400 text-sm">© 2026 Rewards Guide. All rights reserved.</p>
              <div className="flex gap-6 text-slate-400 text-xs font-semibold uppercase tracking-widest justify-center md:justify-end">
                <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                <a className="hover:text-primary transition-colors" href="#">Terms</a>
                <a className="hover:text-primary transition-colors" href="#">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
