
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  ChevronDown, 
  Heart, 
  ArrowRight, 
  Filter,
  BrainCircuit,
  Eye,
  Star,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Rocket,
  ChevronRight,
  Layers,
  X
} from 'lucide-react';

interface AlgorithmCard {
  id: string;
  title: string;
  desc: string;
  image: string;
  tags: string[];
  isFavorite?: boolean;
  accuracy?: string;
  useCount?: string;
}

const mockAlgorithms: AlgorithmCard[] = [
  {
    id: 'a1',
    title: '多光谱遥感语义分割',
    desc: '基于深度学习的多光谱遥感图像语义分割算法，支持土地利用/覆盖分类，适用于大尺度国土普查。',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    tags: ['图像分割', '深度学习', '多光谱'],
    isFavorite: false,
    accuracy: '92.5%',
    useCount: '1.2k'
  },
  {
    id: 'a2',
    title: '多时相SAR变化检测',
    desc: '基于双时相SAR影像的变化检测算法，能有效检测地表微小变化，无惧云雾遮挡。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    tags: ['变化检测', 'SAR数据', '灾害监测'],
    isFavorite: false,
    accuracy: '88.9%',
    useCount: '850'
  },
  {
    id: 'a3',
    title: '建筑物目标检测',
    desc: '高精度建筑物目标检测算法，支持从高分辨率光学影像中自动提取建筑物轮廓。',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    tags: ['目标检测', '深度学习', '城市规划'],
    isFavorite: true,
    accuracy: '95.2%',
    useCount: '2.4k'
  },
  {
    id: 'a4',
    title: '植被参数反演',
    desc: '基于物理模型的植被参数反演算法，支持LAI、叶绿素含量等关键农业参数估算。',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    tags: ['参数反演', '精准农业', '多光谱'],
    isFavorite: false,
    accuracy: '86.4%',
    useCount: '540'
  },
  {
    id: 'a5',
    title: '水体智能提取算法',
    desc: '针对复杂环境下的水体自动识别，支持河流、湖库及城市黑臭水体的精准边界提取。',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
    tags: ['水利应用', '全自动', '环境监测'],
    isFavorite: false,
    accuracy: '91.0%',
    useCount: '1.1k'
  },
  {
    id: 'a6',
    title: '道路提取与拓扑构建',
    desc: '自动化道路中心线提取及路网拓扑关系生成，支持大尺度城市路网的快速更新。',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['路网提取', '拓扑分析', '智能交通'],
    isFavorite: false,
    accuracy: '89.5%',
    useCount: '920'
  },
  {
    id: 'a7',
    title: '云量自动掩膜算法',
    desc: '高可靠的光学影像云雪检测与掩膜提取，为下游定量遥感分析提供纯净数据基础。',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80',
    tags: ['预处理', '云检测', '数据清洗'],
    isFavorite: false,
    accuracy: '94.1%',
    useCount: '3.1k'
  },
  {
    id: 'a8',
    title: '超分辨率重建引擎',
    desc: '利用生成对抗网络对低分辨率卫星影像进行细节增强，提升视觉识别度与分析精度。',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80',
    tags: ['影像增强', 'GAN', '超分重建'],
    isFavorite: false,
    accuracy: '提升2-4倍',
    useCount: '1.5k'
  }
];

interface ServiceCenterViewProps {
  onEnterDetail?: () => void;
}

const ServiceCenterView: React.FC<ServiceCenterViewProps> = ({ onEnterDetail }) => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeField, setActiveField] = useState('全部');
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

  const categories = ['全部', '语义分割', '目标检测', '变化检测', '定量遥感', '知识图谱'];
  const fields = ['全部', '自然资源', '水利水务', '农业农村', '生态环境', '应急灾害', '城市规划', '住房保障', '交通运输', '智慧养老'];

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
                 placeholder="智能检索算法..." 
                 className="w-full bg-[#1e293b] border border-slate-700 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:border-blue-500/50 outline-none transition-all shadow-inner"
               />
            </div>
            
            {/* Compact Filters - Side by Side Scrollable Row - ONLY CATEGORIES */}
            <div className="flex-1 flex items-center overflow-hidden h-10 relative mask-linear-fade">
               <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth pr-12">
                  <div className="flex items-center space-x-1.5 px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 font-bold uppercase tracking-wider border border-white/5 mr-2 shrink-0">
                    <Filter size={10} />
                    <span>类别</span>
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

         {/* Expanded Filter Dropdown - Contains BOTH Categories and Fields */}
         <div className={`bg-[#0f172a] border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${isStickyFilterOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-6 space-y-6">
                <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <Filter size={14} className="text-indigo-400" />
                        <span>算法类别</span>
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
                        <Sparkles size={14} className="text-blue-500" />
                        <span>应用领域</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {fields.map(field => (
                            <button 
                                key={field} 
                                onClick={() => setActiveField(field)}
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                                    activeField === field 
                                    ? 'bg-blue-800 text-white font-bold shadow-lg shadow-blue-900/40' 
                                    : 'bg-[#1e293b]/40 text-slate-400 hover:text-white hover:bg-[#1e293b]/80 border border-transparent hover:border-white/5'
                                }`}
                            >
                                {field}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Background Decor - Deep Indigo Grid */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#312e81 1px, transparent 1px), linear-gradient(90deg, #312e81 1px, transparent 1px)', 
        backgroundSize: '50px 50px' 
      }} />
      
      {/* Dynamic Glows - Indigo/Purple */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full animate-pulse delay-700" />

      <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-16 relative z-10 space-y-16">
        
        {/* Entrance Header with Enhanced Title Animation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <div className="relative inline-block group">
              {/* Enhanced Animation Background - Purple/Indigo Tint */}
              <div className="absolute -inset-x-12 -inset-y-8 bg-gradient-to-tr from-indigo-600/20 via-purple-600/5 to-transparent blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-1000 animate-[pulse_6s_ease-in-out_infinite]" />
              
              {/* Dynamic Scan Line Background - Violet tint */}
              <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(139,92,246,0.3)_50%,transparent_100%)] h-1/2 w-full animate-[titleScan_4s_linear_infinite]" />
              </div>

              {/* Floating Tech Ornaments */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-indigo-500/20 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '4s' }} />
              <div className="absolute -right-12 bottom-0 w-14 h-14 border border-purple-500/10 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />

              <h1 className="relative text-4xl md:text-5xl font-black text-white tracking-tighter leading-none z-10">
                算法工具<span className="text-indigo-400 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">中心</span>
                {/* Decorative Element */}
                <div className="absolute -right-10 -top-2 opacity-80">
                  <Sparkles size={24} className="text-purple-400 animate-pulse" />
                </div>
              </h1>
            </div>
            
            <p className="text-slate-400 font-light max-w-2xl text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-6">
              汇聚前沿遥感 AI 核心算法，依托先进的深度学习与地理信息分析能力，打通从基础数据解译到行业专题应用的链路，提供一体化闭环智能服务。
            </p>
          </div>
          <div className="flex items-center space-x-4 animate-in slide-in-from-right duration-700 pb-2">
             <div className="bg-[#1e293b]/60 backdrop-blur-md border border-indigo-500/20 px-8 py-4 rounded-2xl flex items-center shadow-2xl">
                <div className="text-center">
                   <div className="text-2xl font-black text-white">86+</div>
                   <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">可用算法总数</div>
                </div>
             </div>
          </div>
        </div>

        {/* Floating Search & Filter Bar - Dark Blue/Purple Theme */}
        <div className={`bg-[#1e1b4b]/40 border ${searchFocused ? 'border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.15)]' : 'border-indigo-900/50'} rounded-[3rem] p-8 md:p-12 backdrop-blur-2xl transition-all duration-500 space-y-12 shadow-2xl`}>
          {/* Search Box */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 w-full relative group">
              <Search className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${searchFocused ? 'text-purple-400' : 'text-slate-500'}`} size={22} />
              <input 
                type="text" 
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="搜索高精度算法、解译功能或行业关键词..." 
                className="w-full bg-[#0f172a]/50 border border-indigo-900/50 rounded-[1.5rem] py-6 pl-16 pr-6 text-white text-lg focus:outline-none focus:border-purple-500/40 transition-all placeholder-slate-500 shadow-inner"
              />
            </div>
            <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-6 rounded-[1.5rem] font-black flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-xl shadow-indigo-900/40 hover:shadow-indigo-500/30">
              <Search size={22} />
              <span>智能检索</span>
            </button>
          </div>

          {/* Filters */}
          <div className="space-y-8 pt-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest px-2 min-w-[140px] shrink-0">
                <Filter size={14} className="text-indigo-400" />
                <span>算法类别筛选</span>
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

            <div className="flex items-center">
              <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest px-2 min-w-[140px] shrink-0">
                <Sparkles size={14} className="text-blue-500" />
                <span>应用领域对齐</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {fields.map(field => (
                  <button 
                    key={field}
                    onClick={() => setActiveField(field)}
                    className={`px-5 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                      activeField === field 
                      ? 'bg-blue-800 text-white font-bold shadow-lg shadow-blue-900/40' 
                      : 'bg-[#1e293b]/40 text-slate-400 hover:text-white hover:bg-[#1e293b]/80 border border-transparent hover:border-white/5'
                    }`}
                  >
                    {field}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center space-x-8">
            <div className="text-sm text-slate-400">
              命中结果: <span className="text-indigo-400 font-black ml-1">86</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative group/sort z-20">
              <div className="flex items-center space-x-3 text-white font-bold bg-[#1e293b] border border-slate-700 rounded-2xl px-6 py-3 cursor-pointer hover:border-indigo-500/50 transition-all hover:bg-[#2e3b52] shadow-lg">
                <span className="text-sm text-slate-400 font-medium">排序:</span>
                <span className="text-sm">{sortOption}</span>
                <ChevronDown size={18} className="text-slate-400 group-hover/sort:text-indigo-400 transition-colors" />
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

        {/* Algorithm Grid - Consistent with App Center Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-32">
          {mockAlgorithms.map((algo, index) => (
            <div 
              key={algo.id} 
              style={{ animationDelay: `${index * 50}ms` }}
              className="group flex flex-col bg-[#1e293b]/60 border border-slate-700/50 rounded-[2rem] overflow-hidden hover:border-blue-600/50 transition-all duration-500 shadow-xl h-[440px] animate-in fade-in slide-in-from-bottom-8 hover:shadow-blue-900/20"
            >
              {/* Card Media Section */}
              <div className="h-48 relative overflow-hidden shrink-0 bg-slate-900">
                <img src={algo.image} alt={algo.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-90" />
              </div>

              {/* Card Info Section */}
              <div className="p-6 flex-1 flex flex-col relative overflow-hidden">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors line-clamp-1 tracking-tight">{algo.title}</h3>
                    <button className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      algo.isFavorite ? 'bg-red-500/20 border-red-500/50 text-red-500' : 'bg-slate-900/40 border-white/10 text-white/40 hover:text-white'
                    }`}>
                      <Heart size={16} fill={algo.isFavorite ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed font-light line-clamp-2">
                    {algo.desc}
                  </p>
                  <div className="flex flex-nowrap gap-2 pt-1 overflow-hidden mask-linear-fade">
                    {algo.tags.map(tag => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg border font-bold uppercase tracking-wider transition-all bg-slate-800 border-slate-700 text-slate-400 group-hover:bg-blue-900/40 group-hover:text-blue-400 group-hover:border-blue-500/50 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
                  <button 
                    onClick={onEnterDetail}
                    className="flex items-center space-x-2 group/btn font-black transition-all text-slate-500 group-hover:text-blue-600"
                  >
                    <span className="text-xs">立即体验</span>
                    <Rocket size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button 
                    onClick={onEnterDetail}
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes titleScan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}} />
    </div>
  );
};

export default ServiceCenterView;
