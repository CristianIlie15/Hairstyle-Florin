import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Scissors,
  ThumbsUp,
  BadgeCheck,
} from "lucide-react";

type StatCardProps = {
  label: string;
  end: number;
  suffix?: string;
  duration?: number;
  icon: React.ReactNode;
  startCount: boolean;  
};

const StatCard: React.FC<StatCardProps> = ({
  label,
  end,
  suffix = "+",
  duration = 2.74,
  icon,
  startCount,
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-[#f9fafb] dark:bg-neutral-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-full max-w-[280px] sm:max-w-[300px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="rounded-full p-2 ring-2 ring-indigo-500/20 dark:ring-white/10 mb-3"
      >
        {icon}
      </motion.div>

      <div className="text-4xl sm:text-5xl font-extrabold gradient-text drop-shadow-sm">
        {startCount ? (
          <CountUp
            end={end}
            duration={duration}
            suffix={suffix}
          />
        ) : (
          <>0{suffix}</>
        )}
      </div>

      <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mt-2 text-center font-bold">
        {label}
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      label: "Clienți fericiți",
      end: 1500,
      icon: <Users className="w-8 h-8 text-green-500" />,
    },
    {
      label: "Ani experiență ",
      end: 3,
      icon: <BadgeCheck className="w-8 h-8 text-blue-500" />,
    },
    {
      label: "Tunsori realizate",
      end: 11350,
      icon: <Scissors className="w-8 h-8 text-violet-500" />,
    },
    {
      label: "Recenzii pozitive",
      end: 1388,
      icon: <ThumbsUp className="w-8 h-8 text-yellow-500" />,
    },
  ];

  
  const { ref, inView } = useInView({
    threshold: 0.4,  
    triggerOnce: true, 
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 px-6 sm:px-10 lg:px-24 bg-gray-50 dark:bg-neutral-950"
    >
      {/* Bubble Effect */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[680px] h-[520px] bg-indigo-400 dark:bg-indigo-600 opacity-20 blur-3xl rounded-full animate-pulse-slow z-0" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-amber-400 dark:bg-amber-600 opacity-20 blur-3xl rounded-full animate-pulse-slow z-0" />

      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md2:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        {stats.map((stat, index) => (
          <StatCard key={`${stat.label}-${index}`} {...stat} startCount={inView} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
