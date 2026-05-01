import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare, X, Star as StarIcon } from 'lucide-react'
import { testimonials } from '../../constants'
import { fadeUp } from '../../utils/animations'

export default function Testimonials() {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-indigo-500/5 blur-[160px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">Feedback</p>
            <h2 className="section-title">Client <span className="text-gradient">Testimonials</span></h2>
            <div className="neon-line w-24 mx-auto mt-4" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, y: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full glass-card p-10 md:p-16 rounded-[4rem] border-gradient relative overflow-hidden group">
                    <Quote className="absolute top-8 right-8 text-white/5" size={120} strokeWidth={1} />
                    
                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                      <div className="shrink-0">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                          <img 
                            src={testimonials[currentIndex].avatar} 
                            alt={testimonials[currentIndex].name} 
                            className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] object-cover relative z-10 border-2 border-white/10"
                          />
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="text-xl md:text-2xl text-slate-200 font-medium italic leading-relaxed mb-8">
                          "{testimonials[currentIndex].content}"
                        </p>
                        <div>
                          <h4 className="text-2xl font-black text-slate-100 tracking-tight">{testimonials[currentIndex].name}</h4>
                          <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mt-1">{testimonials[currentIndex].role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-8 mt-12">
              <button 
                onClick={prevTestimonial}
                className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-cyan-400 transition-all duration-300"
              >
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-cyan-400 transition-all duration-300"
              >
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-20 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowReviewForm(true)}
                className="flex items-center gap-3 px-12 py-5 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-slate-100 font-black uppercase tracking-widest text-xs hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all"
              >
                <MessageSquare size={18} className="text-cyan-400" />
                Leave a Feedback
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {showReviewForm && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowReviewForm(false)}
                  className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 50 }}
                  className="relative w-full max-w-2xl glass-card p-10 md:p-14 rounded-[4rem] border-gradient overflow-hidden"
                >
                  <button 
                    onClick={() => setShowReviewForm(false)}
                    className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
                  
                  <div className="relative text-center mb-12">
                    <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mx-auto mb-6">
                      <StarIcon size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-100 mb-3">Share Your <span className="text-gradient">Story</span></h3>
                    <p className="text-slate-500 text-sm">Your feedback drives my passion for excellence.</p>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl px-6 py-5 text-slate-200 outline-none focus:border-cyan-400/50 transition-all" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Your Role</label>
                      <input type="text" placeholder="CEO @ Company" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-400/50 transition-all" />
                    </div>
                    <div className="flex flex-col gap-3 md:col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Testimonial</label>
                      <textarea placeholder="Tell the world how I helped you..." rows={4} className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-white outline-none focus:border-fuchsia-400/50 transition-all resize-none" />
                    </div>
                    <div className="md:col-span-2 mt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => { e.preventDefault(); setShowReviewForm(false); }}
                        className="w-full py-5 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-600 text-slate-50 font-black uppercase tracking-widest text-sm shadow-2xl shadow-indigo-500/30"
                      >
                        Publish Review
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
