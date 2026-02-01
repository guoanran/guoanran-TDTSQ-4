
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BarChart3, 
  Info, 
  Zap, 
  Target, 
  Activity, 
  Cpu, 
  PlayCircle, 
  FileText, 
  MonitorCheck,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Layers,
  Sparkles,
  MousePointer2,
  Trash2,
  ChevronDown,
  Settings2,
  Play,
  ArrowRight,
  ExternalLink,
  Users,
  Sprout,
  Trees,
  Heart,
  ShoppingCart
} from 'lucide-react';

interface AlgorithmDetailViewProps {
  onBack: () => void;
  onBuy?: () => void;
}

const AlgorithmDetailView: React.FC<AlgorithmDetailViewProps> = ({ onBack, onBuy }) => {
  // Set default tab to 'cases' as requested
  const [activeTab, setActiveTab] = useState('cases');
  const [selectedImage, setSelectedImage] = useState('Wuhan_S2_2023.tif');
  const [selectedModel, setSelectedModel] = useState('DeepLabV3+ (ST-R50)');
  const [isFavorited, setIsFavorited] = useState(false);

  const stats = [
    { label: '平均执行时间', value: '2.3s', icon: <Zap size={18} className="text-orange-400" /> },
    { label: '成功率', value: '99.9%', icon: <Target size={18} className="text-green-400" /> },
    { label: '调用量', value: '28.3k+', icon: <Activity size={18} className="text-blue-400" /> },
    { label: '运行环境', value: 'K8S/GPU', icon: <Cpu size={18} className="text-purple-400" /> },
  ];

  const params = [
    { key: 'input_image', name: '输入影像', type: 'GeoTIFF', desc: '包含红光与近红外波段的遥感影像', required: 'YES' },
    { key: 'cloud_mask', name: '云掩膜', type: 'Boolean', desc: '是否启用云掩膜预处理', required: 'OPT' },
  ];

  const caseData = [
    {
      id: 1,
      title: '河南省小麦长势动态监测项目',
      category: '农业监测',
      dateRange: '2023年3月 - 2023年6月',
      desc: '利用Sentinel-2卫星数据，对河南省18个地级市的小麦种植区进行全生育期NDVI监测，实时掌握小麦长势情况，为精准施肥、病虫害预警提供数据支持。',
      stats: [
        { label: '监测面积', value: '8,500 km²' },
        { label: '影像数量', value: '1,240张' },
        { label: '监测频率', value: '5天/次' },
        { label: '预警准确率', value: '95.6%', highlight: 'text-green-400' },
      ],
      partner: '河南省农业农村厅',
      color: 'bg-emerald-600/20',
      icon: <Sprout size={48} className="text-yellow-500" />,
      subTitle: '小麦长势监测'
    },
    {
      id: 2,
      title: '大兴安岭森林健康状况评估',
      category: '生态监测',
      dateRange: '2023年5月 - 2023年10月',
      desc: '结合Landsat-8和Sentinel-2数据，对大兴安岭林区进行多时相NDVI分析，识别森林退化区域、病虫害影响区域，为森林资源保护和生态修复提供科学依据。',
      stats: [
        { label: '监测面积', value: '83,000 km²' },
        { label: '影像数量', value: '3,560张' },
        { label: '识别病虫害', value: '126处' },
        { label: '森林覆盖率', value: '84.2%', highlight: 'text-green-400' },
      ],
      partner: '国家林业和草地局',
      color: 'bg-green-700/20',
      icon: <Trees size={48} className="text-emerald-500" />,
      subTitle: '森林健康监测'
    }
  ];

  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700 pb-20">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', 
        backgroundSize: '50px 50px' 
      }} />
      
      {/* Dynamic Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse delay-700" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 relative z-10 space-y-10">
        
        {/* Breadcrumb / Back Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-all group animate-in slide-in-from-left duration-500"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">返回算法中心</span>
        </button>

        {/* Top Header Card */}
        <div className="bg-[#0b101e]/80 border border-gray-800 rounded-[2.5rem] p-10 backdrop-blur-3xl shadow-2xl flex flex-col space-y-10 animate-in slide-in-from-bottom-8 duration-700 relative">
          
          {/* Action Buttons in Top Right */}
          <div className="absolute top-10 right-10 flex items-center space-x-4">
            <button 
              onClick={() => setIsFavorited(!isFavorited)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all border ${
                isFavorited 
                ? 'bg-blue-600/20 border-blue-500/50 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                : 'bg-black/40 border-gray-800 text-gray-500 hover:text-blue-400 hover:border-blue-500/30'
              }`}
            >
              <Heart size={20} fill={isFavorited ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={onBuy}
              className="bg-[#4fd1c5] hover:bg-[#38b2ac] text-[#000000] px-6 py-3 rounded-xl font-black flex items-center space-x-2 transition-all active:scale-95 shadow-lg shadow-[#4fd1c5]/20"
            >
              <ShoppingCart size={20} />
              <span className="text-sm">立即申请</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl shadow-blue-900/40 border border-blue-400/20 group">
              <BarChart3 className="text-white group-hover:scale-110 transition-transform" size={48} />
            </div>
            <div className="space-y-4 flex-1 pr-48"> {/* Padding for absolute buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter">归一化植被指数(NDVI)计算</h1>
              </div>
              <p className="text-gray-400 font-light max-w-4xl text-lg leading-relaxed">
                基于遥感影像的归一化植被指数计算算法，用于评估植被生长状态和覆盖度。支持Landsat-8/9、Sentinel-2、MODIS等多源遥感数据，平均执行时间2.3秒/帧，成功率99.2%。
              </p>
              <div className="flex flex-wrap gap-2">
                {['植被指数', '遥感分析', '农业监测', '环境评估'].map(tag => (
                  <span key={tag} className="bg-white/5 text-gray-400 text-xs px-4 py-1.5 rounded-xl border border-white/5 font-medium group-hover:border-blue-500/20 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/5">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 group">
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] group-hover:text-blue-500 transition-colors">{stat.label}</div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation & Content */}
        <div className="bg-[#0b101e]/80 border border-gray-800 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-12 duration-1000">
          <div className="flex flex-wrap border-b border-white/5 bg-white/5">
            {[
              { id: 'intro', label: '算法介绍', icon: <Info size={16} /> },
              { id: 'experience', label: '算法体验', icon: <PlayCircle size={16} /> },
              { id: 'cases', label: '应用案例', icon: <FileText size={16} /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-10 py-6 transition-all relative group ${
                  activeTab === tab.id ? 'text-blue-400 font-black' : 'text-gray-500 hover:text-white'
                }`}
              >
                <span className={activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110 transition-transform'}>{tab.icon}</span>
                <span className="text-sm tracking-wide">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[700px]">
            {activeTab === 'intro' && (
              <div className="p-10 md:p-14 space-y-20 animate-in fade-in duration-500">
                {/* Algorithm Principle */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
                    <h2 className="text-2xl font-black text-white">算法原理</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-light text-lg max-w-5xl">
                    NDVI (归一化植被指数) 是一种广泛用于监测植被生长状况的遥感指数。通过测量植被在近红外波段和红光波段的反射率计算得出，该算子支持多种遥感数据输入，提供高精度植被监测分析结果。健康的植被在近红外波段有较高的反射率，在红光波段有较低的反射率，因此NDVI值越接近1表示植被越茂盛。
                  </p>
                  <div className="bg-blue-600/5 rounded-3xl p-10 border border-blue-500/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Cpu size={120} />
                    </div>
                    <div className="text-blue-400 font-mono text-3xl font-black mb-6 tracking-tighter">
                      NDVI = (NIR - RED) / (NIR + RED)
                    </div>
                    <div className="text-gray-500 text-sm font-medium flex items-center space-x-2">
                      <Sparkles size={14} className="text-blue-500/50" />
                      <span>其中 <span className="text-gray-400">NIR</span> 为近红外波段反射率，<span className="text-gray-400">RED</span> 为红光波段反射率。</span>
                    </div>
                  </div>
                </div>

                {/* Input Parameters */}
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-8 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
                    <h2 className="text-2xl font-black text-white">输入参数</h2>
                  </div>
                  <div className="border border-white/5 rounded-[2rem] overflow-hidden bg-black/20">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-white/5 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                          <th className="px-10 py-5">参数英文名</th>
                          <th className="px-10 py-5">参数中文名</th>
                          <th className="px-10 py-5">类型</th>
                          <th className="px-10 py-5">说明</th>
                          <th className="px-10 py-5 text-right">必填</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-sm">
                        {params.map((param, idx) => (
                          <tr key={param.key} className="hover:bg-blue-600/5 transition-colors group">
                            <td className="px-10 py-6 text-gray-500 font-mono group-hover:text-blue-400 transition-colors">{param.key}</td>
                            <td className="px-10 py-6 text-gray-200 font-bold">{param.name}</td>
                            <td className="px-10 py-6">
                              <span className="text-blue-400/80 font-black uppercase tracking-tighter bg-blue-500/5 px-2.5 py-1 rounded-lg border border-blue-500/10">
                                {param.type}
                              </span>
                            </td>
                            <td className="px-10 py-6 text-gray-500 font-light group-hover:text-gray-300 transition-colors">{param.desc}</td>
                            <td className="px-10 py-6 text-right">
                              <span className={`font-black text-[10px] uppercase tracking-widest ${param.required === 'YES' ? 'text-red-500/80' : 'text-gray-600'}`}>
                                {param.required}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="flex h-[750px] animate-in fade-in duration-500">
                {/* Experience Sidebar Configuration */}
                <div className="w-80 border-r border-white/5 p-8 flex flex-col space-y-10 bg-black/20 backdrop-blur-md">
                  <div className="flex items-center space-x-3 text-blue-400">
                    <Settings2 size={18} />
                    <h3 className="text-sm font-black uppercase tracking-widest">体验参数配置</h3>
                  </div>

                  <div className="space-y-8 flex-1">
                    {/* Sampling Area Selection */}
                    <div className="space-y-4">
                      <label className="text-[11px] text-gray-500 font-black uppercase tracking-widest block">采样分析范围</label>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-white/5 border border-gray-800 rounded-xl py-3 px-4 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all group">
                          <MousePointer2 size={16} className="mr-2 text-blue-500/60 group-hover:text-blue-400" />
                          <span className="text-xs">框选区域</span>
                        </button>
                        <button className="w-12 h-12 bg-white/5 border border-gray-800 rounded-xl flex items-center justify-center text-gray-600 hover:text-red-500 hover:border-red-500/30 transition-all">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Image Selection */}
                    <div className="space-y-4">
                      <label className="text-[11px] text-gray-500 font-black uppercase tracking-widest block">待分析影像</label>
                      <div className="relative group">
                        <select 
                          value={selectedImage}
                          onChange={(e) => setSelectedImage(e.target.value)}
                          className="w-full bg-white/5 border border-gray-800 rounded-xl py-3 px-4 text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500/50 cursor-pointer"
                        >
                          <option value="Wuhan_S2_2023.tif">Wuhan_S2_2023.tif</option>
                          <option value="Shanghai_Spot7_2024.tif">Shanghai_Spot7_2024.tif</option>
                          <option value="Beijing_GF2_2022.tif">Beijing_GF2_2022.tif</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-hover:text-blue-500 transition-colors pointer-events-none" />
                      </div>
                    </div>

                    {/* Model Version Selection */}
                    <div className="space-y-4">
                      <label className="text-[11px] text-gray-500 font-black uppercase tracking-widest block">模型版本</label>
                      <div className="relative group">
                        <select 
                          value={selectedModel}
                          onChange={(e) => setSelectedModel(e.target.value)}
                          className="w-full bg-white/5 border border-gray-800 rounded-xl py-3 px-4 text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500/50 cursor-pointer"
                        >
                          <option value="DeepLabV3+ (ST-R50)">DeepLabV3+ (ST-R50)</option>
                          <option value="U-Net (ResNet-101)">U-Net (ResNet-101)</option>
                          <option value="Fast-SCNN (Edge)">Fast-SCNN (Edge)</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-hover:text-blue-500 transition-colors pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Run Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center space-x-3 shadow-xl shadow-blue-900/40 transition-all active:scale-95 group">
                    <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                    <span>运行算法体验</span>
                  </button>
                </div>

                {/* Main Experience Visualization Area */}
                <div className="flex-1 bg-[#050914] relative flex items-center justify-center p-12 group overflow-hidden">
                   <div className="w-full h-full relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                      <img 
                        src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1920&q=80" 
                        alt="Algorithm Visualization" 
                        className="w-full h-full object-cover opacity-60 transition-transform duration-[10s] group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-64 h-64 border-2 border-dashed border-blue-500/40 rounded-3xl animate-[pulse_3s_ease-in-out_infinite] flex items-center justify-center">
                            <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)]" />
                         </div>
                      </div>
                      <div className="absolute bottom-10 left-10 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl space-y-4 max-w-xs animate-in slide-in-from-left-8 duration-700">
                         <div className="flex items-center space-x-2 text-blue-400">
                            <Activity size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">正在处理实时流</span>
                         </div>
                         <p className="text-gray-300 text-xs font-light leading-relaxed">
                            正在对指定区域进行全要素解译。当前模型预测置信度：<span className="text-blue-400 font-bold">0.964</span>
                         </p>
                      </div>
                      <div className="absolute inset-x-0 h-0.5 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] z-20 animate-[scan_5s_linear_infinite]" />
                   </div>
                </div>
              </div>
            )}
            
            {activeTab === 'cases' && (
              <div className="p-10 md:p-14 space-y-12 animate-in fade-in duration-700">
                {caseData.map((item, idx) => (
                  <div key={item.id} className="bg-[#070b14]/60 border border-gray-800 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl transition-all hover:border-blue-500/30 group">
                    {/* Left Colored Panel */}
                    <div className={`md:w-72 p-10 flex flex-col items-center justify-center text-center space-y-6 ${item.color} border-r border-white/5`}>
                       <div className="p-6 bg-white/5 backdrop-blur-xl rounded-full shadow-inner transform group-hover:scale-110 transition-transform duration-500">
                          {item.icon}
                       </div>
                       <div className="text-lg font-black text-white tracking-widest">{item.subTitle}</div>
                       {/* Dotted pattern background for left panel */}
                       <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px]" />
                    </div>

                    {/* Right Info Panel */}
                    <div className="flex-1 p-10 md:p-14 space-y-10 relative">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-4">
                            <h3 className="text-3xl font-black text-white">{item.title}</h3>
                            <span className="bg-blue-600/20 text-blue-400 text-[10px] font-black px-4 py-1 rounded-full border border-blue-500/20 uppercase tracking-[0.2em]">
                              {item.category}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                            <span>{item.dateRange}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-400 text-lg font-light leading-relaxed max-w-4xl">
                        {item.desc}
                      </p>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-white/5">
                        {item.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="space-y-2">
                            <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{stat.label}</div>
                            <div className={`text-2xl font-black ${stat.highlight || 'text-white'}`}>{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}} />
    </div>
  );
};

export default AlgorithmDetailView;
