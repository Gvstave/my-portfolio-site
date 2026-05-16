import { motion } from "framer-motion";

type Certificate = {
    name: string;
    issuer?: string;
    date?: string;
};

export const Certificates = () => {
    const certificatesList: Certificate[] = [
        // Add your certificates here
    ];

    return (
        <section id="certificates" className="min-h-screen flex items-center justify-center py-20 px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl"
            >
                <h2 className="text-4xl font-bold mb-8 text-theme-primary">Certificates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificatesList.length > 0 ? (
                        certificatesList.map((cert, index) => (
                            <div key={index} className="bg-card-bg border border-theme rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                                <p className="text-text-secondary mb-2">{cert.issuer}</p>
                                <p className="text-sm text-text-secondary">{cert.date}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-text-secondary">Certificates coming soon...</p>
                    )}
                </div>
            </motion.div>
        </section>
    );
};
