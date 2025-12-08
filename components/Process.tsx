'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Process() {
    return (
        <section className="py-20 md:py-32 bg-[#f4f4f4] px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <p className="text-sm md:text-base text-[#1a1a1a]/60 uppercase tracking-wider mb-4">
                        03 / Process
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                        Workflow
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-auto"
                >
                    <Image
                        src="/process-flow.png.jpg"
                        alt="Service Process Workflow"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-xl shadow-lg border border-[#1a1a1a]/5"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    />
                </motion.div>
            </div>
        </section>
    );
}
