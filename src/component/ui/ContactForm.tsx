import emailjs from "emailjs-com";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";


interface FormData {
    name: string;
    email: string;
    message: string;
    [key: string]: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setSubmitStatus(error instanceof Error ? "error" : "error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <motion.div
            className="p-8 rounded-lg relative overflow-hidden bg-theme-card border border-theme"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h3 className="text-theme-primary text-[24px] font-bold mb-6">Send me a message</h3>

            {submitStatus === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3"
                >
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
            )}

            {submitStatus === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                >
                    <AlertCircle size={20} className="text-red-500" />
                    <span className="text-red-400">Something went wrong. Please try again later.</span>
                </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg px-4 py-3 text-theme-primary transition-colors focus:outline-none ${errors.name ? 'border-red-500' : 'border-theme'
                            }`}
                        style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            borderColor: errors.name ? '#ef4444' : 'var(--border)',
                            color: 'var(--text-primary)'
                        }}
                        onFocus={(e) => {
                            if (!errors.name) e.currentTarget.style.borderColor = 'var(--accent)';
                        }}
                        onBlur={(e) => {
                            if (!errors.name) e.currentTarget.style.borderColor = 'var(--border)';
                        }}
                    />
                    {errors.name && (
                        <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                        >
                            {errors.name}
                        </motion.p>
                    )}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg px-4 py-3 text-theme-primary transition-colors focus:outline-none ${errors.email ? 'border-red-500' : 'border-theme'
                            }`}
                        style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            borderColor: errors.email ? '#ef4444' : 'var(--border)',
                            color: 'var(--text-primary)'
                        }}
                        onFocus={(e) => {
                            if (!errors.email) e.currentTarget.style.borderColor = 'var(--accent)';
                        }}
                        onBlur={(e) => {
                            if (!errors.email) e.currentTarget.style.borderColor = 'var(--border)';
                        }}
                    />
                    {errors.email && (
                        <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                        >
                            {errors.email}
                        </motion.p>
                    )}
                </div>

                <div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full rounded-lg px-4 py-3 text-theme-primary transition-colors focus:outline-none resize-none ${errors.message ? 'border-red-500' : 'border-theme'
                            }`}
                        style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            borderColor: errors.message ? '#ef4444' : 'var(--border)',
                            color: 'var(--text-primary)'
                        }}
                        onFocus={(e) => {
                            if (!errors.message) e.currentTarget.style.borderColor = 'var(--accent)';
                        }}
                        onBlur={(e) => {
                            if (!errors.message) e.currentTarget.style.borderColor = 'var(--border)';
                        }}
                    />
                    {errors.message && (
                        <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                        >
                            {errors.message}
                        </motion.p>
                    )}
                </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                        backgroundColor: isSubmitting ? 'var(--accent)' : 'var(--accent)',
                        opacity: isSubmitting ? 0.5 : 1
                    }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={(e) => {
                        if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
                    }}
                    onMouseLeave={(e) => {
                        if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--accent)';
                    }}
                >
                    {isSubmitting ? (
                        <>
                            <motion.div
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Send size={18} />
                            <span>Send Message</span>
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
};