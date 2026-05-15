import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle, Star, GraduationCap, Users, Trophy, Mail, Instagram, Navigation } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 lg:gap-32 pb-20 bg-white">
      {/* Hero Section - The Original "Empowering Minds" Design */}
      <section id="home" className="container mx-auto px-4 pt-24 lg:pt-32 scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-2xl mb-6 border border-brand-primary/20">
                <Trophy size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Empowering Minds Since 3+ Years</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-brand-navy leading-[1.1] tracking-tighter">
                Master Digital <br />
                <span className="text-brand-primary">Skills</span> & Career
              </h1>
            </div>
            
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl">
              M Tech Computer Institute is more than just a training center; it's a launchpad for your digital career. Located in the heart of Naigaon East, we provide a modern learning environment with personalized attention to every student.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-4xl font-black text-brand-navy">300+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Students Trained</div>
              </div>
              <div className="space-y-1 text-brand-primary">
                <div className="text-4xl font-black">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Practical Focus</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-brand-navy">3+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Excellence</div>
              </div>
            </div>
            
            <div className="pt-8 flex flex-wrap gap-4">
               <a href="#courses" className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-primary shadow-xl hover:-translate-y-1 transition-all duration-300">Start Learning</a>
               <a href="https://wa.me/917755909266" target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-slate-200 px-10 py-5 rounded-2xl font-black text-lg text-brand-navy hover:bg-slate-50 shadow-sm hover:-translate-y-1 transition-all duration-300">
                  <MessageCircle size={20} className="text-brand-primary" />
                  Free Counseling
               </a>
            </div>
          </motion.div>

          <div className="relative lg:h-[650px] group">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative h-full z-10 rounded-[48px] overflow-hidden shadow-2xl border-8 border-white"
             >
                <img 
                   src="https://iili.io/BbyruUB.md.jpg" 
                   alt="M Tech Computer Institute Learning Environment" 
                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                />
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Expert Guidance Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-8 rounded-[32px] border border-white/20 shadow-2xl">
                   <div className="text-white font-black text-2xl mb-2">Expert Career Guidance</div>
                   <p className="text-white/90 text-sm font-medium leading-relaxed">
                     Free counseling sessions available daily from <span className="text-brand-primary font-black">9 AM to 6 PM</span>.
                   </p>
                </div>
             </motion.div>
             
             {/* Decorative Background Elements */}
             <div className="absolute -top-12 -right-12 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
             <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>


      {/* Courses Section */}
      <section id="courses" className="container mx-auto px-4 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4">Curriculum</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-navy">Choose Your Career Path</h3>
        </div>
        <Courses />
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="container mx-auto px-4 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4">Advantages</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-navy">Why Join M Tech?</h3>
        </div>
        <WhyChooseUs />
      </section>

      {/* Benefits / Features */}
      <section id="benefits" className="bg-slate-900 py-24 scroll-mt-24 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4">Benefits</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">Student Privileges</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="text-brand-primary" />, title: "Flexible Batches", desc: "Choose timings that suit your schedule." },
              { icon: <Users className="text-brand-accent" />, title: "Personal Attention", desc: "Small batch sizes for better learning." },
              { icon: <GraduationCap className="text-brand-green" />, title: "Certified Courses", desc: "Get industry-recognized certificates." },
              { icon: <Trophy className="text-brand-primary" />, title: "Practical Logic", desc: "Focus on real-world projects." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-white font-black text-lg mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>

      {/* Video Tour Section */}
      <VideoSection />

      {/* Testimonials */}
      <section id="testimonials" className="bg-slate-50 py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4">Success Stories</h2>
              <h3 className="text-4xl font-black text-brand-navy mb-6">What Our Students Say</h3>
              <p className="text-slate-500 font-medium">Over 300+ students from Naigaon East have transformed their digital journey with us.</p>
            </div>
            <div className="lg:w-2/3">
              <Testimonials />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 scroll-mt-24">
        <div className="bento-card p-0 lg:flex min-h-[700px] border-none shadow-2xl">
          {/* Contact Details Side */}
          <div className="lg:w-2/5 accent-navy p-10 lg:p-16 flex flex-col">
            <div className="mb-12">
               <h3 className="text-4xl font-black mb-6 text-white">Visit M Tech Computer Institute</h3>
               <p className="opacity-70 font-medium text-white/80">Located in the heart of Naigaon East near Ishan Hospital. Visit us or send a message today.</p>
            </div>

            <div className="space-y-10 flex-grow">
               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                     <MapPin className="text-brand-primary" />
                  </div>
                  <div>
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Our Location</div>
                     <p className="font-bold text-sm leading-relaxed">
                        Don Bosco Rd, Opposite Ishan Hospital, <br />
                        Naigaon East, Vasai-Virar, <br />
                        Maharashtra 401208, India
                     </p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                     <Phone className="text-brand-primary" />
                  </div>
                  <div>
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Call Us</div>
                     <p className="font-black text-2xl hover:text-brand-primary transition-colors">
                        077559 09266
                     </p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                     <Clock className="text-brand-primary" />
                  </div>
                  <div>
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Class Timings</div>
                     <p className="font-bold text-sm leading-relaxed">
                        9:00 AM to 6:00 PM <br />
                        (Open All Days)
                     </p>
                  </div>
               </div>
                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                      <Mail className="text-brand-primary" />
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Email Us</div>
                      <a href="mailto:mhatretech0@gmail.com" className="font-black text-lg md:text-xl hover:text-brand-primary transition-colors break-all">
                         mhatretech0@gmail.com
                      </a>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                      <Instagram className="text-brand-primary" />
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Social Media</div>
                      <a href="https://instagram.com/mhatre_tech" target="_blank" rel="noreferrer" className="font-black text-2xl hover:text-brand-primary transition-colors">
                         @mhatre_tech
                      </a>
                   </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                 <a 
                   href="https://wa.me/917755909266" 
                   className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl font-black text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-green-500/20"
                 >
                   <MessageCircle size={20} />
                   WhatsApp Us Now
                 </a>
              </div>
            </div>

          {/* Form and Map Side */}
          <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col bg-white">
            <ContactForm />
            
            <div className="mt-12 flex-grow rounded-[32px] overflow-hidden shadow-xl border border-slate-100 min-h-[350px] lg:h-[400px] relative group cursor-pointer">
              <a 
                href="https://www.google.com/maps/place/M+TECH+COMPUTER+INSTITUTE/@19.3589303,72.8570808,42m/data=!3m1!1e3!4m6!3m5!1s0x3be7af5e681d0a3d:0xf2e7501d3d456871!8m2!3d19.3589501!4d72.8571951!16s%2Fg%2F11vpnmsd9w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 block"
              >
                <span className="sr-only">Open M Tech Computer Institute on Google Maps</span>
              </a>
              <iframe 
                src="https://www.google.com/maps?q=M+TECH+COMPUTER+INSTITUTE+Naigaon&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none" 
              ></iframe>
              <div className="absolute top-4 right-4 group-hover:scale-105 transition-transform z-20">
                <a 
                  href="https://www.google.com/maps/place/M+TECH+COMPUTER+INSTITUTE/@19.3589303,72.8570808,42m/data=!3m1!1e3!4m6!3m5!1s0x3be7af5e681d0a3d:0xf2e7501d3d456871!8m2!3d19.3589501!4d72.8571951!16s%2Fg%2F11vpnmsd9w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-brand-navy px-5 py-2.5 rounded-xl font-black text-xs shadow-2xl border border-slate-100 hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <Navigation size={14} className="text-brand-primary group-hover:text-white" />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
