import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-navy overflow-x-hidden">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 grid grid-cols-12 gap-4">
        {/* Row 1: Hero and Trust */}
        <div className="col-span-12 lg:col-span-8">
          <Hero />
        </div>
        
        <div className="col-span-12 lg:col-span-4 bento-card justify-center items-center text-center space-y-6">
          <div>
            <div className="text-4xl font-extrabold text-brand-navy mb-1 tracking-tight">4.9⭐</div>
            <div className="rating-badge">Google Rating</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-brand-navy mb-1 tracking-tight">1000+</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Students Trained</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-brand-navy mb-1 tracking-tight">10+</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Experience</div>
          </div>
          <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg text-xs text-blue-800 font-medium">
             ⚡ Limited Seats for March Batch!
          </div>
        </div>

        {/* Row 2: Courses and Why Choose Us */}
        <div className="col-span-12 lg:col-span-7">
          <Courses />
        </div>
        
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
          <WhyChooseUs />
          <Testimonials />
        </div>

        {/* Row 3: CTA and Contact */}
        <div className="col-span-12 lg:col-span-6">
          <ContactForm />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <CTASection />
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
