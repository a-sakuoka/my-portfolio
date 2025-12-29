"use client";
import { motion } from "framer-motion";

export default function Introduction() {
  const problems = [
    {
      text: (
        <>
          「ホームページを作ったけれど、<br />
          <span className="relative inline-block px-1">
            <span className="relative z-10 font-bold">『誰にも見られず認知が増えない』</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-500/60 -skew-x-12"></span>
          </span>」
        </>
      ),
      icon: "🫣"
    },
    {
      text: (
        <>
          「業務の中で<br />
          <span className="relative inline-block px-1">
            <span className="relative z-10 font-bold">『こんなツールがあったら楽なのに』</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-500/60 -skew-x-12"></span>
          </span>
          <br />と思うが、実現方法が分からない」
        </>
      ),
      icon: "🤔"
    },
    {
      text: (
        <>
          「業務効率化をしたいが、<br />
          <span className="relative inline-block px-1">
            <span className="relative z-10 font-bold">『どこをどう改善すべきか言語化できない』</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-500/60 -skew-x-12"></span>
          </span>」
        </>
      ),
      icon: "😵‍💫"
    }
  ];

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-2 block">Problems</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Web制作で、こんな<span className="text-cyan-400">お悩み</span>はありませんか？
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex items-center gap-6 bg-[#1e293b] border border-[#334155] p-6 rounded-2xl shadow-lg hover:border-cyan-500/50 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-black/30 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
