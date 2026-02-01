
import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  Heart, 
  Rocket, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  Filter, 
  Orbit, 
  Globe, 
  X
} from 'lucide-react';

interface AppItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  categories: string[];
  features: string[];
  isFavorite?: boolean;
}

const mockApps: AppItem[] = [
  {
    id: 'app1',
    title: '智慧农业监测平台',
    desc: '基于多源遥感数据的农业监测平台，提供作物生长状态评估、产量预测和病虫害预警功能。',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    categories: ['农业农村'],
    features: ['空间分析', '预测预警'],
    isFavorite: false,
  },
  {
    id: 'app2',
    title: '城市绿地规划系统',
    desc: '辅助城市规划决策所在的绿地分析系统，提供绿地空间分布、生态效益评估和规划方案优化功能。',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
    categories: ['城市规划'],
    features: ['空间分析', '可视化'],
    isFavorite: true,
  },
  {
    id: 'app3',
    title: '水环境监测平台',
    desc: '实时监测水质参数和水生态环境的应用平台，支持污染溯源分析和水环境质量评估。',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
    categories: ['水利水务'],
    features: ['实时监测', '环境保护'],
    isFavorite: false,
  },
  {
    id: 'app4',
    title: '地质灾害预警系统',
    desc: '集成多源监测数据的地质灾害预警系统，支持滑坡、泥石流等灾害的早期预警和应急响应。',
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
    categories: ['灾害监测'],
    features: ['预测预警', '实时监测'],
    isFavorite: false,
  },
  {
    id: 'app5',
    title: '森林资源清查平台',
    desc: '实现森林资源全要素监测与管理，支持森林面积、蓄积量、生长量及碳汇能力的自动化识别。',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    categories: ['自然资源'],
    features: ['空间分析', '可视化'],
    isFavorite: false,
  },
  {
    id: 'app6',
    title: '生态红线监管系统',
    desc: '对生态保护红线进行全天候、高频次的遥感动态监控，精准识别人类活动入侵。',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    categories: ['环境保护'],
    features: ['空间分析', '实时监测'],
    isFavorite: false,
  },
  {
    id: 'app7',
    title: '智慧交通一张图',
    desc: '整合路网拓扑、交通流量与基础设施状态，为城市交通疏导与路网优化提供决策支持。',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    categories: ['城市规划'],
    features: ['可视化', '决策支持'],
    isFavorite: false,
  },
  {
    id: 'app8',
    title: '自然灾害综合风险普查',
    desc: '基于历史灾害数据与孕灾环境，评估区域综合灾害风险等级，指导防灾工程选址。',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    categories: ['灾害监测'],
    features: ['预测预警', '决策支持'],
    isFavorite: false,
  }
];

interface AppCenterViewProps {
  onEnterDetail: (appId: string) => void;
}

const AppCenterView: React.FC<AppCenterViewProps> = ({ onEnterDetail }) => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeFeature, setActiveFeature] = useState('全部');
  const [searchFocused, setSearchFocused] = useState(false);
  const [sortOption, setSortOption] = useState('最多点击');
  
  // Sticky header state
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isStickyFilterOpen, setIsStickyFilterOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        // Show sticky header when scrolled past the initial large header (approx 350px)
        const shouldShow = scrollContainerRef.current.scrollTop > 350;
        setShowStickyHeader(shouldShow);
        if (!shouldShow) {
          setIsStickyFilterOpen(false); // Close dropdown when returning to top
        }
      }
    };
    const el = scrollContainerRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['全部', '自然资源', '水利水务', '农业农村', '生态环境', '应急灾害', '城市规划', '住房保障', '交通运输', '智慧养老'];
  const features = ['全部', '空间分析', '可视化', '实时监测', '预测预警', '决策支持'];

  return (
    <div ref={scrollContainerRef} className="flex-1 bg-[#0f172a] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700">
      
      {/* Sticky Header - Compact & Fixed */}
      <div className={`fixed top-16 left-0 right-0 z-40 bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 transform ${showStickyHeader ? 'translate-y-0 opacity-100 shadow-2xl' : '-translate-y-full opacity-0 pointer-events-none'}`}>
         <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-3 flex items-center gap-4">
            {/* Compact Search */}
            <div className={`relative shrink-0 group transition-all duration-500 ${searchFocused ? 'w-80' : 'w-64'}`}>
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={16} />
               <input 
                 type="text" 
                 onFocus={() => setSearchFocused(true)}
                 onBlur={() => setSearchFocused(false)}
                 placeholder="智能检索应用..." 
                 className="w-full bg-[#1e293b] border border-slate-700 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:border-blue-500/50 outline-none transition-all shadow-inner"
               />
            </div>
            
            {/* Compact Filters - Side by Side Scrollable Row - ONLY CATEGORIES */}
            <div className="flex-1 flex items-center overflow-hidden h-10 relative mask-linear-fade">
               <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth pr-12">
                  <div className="flex items-center space-x-1.5 px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 font-bold uppercase tracking-wider border border-white/5 mr-2 shrink-0">
                    <Layers size={10} />
                    <span>分类</span>
                  </div>
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all shrink-0 ${
                        activeCategory === cat 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
               </div>
               
               {/* Fade mask for overflow indication */}
               <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0f172a] to-transparent pointer-events-none" />
            </div>

            {/* Dropdown Toggle for More Filters */}
            <button 
                onClick={() => setIsStickyFilterOpen(!isStickyFilterOpen)}
                className={`p-2.5 rounded-xl border transition-all shrink-0 flex items-center justify-center ${
                    isStickyFilterOpen 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : 'bg-[#1e293b] border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'
                }`}
                title="展开更多筛选"
            >
                {isStickyFilterOpen ? <X size={16} /> : <ChevronDown size={16} />}
            </button>
         </div>

         {/* Expanded Filter Dropdown - Contains BOTH Categories and Features */}
         <div className={`bg-[#0f172a] border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${isStickyFilterOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-6 space-y-6">
                <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <Layers size={14} className="text-indigo-400" />
                        <span>全部分类</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                                    activeCategory === cat 
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/40' 
                                    : 'bg-[#1e293b] text-slate-400 hover:text-white hover:bg-white/10 border border-transparent'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <Filter size={14} className="text-blue-500" />
                        <span>全部特性</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {features.map(feat => (
                            <button 
                                key={feat} 
                                onClick={() => setActiveFeature(feat)}
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                                    activeFeature === feat 
                                    ? 'bg-blue-800 text-white font-bold shadow-lg shadow-blue-900/40' 
                                    : 'bg-[#1e293b]/40 text-slate-400 hover:text-white hover:bg-[#1e293b]/80 border border-transparent hover:border-white/5'
                                }`}
                            >
                                {feat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Background Decor - Deep Indigo Grid matching ServiceCenter */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#312e81 1px, transparent 1px), linear-gradient(90deg, #312e81 1px, transparent 1px)', 
        backgroundSize: '50px 50px' 
      }} />
      
      {/* Dynamic Glows - Indigo/Purple */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full animate-pulse delay-700" />

      {/* Floating Block Animation - Adapted Colors */}
      <div className="absolute top-0 right-[10%] w-32 h-32 pointer-events-none z-0 opacity-40 md:opacity-100 flex items-center justify-center">
        <div className="relative w-20 h-20">
          {/* Stacked Blocks */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-indigo-500/20 border border-indigo-400/40 rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.2)] animate-[blockStack_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-indigo-500/30 border border-indigo-400/50 rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.3)] animate-[blockStack_4s_ease-in-out_infinite_1s]" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 bg-indigo-500/40 border border-indigo-400/60 rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.4)] animate-[blockStack_4s_ease-in-out_infinite_2s]" />
          
          {/* Decor Lines */}
          <div className="absolute -right-4 top-0 w-px h-20 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
          <div className="absolute -left-4 top-0 w-px h-20 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-16 relative z-10 space-y-16">
        
        {/* Entrance Header */}
        <div className="space-y-6 animate-in slide-in-from-left duration-700">
          <div className="relative inline-block group">
            {/* Enhanced Animation Background - Purple/Indigo Tint */}
            <div className="absolute -inset-x-12 -inset-y-8 bg-gradient-to-tr from-indigo-600/20 via-purple-600/5 to-transparent blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-1000 animate-[pulse_6s_ease-in-out_infinite]" />
            
            {/* Dynamic Scan Line Background */}
            <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none opacity-30">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(139,92,246,0.3)_50%,transparent_100%)] h-1/2 w-full animate-[titleScan_4s_linear_infinite]" />
            </div>

            {/* Floating Tech Ornaments */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-indigo-500/20 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '4s' }} />
            <div className="absolute -right-12 bottom-0 w-16 h-16 border border-purple-500/10 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
            
            <h1 className="relative text-4xl md:text-5xl font-black text-white tracking-tighter leading-none z-10">
              场景应用<span className="text-indigo-400 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">中心</span>
              <div className="absolute -right-10 -top-2 opacity-80">
                <Sparkles size={24} className="text-purple-400 animate-pulse" />
              </div>
            </h1>
          </div>
          
          <p className="text-slate-400 font-light max-w-2xl text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-6">
            探索我们丰富的地理信息行业相关场景应用，从智慧农业到城市治理，通过多维时空数据赋能科研、商业和政府应用的各类精准分析需求。
          </p>
        </div>

        {/* Floating Search & Filter Bar */}
        <div className={`bg-[#1e1b4b]/40 border ${searchFocused ? 'border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.15)]' : 'border-indigo-900/50'} rounded-[3rem] p-8 md:p-12 backdrop-blur-2xl transition-all duration-500 space-y-12 shadow-2xl`}>
          {/* Search Box */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 w-full relative group">
              <Search className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${searchFocused ? 'text-purple-400' : 'text-slate-500'}`} size={22} />
              <input 
                type="text" 
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="搜索行业应用、应用场景或业务关键词..." 
                className="w-full bg-[#0f172a]/50 border border-indigo-900/50 rounded-[1.5rem] py-6 pl-16 pr-6 text-white text-lg focus:outline-none focus:border-purple-500/40 transition-all placeholder-slate-500 shadow-inner"
              />
            </div>
            <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-6 rounded-[1.5rem] font-black flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-xl shadow-indigo-900/40 hover:shadow-indigo-500/30">
              <Search size={20} />
              <span>智能搜索</span>
            </button>
          </div>

          {/* Structured Filters */}
          <div className="space-y-8 pt-4">
            <div className="flex items-start">
              <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest pt-2.5 w-32 shrink-0">
                <Layers size={14} className="text-indigo-400" />
                <span>应用分类</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                      activeCategory === cat 
                      ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-900/40' 
                      : 'bg-[#1e293b]/40 text-slate-400 hover:text-white hover:bg-[#1e293b]/80 border border-transparent hover:border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest pt-2.5 w-32 shrink-0">
                <Filter size={14} className="text-blue-500" />
                <span>应用特性</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {features.map(feat => (
                  <button 
                    key={feat}
                    onClick={() => setActiveFeature(feat)}
                    className={`px-5 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                      activeFeature === feat 
                      ? 'bg-blue-800 text-white font-bold shadow-lg shadow-blue-900/40' 
                      : 'bg-[#1e293b]/40 text-slate-400 hover:text-white hover:bg-[#1e293b]/80 border border-transparent hover:border-white/5'
                    }`}
                  >
                    {feat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-sm text-slate-400">
            共找到 <span className="text-indigo-400 font-black px-1 text-base">72</span> 个行业成熟应用
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative group/sort z-20">
                <div className="flex items-center space-x-3 text-white font-bold bg-[#1e293b] border border-slate-700 rounded-xl px-5 py-2.5 cursor-pointer hover:border-indigo-500/50 transition-all hover:bg-[#2e3b52] shadow-lg">
                  <span className="text-sm text-slate-400 font-medium">排序方式:</span>
                  <span className="text-sm">{sortOption}</span>
                  <ChevronDown size={16} className="text-slate-400 group-hover/sort:text-indigo-400 transition-colors" />
                </div>
                <div className="absolute right-0 top-full mt-2 w-40 bg-[#1e293b] border border-slate-700 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover/sort:opacity-100 group-hover/sort:visible transition-all duration-200 transform origin-top">
                    {['最多点击', '最新发布'].map((opt) => (
                      <div 
                        key={opt}
                        onClick={() => setSortOption(opt)}
                        className={`px-4 py-3 text-sm cursor-pointer transition-colors ${sortOption === opt ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                      >
                        {opt}
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Application Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-32">
          {mockApps.map((app, index) => (
            <div 
              key={app.id} 
              style={{ animationDelay: `${index * 50}ms` }}
              className="group flex flex-col bg-[#1e293b]/60 border border-slate-700/50 rounded-[2rem] overflow-hidden hover:border-blue-600/50 transition-all duration-500 shadow-xl h-[440px] animate-in fade-in slide-in-from-bottom-8 hover:shadow-blue-900/20"
            >
              {/* Card Media Section */}
              <div className="h-48 relative overflow-hidden shrink-0 bg-slate-900">
                <img src={app.image} alt={app.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-90" />
                
                {/* Category Badge Overlaid on Image */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                  {app.categories[0]}
                </div>
              </div>

              {/* Card Info Section */}
              <div className="p-6 flex-1 flex flex-col relative overflow-hidden">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors line-clamp-1 tracking-tight">{app.title}</h3>
                    <button className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      app.isFavorite ? 'bg-red-500/20 border-red-500/50 text-red-500' : 'bg-slate-900/40 border-white/10 text-white/40 hover:text-white'
                    }`}>
                      <Heart size={16} fill={app.isFavorite ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  
                  <p className="text-slate-400 text-base leading-relaxed font-light line-clamp-2">
                    {app.desc}
                  </p>
                  
                  <div className="flex flex-nowrap gap-2 pt-1 overflow-hidden mask-linear-fade">
                    {app.features.map(tag => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg border font-bold uppercase tracking-wider transition-all bg-slate-800 border-slate-700 text-slate-400 group-hover:bg-blue-900/40 group-hover:text-blue-400 group-hover:border-blue-500/50 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
                  <button 
                    onClick={() => onEnterDetail(app.id)}
                    className="flex items-center space-x-2 group/btn font-black transition-all text-slate-500 group-hover:text-blue-600"
                  >
                    <span className="text-xs">立即体验</span>
                    <Rocket size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button 
                    onClick={() => onEnterDetail(app.id)}
                    className="flex items-center space-x-1 text-slate-500 hover:text-white transition-colors"
                  >
                    <span className="text-xs font-bold">详情</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes titleScan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes blockStack {
          0%, 100% { transform: translate(-50%, 20px) scale(0.8); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translate(-50%, 0) scale(1); }
          80% { opacity: 1; }
          95% { transform: translate(-50%, -10px) scale(0.9); opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default AppCenterView;
