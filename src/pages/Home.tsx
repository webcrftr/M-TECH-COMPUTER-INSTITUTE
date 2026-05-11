import Hero from '../components/Hero';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle, Star, GraduationCap, Users, Trophy, Mail, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div id="home" className="flex flex-col gap-20 lg:gap-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8 h-[calc(100vh-120px)] min-h-[600px]">
        <Hero />
      </div>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-2xl mb-4 border border-brand-orange/20">
                <Trophy size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Trusted Institute in Naigaon</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-brand-navy leading-tight">
                Empowering Minds <br />
                Since 3+ Years
              </h3>
            </div>
            
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              M Tech Computer Institute is more than just a training center; it's a launchpad for your digital career. Located in the heart of Naigaon East, we provide a modern learning environment with personalized attention to every student.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-1">
                <div className="text-3xl font-black text-brand-navy">300+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Students Trained</div>
              </div>
              <div className="space-y-1 text-brand-orange">
                <div className="text-3xl font-black">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Practical Focus</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-brand-navy">3+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Excellence</div>
              </div>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
               <a href="#courses" className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-brand-orange transition-colors">Start Learning</a>
               <a href="https://instagram.com/mhatre_tech" target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-slate-200 px-8 py-4 rounded-2xl font-black text-sm text-brand-navy hover:bg-slate-50 transition-colors">
                  <Instagram size={18} className="text-brand-orange" />
                  Follow Us
               </a>
            </div>
          </motion.div>

          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border-8 border-white"
             >
                <img src="/office.jpg" alt="M Tech Counseling Cabin" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                   <div className="text-white font-black text-xl mb-1">Expert Career Guidance</div>
                   <p className="text-white/80 text-xs font-medium">Free counseling sessions available daily from 9 AM to 6 PM.</p>
                </div>
             </motion.div>
             {/* Decorative blob */}
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px] -z-10"></div>
             <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="container mx-auto px-4 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4">Curriculum</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-navy">Choose Your Career Path</h3>
        </div>
        <Courses />
      </section>

      {/* Why Choose Us */}
      <section id="benefits" className="container mx-auto px-4 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4">Advantages</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-navy">Why Join M Tech?</h3>
        </div>
        <WhyChooseUs />
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
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4">Success Stories</h2>
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
               <h3 className="text-4xl font-black mb-6">Get In Touch</h3>
               <p className="opacity-70 font-medium">Have questions? Visit us or send a message and our team will assist you today.</p>
            </div>

            <div className="space-y-10 flex-grow">
               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                     <MapPin className="text-brand-orange" />
                  </div>
                  <div>
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Our Location</div>
                     <p className="font-bold text-sm leading-relaxed">
                        Vishnu Apt Phase 2, 306, 3rd Floor, <br />
                        Don Bosco Road, Opposite Ishan Hospital, <br />
                        Naigaon (E)
                     </p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                     <Phone className="text-brand-orange" />
                  </div>
                  <div>
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Call Us</div>
                     <p className="font-black text-2xl hover:text-brand-orange transition-colors">
                        077559 09266
                     </p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                     <Clock className="text-brand-orange" />
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
                      <Mail className="text-brand-orange" />
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Email Us</div>
                      <a href="mailto:mhatretech0@gmail.com" className="font-black text-lg md:text-xl hover:text-brand-orange transition-colors break-all">
                         mhatretech0@gmail.com
                      </a>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                      <Instagram className="text-brand-orange" />
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Social Media</div>
                      <a href="https://instagram.com/mhatre_tech" target="_blank" rel="noreferrer" className="font-black text-2xl hover:text-brand-orange transition-colors">
                         @mhatre_tech
                      </a>
                   </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                 <a 
                   href="https://wa.me/917755909266" 
                   className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl font-black text-sm hover:scale-[1.02] transition-transform"
                 >
                   <MessageCircle size={20} />
                   WhatsApp Us Now
                 </a>
              </div>
            </div>

          {/* Form and Map Side */}
          <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col bg-white">
            <ContactForm />
            
            <div className="mt-12 flex-grow rounded-[40px] overflow-hidden border border-slate-100 h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15053.816698656157!2d72.84687535!3d19.34994275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a5a8726be62f%3A0x6b2b7324869485b!2sM%20Tech%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1713721873041!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
