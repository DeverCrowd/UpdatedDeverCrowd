import { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import H1 from "../ui/H1";
import { motion } from "framer-motion";

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
    <motion.div
      className="contact-form w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <motion.div
        className="card w-full backdrop-blur-3xl bg-gradient-to-br from-[#0a0f1ca1] to-[#0c1e3b] py-8 px-6 sm:px-10 md:px-12 rounded-4xl shadow-[0_8px_24px_rgba(0,0,0,0.6)] borde border-sky-900/40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        >
        <H1 title="Get in touch" />
      
        <p className="text-sky-200 text-sm sm:text-base max-w-md">
          Fill out the form and we’ll get back to you shortly.
        </p>

        {success && (
          <motion.div
            className="mt-6 bg-[#0c1e3b]/80 border border-sky-500 text-sky-400 py-3 px-5 rounded-xl text-sm flex items-center gap-3 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <FiCheckCircle className="text-xl" />
            <span className="font-medium tracking-wide">
              Message sent successfully!
            </span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 pt-10">
          <div className="flex flex-col md:flex-row md:gap-6">
            {["name", "email"].map((field, index) => (
              <motion.div
                key={field}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <label className="text-sky-200 text-sm mb-1 block">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-sky-800 bg-transparent text-white placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
                {errors[field] && (
                  <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:gap-6">
            {["company", "phone"].map((field, index) => (
              <motion.div
                key={field}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <label className="text-sky-200 text-sm mb-1 block">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "phone" ? "tel" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  onKeyDown={field === "phone" ? (e) => {
                    const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete", "+"];
                    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                      e.preventDefault();
                    }
                  } : undefined}
                  className="w-full px-4 py-3 rounded-xl border border-sky-800 bg-transparent text-white placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
                {errors[field] && (
                  <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label className="text-sky-200 text-sm mb-1 block">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-sky-800 bg-transparent text-white placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-sky-600 hover:bg-sky-500 transition-all duration-300 rounded-xl text-white font-semibold tracking-wide flex items-center justify-center gap-2 disabled:opacity-50"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <span className="flex items-center gap-2 animate-pulse">Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
                <FiSend className="text-lg" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
