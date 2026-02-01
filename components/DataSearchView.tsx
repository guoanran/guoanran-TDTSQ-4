
import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  ChevronDown, 
  Heart, 
  ChevronRight, 
  Filter,
  ArrowLeft,
  ArrowRight,
  Eye,
  Calendar,
  Sparkles,
  Database,
  Layers,
  X
} from 'lucide-react';
import DataDetailView from './DataDetailView';

interface DataSearchViewProps {
  onBack: () => void;
  onOrder?: () => void;
}

const filterCategories = [
  '热门数据', '卫星数据', '无人机数据', '样本数据', '自然资源', 
  '农业农村', '环境保护', '资产管理', '植被数据', '水资源数据',
  '土壤数据', '灾害监测'
];

const mockDatasets = [
  // Satellite Data
  {
    id: 'd1',
    title: 'Landsat-9 C2 L2',
    desc: 'Landsat-9卫星提供的高质量地球表面成像数据，空间分辨率30米，包含8个多光谱波段和1个热红外波段。',
    tags: ['Landsat', '光学', '30m', '2021-至今', '开放数据'],
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80',
    authorized: false,
    views: '12,543',
    date: '2023-11-15',
    type: 'satellite',
    isFavorite: false
  },
  {
    id: 'd2',
    title: 'Sentinel-2 L2A',
    desc: '欧空局Sentinel-2卫星提供的高分辨率多光谱数据，包含13个波段，空间分辨率10-60米，适用于土地覆盖。',
    tags: ['Sentinel', '光学', '10-60m', '2015-至今', '开放数据'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
    authorized: false,
    views: '18,762',
    date: '2023-11-10',
    type: 'satellite',
    isFavorite: true
  },
  {
    id: 'd3',
    title: '高分六号(GF-6)数据',
    desc: '中国高分六号卫星提供的高分辨率遥感数据，具有16米多光谱和2米全色波段，适用于农业资源监测。',
    tags: ['高分系列', '光学', '2-16m', '2018-至今', '授权数据'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
    authorized: true,
    views: '9,841',
    date: '2023-12-01',
    type: 'satellite',
    isFavorite: false
  },
  {
    id: 'd4',
    title: 'TerraSAR-X 高分辨率SAR',
    desc: '德国TerraSAR-X卫星提供的合成孔径雷达数据，具有极高的几何精度，支持多种极化模式。',
    tags: ['SAR', '雷达', '0.25-1m', '2007-至今'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80',
    authorized: false,
    views: '6,215',
    date: '2023-10-25',
    type: 'satellite',
    isFavorite: false
  },
  // Thematic Data
  {
    id: 't1',
    title: '耕地变化监测数据',
    desc: '基于多源高分辨率遥感影像，利用深度学习提取耕地边界与变化图斑，支持非农化、非粮化监测，提供季度更新服务。',
    tags: ['耕地保护', '变化检测', '季度更新', '自然资源'],
    image: 'https://images.unsplash.com/photo-1625246333195-58197bd47d72?auto=format&fit=crop&w=400&q=80',
    authorized: true,
    views: '5,432',
    date: '2023-Q4',
    type: 'thematic',
    isFavorite: false
  },
  {
    id: 't2',
    title: '水稻种植面积数据',
    desc: '提取水稻种植区域空间分布，结合物候特征分析，提供高精度的水稻种植面积统计与空间落图，服务于精准农业。',
    tags: ['农业普查', '作物分类', '精准农业', '农业农村'],
    image: 'https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0?auto=format&fit=crop&w=400&q=80',
    authorized: true,
    views: '4,120',
    date: '2023-10-20',
    type: 'thematic',
    isFavorite: false
  },
  {
    id: 't3',
    title: '小麦种植面积专题数据',
    desc: '针对冬小麦主产区，监测冬小麦种植面积与空间分布，辅助农业部门进行产量预估与政策制定，支持长势监测分析。',
    tags: ['粮食安全', '长势监测', '面积核算', '农业农村'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
    authorized: true,
    views: '3,890',
    date: '2023-06-15',
    type: 'thematic',
    isFavorite: false
  },
  {
    id: 't4',
    title: '城市不透水面数据',
    desc: '利用高分辨率影像提取城市不透水面信息，反映城市扩张强度与地表覆盖变化，适用于海绵城市规划与生态评估。',
    tags: ['城市规划', '生态环境', '地表覆盖'],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&q=80',
    authorized: true,
    views: '2,560',
    date: '2023-12-01',
    type: 'thematic',
    isFavorite: false
  }
];

const DataSearchView: React.FC<DataSearchViewProps> = ({ onBack, onOrder }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['卫星数据']);
  const [selectedDatasetId, setSelectedDatasetId] = useState<string | null>(null);
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

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const selectedDataset = mockDatasets.find(d => d.id === selectedDatasetId);

  if (selectedDatasetId && selectedDataset) {
    return (
      <DataDetailView 
        dataset={selectedDataset} 
        onBack={() => setSelectedDatasetId(null)} 
        onBackToMap={onBack}
        onOrder={onOrder}
      />
    );
  }

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
                 placeholder="智能检索数据..." 
                 className="w-full bg-[#1e293b] border border-slate-700 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:border-blue-500/50 outline-none transition-all shadow-inner"
               />
            </div>
            
            {/* Compact Filters - Side by Side Scrollable Row */}
            <div className="flex-1 flex items-center overflow-hidden h-10 relative mask-linear-fade">
               <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth pr-12">
                  <div className="flex items-center space-x-1.5 px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 font-bold uppercase tracking-wider border border-white/5 mr-2 shrink-0">
                    <Filter size={10} />
                    <span>类别</span>
                  </div>
                  {filterCategories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => toggleFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all shrink-0 ${
                        selectedFilters.includes(cat) 
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

         {/* Expanded Filter Dropdown */}
         <div className={`bg-[#0f172a] border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${isStickyFilterOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-6 space-y-6">
                <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <Filter size={14} className="text-indigo-400" />
                        <span>数据类别</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {filterCategories.map(cat => (
                            <button 
                                key={cat} 
                                onClick={() => toggleFilter(cat)}
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                                    selectedFilters.includes(cat) 
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
                        <Layers size={14} className="text-blue-500" />
                        <span>波段/分辨率</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['全部', '0.5m', '1m', '2m', '10m', '30m', '100m+'].map(field => (
                            <button 
                                key={field} 
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all bg-[#1e293b] text-slate-400 hover:text-white hover:bg-white/10 border border-transparent`}
                            >
                                {field}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Background Decor - Matched ServiceCenter */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#312e81 1px, transparent 1px), linear-gradient(90deg, #312e81 1px, transparent 1px)', 
        backgroundSize: '50px 50px' 
      }} />
      
      {/* Dynamic Glows - Matched ServiceCenter */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full animate-pulse delay-700" />

      <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-16 relative z-10 space-y-16">
        
        {/* Entrance Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <div className="relative inline-block group">
              {/* Animated Background Layer - Matched ServiceCenter */}
              <div className="absolute -inset-x-12 -inset-y-8 bg-gradient-to-tr from-indigo-600/20 via-purple-600/5 to-transparent blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-1000 animate-[pulse_6s_ease-in-out_infinite]" />
              
              {/* Dynamic Scan Line Background */}
              <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(139,92,246,0.3)_50%,transparent_100%)] h-1/2 w-full animate-[titleScan_4s_linear_infinite]" />
              </div>

              {/* Floating Tech Ornaments */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-indigo-500/20 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '4s' }} />
              <div className="absolute -right-12 bottom-0 w-14 h-14 border border-purple-500/10 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />

              <h1 className="relative text-4xl md:text-5xl font-black text-white tracking-tighter leading-none z-10">
                数据<span className="text-indigo-400 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">检索中心</span>
                <div className="absolute -right-10 -top-2 opacity-80">
                  <Sparkles size={24} className="text-purple-400 animate-pulse" />
                </div>
              </h1>
            </div>
            
            <p className="text-slate-400 font-light max-w-2xl text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-6">
              探索我们丰富的卫星遥感、地理空间和环境数据集，依托先进的云端检索与多维分析技术，支持科研、商业和政府应用的各类精准数据需求。
            </p>
          </div>

          <div className="animate-in slide-in-from-right duration-700 pb-2">
            <button 
              onClick={onBack}
              className="flex items-center space-x-3 text-sm text-slate-400 hover:text-white bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md transition-all hover:border-indigo-500/50 hover:bg-indigo-600/10"
            >
              <ArrowLeft size={18} />
              <span className="font-bold">返回地图模式</span>
            </button>
          </div>
        </div>

        {/* Floating Search & Filter Bar - Matched ServiceCenter style */}
        <div className={`bg-[#1e1b4b]/40 border ${searchFocused ? 'border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.15)]' : 'border-indigo-900/50'} rounded-[3rem] p-8 md:p-12 backdrop-blur-2xl transition-all duration-500 space-y-12 shadow-2xl`}>
          {/* Search Box */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 w-full relative group">
              <Search className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${searchFocused ? 'text-purple-400' : 'text-slate-500'}`} size={22} />
              <input 
                type="text" 
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="搜索数据集、传感器或影像关键词..." 
                className="w-full bg-[#0f172a]/50 border border-indigo-900/50 rounded-[1.5rem] py-6 pl-16 pr-6 text-white text-lg focus:outline-none focus:border-purple-500/40 transition-all placeholder-slate-500 shadow-inner"
              />
            </div>
            <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-6 rounded-[1.5rem] font-black flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-xl shadow-indigo-900/40 hover:shadow-indigo-500/30">
              <Search size={22} />
              <span>智能检索</span>
            </button>
          </div>

          {/* Structured Filters */}
          <div className="space-y-8 pt-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest px-2 min-w-[140px] shrink-0">
                <Filter size={14} className="text-indigo-400" />
                <span>数据类别筛选</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {filterCategories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => toggleFilter(cat)}
                    className={`px-5 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                      selectedFilters.includes(cat) 
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
                <Layers size={14} className="text-blue-500" />
                <span>波段/分辨率</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['全部', '0.5m', '1m', '2m', '10m', '30m', '100m+'].map(field => (
                  <button 
                    key={field}
                    className={`px-5 py-2.5 rounded-xl text-sm transition-all duration-300 bg-[#1e293b]/40 text-slate-400 hover:text-white hover:bg-[#1e293b]/80 border border-transparent hover:border-white/5`}
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
              共找到: <span className="text-indigo-400 font-black ml-1 text-lg">1,284</span> 个数据集
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

        {/* Dataset Grid - Matched Service Center Card Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-32">
          {mockDatasets.map((ds, index) => (
            <div 
              key={ds.id} 
              style={{ animationDelay: `${index * 50}ms` }}
              className="group flex flex-col bg-[#1e293b]/60 border border-slate-700/50 rounded-[2rem] overflow-hidden hover:border-blue-600/50 transition-all duration-500 shadow-xl h-[440px] animate-in fade-in slide-in-from-bottom-8 hover:shadow-blue-900/20"
            >
              {/* Card Media Section */}
              <div className="h-48 relative overflow-hidden shrink-0 bg-slate-900">
                <img src={ds.image} alt={ds.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-90" />
                
                {/* Meta Badge Removed Here */}
              </div>

              {/* Card Info Section */}
              <div className="p-6 flex-1 flex flex-col relative overflow-hidden">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors line-clamp-1 tracking-tight">{ds.title}</h3>
                    <button className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      ds.isFavorite ? 'bg-red-500/20 border-red-500/50 text-red-500' : 'bg-slate-900/40 border-white/10 text-white/40 hover:text-white'
                    }`}>
                      <Heart size={16} fill={ds.isFavorite ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed font-light line-clamp-2">
                    {ds.desc}
                  </p>
                  <div className="flex flex-nowrap gap-2 pt-1 overflow-hidden mask-linear-fade">
                    {ds.tags.slice(1).map(tag => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg border font-bold uppercase tracking-wider transition-all bg-slate-800 border-slate-700 text-slate-400 group-hover:bg-blue-900/40 group-hover:text-blue-400 group-hover:border-blue-500/50 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end mt-4 pt-4 border-t border-slate-700/50">
                  <button 
                    onClick={() => setSelectedDatasetId(ds.id)}
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
        @keyframes titleScan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}} />
    </div>
  );
};

export default DataSearchView;
