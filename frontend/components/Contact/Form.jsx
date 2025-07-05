import React, { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const sanitizeInput = (value) => {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: sanitizeInput(e.target.value),
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^(?:\+?\d{9,15}|0\d{8,14})$/.test(form.phone)) {
      newErrors.phone = "Invalid phone number.";
    }

    if (!form.message.trim() || form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log(form);
      setLoading(false);
      setSuccess(true);
      setErrors({});
      setForm({ name: "", email: "", company: "", phone: "", message: "" });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="contact-form w-full sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[55%] 2xl:w-[45%] m-8 mx-auto backdrop-blur-sm mt-5">
      <div className="card w-full bg-cardColor py-6 px-6 sm:px-8 md:px-10 lg:px-12 rounded-2xl border border-primary">
        <h1 className="text-xl sm:text-2xl pb-3 text-primary">Send a Message</h1>
        <p className="text-white/60 text-sm sm:text-base">
          Fill out the form and we’ll get back to you shortly.
        </p>

        {success && (
          <div className="mt-6 bg-black/70 border border-primary text-primary py-3 px-5 rounded-xl text-sm flex items-center gap-3 shadow-md transition-all duration-300">
            <FiCheckCircle className="text-primary text-xl" />
            <span className="font-medium tracking-wide">
              Message sent successfully!
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 pt-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-white/70 text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-white/10 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block text-white/70 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-white/10 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-white/70 text-sm mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-white/10 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            <div className="w-full">
              <label className="block text-white/70 text-sm mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab",
                    "Delete",
                    "+",
                  ];
                  if (
                    !/[0-9]/.test(e.key) &&
                    !allowedKeys.includes(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}
                className="w-full px-4 py-2 rounded-xl border border-white/10 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/10 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary hover:bg-primary/80 cursor-pointer transition-all duration-300 rounded-xl text-white font-semibold tracking-wide flex items-center justify-center gap-2 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2 animate-pulse">
                Sending...
              </span>
            ) : (
              <>
                <span>Send Message</span>
                <FiSend className="text-lg" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
