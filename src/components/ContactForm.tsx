import { useForm } from 'react-hook-form';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
  };

  const courses = [
    "MS Office", "MSCIT", "Advanced Excel", "Advanced Tally with GST & TDS", 
    "Graphic Designing", "Video Editing", "Coding Courses"
  ];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-green-50 text-brand-green rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-black text-brand-navy mb-4">Inquiry Received!</h2>
            <p className="text-slate-500 mb-10 max-w-xs mx-auto">Thank you for reaching out. Our experts will call you back within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-brand-orange font-black text-sm uppercase tracking-widest hover:underline"
            >
              Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-8">
              <h3 className="text-2xl font-black text-brand-navy mb-2">Inquiry Form</h3>
              <p className="text-sm text-slate-400 font-medium">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:border-brand-orange focus:bg-white outline-none transition-all font-bold"
                  />
                  {errors.name && <span className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.name.message}</span>}
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9]{10}$/, message: "Valid 10-digit number needed" } })}
                    placeholder="10-digit mobile number"
                    className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:border-brand-orange focus:bg-white outline-none transition-all font-bold"
                  />
                  {errors.phone && <span className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.phone.message}</span>}
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Interested Course</label>
                <select 
                  {...register("course", { required: "Please select a course" })}
                  className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:border-brand-orange focus:bg-white outline-none transition-all font-bold appearance-none cursor-pointer"
                >
                  <option value="">Select a course</option>
                  {courses.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.course && <span className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.course.message}</span>}
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Message</label>
                <textarea 
                   {...register("message")}
                   rows={3}
                   placeholder="Any specific questions? (Optional)"
                   className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:border-brand-orange focus:bg-white outline-none transition-all font-bold resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:translate-y-0"
              >
                {isSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
