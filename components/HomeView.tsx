
import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { 
  ArrowRight, 
  Globe as GlobeIcon,
  Waves,
  Trees,
  Cloud,
  Layers,
  Zap,
  Scan,
  Maximize2,
  GitCompare,
  Box,
  Rocket,
  Telescope,
  PlaneTakeoff,
  ShieldAlert,
  Building2,
  Droplets,
  Map as MapIcon,
  BarChart3,
  Sparkles,
  Cpu,
  MapPin,
  Compass,
  Layout,
  Navigation2,
  TableProperties,
  Network,
  Search,
  CheckCircle2,
  BrainCircuit,
  Bot,
  ExternalLink,
  Sprout,
  Leaf,
  Navigation,
  Star,
  Orbit,
  Milestone,
  Radio,
  Camera,
  ChevronRight,
  Image,
  Newspaper
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const globeEl = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [activeFoundationIndex, setActiveFoundationIndex] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    if (globeEl.current) {
      const globe = globeEl.current;
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.8;
      globe.controls().enableZoom = false;
      globe.pointOfView({ lat: 20, lng: 110, altitude: 1.8 });
    }

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Auto-cycle the active foundation card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFoundationIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const foundationData = [
    {
      title: '影像数据',
      desc: '汇聚高分、哨兵、Landsat等多源光学与雷达遥感影像，实现全球全天候观测覆盖。',
      tags: ['光学影像', '雷达影像', '高光谱'],
      icon: <Image size={24} />,
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
      targetPage: 'resource'
    },
    {
      title: '主题地图',
      desc: '提供自然资源、生态环境、城市治理等领域的高精度专题地图服务。',
      tags: ['土地利用', '植被覆盖', '水体分布'],
      icon: <MapIcon size={24} />,
      image: 'https://images.unsplash.com/photo-1599488615731-7e512819a626?auto=format&fit=crop&w=800&q=80',
      targetPage: 'map-center'
    },
    {
      title: '时空矢量',
      desc: '包含行政区划、路网水系、主要建筑物轮廓等基础地理信息矢量要素。',
      tags: ['基础路网', 'POI兴趣点', '行政边界'],
      icon: <Layers size={24} />,
      image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80',
      targetPage: 'resource-search'
    },
    {
      title: '场景专题',
      desc: '针对特定业务场景定制的综合时空数据包，如应急救灾、重大活动保障等。',
      tags: ['应急响应', '活动保障', '重点区域'],
      icon: <Sparkles size={24} />,
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
      targetPage: 'app'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth bg-[#020617] text-white selection:bg-blue-500/30">
      {/* 1. 英雄页 (Hero Section) - Lighter Background Applied Here */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-[#334155] via-[#1e293b] to-[#020617]">
        {/* Starry Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(80)].map((_, i) => (
            <div
              key={`hero-star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.6 + 0.1,
                animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15)_0%,transparent_60%)] pointer-events-none z-0" />
        
        <div className="absolute inset-0 z-0 pointer-events-none opacity-100 flex items-center justify-center scale-105 transition-transform duration-[2000ms] hover:scale-100">
          <Globe
            ref={globeEl}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            showAtmosphere={true}
            atmosphereColor="#3b82f6"
            atmosphereAltitude={0.15}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#334155]/30 via-transparent to-[#020617] pointer-events-none z-[1] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.2)_0%,#020617_95%)] pointer-events-none z-[1]" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-12 max-w-6xl animate-in fade-in zoom-in-95 duration-1000">
          <div className="flex flex-col items-center group cursor-default">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight bg-gradient-to-r from-blue-200 via-white to-cyan-100 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-700 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]">
              聚时空数据之核，创市场化服务之翼
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-8 rounded-full shadow-[0_0_20px_rgba(96,165,250,0.8)] animate-pulse group-hover:w-48 transition-all duration-1000" />
          </div>
          
          <p className="text-blue-50 text-xl md:text-2xl max-w-4xl leading-relaxed font-light drop-shadow-[0_2px_15_rgba(0,0,0,0.8)] opacity-90 transition-opacity hover:opacity-100">
            领航时空引擎・智启无限可能 <span className="mx-2 opacity-30">|</span> 构筑数字底座・解锁未来图景
          </p>
          
          <button 
            onClick={() => onNavigate('resource')}
            className="group px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full font-black text-xl flex items-center space-x-4 transition-all transform hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] active:scale-95 border border-white/10"
          >
            <span>立即探索时空资源</span>
            <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-300" />
          </button>
        </div>

        {/* Gradient for smooth transition between sections */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-20" />
      </section>

      {/* 2. 全要素时空数据基座 */}
      <section className="py-40 px-6 relative overflow-hidden bg-[#020617] group/section2">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-[2]" />
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
              className="w-full h-full object-cover scale-125 mix-blend-screen animate-[pulse_12s_ease-in-out_infinite] transition-transform duration-[3000ms] group-hover/section2:scale-110"
              alt="Background"
            />
          </div>

          {[...Array(120)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            return (
              <div 
                key={`p-v2-${i}`}
                className={`absolute opacity-0 animate-[float-particle-complex_15s_linear_infinite] z-[1] ${i % 15 === 0 ? 'text-[8px] text-blue-400 font-bold' : 'bg-blue-300 rounded-full'}`}
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 15 + 's',
                  animationDuration: Math.random() * 10 + 10 + 's',
                  boxShadow: i % 15 !== 0 ? `0 0 ${size * 5}px rgba(59, 130, 246, 0.6)` : 'none'
                }}
              >
                {i % 15 === 0 && '+'}
              </div>
            );
          })}
        </div>

        <div className="max-w-[1150px] mx-auto space-y-20 relative z-10">
          <div className="space-y-6 border-l-4 border-blue-500 pl-8 transition-all duration-700 hover:pl-12">
            <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter animate-[text-glow-pulse_4s_ease-in-out_infinite] cursor-default">
              全要素时空数据基座
            </h2>
            <p className="text-blue-100/80 text-xl max-w-2xl font-light">整合天、空、地全天候多维数据，构建实时更新的时空资产库。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foundationData.map((item, idx) => {
              const isActive = idx === activeFoundationIndex;
              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveFoundationIndex(idx)}
                  className={`relative rounded-[2.5rem] overflow-hidden border transition-all duration-500 group/card h-[530px] flex flex-col ${
                    isActive 
                    ? 'bg-[#0f172a] border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.15)] scale-[1.02]' 
                    : 'bg-[#0b101e] border-white/5 hover:border-blue-500/50 hover:bg-[#0f172a] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]'
                  }`}
                >
                  {/* Image Area */}
                  <div className="h-52 relative overflow-hidden shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive 
                        ? 'opacity-90 scale-105' 
                        : 'opacity-40 grayscale group-hover/card:grayscale-0 group-hover/card:opacity-90 group-hover/card:scale-105'
                      }`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b101e] via-[#0b101e]/20 to-transparent" />
                    {isActive && (
                      <div className="absolute inset-0 ring-1 ring-inset ring-blue-500/20 pointer-events-none rounded-t-[2.5rem]" />
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex-1 flex flex-col justify-between relative">
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-3.5 rounded-2xl transition-all duration-500 ${
                          isActive 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                          : 'bg-white/5 text-blue-400 group-hover/card:bg-blue-600 group-hover/card:text-white'
                        }`}>
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light min-h-[60px]">
                        {item.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400 font-medium group-hover/card:border-white/10 group-hover/card:text-gray-300 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <div className="pt-8 flex justify-end">
                      <button 
                        onClick={() => onNavigate(item.targetPage)}
                        className={`flex items-center space-x-2 text-sm font-bold transition-all ${
                        isActive 
                        ? 'px-6 py-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-900/30 hover:bg-blue-500' 
                        : 'text-gray-500 group-hover/card:text-blue-400 group-hover/card:translate-x-1'
                      }`}>
                        <span>浏览目录</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 智能算法矩阵 */}
      <section className="py-40 bg-[#020617] border-y border-white/5 relative overflow-hidden group/algo">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.15),transparent_70%)] animate-pulse" />
           {[...Array(15)].map((_, i) => (
             <div key={i} className="absolute w-px h-64 bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent opacity-20 animate-[slide-down_8s_linear_infinite]" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8}s` }} />
           ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">
          <div className="flex flex-col items-end space-y-6 transition-all duration-1000">
            <div className="relative group/title text-right border-r-4 border-indigo-500 pr-8 hover:pr-12 transition-all duration-500">
              <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter relative z-10 transition-all group-hover/title:text-indigo-200 group-hover/title:[text-shadow:0_0_20px_rgba(129,140,248,0.5)]">
                智能算法矩阵
              </h2>
              <p className="text-indigo-100/70 text-xl max-w-2xl font-light pt-6">
                深度融合 AI 与遥感物理模型，打造全流程自动化时空分析链条。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-48">
            {[
              { 
                title: '地物智能分类', 
                desc: '基于高性能语义分割技术架构，完成耕地、林地、水系、农田及城镇用地的亚米级精准识别提取与自动化成图。', 
                tags: ['语义分割', '全要素覆盖', '多级分类'],
                icon: <Layers size={24} />,
                image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
                index: '01'
              },
              { 
                title: '精细目标提取', 
                desc: '基于实例分割核心算法，精准捕捉违章建筑、城市变化及光伏巡检关键节点，实现城市风险动态感知。', 
                tags: ['目标检测', '实例提取', '设施普查'],
                icon: <Scan size={24} />,
                image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
                index: '02'
              },
              { 
                title: '动态变化检测', 
                desc: '依托多时相孪生网络架构，深度融合多源异构数据，精准捕捉违规用地图斑、植被覆盖变化及灾害扩散路径。', 
                tags: ['多期比对', '卫片执法', '时序分析'],
                icon: <GitCompare size={24} />,
                image: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&w=1200&q=80',
                index: '03'
              },
              { 
                title: '多维超分重建', 
                desc: '采用生成对抗网络 (GAN) 对低分辨率影像进行亚像素级纹理增强，还原真实地表细节与空间轮廓。', 
                tags: ['亚像素重建', 'GAN修复', '影像增强'],
                icon: <Maximize2 size={24} />,
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
                index: '04'
              },
            ].map((algo, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center gap-12 md:gap-32 group transition-all duration-700 ${
                  idx % 2 === 0 ? 'md:flex-row text-left' : 'md:flex-row-reverse text-right'
                } hover:bg-white/5 rounded-[4rem] p-8 -m-8`}
              >
                <div className="flex-[1.2] space-y-8 transition-all duration-700">
                  <div className="space-y-3">
                    <div className={`flex items-center space-x-4 ${idx % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                       <span className="text-indigo-500/30 font-mono text-4xl font-normal block tracking-widest group-hover:text-indigo-500/80 transition-all">{algo.index}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-normal text-white group-hover:text-indigo-400 transition-colors duration-500">{algo.title}</h3>
                  </div>
                  <p className="text-indigo-50/60 text-xl leading-relaxed font-light group-hover:text-indigo-50/90 transition-colors">{algo.desc}</p>
                  
                  <div className={`flex flex-wrap gap-2 pt-2 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {algo.tags.map(tag => (
                      <span key={tag} className="flex items-center space-x-1.5 px-5 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-xs text-indigo-200 font-normal group-hover:bg-indigo-500/20 group-hover:border-indigo-400 group-hover:scale-105 transition-all cursor-default">
                        <CheckCircle2 size={12} className="text-indigo-500" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-indigo-500/50 transition-all duration-700 shadow-2xl">
                  <img src={algo.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" alt={algo.title} />
                  <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                     <div className="absolute inset-x-0 top-0 h-1 bg-indigo-400/60 shadow-[0_0_25px_rgba(129,140,248,1)] animate-[scan_4s_linear_infinite]" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button 
                      onClick={() => onNavigate('intelligent-analysis')}
                      className="bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2"
                    >
                      <span>进入智能分析</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 与开发者共创未来场景 */}
      <section className="py-48 px-6 relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#1a103d] to-[#020617]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto space-y-28 relative z-10 text-center">
          <div className="space-y-8 group/title">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-2 transition-transform duration-700 group-hover/title:scale-105">与开发者共创未来场景</h2>
            <p className="text-blue-100/60 text-xl max-w-3xl mx-auto font-light leading-relaxed group-hover/title:text-blue-100/90 transition-colors">
              开放时空底座，赋能场景创新。通过强大的 AI 与算力支撑，让每个创意精准落地。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="group relative overflow-hidden p-1 bg-[#2e1065]/30 rounded-[4rem] transition-all duration-700 hover:shadow-[0_0_80px_rgba(139,92,246,0.3)] hover:-translate-y-2">
              <div className="absolute top-10 right-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="flex flex-col items-center space-y-[-14px]">
                  <Box size={24} className="text-purple-300 animate-[stack-up-fade_3s_ease-in-out_infinite]" />
                  <Box size={24} className="text-purple-300 animate-[stack-up-fade_3s_ease-in-out_infinite_1s]" />
                  <Box size={24} className="text-purple-300 animate-[stack-up-fade_3s_ease-in-out_infinite_2s]" />
                </div>
              </div>
              
              <div className="relative z-10 p-12 bg-[#020617]/90 backdrop-blur-3xl rounded-[3.8rem] flex flex-col justify-between h-full border border-white/5 group-hover:border-purple-500/40 min-h-[520px]">
                <div className="space-y-10 text-left">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-purple-500/10 rounded-3xl animate-pulse group-hover:scale-125 transition-transform" />
                    <BrainCircuit size={48} className="text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors duration-500">云端模型训练</h3>
                    <p className="text-gray-400 text-xl leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                      提供弹性算力底座，支持海量时空样本的大规模并行训练。预置多种地理大模型基底，赋能用户快速定制专属业务解译模型。
                    </p>
                    <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-bold transition-all group/link pt-2">
                      <span>立即开始模型训练</span>
                      <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden p-1 bg-[#2e1065]/30 rounded-[4rem] transition-all duration-700 hover:shadow-[0_0_80px_rgba(37,99,235,0.3)] hover:-translate-y-2">
              <div className="absolute bottom-12 right-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="relative w-20 h-20 animate-[orbit-rotate_4s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,1)]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,1)]" />
                </div>
              </div>

              <div className="relative z-10 p-12 bg-[#020617]/90 backdrop-blur-3xl rounded-[3.8rem] flex flex-col justify-between h-full border border-white/5 group-hover:border-blue-500/40 min-h-[520px]">
                <div className="space-y-10 text-left">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full group-hover:scale-125 transition-transform" />
                    <Bot size={48} className="text-blue-400 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">AI智能体 (Agents)</h3>
                    <p className="text-gray-400 text-xl leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                      构建具备感知、思考与执行能力的行业专家 Agent。通过自然语言交互实现时空资产检索、复杂分析链条编排及自动化决策生成。
                    </p>
                    <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-bold transition-all group/link pt-2">
                      <span>部署您的智能体</span>
                      <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 新闻资讯版块 (Compact Version) */}
      <section className="py-32 px-6 relative bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-6">
            <div className="relative group/title border-l-4 border-blue-500 pl-8 hover:pl-12 transition-all duration-500">
              <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter relative z-10 transition-all group-hover/title:text-blue-200 group-hover/title:[text-shadow:0_0_20px_rgba(59,130,246,0.5)]">
                新闻资讯 <span className="text-blue-500 group-hover/title:text-blue-300 transition-colors">.</span>
              </h2>
              <p className="text-blue-100/70 text-lg font-light max-w-xl pt-6 transition-all group-hover/title:text-blue-100/90">
                聚焦时空信息领域前沿动态，解读行业发展趋势，分享技术创新成果。
              </p>
            </div>
            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group mb-2 md:mb-0">
              <span className="text-sm font-bold uppercase tracking-widest">查看更多资讯</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* News Grid - Compact & Equal Height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[420px]">
            {/* Featured News (Left) */}
            <div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0b101e] hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full">
              <div className="h-[55%] relative overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&w=1200&q=80" 
                  alt="Featured News" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b101e] via-transparent to-transparent opacity-90" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs text-gray-500 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>2023-12-15</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
                    光谷信息发布新一代时空智能服务平台，引领行业数字化转型
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2">
                    平台基于完全自主可控的云原生架构，融合了高分遥感、北斗导航与人工智能技术，为自然资源、应急管理、智慧城市等领域提供全链路的时空信息智能服务。
                  </p>
                </div>
                <button className="text-blue-500 font-bold text-xs flex items-center space-x-2 group/btn pt-2">
                  <span>阅读全文</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* News List (Right) */}
            <div className="flex flex-col gap-3 h-full justify-between">
              {[
                {
                  title: '自然资源部：全面推进实景三维中国建设，夯实数字中国时空基底',
                  date: '2023-12-10',
                  tag: '政策解读',
                  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80'
                },
                {
                  title: '国产高分卫星影像数据处理效率提升300%，AI算法立大功',
                  date: '2023-12-05',
                  tag: '技术突破',
                  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80'
                },
                {
                  title: '通导遥一体化应用场景创新大赛圆满落幕，数十个优秀项目脱颖而出',
                  date: '2023-11-28',
                  tag: '行业活动',
                  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80'
                }
              ].map((news, idx) => (
                <div key={idx} className="flex-1 flex gap-4 group cursor-pointer p-3 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 items-center">
                  <div className="w-28 h-full shrink-0 rounded-xl overflow-hidden bg-gray-800 relative">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center h-full py-1 space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] text-gray-500">{news.date}</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-200 leading-snug group-hover:text-white transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. 寻找时空资源之旅 */}
      <section className="py-60 px-6 relative overflow-hidden bg-[#00040f] group/journey">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen transition-transform duration-[4000ms] group-hover/journey:scale-125" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center space-y-24">
          <div className="space-y-8 w-full relative">
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl font-normal relative z-10 whitespace-nowrap overflow-visible
                bg-gradient-to-r from-blue-200 via-white to-blue-400 bg-clip-text text-transparent
                drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] px-4 transition-all duration-1000 group-hover/journey:drop-shadow-[0_0_40px_rgba(59,130,246,0.6)] group-hover/journey:scale-105"
              style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
            >
              寻找时空资源之旅
            </h2>
            <p className="text-blue-100/60 text-2xl font-light leading-relaxed pt-12 max-w-4xl mx-auto transition-colors duration-700 group-hover/journey:text-blue-100/90">
              穿梭于星际数据瀚海，解码每一处坐标背后的价值密码；<br />从深空指令到价值发现，赋能您的时空智能信息探索之路。
            </p>
          </div>

          <div className="pt-12">
            <button 
              onClick={() => onNavigate('resource')}
              className="group/btn relative px-12 py-5 bg-white text-black rounded-full font-black text-xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:scale-110 active:scale-95 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-blue-600 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover/btn:text-white flex items-center space-x-4">
                <span>开启资源探索大门</span>
                <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 底部版权信息 (Footer) */}
      <footer className="bg-[#0b101e] border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
            {/* Left Side Info */}
            <div className="flex-1 space-y-8">
              {/* Logos Area */}
              <div className="flex items-center space-x-6">
                 {/* Logo Placeholder */}
                 <div className="flex items-center space-x-2 text-white">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="font-black italic">V</span>
                    </div>
                    <div className="text-2xl font-black italic tracking-tighter">光谷信息</div>
                 </div>
                 <div className="h-8 w-px bg-gray-700"></div>
                 <div className="flex flex-col justify-center">
                    <span className="text-lg font-bold text-white leading-tight">市场化服务专区</span>
                    <span className="text-[10px] uppercase tracking-widest text-blue-500 font-medium">Commercial Services</span>
                 </div>
              </div>

              {/* Text Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
                 <div className="space-y-1">
                    <span className="text-gray-500">指导单位：</span>
                    <span className="text-gray-300">湖北省地图院（湖北省地理信息数据应用中心）</span>
                 </div>
                 <div className="space-y-1">
                    <span className="text-gray-500">主办单位：</span>
                    <span className="text-gray-300">武汉光谷信息技术股份有限公司</span>
                 </div>
                 <div className="space-y-1">
                    <span className="text-gray-500">地址：</span>
                    <span className="text-gray-300">湖北省武汉市东湖新技术开发区高新大道888号高农生物园总部A区19#楼</span>
                 </div>
                 <div className="space-y-1">
                    <span className="text-gray-500">客服：</span>
                    <span className="text-white font-bold text-lg">400-6874-109</span>
                 </div>
              </div>
            </div>

            {/* Right Side QR Codes */}
            <div className="flex gap-8 shrink-0">
               <div className="flex flex-col items-center space-y-3">
                  <div className="w-28 h-28 bg-white p-2 rounded-xl">
                     <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=GuangguInfo" alt="光谷信息公众号" className="w-full h-full" />
                  </div>
                  <span className="text-xs text-gray-400">光谷信息公众号</span>
               </div>
               <div className="flex flex-col items-center space-y-3">
                  <div className="w-28 h-28 bg-white p-2 rounded-xl">
                     <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=eTuShengShi" alt="e图省事小程序" className="w-full h-full" />
                  </div>
                  <span className="text-xs text-gray-400">e图省事小程序</span>
               </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
             <span>鄂ICP备14010088号-1</span>
             <div className="flex items-center gap-1">
                <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" className="w-4 h-4 opacity-50" alt="police" />
                <span>鄂公网安备42018502001536号</span>
             </div>
             <span>武汉光谷信息技术股份有限公司版权所有</span>
          </div>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes text-glow-pulse {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.1); }
          50% { text-shadow: 0 0 30px rgba(37,99,235,0.4), 0 0 10px rgba(129,140,248,0.2); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes float-particle-complex {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { transform: translateY(-200px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-400px) scale(0.8); opacity: 0; }
        }
        @keyframes stack-up-fade {
          0% { transform: translateY(20px) scale(0.7); opacity: 0; }
          30% { opacity: 0.7; }
          50% { transform: translateY(0) scale(1); opacity: 0.9; }
          70% { opacity: 0.7; }
          100% { transform: translateY(-20px) scale(0.7); opacity: 0; }
        }
        @keyframes orbit-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-random-advanced {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -40px) scale(1.1); }
          50% { transform: translate(-20px, -80px) scale(0.9); }
          75% { transform: translate(-40px, -30px) scale(1.05); }
        }
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-short {
          animation: bounce-short 1s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}} />
    </div>
  );
};

export default HomeView;
