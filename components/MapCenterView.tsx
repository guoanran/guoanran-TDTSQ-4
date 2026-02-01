
import React, { useState, useEffect, useRef } from 'react';
import { 
  Eye, 
  Star, 
  Map as MapIcon, 
  Filter, 
  ChevronDown, 
  Search,
  ArrowUpDown,
  Grid,
  List,
  Sparkles,
  Layers,
  Rocket,
  ChevronRight,
  Heart,
  X,
  Compass
} from 'lucide-react';

const mockMaps = [
  {
    id: 1,
    title: '潜江市小龙虾全产业链动态分布图',
    views: 2021,
    stars: 4.8,
    image: 'https://images.unsplash.com/photo-1559304822-9eb2813c9844?auto=format&fit=crop&w=600&q=80',
    tag: '产业地图',
    desc: '集成养殖基地、加工企业及物流线路的时空分布数据，实现全产业链可视化监测。'
  },
  {
    id: 2,
    title: '鄂州市湖泊分布图',
    views: 1353,
    stars: 4.5,
    image: 'https://images.unsplash.com/photo-1580212379374-4b4763327c6b?auto=format&fit=crop&w=600&q=80',
    tag: '自然资源',
    desc: '展示全市湖泊水域范围、水质等级及周边生态红线，辅助水环境保护决策。'
  },
  {
    id: 3,
    title: '襄阳三国文化分布图',
    views: 894,
    stars: 4.2,
    image: 'https://images.unsplash.com/photo-1535025639604-9a804c092faa?auto=format&fit=crop&w=600&q=80',
    tag: '文化旅游',
    desc: '标注三国历史遗迹、文化景点及旅游路线，提供沉浸式文化旅游导览服务。'
  },
  {
    id: 4,
    title: '数字中秋·云端团圆',
    views: 1211,
    stars: 4.6,
    image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=600&q=80',
    tag: '节日专题',
    desc: '中秋佳节特别专题，展示各地赏月最佳地点、传统民俗活动分布。'
  },
  {
    id: 5,
    title: '黄石公园分布图',
    views: 459,
    stars: 4.0,
    image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=600&q=80',
    tag: '公园绿地',
    desc: '详细展示城市公园绿地布局、服务设施及绿道网络，服务市民休闲游憩。'
  },
  {
    id: 6,
    title: '荆州市中心城区景点分布图',
    views: 782,
    stars: 4.7,
    image: 'https://images.unsplash.com/photo-1577086664693-894553052526?auto=format&fit=crop&w=600&q=80',
    tag: '旅游景点',
    desc: '覆盖中心城区主要旅游景点、特色街区及交通枢纽，助力智慧旅游建设。'
  },
  {
    id: 7,
    title: '黄冈大别山红色旅游地图',
    views: 1540,
    stars: 4.9,
    image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=600&q=80',
    tag: '红色旅游',
    desc: '串联大别山革命老区红色遗址，打造红色研学与爱国主义教育精品路线。'
  },
  {
    id: 8,
    title: '仙桃市文化场馆分布图',
    views: 620,
    stars: 4.1,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80',
    tag: '公共设施',
    desc: '汇集图书馆、博物馆、文化馆等公共文化设施位置信息，方便市民文化生活。'
  },
  {
    id: 9,
    title: '湖北研学实践基地分布图',
    views: 980,
    stars: 4.4,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    tag: '教育科研',
    desc: '全省研学实践教育基地一张图，包含基地特色、课程内容及接待能力信息。'
  },
  {
    id: 10,
    title: '潜江市历史名人分布图',
    views: 550,
    stars: 4.0,
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=600&q=80',
    tag: '历史人文',
    desc: '以时空为轴，展示潜江历史名人故居、活动轨迹及相关文化遗存。'
  },
  {
    id: 11,
    title: '武汉市城市轨道交通规划图',
    views: 3240,
    stars: 5.0,
    image: 'https://images.unsplash.com/photo-1520645521318-f03a712f467f?auto=format&fit=crop&w=600&q=80',
    tag: '交通规划',
    desc: '展示武汉市轨道交通现状及远期规划线路，辅助城市交通出行与规划研究。'
  },
  {
    id: 12,
    title: '宜昌市三峡库区生态监测图',
    views: 1890,
    stars: 4.8,
    image: 'https://images.unsplash.com/photo-1563816913697-3d92298fb0da?auto=format&fit=crop&w=600&q=80',
    tag: '生态环保',
    desc: '监测三峡库区消落带生态环境变化、植被覆盖及水土流失情况。'
  },
  {
    id: 13,
    title: '十堰市汽车产业布局图',
    views: 2100,
    stars: 4.7,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
    tag: '产业布局',
    desc: '可视化展示十堰市汽车产业集群分布、重点企业位置及产业链配套情况。'
  }
];

const MapCenterView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeRegion, setActiveRegion] = useState('全部');
  const [sortOption, setSortOption] = useState('默认排序');
  const [searchFocused, setSearchFocused] = useState(false);
  const [viewType, setViewType] = useState('grid');

  // Sticky header state
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isStickyFilterOpen, setIsStickyFilterOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const shouldShow = scrollContainerRef.current.scrollTop > 350;
        setShowStickyHeader(shouldShow);
        if (!shouldShow) {
          setIsStickyFilterOpen(false);
        }
      }
    };
    const el = scrollContainerRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['全部', '产业地图', '自然资源', '文化旅游', '节日专题', '公共设施', '交通规划', '生态环保', '历史人文'];
  const regions = ['全部', '武汉市', '宜昌市', '襄阳市', '黄石市', '十堰市', '荆州市', '黄冈市', '潜江市'];

  const filteredMaps = mockMaps.filter(map => activeCategory === '全部' || map.tag === activeCategory);

  return (
    <div ref={scrollContainerRef} className="flex-1 bg-[#0f172a] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700">
      
      {/* Sticky Header */}
      <div className={`fixed top-16 left-0 right-0 z-40 bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 transform ${showStickyHeader ? 'translate-y-0 opacity-100 shadow-2xl' : '-translate-y-full opacity-0 pointer-events-none'}`}>
         <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-3 flex items-center gap-4">
            <div className={`relative shrink-0 group transition-all duration-500 ${searchFocused ? 'w-80' : 'w-64'}`}>
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={16} />
               <input 
                 type="text" 
                 onFocus={() => setSearchFocused(true)}
                 onBlur={() => setSearchFocused(false)}
                 placeholder="智能检索地图..." 
                 className="w-full bg-[#1e293b] border border-slate-700 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:border-blue-500/50 outline-none transition-all shadow-inner"
               />
            </div>
            
            <div className="flex-1 flex items-center overflow-hidden h-10 relative mask-linear-fade">
               <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth pr-12">
                  <div className="flex items-center space-x-1.5 px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 font-bold uppercase tracking-wider border border-white/5 mr-2 shrink-0">
                    <Filter size={10} />
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
               <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0f172a] to-transparent pointer-events-none" />
            </div>

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
                        <MapIcon size={14} className="text-indigo-400" />
                        <span>地图分类</span>
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
                        <Compass size={14} className="text-blue-500" />
                        <span>行政区域</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {regions.map(region => (
                            <button 
                                key={region} 
                                onClick={() => setActiveRegion(region)}
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                                    activeRegion === region 
                                    ? 'bg-blue-800 text-white font-bold shadow-lg shadow-blue-900/40' 
                                    : 'bg-[#1e293b]/40 text-slate-400 hover:text-white hover:bg-[#1e293b]/80 border border-transparent hover:border-white/5'
                                }`}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#312e81 1px, transparent 1px), linear-gradient(90deg, #312e81 1px, transparent 1px)', 
        backgroundSize: '50px 50px' 
      }} />
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full animate-pulse delay-700" />

      <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-16 relative z-10 space-y-16">
        
        {/* Entrance Header */}
        <div className="space-y-6 animate-in slide-in-from-left duration-700">
          <div className="relative inline-block group">
            <div className="absolute -inset-x-12 -inset-y-8 bg-gradient-to-tr from-indigo-600/20 via-blue-600/5 to-transparent blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-1000 animate-[pulse_6s_ease-in-out_infinite]" />
            <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none opacity-30">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(139,92,246,0.3)_50%,transparent_100%)] h-1/2 w-full animate-[titleScan_4s_linear_infinite]" />
            </div>
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-blue-500/20 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '4s' }} />
            
            <h1 className="relative text-4xl md:text-5xl font-black text-white tracking-tighter leading-none z-10">
              地图<span className="text-blue-400 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">中心</span>
              <div className="absolute -right-10 -top-2 opacity-80">
                <MapIcon size={28} className="text-blue-400 animate-pulse" />
              </div>
            </h1>
          </div>
          
          <p className="text-slate-400 font-light max-w-2xl text-lg leading-relaxed border-l-2 border-blue-500/30 pl-6">
            汇聚全省多维专题地图资源，赋能行业空间可视化决策。提供丰富多样的地图产品，支持多终端、多场景的应用需求。
          </p>
        </div>

        {/* Floating Search & Filter Bar */}
        <div className={`bg-[#1e1b4b]/40 border ${searchFocused ? 'border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.15)]' : 'border-indigo-900/50'} rounded-[3rem] p-8 md:p-12 backdrop-blur-2xl transition-all duration-500 space-y-12 shadow-2xl`}>
          {/* Search Box */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 w-full relative group">
              <Search className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${searchFocused ? 'text-blue-400' : 'text-slate-500'}`} size={22} />
              <input 
                type="text" 
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="搜索地图名称、专题或行政区划..." 
                className="w-full bg-[#0f172a]/50 border border-indigo-900/50 rounded-[1.5rem] py-6 pl-16 pr-6 text-white text-lg focus:outline-none focus:border-blue-500/40 transition-all placeholder-slate-500 shadow-inner"
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
                <span>地图类型</span>
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
                <Compass size={14} className="text-blue-500" />
                <span>行政区域</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {regions.map(region => (
                  <button 
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`px-5 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                      activeRegion === region 
                      ? 'bg-blue-800 text-white font-bold shadow-lg shadow-blue-900/40' 
                      : 'bg-[#1e293b]/40 text-slate-400 hover:text-white hover:bg-[#1e293b]/80 border border-transparent hover:border-white/5'
                    }`}
                  >
                    {region}
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
              为您找到 <span className="text-indigo-400 font-black ml-1 text-lg">{filteredMaps.length}</span> 个地图数据
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
                {['默认排序', '更新时间', '浏览量'].map((opt) => (
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
            
            <div className="flex bg-[#1e293b] p-1 rounded-2xl border border-slate-700">
              <button 
                onClick={() => setViewType('grid')}
                className={`p-2 rounded-xl transition-all ${viewType === 'grid' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid size={18} />
              </button>
              <button 
                onClick={() => setViewType('list')}
                className={`p-2 rounded-xl transition-all ${viewType === 'list' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Map Grid - Updated Dimensions to match ServiceCenterView (h-440px, xl:grid-cols-4) */}
        <div className={`grid gap-8 pb-32 ${viewType === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {filteredMaps.map((map, index) => (
            <div 
              key={map.id} 
              style={{ animationDelay: `${index * 50}ms` }}
              className={`group flex ${viewType === 'list' ? 'flex-row h-48 rounded-2xl' : 'flex-col h-[440px] rounded-[2rem]'} bg-[#1e293b]/60 border border-slate-700/50 overflow-hidden hover:border-blue-600/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500 shadow-xl animate-in fade-in slide-in-from-bottom-8 hover:shadow-blue-900/20 cursor-pointer`}
            >
              {/* Card Media Section */}
              <div className={`relative overflow-hidden shrink-0 bg-slate-900 ${viewType === 'list' ? 'w-64 h-full' : 'h-[90%] w-full'}`}>
                <img 
                  src={map.image} 
                  alt={map.title} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-90" />
                
                {/* Tag Badge */}
                {viewType === 'grid' && (
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-slate-900/60 backdrop-blur-xl border border-white/10 px-3 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">{map.tag}</span>
                  </div>
                )}
              </div>

              {/* Card Info Section */}
              <div className={`${viewType === 'list' ? 'p-6 flex-1 flex flex-col justify-between' : 'h-[10%] flex items-center relative overflow-hidden bg-[#1e293b]/80 backdrop-blur-sm'}`}>
                {viewType === 'grid' ? (
                    <div className="w-full px-5 flex items-center justify-between">
                        <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 tracking-tight text-left flex-1 mr-4" title={map.title}>{map.title}</h3>
                        <div className="flex items-center space-x-3 shrink-0">
                            <div className="flex items-center space-x-1 text-slate-500" title="浏览量">
                                <Eye size={14} />
                                <span className="text-[10px] font-medium">{map.views}</span>
                            </div>
                            <button className="text-slate-500 hover:text-red-500 transition-colors" title="收藏">
                                <Heart size={14} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="space-y-4 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors line-clamp-1 tracking-tight" title={map.title}>{map.title}</h3>
                            <div className="flex items-center space-x-1 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-md">
                                <Star size={12} className="text-yellow-500" fill="currentColor" />
                                <span className="text-[10px] font-bold text-yellow-500">{map.stars}</span>
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-2">
                            {map.desc}
                          </p>
                          
                          {/* Additional Stats */}
                          <div className="flex items-center space-x-4 text-xs text-slate-500 mt-auto pt-1">
                             <div className="flex items-center space-x-1">
                                <Eye size={14} />
                                <span>{map.views}</span>
                             </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50 w-full">
                          <button className="flex items-center space-x-2 group/btn font-black transition-all text-slate-500 group-hover:text-blue-600">
                            <span className="text-xs">立即查看</span>
                            <Rocket size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                          <button className="flex items-center space-x-1 text-slate-500 hover:text-white transition-colors">
                            <span className="text-xs font-bold">详情</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                    </>
                )}
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

export default MapCenterView;
