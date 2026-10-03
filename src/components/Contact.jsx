import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import Reveal from "./Reveal";
import PageHero from "./PageHero";
import { FeatureStrip } from "./shop";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // No backend wired up yet - just confirm and reset the form for now.
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full border border-[#D9D9D9] px-5 py-4 outline-none focus:border-[#B88E2F] transition-colors placeholder-[#B0B0B0]";

  return (
    <>
        <PageHero title="Contact" showLogo />
        <section className="w-[90%] lg:w-[80%] mx-auto py-16">

            <Reveal className="text-center max-w-xl mx-auto mb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A] mb-4">Get In Touch With Us</h1>
                <p className="text-[#898989] leading-relaxed">
                For more information about our product & services, please feel free to drop us an
                email. Our staff is always here to help you out. Don't hesitate!
                </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14 items-start">

                {/* ---------- Contact info ---------- */}
                <div className="flex flex-col gap-10">
                <Reveal delay={0} className="flex items-start gap-5">
                    <span className="w-10 h-10 rounded-full bg-[#3A3A3A] text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                    </span>
                    <div>
                    <h2 className="text-xl font-bold text-[#3A3A3A] mb-2">Address</h2>
                    <p className="text-[#898989] leading-relaxed">
                        236 5th SE Avenue, New York NY10000, United States
                    </p>
                    </div>
                </Reveal>

                <Reveal delay={120} className="flex items-start gap-5">
                    <span className="w-10 h-10 rounded-full bg-[#3A3A3A] text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                    </span>
                    <div>
                    <h2 className="text-xl font-bold text-[#3A3A3A] mb-2">Phone</h2>
                    <p className="text-[#898989] leading-relaxed">
                        Mobile: +(84) 546-6789
                        <br />
                        Hotline: +(84) 456-6789
                    </p>
                    </div>
                </Reveal>

                <Reveal delay={240} className="flex items-start gap-5">
                    <span className="w-10 h-10 rounded-full bg-[#3A3A3A] text-white flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                    </span>
                    <div>
                    <h2 className="text-xl font-bold text-[#3A3A3A] mb-2">Working Time</h2>
                    <p className="text-[#898989] leading-relaxed">
                        Monday-Friday: 9:00 - 22:00
                        <br />
                        Saturday-Sunday: 9:00 - 21:00
                    </p>
                    </div>
                </Reveal>
                </div>

                {/* ---------- Contact form ---------- */}
                <Reveal delay={150}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold text-[#3A3A3A]">Your name</label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Abc"
                        required
                        className={inputClass}
                    />
                    </div>

                    <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-[#3A3A3A]">Email address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Abc@def.com"
                        required
                        className={inputClass}
                    />
                    </div>

                    <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-semibold text-[#3A3A3A]">Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="This is an optional"
                        className={inputClass}
                    />
                    </div>

                    <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold text-[#3A3A3A]">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Hi! i'd like to ask about"
                        required
                        rows={5}
                        className={`${inputClass} resize-none`}
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-fit px-12 py-4 bg-[#B88E2F] text-white font-semibold hover:bg-[#a07b28] transition-colors cursor-pointer"
                    >
                    {submitted ? "Message Sent!" : "Submit"}
                    </button>
                </form>
                </Reveal>
            </div>
        </section> 
        <FeatureStrip/>  
    </>
  );
}

export default Contact;
