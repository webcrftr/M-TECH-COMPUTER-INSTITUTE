import { ShieldCheck, TrendingUp, Users, Microscope, Zap, Laptop } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: "Experienced Faculty",
    desc: "Our trainers aren't just teachers; they are professionals with 10+ years of industry experience who understand the real-world application of every skill.",
    icon: <Users className="text-blue-500" />,
    stats: "10+ Years Exp."
  },
  {
    title: "100% Practical Training",
    desc: "We believe in 'learning by doing'. Our curriculum is 80% practical based on real projects, ensuring you can actually use what you learn.",
    icon: <Laptop className="text-blue-500" />,
    stats: "Hands-on Focus"
  },
  {
    title: "Job Placement Support",
    desc: "From resume building to mock interviews, we guide you through everything needed to land your first job in the tech world.",
    icon: <TrendingUp className="text-emerald-500" />,
    stats: "90% Success Rate"
  },
  {
    title: "Personalized Attention",
    desc: "We maintain small batch sizes (max 10-12 students) so that every single individual gets the guidance they need to succeed.",
    icon: <ShieldCheck className="text-brand-accent" />,
    stats: "Small Batches"
  },
  {
    title: "Modern Lab Facility",
    desc: "Learn on the latest high-performance computers with original software and high-speed internet in a comfortable environment.",
    icon: <Microscope className="text-brand-primary" />,
    stats: "Latest Hardware"
  },
  {
    title: "Flexible Timings",
    desc: "Perfect for working professionals and college students. We offer morning, afternoon, and evening slots to fit your busy life.",
    icon: <Zap className="text-brand-accent" />,
    stats: "7 AM - 9 PM"
  }
];

export default function BenefitsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-navy text-white pt-24 pb-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-block bg-brand-primary text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            The M Tech Advantage
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 px-4">
            Why We Are Naigaon's <span className="text-brand-primary">#1 Choice</span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto px-4">
            Over the last decade, we have transformed the careers of over 1000 students through dedicated mentorship and practical excellence.
          </p>
        </div>
      </div>

      {/* Benefits Bento Grid Expansion */}
      <div className="container mx-auto px-4 -mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card p-10 bg-white hover:shadow-2xl transition-all border-none outline outline-1 outline-slate-100"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner uppercase font-black text-brand-navy">
                  {benefit.icon}
                </div>
                <div className="text-[10px] font-black text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                  {benefit.stats}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {benefit.desc}
              </p>
              
              <div className="w-full h-1 bg-slate-50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-brand-primary/30"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bento-card accent-navy p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
             <h2 className="text-3xl font-black">Get Nationally Recognized <br/><span className="text-brand-primary">Certifications</span></h2>
             <p className="opacity-80 leading-relaxed text-lg">
               Our certificates are accepted by government organizations and top MNCs across India. Stand out in your job interviews with the M Tech advantage.
             </p>
             <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold border border-white/20">MS-CIT Official</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold border border-white/20">Tally Gold Partner</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold border border-white/20">M-Tech Verified</div>
             </div>
          </div>
          <div className="md:w-1/2 relative bg-white/5 p-4 rounded-2xl border border-white/10">
             <div className="aspect-[4/3] bg-brand-navy/50 rounded-xl overflow-hidden flex items-center justify-center relative">
                <ShieldCheck size={120} className="text-brand-primary animate-pulse opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                   <div className="font-black text-xl mb-1">Verify Your Certificate</div>
                   <div className="text-[10px] text-white/60">Search using unique enrollment ID on our portal</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
         <h2 className="text-2xl font-bold text-brand-navy mb-8">Ready to experience these benefits?</h2>
         <Link to="/contact" className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:-translate-y-1 transition-all inline-block shadow-brand-primary/20">
            Join M Tech Today
         </Link>
      </div>
    </div>
  );
}
