
import React from 'react';
import { 
  Database, 
  Search, 
  Satellite, 
  Activity, 
  Globe, 
  HardDrive, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Box,
  Layers,
  Sparkles,
  Camera,
  Radar,
  Mountain,
  Package,
  Map as MapIcon,
  ChevronRight,
  MonitorCheck,
  Flame,
  Droplets,
  AlertTriangle,
  History,
  FileSearch,
  CloudLightning,
  ShieldAlert,
  Wind,
  Compass,
  ThermometerSnowflake,
  ScanEye,
  Rocket,
  Shield,
  Cloud,
  Network
} from 'lucide-react';

interface ResourceViewProps {
  onEnterExplorer: () => void;
}

const ResourceView: React.FC<ResourceViewProps> = ({ onEnterExplorer }) => {
  const stats = [
    { label: '在线卫星星座', value: '180+', icon: <Satellite size={20} />, color: 'text-blue-400', detail: '实时接收' },
    { label: '行业资产规模', value: '100PB+', icon: <HardDrive size={20} />, color: 'text-indigo-400', detail: '安全存储' },
    { label: '每日新增观测', value: '80TB', icon: <Activity size={20} />, color: 'text-cyan-400', detail: '全天候更新' },
    { label: '全球地面站网', value: '24处', icon: <Globe size={20} />, color: 'text-blue-500', detail: '高速回传' },
  ];

  const categories = [
    { 
      name: '光学遥感', 
      desc: '提供亚米级高分辨率全色、多光谱及高光谱影像，覆盖全球重点区域。', 
      icon: <Camera />, 
      tags: ['GF-1/2/6', 'JL-1', 'Landsat-8/9'],
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
      count: '850K+景'
    },
    { 
      name: '雷达监测', 
      desc: '全天时、全天候合成孔径雷达影像，支持厘米级微小形变监测。', 
      icon: <Radar />, 
      tags: ['GF-3', 'Sentinel-1', 'TerraSAR-X'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      count: '420K+景'
    },
    { 
      name: '数字孪生', 
      desc: '高精度实景三维、倾斜摄影及机载激光雷达点云，还原物理世界。', 
      icon: <Box />, 
      tags: ['三维模型', 'Lidar点云', 'Mesh纹理'],
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80',
      count: '3500+km²'
    },
    { 
      name: '时空矢量', 
      desc: '涵盖全球路网、水系、植被、土地覆盖等全要素基础地理矢量数据。', 
      icon: <Layers />, 
      tags: ['路网专题', 'POI', '地貌要素'],
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
      count: '240M+条'
    },
  ];

  const disasterDataAssets = [
    {
      title: '洪涝受灾演变监测',
      type: '多时相SAR叠置分析',
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
      status: '实时更新',
      icon: <Droplets className="text-blue-400" size={18} />,
      accent: 'border-blue-500/30'
    },
    {
      title: '地震形变干涉场',
      type: 'D-InSAR相位分析',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      status: '归档资源',
      icon: <Activity className="text-orange-400" size={18} />,
      accent: 'border-orange-500/30'
    },
    {
      title: '林火高温异常点',
      type: '短波/长波红外探测',
      image: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=800&q=80',
      status: '24H响应',
      icon: <Flame className="text-red-400" size={18} />,
      accent: 'border-red-500/30'
    }
  ];

  const constellations = [
    { name: '高分系列', orbits: '低地球轨道', satellites: 'GF-1, 2, 3, 4, 5, 6, 7', usage: '高精度观测' },
    { name: '吉林一号', orbits: '太阳同步轨道', satellites: '光学/视频 100+颗', usage: '高频重访' },
    { name: '哨兵系列', orbits: '近极地轨道', satellites: 'Sentinel-1, 2, 3, 5', usage: '全球变化监测' },
  ];

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-[#020617] text-white scroll-smooth pb-32">
      {/* Cinematic Hero Section */}
      <section className="relative pt-24 pb-40 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1920&q=80')] opacity-5 mix-blend-overlay pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center space-y-12">
          <div className="flex items-center space-x-3 bg-blue-600/10 border border-blue-500/20 px-5 py-2 rounded-full text-blue-400 text-sm font-bold tracking-[0.1em] uppercase animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles size={16} className="animate-pulse" />
            <span>行业资源中心 · 开放、智能、全要素</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
            汇聚全球时空资产<br /><span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">赋能产业智能变革</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed font-light">
            打造“通导遥”一体化数字底座，通过海量亚米级观测数据与AI解译模型，<br />为千行百业提供决策支撑与数字化引擎。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 w-full justify-center">
            <div className="relative group w-full sm:w-[600px]">
              <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within:text-blue-500 transition-colors">
                <Search size={22} />
              </div>
              <input 
                type="text" 
                placeholder="搜索卫星载荷、地理专题、三维资源..." 
                className="w-full bg-[#0b101e]/80 border border-white/10 rounded-3xl py-6 pl-14 pr-40 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#111827] transition-all text-xl backdrop-blur-2xl shadow-2xl"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 px-8 py-3.5 rounded-2xl font-black transition-all active:scale-95 shadow-xl shadow-blue-900/40 text-lg">
                检索资源
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Status Widgets */}
      <section className="relative -mt-20 z-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="group bg-[#0b101e]/90 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center justify-center space-y-4 hover:border-blue-500/50 transition-all shadow-2xl hover:translate-y-[-4px]">
              <div className={`${stat.color} p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                {stat.icon}
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white tracking-tighter mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Satellite Constellations - New Industry Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-black text-white border-l-4 border-blue-500 pl-6">核心星座图鉴</h2>
            <p className="text-gray-500 max-w-2xl font-light">连接全球主流卫星运营服务商，实现跨星座协同观测与快速数据分发。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {constellations.map((con, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#161b2a] to-[#0b101e] border border-white/5 rounded-[2rem] p-8 space-y-6 hover:border-blue-500/30 transition-all group">
                <div className="flex items-center justify-between">
                  <Rocket className="text-blue-500 group-hover:rotate-45 transition-transform" size={24} />
                  <div className="px-3 py-1 bg-blue-500/10 rounded-full text-[10px] text-blue-400 font-bold uppercase">{con.orbits}</div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{con.name}</h3>
                  <p className="text-sm text-blue-400 font-medium">{con.satellites}</p>
                </div>
                <div className="pt-4 border-t border-white/5 text-gray-500 text-xs italic">
                  业务领域: {con.usage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industry: Disaster Prevention and Mitigation */}
      <section className="py-32 px-6 relative bg-[#0b101e]/30 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center space-x-3 text-red-500 font-black tracking-widest text-sm uppercase">
                <ShieldAlert size={20} className="animate-pulse" />
                <span>Industry Deep Dive · 专题库</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                防灾减灾 <span className="text-red-600">Spatial</span> Intelligence
              </h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                面向应急管理部及行业用户，整合多维异构数据，构建灾前预判、灾中响应、灾后评估的闭环服务体系。通过AI大模型实现“分钟级”损毁目标智能提取。
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 px-5 py-2.5 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm font-bold shadow-lg shadow-red-900/10">
                  <Activity size={16} />
                  <span>24/7 实时监测网</span>
                </div>
                <div className="flex items-center space-x-2 px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400 text-sm font-bold shadow-lg shadow-blue-900/10">
                  <ScanEye size={16} />
                  <span>AI 变化检测</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[480px] bg-gradient-to-br from-[#1a0b0b] to-[#111827] rounded-[3.5rem] p-12 border border-red-500/20 shadow-[0_40px_100px_rgba(239,68,68,0.1)] relative overflow-hidden group transition-all duration-700 hover:border-red-500/40">
              <div className="relative z-10 space-y-10">
                <div className="space-y-3">
                  <div className="text-red-500 font-mono text-[10px] font-black uppercase tracking-[0.3em]">System Operational Status</div>
                  <div className="text-4xl font-black text-white">应急调度中枢</div>
                </div>
                <div className="space-y-6">
                  {[
                    { label: '活跃监测灾点', value: '14 处', detail: '重点覆盖' },
                    { label: '平均评估时效', value: '1.8 H', detail: '解译完成' },
                    { label: 'SAR穿云覆盖率', value: '100%', detail: '全天候' }
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-end border-b border-white/5 pb-4 group/item">
                      <div className="space-y-1">
                        <span className="text-gray-500 text-xs font-medium">{item.label}</span>
                        <div className="text-[10px] text-red-500/60 font-bold uppercase tracking-tighter opacity-0 group-hover/item:opacity-100 transition-opacity">{item.detail}</div>
                      </div>
                      <span className="text-2xl font-black text-white group-hover/item:text-red-500 transition-colors">{item.value}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-[1.5rem] font-black text-white shadow-xl shadow-red-900/40 transition-all active:scale-95 flex items-center justify-center space-x-3 text-lg">
                  <span>进入应急决策工作台</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {disasterDataAssets.map((asset, idx) => (
              <div key={idx} className={`group relative bg-[#0b101e] rounded-[3rem] overflow-hidden border ${asset.accent} hover:border-white/20 transition-all duration-700 shadow-2xl h-[420px] flex flex-col`}>
                <div className="h-56 relative overflow-hidden">
                  <img src={asset.image} alt={asset.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b101e] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center space-x-2 border border-white/10">
                     <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">{asset.status}</span>
                  </div>
                  <div className="absolute bottom-6 left-8 p-3.5 bg-[#0b101e]/90 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-2xl transform group-hover:scale-110 group-hover:bg-red-500/10 transition-all duration-500">
                    {asset.icon}
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-4">
                    <div className="text-[10px] text-red-500/80 font-black uppercase tracking-[0.2em]">{asset.type}</div>
                    <h3 className="text-2xl font-black text-white leading-tight group-hover:text-red-400 transition-colors">{asset.title}</h3>
                  </div>
                  <div className="flex items-center justify-between pt-8">
                    <button className="flex items-center space-x-2 text-sm font-bold text-gray-400 hover:text-white transition-colors group/btn">
                      <span>调取数据</span>
                      <History size={16} className="group-hover/btn:rotate-[-45deg] transition-transform" />
                    </button>
                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-600 group-hover:text-red-500 group-hover:border-red-500/30 transition-all">
                       <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Areas: Product Matrix */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-blue-500 font-black tracking-widest text-sm uppercase">
                <Package size={16} />
                <span>Resource Taxonomy</span>
              </div>
              <h2 className="text-5xl font-black text-white">基础数据矩阵</h2>
              <p className="text-gray-500 text-lg max-w-xl font-light">
                整合全球主流商业卫星星座，提供全天候、全天时、多尺度的观测支持。
              </p>
            </div>
            <button 
              onClick={onEnterExplorer}
              className="flex items-center space-x-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all group"
            >
              <span>进入时空浏览器</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="group flex flex-col bg-[#0b101e] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/40 transition-all shadow-2xl h-full">
                <div className="h-56 overflow-hidden relative">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b101e] via-transparent to-transparent" />
                  <div className="absolute top-6 right-6 px-3 py-1 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-[10px] font-bold text-blue-400">
                    {cat.count}
                  </div>
                </div>
                
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-blue-400 p-2.5 bg-blue-500/10 rounded-xl">
                        {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
                      </div>
                      <h3 className="text-2xl font-black text-white">{cat.name}</h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-sm font-light min-h-[60px]">{cat.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-white/5 px-2.5 py-1 rounded-md text-gray-400 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="mt-10 w-full py-4 bg-[#161b2a] border border-white/5 hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/30 rounded-2xl text-sm font-black transition-all group flex items-center justify-center space-x-2">
                    <span>浏览目录</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Ecosystem - Final Industry Component */}
      <section className="py-32 px-6 bg-[#020617] relative">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: '安全合规', icon: <Shield className="text-indigo-400" />, desc: '满足涉密影像管理标准，支持内网离线化部署与权限精细管控。' },
              { title: '弹性算力', icon: <Network className="text-cyan-400" />, desc: '分布式计算集群，支持海量TB级数据的高并发自动化生产。' },
              { title: '开放生态', icon: <Globe className="text-blue-400" />, desc: '开放标准API与SDK，支持第三方行业应用快速集成与调用。' }
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-6 items-start">
                <div className="shrink-0 p-4 bg-white/5 rounded-2xl">{item.icon}</div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[4.5rem] p-20 text-center space-y-12 relative overflow-hidden shadow-[0_40px_120px_rgba(37,99,235,0.4)]">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            探索无限可能<br />开启时空智能新篇章
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 relative z-10">
            <button className="bg-white text-blue-900 px-16 py-7 rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95 group flex items-center space-x-3">
              <span>立即申请试用</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-transparent border border-white/40 text-white px-16 py-7 rounded-3xl font-black text-2xl hover:bg-white/10 transition-all backdrop-blur-xl">
              商务合作咨询
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceView;
