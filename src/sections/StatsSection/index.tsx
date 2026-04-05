import { useEffect, useState } from 'react';

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="relative bg-black py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[42px] font-semibold text-white mb-3 tracking-tight">
            Community Insights
          </h2>
          <p className="text-lg text-gray-400">
            Real data from our growing network of B2B marketing executives
          </p>
        </div>

        {/* Simple Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Total Members Card */}
          <StatCard
            value={234}
            label="Active Members"
            iconType="users"
            trend="+12%"
            isVisible={isVisible}
            delay={0}
          />

          {/* CMO Card */}
          <StatCard
            value={33}
            label="CMO"
            suffix="%"
            iconType="target"
            trend="+5%"
            isVisible={isVisible}
            delay={100}
          />

          {/* VP Marketing Card */}
          <StatCard
            value={39}
            label="VP Marketing"
            suffix="%"
            iconType="chart"
            trend="+8%"
            isVisible={isVisible}
            delay={200}
          />

          {/* Directors Card */}
          <StatCard
            value={28}
            label="Directors & Heads"
            suffix="%"
            iconType="trending"
            trend="+3%"
            isVisible={isVisible}
            delay={300}
          />
        </div>

      </div>
    </section>
  );
};

type StatCardProps = {
  value: number;
  label: string;
  suffix?: string;
  iconType: 'users' | 'target' | 'chart' | 'trending';
  trend: string;
  isVisible: boolean;
  delay: number;
};

const StatCard = ({ value, label, suffix, iconType, trend, isVisible, delay }: StatCardProps) => {
  const getIcon = () => {
    switch (iconType) {
      case 'users':
        return (
          <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'target':
        return (
          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'trending':
        return (
          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
    }
  };

  return (
    <div
      className="bg-zinc-900/50 border border-white/10 rounded-card p-5 transition-all duration-700 text-center"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="flex justify-center mb-3">
        {getIcon()}
      </div>
      
      <div className="flex items-baseline justify-center gap-1 mb-1">
        <AnimatedNumber value={value} duration={1500} delay={delay} isVisible={isVisible} />
        {suffix && <span className="text-3xl font-bold text-white">{suffix}</span>}
      </div>
      
      <p className="text-gray-400 text-sm font-medium">{label}</p>
    </div>
  );
};

type PieChartProps = {
  isVisible: boolean;
};

const PieChart = ({ isVisible }: PieChartProps) => {
  const [rotation, setRotation] = useState(0);

  const data = [
    { percentage: 39, color: '#3b82f6', label: 'VP Marketing' },
    { percentage: 33, color: '#a855f7', label: 'CMO' },
    { percentage: 28, color: '#10b981', label: 'Directors & Heads' }
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setRotation(360);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  let cumulativePercentage = 0;

  return (
    <div className="relative w-64 h-64">
      <svg
        viewBox="0 0 100 100"
        className="transform -rotate-90 transition-transform duration-1500 ease-out"
        style={{ transform: `rotate(${rotation - 90}deg)` }}
      >
        {data.map((segment, index) => {
          const startPercentage = cumulativePercentage;
          cumulativePercentage += segment.percentage;
          
          const startAngle = (startPercentage / 100) * 360;
          const endAngle = (cumulativePercentage / 100) * 360;
          
          const x1 = 50 + 50 * Math.cos((startAngle * Math.PI) / 180);
          const y1 = 50 + 50 * Math.sin((startAngle * Math.PI) / 180);
          const x2 = 50 + 50 * Math.cos((endAngle * Math.PI) / 180);
          const y2 = 50 + 50 * Math.sin((endAngle * Math.PI) / 180);
          
          const largeArcFlag = segment.percentage > 50 ? 1 : 0;
          
          const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `Z`
          ].join(' ');

          return (
            <path
              key={index}
              d={pathData}
              fill={segment.color}
              className="transition-all duration-300 hover:opacity-80"
              style={{
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 100}ms`
              }}
            />
          );
        })}
        
        {/* Center circle for donut effect */}
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="#111827"
          className="transition-opacity duration-500"
          style={{ opacity: isVisible ? 1 : 0 }}
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">100%</div>
          <div className="text-xs text-gray-400">Leaders</div>
        </div>
      </div>
    </div>
  );
};

type LegendItemProps = {
  label: string;
  percentage: number;
  color: string;
  isVisible: boolean;
  delay: number;
};

const LegendItem = ({ label, percentage, color, isVisible, delay }: LegendItemProps) => {
  return (
    <div
      className="flex items-center gap-3 transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
      }}
    >
      <div className={`w-4 h-4 rounded-full ${color}`}></div>
      <div className="flex-1">
        <div className="text-white font-medium">{label}</div>
        <div className="text-gray-400 text-sm">{percentage}%</div>
      </div>
    </div>
  );
};

type MetricItemProps = {
  label: string;
  value: string;
  isVisible: boolean;
  delay: number;
};

const MetricItem = ({ label, value, isVisible, delay }: MetricItemProps) => {
  return (
    <div
      className="text-center transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)'
      }}
    >
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  );
};

type AnimatedNumberProps = {
  value: number;
  duration: number;
  delay: number;
  isVisible: boolean;
};

const AnimatedNumber = ({ value, duration, delay, isVisible }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setDisplayValue(value);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(value * easeOutQuad));
      requestAnimationFrame(animate);
    };

    animate();
  }, [value, duration, delay, isVisible]);

  return <span className="text-4xl font-bold text-white">{displayValue}</span>;
};
