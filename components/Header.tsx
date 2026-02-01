
import React, { useState, useRef, useEffect } from 'react';
import { 
  Home, 
  Database, 
  Settings, 
  Layers, 
  UserCircle, 
  LayoutDashboard,
  Map as MapIcon,
  Zap,
  Users,
  ChevronDown,
  BrainCircuit,
  Bot,
  Network,
  Sparkles,
  ArrowRight,
  ScanEye,
  HelpCircle,
  BookOpen,
  Newspaper,
  LifeBuoy,
  Building2,
  Image as ImageIcon,
  LayoutGrid,
  Trophy
} from 'lucide-react';
import { ActivePage } from '../App';

interface HeaderProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onPageChange, cartCount, onOpenCart }) => {
  const [showCoCreationDropdown, setShowCoCreationDropdown] = useState(false);
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);
  const [showDataCenterDropdown, setShowDataCenterDropdown] = useState(false);
  const [showEcoCenterDropdown, setShowEcoCenterDropdown] = useState(false);
  
  const coCreationRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);
  const dataCenterRef = useRef<HTMLDivElement>(null);
  const ecoCenterRef = useRef<HTMLDivElement>(null);
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const helpTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dataCenterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ecoCenterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Split navigation items to insert Data Center manually
  const navItemsBefore = [
    { name: '首页', icon: <Home size={18} />, id: 'home' },
    { name: '地图中心', icon: <MapIcon size={18} />, id: 'map-center' },
    // Resource (Data Center) is inserted manually as dropdown
  ];

  const navItemsMiddle = [
    { name: '工具中心', icon: <Settings size={18} />, id: 'service' },
    { name: '应用中心', icon: <Layers size={18} />, id: 'app' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (coCreationRef.current && !coCreationRef.current.contains(event.target as Node)) {
        setShowCoCreationDropdown(false);
      }
      if (helpRef.current && !helpRef.current.contains(event.target as Node)) {
        setShowHelpDropdown(false);
      }
      if (dataCenterRef.current && !dataCenterRef.current.contains(event.target as Node)) {
        setShowDataCenterDropdown(false);
      }
      if (ecoCenterRef.current && !ecoCenterRef.current.contains(event.target as Node)) {
        setShowEcoCenterDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (helpTimeoutRef.current) clearTimeout(helpTimeoutRef.current);
      if (dataCenterTimeoutRef.current) clearTimeout(dataCenterTimeoutRef.current);
      if (ecoCenterTimeoutRef.current) clearTimeout(ecoCenterTimeoutRef.current);
    };
  }, []);

  // Dropdown Handlers
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowCoCreationDropdown(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCoCreationDropdown(false);
    }, 200);
  };

  const handleHelpMouseEnter = () => {
    if (helpTimeoutRef.current) clearTimeout(helpTimeoutRef.current);
    setShowHelpDropdown(true);
  };
  const handleHelpMouseLeave = () => {
    helpTimeoutRef.current = setTimeout(() => {
      setShowHelpDropdown(false);
    }, 200);
  };

  const handleDataCenterMouseEnter = () => {
    if (dataCenterTimeoutRef.current) clearTimeout(dataCenterTimeoutRef.current);
    setShowDataCenterDropdown(true);
  };
  const handleDataCenterMouseLeave = () => {
    dataCenterTimeoutRef.current = setTimeout(() => {
      setShowDataCenterDropdown(false);
    }, 200);
  };

  const handleEcoCenterMouseEnter = () => {
    if (ecoCenterTimeoutRef.current) clearTimeout(ecoCenterTimeoutRef.current);
    setShowEcoCenterDropdown(true);
  };
  const handleEcoCenterMouseLeave = () => {
    ecoCenterTimeoutRef.current = setTimeout(() => {
      setShowEcoCenterDropdown(false);
    }, 200);
  };

  const isCoCreationActive = ['co-creation', 'model-training', 'agents', 'intelligent-analysis'].includes(activePage);
  const isHelpActive = ['help-center', 'news-center', 'doc-center', 'help-detail'].includes(activePage);
  const isResourceActive = ['resource', 'resource-search', 'resource-order', 'resource-payment', 'resource-image', 'resource-thematic'].includes(activePage);
  const isEcoCenterActive = ['activity', 'eco-creation'].includes(activePage);

  return (
    <header className="h-16 bg-[#0b101e] border-b border-gray-800 flex items-center justify-between px-6 z-50 shrink-0 relative">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onPageChange('home')}>
        <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20">
          <Database className="text-white" size={20} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            市场化专区
          </h1>
        </div>
      </div>

      <nav className="hidden xl:flex items-center space-x-1">
        {/* Items Before Data Center */}
        {navItemsBefore.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id as ActivePage)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
              activePage === item.id 
                ? 'text-blue-400 bg-blue-400/10 font-medium border border-blue-400/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </button>
        ))}

        {/* Data Center Dropdown - Mega Menu Style */}
        <div 
          className="relative" 
          ref={dataCenterRef}
          onMouseEnter={handleDataCenterMouseEnter}
          onMouseLeave={handleDataCenterMouseLeave}
        >
          <button
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
              isResourceActive
                ? 'text-blue-400 bg-blue-400/10 font-medium border border-blue-400/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => onPageChange('resource')}
          >
            <Database size={18} />
            <span className="text-sm">数据中心</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${showDataCenterDropdown ? 'rotate-180' : ''}`} />
          </button>

          {/* Mega Menu Dropdown */}
          <div 
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-[#0b101e]/95 backdrop-blur-2xl border border-gray-800 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] z-50 overflow-hidden transition-all duration-300 origin-top transform ${showDataCenterDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible pointer-events-none'}`}
          >
             <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />

             <div className="flex h-full">
                {/* Left Side: Branding/Desc */}
                <div className="w-64 bg-gradient-to-br from-blue-900/20 to-transparent p-8 flex flex-col justify-between border-r border-white/5 shrink-0">
                   <div className="space-y-6">
                      <div className="flex items-center space-x-2 text-blue-400">
                         <div className="p-1.5 bg-blue-500/20 rounded-lg">
                            <Database size={16} />
                         </div>
                         <span className="font-bold text-xs uppercase tracking-widest">Data Hub</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white leading-tight">数据中心</h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                          汇聚海量卫星影像与多维时空数据，提供高分辨率光学、雷达数据服务，赋能各行业数字化转型。
                        </p>
                      </div>
                   </div>
                </div>

                {/* Right Side: Horizontal Options Grid (2 Large Cards) */}
                <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                   {/* Image Center */}
                   <div 
                      onClick={() => { onPageChange('resource-image'); setShowDataCenterDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />
                      
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                         <ImageIcon size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">影像中心</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">
                           提供高分系列、Sentinel、Landsat等全球高分辨率光学与雷达影像检索与下载。
                         </p>
                      </div>
                   </div>

                   {/* Thematic Center */}
                   <div 
                      onClick={() => { onPageChange('resource-search'); setShowDataCenterDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />

                      <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                         <LayoutGrid size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-green-400 transition-colors">专题中心</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">
                           提供土地利用、植被覆盖、水体提取等高精度专题产品与分析数据。
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Middle Items (Tool, App) - Industry Center removed */}
        {navItemsMiddle.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id as ActivePage)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
              activePage === item.id 
                ? 'text-blue-400 bg-blue-400/10 font-medium border border-blue-400/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </button>
        ))}

        {/* Co-creation Center Mega Menu */}
        <div 
          className="relative" 
          ref={coCreationRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
              isCoCreationActive
                ? 'text-blue-400 bg-blue-400/10 font-medium border border-blue-400/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => onPageChange('co-creation')}
          >
            <Users size={18} />
            <span className="text-sm">共创中心</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${showCoCreationDropdown ? 'rotate-180' : ''}`} />
          </button>

          {/* Horizontal Mega Menu Dropdown */}
          <div 
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1150px] bg-[#0b101e]/95 backdrop-blur-2xl border border-gray-800 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] z-50 overflow-hidden transition-all duration-300 origin-top transform ${showCoCreationDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible pointer-events-none'}`}
          >
             <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />

             <div className="flex h-full">
                {/* Left Side: Branding/Desc */}
                <div className="w-64 bg-gradient-to-br from-blue-900/20 to-transparent p-8 flex flex-col justify-between border-r border-white/5 shrink-0">
                   <div className="space-y-6">
                      <div className="flex items-center space-x-2 text-blue-400">
                         <div className="p-1.5 bg-blue-500/20 rounded-lg">
                            <Sparkles size={16} />
                         </div>
                         <span className="font-bold text-xs uppercase tracking-widest">Co-Creation</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white leading-tight">共创中心</h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                          连接开发者与生态伙伴，提供模型训练、智能体构建全链路服务，共建时空智能新未来。
                        </p>
                      </div>
                   </div>
                </div>

                {/* Right Side: Horizontal Options Grid (3 Columns now) */}
                <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                   {/* Model Training */}
                   <div 
                      onClick={() => { onPageChange('model-training'); setShowCoCreationDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />
                      
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                         <BrainCircuit size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-purple-400 transition-colors">模型训练中心</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">提供高性能算力与预训练大模型，支持在线微调。</p>
                      </div>
                   </div>

                   {/* Intelligent Analysis */}
                   <div 
                      onClick={() => { onPageChange('intelligent-analysis'); setShowCoCreationDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />

                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                         <ScanEye size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-cyan-400 transition-colors">智能分析平台</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">支持卫星在线解译与无人机实时识别，一键生成报告。</p>
                      </div>
                   </div>

                   {/* Agents */}
                   <div 
                      onClick={() => { onPageChange('agents'); setShowCoCreationDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />

                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                         <Bot size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">时空智能体中心</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">零代码构建行业Agent，实现任务自动化执行。</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Eco Center Mega Menu (Previously single button) */}
        <div 
          className="relative" 
          ref={ecoCenterRef}
          onMouseEnter={handleEcoCenterMouseEnter}
          onMouseLeave={handleEcoCenterMouseLeave}
        >
          <button
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
              isEcoCenterActive
                ? 'text-blue-400 bg-blue-400/10 font-medium border border-blue-400/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => onPageChange('activity')}
          >
            <Zap size={18} />
            <span className="text-sm">生态中心</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${showEcoCenterDropdown ? 'rotate-180' : ''}`} />
          </button>

          {/* Mega Menu Dropdown */}
          <div 
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-[#0b101e]/95 backdrop-blur-2xl border border-gray-800 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] z-50 overflow-hidden transition-all duration-300 origin-top transform ${showEcoCenterDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible pointer-events-none'}`}
          >
             <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />

             <div className="flex h-full">
                {/* Left Side: Branding/Desc */}
                <div className="w-64 bg-gradient-to-br from-green-900/20 to-transparent p-8 flex flex-col justify-between border-r border-white/5 shrink-0">
                   <div className="space-y-6">
                      <div className="flex items-center space-x-2 text-green-400">
                         <div className="p-1.5 bg-green-500/20 rounded-lg">
                            <Zap size={16} />
                         </div>
                         <span className="font-bold text-xs uppercase tracking-widest">Ecosystem</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white leading-tight">生态中心</h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                          汇聚创新赛事与生态合作伙伴，打造开放共赢的时空信息产业新生态。
                        </p>
                      </div>
                   </div>
                </div>

                {/* Right Side: Horizontal Options Grid */}
                <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                   {/* Tianditu Competition */}
                   <div 
                      onClick={() => { onPageChange('activity'); setShowEcoCenterDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />
                      
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                         <Trophy size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-yellow-400 transition-colors">天地图大赛</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">
                           展示开发者创新成果，激发时空信息应用潜能。
                         </p>
                      </div>
                   </div>

                   {/* Eco-creation (Moved) */}
                   <div 
                      onClick={() => { onPageChange('eco-creation'); setShowEcoCenterDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />

                      <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                         <Network size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-green-400 transition-colors">生态共建</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">
                           加入合作伙伴计划，共享商机与技术成果。
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Help & Support Mega Menu */}
        <div 
          className="relative" 
          ref={helpRef}
          onMouseEnter={handleHelpMouseEnter}
          onMouseLeave={handleHelpMouseLeave}
        >
          <button
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
              isHelpActive
                ? 'text-blue-400 bg-blue-400/10 font-medium border border-blue-400/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => onPageChange('help-center')}
          >
            <HelpCircle size={18} />
            <span className="text-sm">帮助与支持</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${showHelpDropdown ? 'rotate-180' : ''}`} />
          </button>

          {/* Horizontal Mega Menu Dropdown */}
          <div 
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-[#0b101e]/95 backdrop-blur-2xl border border-gray-800 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] z-50 overflow-hidden transition-all duration-300 origin-top transform ${showHelpDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible pointer-events-none'}`}
          >
             <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />

             <div className="flex h-full">
                {/* Left Side: Branding/Desc */}
                <div className="w-60 bg-gradient-to-br from-indigo-900/20 to-transparent p-8 flex flex-col justify-between border-r border-white/5 shrink-0">
                   <div className="space-y-6">
                      <div className="flex items-center space-x-2 text-indigo-400">
                         <div className="p-1.5 bg-indigo-500/20 rounded-lg">
                            <LifeBuoy size={16} />
                         </div>
                         <span className="font-bold text-xs uppercase tracking-widest">Support</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white leading-tight">帮助中心</h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                          提供全方位的技术文档、常见问题解答与最新平台资讯，助您快速上手。
                        </p>
                      </div>
                   </div>
                </div>

                {/* Right Side: Horizontal Options Grid */}
                <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                   {/* News Center */}
                   <div 
                      onClick={() => { onPageChange('news-center'); setShowHelpDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />
                      
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                         <Newspaper size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">资讯中心</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">了解平台最新动态、发布公告与行业新闻。</p>
                      </div>
                   </div>

                   {/* Documentation */}
                   <div 
                      onClick={() => { onPageChange('doc-center'); setShowHelpDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />

                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                         <BookOpen size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-purple-400 transition-colors">文档中心</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">详尽的开发指南、API文档与操作手册。</p>
                      </div>
                   </div>

                   {/* FAQ */}
                   <div 
                      onClick={() => { onPageChange('help-center'); setShowHelpDropdown(false); }}
                      className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex flex-col space-y-3 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />

                      <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                         <HelpCircle size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm mb-1 group-hover:text-green-400 transition-colors">常见问题</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed font-light">快速解决账号、支付、数据下载等常见问题。</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </nav>

      <div className="flex items-center space-x-5 text-sm text-gray-300">
        {activePage !== 'home' && (
          <>
            <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
              <LayoutDashboard size={18} />
            </button>
            <button 
              onClick={() => onPageChange('user-center')}
              className={`flex items-center space-x-2 bg-blue-600/10 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-full hover:bg-blue-600/20 transition-all ${activePage === 'user-center' ? 'bg-blue-600/30 border-blue-500' : ''}`}
            >
              <UserCircle size={18} />
              <span className="hidden sm:inline">光谷信息</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
