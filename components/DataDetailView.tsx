
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Heart, 
  Info, 
  Layers, 
  Lightbulb,
  Globe,
  Camera,
  Calendar,
  Maximize2,
  FileText,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ShoppingCart,
  Database,
  CheckCircle2,
  Box,
  Cpu,
  TableProperties,
  Activity
} from 'lucide-react';

interface DataDetailViewProps {
  dataset: any;
  onBack: () => void;
  onBackToMap?: () => void;
  onOrder?: () => void;
}

const carouselCases = [
  {
    title: '土地利用/覆盖变化监测',
    desc: '通过Landsat系列数据的长期存档，监测区域土地利用类型变化，支持城市规划和环境管理。该应用已被多个城市规划部门采用，用于监测城市扩张和生态保护区域变化。',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    tags: ['时序分析', '覆盖检测', '变化挖掘'],
    category: '自然资源'
  },
  {
    title: '精准农业植保监测',
    desc: '结合高分辨率多光谱影像，实时分析农作物生长势头与水分亏缺情况。通过NDVI、EVI等植被指数反演，为大面积农场提供差异化施肥与精准灌溉决策支持。',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80',
    tags: ['指数反演', '精细化管理', '产量预测'],
    category: '智慧农业'
  },
  {
    title: '城市建成区扩张分析',
    desc: '利用高分辨率光学数据精准识别建筑物、道路等硬化地表。支持政府部门进行非农化、非粮化专项整治，以及城市开发边界的动态监测与预警。',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80',
    tags: ['目标提取', '城市孪生', '存量盘活'],
    category: '城市规划'
  },
  {
    title: '水生态灾害应急感知',
    desc: '在洪涝、赤潮等突发事件中，通过多源卫星联合调度，快速获取受灾区域影像，实现受灾范围自动识别与损失评估，为应急救援提供第一手空天情报。',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1200&q=80',
    tags: ['实时响应', '灾损评估', '穿云避碍'],
    category: '应急减灾'
  }
];

const DataDetailView: React.FC<DataDetailViewProps> = ({ dataset, onBack, onBackToMap, onOrder }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'bands' | 'cases'>('intro');
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  const nextCase = () => {
    setCurrentCaseIndex((prev) => (prev + 1) % carouselCases.length);
  };

  const prevCase = () => {
    setCurrentCaseIndex((prev) => (prev - 1 + carouselCases.length) % carouselCases.length);
  };

  const isThematic = dataset.type === 'thematic';

  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in slide-in-from-right-4 duration-500 pb-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Dynamic Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 space-y-10 relative z-10">
        
        {/* Navigation / Header Area */}
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>返回检索列表</span>
          </button>
        </div>

        {/* Dataset Hero Card */}
        <div className="bg-[#0b101e]/80 border border-gray-800 rounded-[2.5rem] p-10 backdrop-blur-md shadow-2xl overflow-hidden relative group">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image Preview */}
            <div className="lg:w-1/3 aspect-square rounded-3xl overflow-hidden bg-black/40 border border-white/5 relative shadow-inner group-hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all">
              <img 
                src={dataset.image} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                alt={dataset.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex items-center space-x-2 text-white/80 text-xs mb-2">
                    <Calendar size={14} />
                    <span>采集时间: {dataset.date}</span>
                 </div>
                 <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-full" />
                 </div>
              </div>
            </div>

            {/* Main Info */}
            <div className="flex-1 space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                   <div className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest">
                      {isThematic ? '专题产品' : '标准影像'}
                   </div>
                </div>
                <h1 className="text-5xl font-black text-white tracking-tight leading-tight">{dataset.title}</h1>
                <p className="text-gray-400 text-lg leading-relaxed font-light max-w-3xl">
                  {dataset.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {dataset.tags.map((tag: string) => (
                  <span key={tag} className="text-xs bg-white/5 text-gray-300 px-4 py-2 rounded-xl border border-white/5 font-medium hover:border-blue-500/30 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-4">
                {isThematic ? (
                  <button 
                    onClick={onOrder}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-black transition-all active:scale-95 shadow-xl shadow-blue-900/40 flex items-center space-x-3 group/btn"
                  >
                    <ShoppingCart size={20} />
                    <span>立即订购</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button 
                    onClick={onBackToMap}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-black transition-all active:scale-95 shadow-xl shadow-blue-900/40 flex items-center space-x-3 group/btn"
                  >
                    <Search size={20} />
                    <span>数据检索</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )}
                <button 
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all ${
                    dataset.isFavorite 
                    ? 'bg-red-500/10 border-red-500/30 text-red-500' 
                    : 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 bg-[#0b101e]'
                  }`}
                >
                  <Heart size={24} fill={dataset.isFavorite ? "currentColor" : "none"} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation & Content Container */}
        <div className="bg-[#0b101e]/80 border border-gray-800 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-12 duration-1000">
          
          {/* Custom Tab Bar */}
          <div className="flex flex-wrap border-b border-white/5 bg-white/5">
            {[
              { id: 'intro', label: '数据介绍', icon: <Info size={18} /> },
              { id: 'bands', label: isThematic ? '属性信息' : '波段信息', icon: isThematic ? <TableProperties size={18} /> : <Layers size={18} /> },
              { id: 'cases', label: '应用案例', icon: <FileText size={18} /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-3 px-10 py-6 transition-all relative group ${
                  activeTab === tab.id ? 'text-blue-400 font-black' : 'text-gray-500 hover:text-white'
                }`}
              >
                <span className={activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110 transition-transform'}>{tab.icon}</span>
                <span className="text-sm tracking-wide font-bold">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-10 md:p-14 min-h-[600px]">
            
            {/* 1. DATA INTRO TAB */}
            {activeTab === 'intro' && (
              <div className="space-y-16 animate-in fade-in duration-500">
                {/* Intro Section */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-3 text-blue-400">
                    <Database size={24} />
                    <h2 className="text-2xl font-black text-white uppercase tracking-wider">数据概述</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-gray-400 leading-relaxed text-lg font-light">
                        {dataset.title}
                        {isThematic 
                          ? ' 是面向行业应用的高精度专题数据产品，利用多源数据融合与先进AI解译技术生产。该数据经过严格的质量控制与人工复核，确保数据的准确性与现势性，可直接应用于业务分析与决策支持。'
                          : dataset.tags.includes('Landsat') 
                            ? ' 是美国地质调查局(USGS)和美国国家航空航天局(NASA)联合开发的地球观测卫星产品。该卫星延续了Landsat系列卫星的观测任务，提供全球陆地表面的高质量多光谱成像数据。' 
                            : ' 由领先的遥感卫星星座提供的观测资源，具备高重访周期和大范围覆盖能力。'
                        }
                      </p>
                      <p className="text-gray-400 leading-relaxed text-lg font-light">
                        {!isThematic && '该数据集包含表面反射率和表面温度数据，已进行了大气校正、地形校正等预处理，消除了大气散射和吸收的影响，真实反映地表物理属性，可直接用于各种地球科学研究和应用。'}
                        {isThematic && '数据结构符合国家地理信息标准，支持ArcGIS、QGIS等主流GIS软件加载与分析。适用于国土空间规划、自然资源调查、生态环境监测等多个领域。'}
                      </p>
                    </div>
                    
                    {/* Visual Graphic */}
                    <div className="bg-blue-600/5 border border-blue-500/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4">
                       <Globe size={64} className="text-blue-500/50" />
                       <div>
                          <div className="text-white font-bold">全球覆盖能力</div>
                          <div className="text-gray-500 text-xs mt-1">支持指定区域快速提取</div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Parameters Grid Section */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-3 text-blue-400">
                    <Activity size={24} />
                    <h2 className="text-2xl font-black text-white uppercase tracking-wider">技术参数</h2>
                  </div>
                  
                  <div className="border border-white/5 rounded-[2rem] overflow-hidden bg-black/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                      {/* Left Column Params */}
                      <div className="divide-y divide-white/5">
                        {(isThematic ? [
                          { label: '数据类型', value: '矢量数据 (Vector)' },
                          { label: '坐标系', value: 'CGCS2000' },
                          { label: '更新频率', value: dataset.tags.includes('季度更新') ? '季度' : '不定期' },
                        ] : [
                          { label: '卫星平台', value: dataset.tags.includes('Landsat') ? 'Landsat-9' : dataset.title.split(' ')[0] },
                          { label: '传感器', value: 'OLI-2, TIRS-2' },
                          { label: '空间分辨率', value: dataset.tags.includes('30m') ? '30m (多光谱), 100m (热红外)' : '0.5m - 2m' },
                        ]).map((param, i) => (
                          <div key={i} className="flex justify-between items-center px-8 py-5 hover:bg-white/5 transition-colors">
                            <span className="text-gray-500 font-medium text-sm">{param.label}</span>
                            <span className="text-gray-200 font-bold">{param.value}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Right Column Params */}
                      <div className="divide-y divide-white/5">
                        {(isThematic ? [
                          { label: '覆盖范围', value: '全国重点区域' },
                          { label: '数据格式', value: 'Shapefile / GeoJSON' },
                          { label: '精度指标', value: '准确率 > 90%' },
                        ] : [
                          { label: '幅宽', value: '185公里' },
                          { label: '数据格式', value: 'GeoTIFF' },
                          { label: '数据级别', value: 'Level-2 (表面反射率)' },
                        ]).map((param, i) => (
                          <div key={i} className="flex justify-between items-center px-8 py-5 hover:bg-white/5 transition-colors">
                            <span className="text-gray-500 font-medium text-sm">{param.label}</span>
                            <span className="text-gray-200 font-bold">{param.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. BANDS / ATTRIBUTES TAB */}
            {activeTab === 'bands' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                 <div className="flex items-center space-x-3 text-blue-400">
                    {isThematic ? <TableProperties size={24} /> : <Layers size={24} />}
                    <h2 className="text-2xl font-black text-white uppercase tracking-wider">{isThematic ? '属性表结构' : '波段详细信息'}</h2>
                  </div>
                  
                  <div className="overflow-hidden rounded-[2rem] border border-gray-800 shadow-xl bg-black/20">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white/5 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                          {isThematic ? (
                            <>
                              <th className="px-8 py-6">字段名称</th>
                              <th className="px-8 py-6">字段类型</th>
                              <th className="px-8 py-6">字段描述</th>
                              <th className="px-8 py-6 text-right">示例值</th>
                            </>
                          ) : (
                            <>
                              <th className="px-8 py-6">波段编号</th>
                              <th className="px-8 py-6">波段名称</th>
                              <th className="px-8 py-6 text-center">波长范围 (μm)</th>
                              <th className="px-8 py-6 text-right">分辨率 (m)</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-300 divide-y divide-white/5">
                        {isThematic ? (
                          [
                            { name: 'OBJECTID', type: 'Int', desc: '要素唯一标识符', ex: '1001' },
                            { name: 'DK_CODE', type: 'String', desc: '地块编码', ex: '320115001' },
                            { name: 'TYPE_NAME', type: 'String', desc: '分类名称', ex: '水稻' },
                            { name: 'AREA_MU', type: 'Double', desc: '面积(亩)', ex: '25.6' },
                            { name: 'DATE_TIME', type: 'Date', desc: '监测时间', ex: '2023-10-20' },
                            { name: 'CONFIDENCE', type: 'Float', desc: '置信度', ex: '0.98' },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-blue-600/5 transition-colors group">
                              <td className="px-8 py-5 text-blue-400 font-bold font-mono group-hover:text-blue-300">{row.name}</td>
                              <td className="px-8 py-5">
                                <span className="bg-white/5 px-2 py-1 rounded text-xs font-mono text-gray-400 border border-white/5">{row.type}</span>
                              </td>
                              <td className="px-8 py-5 text-gray-400">{row.desc}</td>
                              <td className="px-8 py-5 text-right font-medium text-gray-300">{row.ex}</td>
                            </tr>
                          ))
                        ) : (
                          [
                            { id: 'Band 1', name: 'Coastal Aerosol', wave: '0.43 - 0.45', res: '30' },
                            { id: 'Band 2', name: 'Blue', wave: '0.45 - 0.51', res: '30' },
                            { id: 'Band 3', name: 'Green', wave: '0.53 - 0.59', res: '30' },
                            { id: 'Band 4', name: 'Red', wave: '0.64 - 0.67', res: '30' },
                            { id: 'Band 5', name: 'NIR', wave: '0.85 - 0.88', res: '30' },
                            { id: 'Band 8', name: 'Panchromatic', wave: '0.50 - 0.68', res: '15' },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-blue-600/5 transition-colors group">
                              <td className="px-8 py-5 text-blue-400 font-bold group-hover:text-blue-300">{row.id}</td>
                              <td className="px-8 py-5 font-bold text-gray-200">{row.name}</td>
                              <td className="px-8 py-5 font-mono text-center text-gray-400">{row.wave}</td>
                              <td className="px-8 py-5 text-right font-medium">{row.res}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
              </div>
            )}

            {/* 3. CASES TAB - REDESIGNED */}
            {activeTab === 'cases' && (
              <div className="space-y-12 animate-in fade-in duration-700">
                  <div className="flex items-center space-x-3 text-blue-400">
                    <Lightbulb size={24} className="animate-pulse" />
                    <h2 className="text-2xl font-black text-white uppercase tracking-wider">典型应用案例</h2>
                  </div>

                  {/* Enhanced Carousel Container */}
                  <div className="relative group/carousel">
                    <div className="flex flex-col md:flex-row bg-[#070b14] rounded-[3rem] overflow-hidden border border-gray-800 shadow-2xl min-h-[520px]">
                      
                      {/* Image Area (Left) */}
                      <div className="md:w-3/5 relative overflow-hidden">
                        <img 
                          key={carouselCases[currentCaseIndex].image}
                          src={carouselCases[currentCaseIndex].image} 
                          className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-1000 opacity-80" 
                          alt="Case study" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-[#070b14]" />
                        
                        {/* Nav Buttons overlayed on image */}
                        <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                          <button 
                            onClick={prevCase}
                            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-500/50 transition-all pointer-events-auto hover:scale-110"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button 
                            onClick={nextCase}
                            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-500/50 transition-all pointer-events-auto hover:scale-110"
                          >
                            <ChevronRight size={24} />
                          </button>
                        </div>
                      </div>

                      {/* Content Area (Right) */}
                      <div className="flex-1 p-10 md:p-14 flex flex-col justify-between relative bg-gradient-to-br from-[#070b14] to-[#0b101e]">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                           <Cpu size={120} />
                        </div>

                        <div className="space-y-8 animate-in slide-in-from-right-4 duration-700 relative z-10">
                          <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-600/20 rounded-lg text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                               <span>{carouselCases[currentCaseIndex].category}</span>
                            </div>
                            <h3 className="text-3xl font-black text-white leading-tight">
                              {carouselCases[currentCaseIndex].title}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                              {carouselCases[currentCaseIndex].desc}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {carouselCases[currentCaseIndex].tags.map(tag => (
                              <div key={tag} className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 text-xs text-gray-300">
                                <CheckCircle2 size={12} className="text-green-500" />
                                <span>{tag}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-8">
                          {/* Pagination Dots */}
                          <div className="flex items-center space-x-2">
                             {carouselCases.map((_, i) => (
                               <button 
                                key={i}
                                onClick={() => setCurrentCaseIndex(i)}
                                className={`h-1.5 transition-all duration-300 rounded-full ${i === currentCaseIndex ? 'w-8 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'w-2 bg-gray-700 hover:bg-gray-500'}`}
                               />
                             ))}
                          </div>
                          
                          <button className="flex items-center space-x-2 text-blue-500 font-bold hover:text-blue-400 transition-colors group/btn">
                            <span>查看详情</span>
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDetailView;
