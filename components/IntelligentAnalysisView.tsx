
import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Minus, 
  Maximize, 
  MousePointer2, 
  Wrench, 
  Activity, 
  Layers, 
  ChevronLeft,
  Upload,
  History,
  BarChart2,
  Scan,
  Map as MapIcon,
  Navigation,
  Check
} from 'lucide-react';

const IntelligentAnalysisView: React.FC = () => {
  const [selectedImageId, setSelectedImageId] = useState<string>('img1');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const images = [
    {
      id: 'img1',
      title: '青藏高原地形地貌',
      date: '2023-05-12',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'img2',
      title: '长三角城市群影像',
      date: '2023-06-20',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'img3',
      title: '塔克拉玛干沙漠边缘',
      date: '2023-04-05',
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'img4',
      title: '南极冰川变化监测',
      date: '2023-02-18',
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80'
    }
  ];

  const tools = {
    landCover: [
      '全要素', '耕地', '林地', '草地', '园地', '裸地', 
      '居民地', '水系', '道路', '建筑物', '光伏板', '大棚', '体育场'
    ],
    crop: [
      '水稻', '小麦', '玉米', '油菜', '棉花', '大豆'
    ],
    change: [
      '耕地变化监测'
    ]
  };

  const selectedImage = images.find(img => img.id === selectedImageId) || images[0];

  return (
    <div className="flex-1 flex bg-[#020617] overflow-hidden relative animate-in fade-in duration-500">
      
      {/* 1. Far Left Toolbar */}
      <aside className="w-14 bg-[#0f1420] border-r border-gray-800 flex flex-col items-center py-4 space-y-6 z-20">
        <button className="p-3 text-blue-500 bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-all">
          <BarChart2 size={20} />
        </button>
        <button className="p-3 text-gray-500 hover:text-white hover:bg-white/10 rounded-xl transition-all">
          <Upload size={20} />
        </button>
        <button className="p-3 text-gray-500 hover:text-white hover:bg-white/10 rounded-xl transition-all">
          <History size={20} />
        </button>
      </aside>

      {/* 2. Image Selection Sidebar */}
      <aside className="w-64 bg-[#0b101e] border-r border-gray-800 flex flex-col z-20">
        <div className="h-14 flex items-center justify-between px-4 border-b border-gray-800">
          <span className="font-bold text-white text-sm">热门推荐影像</span>
          <ChevronLeft size={16} className="text-gray-500 cursor-pointer hover:text-white" />
        </div>
        
        <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-3">
          {images.map((img) => (
            <div 
              key={img.id}
              onClick={() => setSelectedImageId(img.id)}
              className={`p-2 rounded-xl cursor-pointer border transition-all flex items-start space-x-3 ${
                selectedImageId === img.id 
                ? 'bg-[#1a2135] border-blue-500/50' 
                : 'bg-[#161b2a]/50 border-transparent hover:bg-[#161b2a] hover:border-gray-700'
              }`}
            >
              <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-900">
                <img src={img.thumbnail} className="w-full h-full object-cover" alt="thumb" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`text-xs font-bold truncate mb-1 ${selectedImageId === img.id ? 'text-blue-400' : 'text-gray-300'}`}>
                  {img.title}
                </h4>
                <p className="text-[10px] text-gray-500 font-mono">{img.date}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* 3. Center Map Area */}
      <main className="flex-1 relative bg-black overflow-hidden flex items-center justify-center">
        {/* Map Image Layer */}
        <div className="absolute inset-0">
          <img 
            src={selectedImage.url} 
            className="w-full h-full object-cover opacity-90"
            alt="Map View" 
          />
          {/* Overlay Grid/Texture for GIS feel */}
          <div className="absolute inset-0 pointer-events-none opacity-20" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
        </div>

        {/* Floating Controls */}
        <div className="absolute top-6 left-6 flex flex-col space-y-2 z-10">
          <button className="w-9 h-9 bg-[#0b101e]/90 backdrop-blur border border-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/20 transition-all">
            <Plus size={18} />
          </button>
          <button className="w-9 h-9 bg-[#0b101e]/90 backdrop-blur border border-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/20 transition-all">
            <Minus size={18} />
          </button>
          <div className="h-2" />
          <button className="w-9 h-9 bg-[#0b101e]/90 backdrop-blur border border-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/20 transition-all">
            <Maximize size={16} />
          </button>
          <button className="w-9 h-9 bg-[#0b101e]/90 backdrop-blur border border-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/20 transition-all">
            <Navigation size={16} className="-rotate-45" />
          </button>
        </div>

        {/* Center Loading/Processing State (Hidden by default) */}
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-0">
           <div className="text-white flex flex-col items-center">
              <Activity className="animate-spin text-blue-500 mb-2" size={32} />
              <span className="text-sm font-medium tracking-widest">PROCESSING...</span>
           </div>
        </div> */}
      </main>

      {/* 4. Right Toolbox Sidebar */}
      <aside className="w-80 bg-[#0b101e] border-l border-gray-800 flex flex-col z-20">
        <div className="h-14 flex items-center px-5 border-b border-gray-800 space-x-2">
          <Wrench size={16} className="text-blue-500" />
          <span className="font-bold text-white text-sm">分析工具箱</span>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-8">
          
          {/* Section: Land Cover */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
              <div className="w-1 h-1 rounded-full bg-blue-500" />
              <span>地物分类</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {tools.landCover.map(tool => (
                <button
                  key={tool}
                  onClick={() => setSelectedTool(tool)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-all border ${
                    selectedTool === tool 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20' 
                    : 'bg-[#161b2a] border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>

          {/* Section: Crop ID */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
              <div className="w-1 h-1 rounded-full bg-green-500" />
              <span>作物识别</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {tools.crop.map(tool => (
                <button
                  key={tool}
                  onClick={() => setSelectedTool(tool)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-all border ${
                    selectedTool === tool 
                    ? 'bg-green-600 border-green-500 text-white shadow-lg shadow-green-900/20' 
                    : 'bg-[#161b2a] border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>

          {/* Section: Change Detection */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
              <div className="w-1 h-1 rounded-full bg-purple-500" />
              <span>变化检测</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {tools.change.map(tool => (
                <button
                  key={tool}
                  onClick={() => setSelectedTool(tool)}
                  className={`px-3 py-3 rounded-lg text-xs font-medium text-left transition-all border flex items-center justify-between ${
                    selectedTool === tool 
                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/20' 
                    : 'bg-[#161b2a] border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  <span>{tool}</span>
                  <Activity size={14} />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Status Card */}
        <div className="p-5 border-t border-gray-800 bg-[#0f1420]">
          <div className="bg-[#161b2a] border border-blue-500/20 rounded-xl p-4 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
               <Scan size={48} className="text-blue-500" />
            </div>
            <div className="flex items-center justify-between">
               <span className="text-xs font-bold text-blue-400 flex items-center gap-1">
                 <Activity size={12} /> AI 识别状态
               </span>
               <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px] font-black border border-green-500/20">READY</span>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed relative z-10">
              当前AI模型已预加载，请选择分析工具并框选感兴趣区域即可开始解译
            </p>
          </div>
        </div>
      </aside>

    </div>
  );
};

export default IntelligentAnalysisView;
