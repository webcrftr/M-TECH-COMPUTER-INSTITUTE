import { useForm } from 'react-hook-form';
import { Send, PhoneCall, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

type FormData = {
  name: string;
  phone: string;
  course: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="contact" className="bento-card h-full justify-center text-center scroll-mt-20">
        <div className="w-16 h-16 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
          <Send size={32} />
        </div>
        <h2 className="text-2xl font-bold text-brand-navy mb-2">Thank You!</h2>
        <p className="text-gray-500 mb-6 text-sm">We'll call you back within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-brand-blue text-sm font-bold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div id="contact" className="bento-card h-full scroll-mt-20">
      <h4 className="font-bold text-center mb-6 text-brand-navy">Get Free Career Consultation</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input 
            type="text" 
            {...register("name", { required: "Name is required" })}
            placeholder="Your Full Name"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue outline-none transition-all"
          />
          {errors.name && <span className="text-red-500 text-[10px] mt-1 ml-1">{errors.name.message}</span>}
        </div>
        
        <div>
          <input 
            type="tel" 
            {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9]{10}$/, message: "Valid 10-digit number needed" } })}
            placeholder="Phone Number"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue outline-none transition-all"
          />
          {errors.phone && <span className="text-red-500 text-[10px] mt-1 ml-1">{errors.phone.message}</span>}
        </div>
        
        <div>
          <select 
            {...register("course")}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue outline-none transition-all appearance-none cursor-pointer"
          >
            <option value="">Select Course Interest</option>
            <option value="MS-CIT">MS-CIT / Basics</option>
            <option value="Tally">Tally Prime & GST</option>
            <option value="Excel">Advanced Excel</option>
            <option value="Programming">Programming</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-brand-green text-white py-3.5 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all shadow-md mt-2"
        >
          {isSubmitting ? "Sending..." : "Get Consultation Now"}
        </button>
      </form>
    </div>
  );
}
