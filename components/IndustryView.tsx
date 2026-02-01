
import React from 'react';
import { 
  Building2, 
  Search, 
  TrendingUp, 
  Factory, 
  ArrowRight, 
  PieChart, 
  MapPin, 
  Zap, 
  Box, 
  Briefcase, 
  LineChart, 
  Landmark, 
  Sparkles, 
  ChevronRight,
  Gem,
  Cpu,
  Network,
  Activity,
  BarChart3,
  Users
} from 'lucide-react';

const IndustryView: React.FC = () => {
  const stats = [
    { label: '入驻企业总数', value: '12,580', icon: <Building2 size={20} />, color: 'text-blue-400', detail: '较上月 +120' },
    { label: '重点产业园区', value: '45个', icon: <Factory size={20} />, color: 'text-indigo-400', detail: '国家级/省级' },
    { label: '产业产值规模', value: '1,200亿', icon: <TrendingUp size={20} />, color: 'text-cyan-400', detail: '同比增长 15%' },
    { label: '产业链协同', value: '8条', icon: <Network size={20} />, color: 'text-purple-500', detail: '全链条覆盖' },
  ];

  const categories = [
    { 
      name: '重点园区', 
      desc: '汇聚国家级高新区、经开区及特色产业园数据，提供园区规划、配套设施及招商政策概览。', 
      icon: <Landmark />, 
      tags: ['光谷生物城', '未来科技城', '智造产业园'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      count: '45个'
    },
    { 
      name: '名企名录', 
      desc: '收录产业链龙头企业、专精特新“小巨人”及高新技术企业信息，构建企业全景画像。', 
      icon: <Briefcase />, 
      tags: ['龙头企业', '上市公司', '独角兽'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      count: '12k+'
    },
    { 
      name: '招商引资', 
      desc: '整合全省土地资源、楼宇空间及招商项目库，实现产业空间精准匹配与云端考察。', 
      icon: <Gem />, 
      tags: ['土地推介', '厂房租赁', '政策扶持'],
      image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1200&q=80',
      count: '320项'
    },
    { 
      name: '产业大脑', 
      desc: '基于时空大数据与经济运行数据，提供产业图谱分析、补链强链建议及发展趋势研判。', 
      icon: <LineChart />, 
      tags: ['运行监测', '景气指数', '效能评估'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      count: '实时'
    },
  ];

  const featuredClusters = [
    {
      title: '光电子信息产业集群',
      type: '国家级先进制造业集群',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      status: '千亿级',
      icon: <Cpu className="text-blue-400" size={18} />,
      accent: 'border-blue-500/30'
    },
    {
      title: '新能源与智能网联汽车',
      type: '战略性新兴产业',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
      status: '高速增长',
      icon: <Zap className="text-yellow-400" size={18} />,
      accent: 'border-yellow-500/30'
    },
    {
      title: '生命健康产业集群',
      type: '大健康产业基地',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      status: '重点培育',
      icon: <Activity className="text-green-400" size={18} />,
      accent: 'border-green-500/30'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-[#020617] text-white scroll-smooth pb-32">
      {/* Cinematic Hero Section */}
      <section className="relative pt-24 pb-40 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80')] opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center space-y-12">
          <div className="flex items-center space-x-3 bg-indigo-600/10 border border-indigo-500/20 px-5 py-2 rounded-full text-indigo-400 text-sm font-bold tracking-[0.1em] uppercase animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles size={16} className="animate-pulse" />
            <span>产业赋能中心 · 链接、融合、创新</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
            构建数字经济<br /><span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">产业新生态</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed font-light">
            汇聚园区、企业、项目与政策全要素数据，打造“产业大脑+未来工厂”新模式，<br />推动产业链上下游精准对接与协同发展。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 w-full justify-center">
            <div className="relative group w-full sm:w-[600px]">
              <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within:text-indigo-500 transition-colors">
                <Search size={22} />
              </div>
              <input 
                type="text" 
                placeholder="搜索园区、企业、产业链、扶持政策..." 
                className="w-full bg-[#0b101e]/80 border border-white/10 rounded-3xl py-6 pl-14 pr-40 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-[#111827] transition-all text-xl backdrop-blur-2xl shadow-2xl"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-500 px-8 py-3.5 rounded-2xl font-black transition-all active:scale-95 shadow-xl shadow-indigo-900/40 text-lg">
                一键直达
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Status Widgets */}
      <section className="relative -mt-20 z-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="group bg-[#0b101e]/90 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center justify-center space-y-4 hover:border-indigo-500/50 transition-all shadow-2xl hover:translate-y-[-4px]">
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

      {/* Featured Industry Clusters */}
      <section className="py-32 px-6 relative bg-[#0b101e]/30 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center space-x-3 text-indigo-500 font-black tracking-widest text-sm uppercase">
                <Network size={20} className="animate-pulse" />
                <span>Strategic Clusters · 产业集群</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                打造世界级 <span className="text-indigo-500">产业地标</span>
              </h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                聚焦光电子信息、新能源、生命健康等优势领域，绘制精准产业链图谱。通过强链、补链、延链，推动产业集群化、高端化发展。
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400 text-sm font-bold shadow-lg shadow-indigo-900/10">
                  <PieChart size={16} />
                  <span>产业链图谱</span>
                </div>
                <div className="flex items-center space-x-2 px-5 py-2.5 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-purple-400 text-sm font-bold shadow-lg shadow-purple-900/10">
                  <MapPin size={16} />
                  <span>产业地图</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[480px] bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] rounded-[3.5rem] p-12 border border-indigo-500/20 shadow-[0_40px_100px_rgba(99,102,241,0.1)] relative overflow-hidden group transition-all duration-700 hover:border-indigo-500/40">
              <div className="relative z-10 space-y-10">
                <div className="space-y-3">
                  <div className="text-indigo-400 font-mono text-[10px] font-black uppercase tracking-[0.3em]">Economic Indicators</div>
                  <div className="text-4xl font-black text-white">经济运行监测</div>
                </div>
                <div className="space-y-6">
                  {[
                    { label: '工业增加值增速', value: '8.5%', detail: '超预期' },
                    { label: '固定资产投资', value: '450亿', detail: '稳步增长' },
                    { label: '高新企业占比', value: '42%', detail: '结构优化' }
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-end border-b border-white/5 pb-4 group/item">
                      <div className="space-y-1">
                        <span className="text-gray-500 text-xs font-medium">{item.label}</span>
                        <div className="text-[10px] text-indigo-500/60 font-bold uppercase tracking-tighter opacity-0 group-hover/item:opacity-100 transition-opacity">{item.detail}</div>
                      </div>
                      <span className="text-2xl font-black text-white group-hover/item:text-indigo-400 transition-colors">{item.value}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-[1.5rem] font-black text-white shadow-xl shadow-indigo-900/40 transition-all active:scale-95 flex items-center justify-center space-x-3 text-lg">
                  <span>查看详细报表</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {featuredClusters.map((cluster, idx) => (
              <div key={idx} className={`group relative bg-[#0b101e] rounded-[3rem] overflow-hidden border ${cluster.accent} hover:border-white/20 transition-all duration-700 shadow-2xl h-[420px] flex flex-col`}>
                <div className="h-56 relative overflow-hidden">
                  <img src={cluster.image} alt={cluster.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b101e] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center space-x-2 border border-white/10">
                     <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">{cluster.status}</span>
                  </div>
                  <div className="absolute bottom-6 left-8 p-3.5 bg-[#0b101e]/90 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-2xl transform group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                    {cluster.icon}
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-4">
                    <div className="text-[10px] text-indigo-500/80 font-black uppercase tracking-[0.2em]">{cluster.type}</div>
                    <h3 className="text-2xl font-black text-white leading-tight group-hover:text-indigo-400 transition-colors">{cluster.title}</h3>
                  </div>
                  <div className="flex items-center justify-between pt-8">
                    <button className="flex items-center space-x-2 text-sm font-bold text-gray-400 hover:text-white transition-colors group/btn">
                      <span>产业链全景</span>
                      <Network size={16} className="group-hover/btn:rotate-12 transition-transform" />
                    </button>
                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-600 group-hover:text-indigo-500 group-hover:border-indigo-500/30 transition-all">
                       <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Areas: Service Matrix */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-blue-500 font-black tracking-widest text-sm uppercase">
                <Box size={16} />
                <span>Service Matrix</span>
              </div>
              <h2 className="text-5xl font-black text-white">产业服务矩阵</h2>
              <p className="text-gray-500 text-lg max-w-xl font-light">
                围绕产业发展全生命周期，提供从规划选址、招商引资到企业服务的全链条数字化支撑。
              </p>
            </div>
            <button className="flex items-center space-x-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all group">
              <span>进入服务大厅</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="group flex flex-col bg-[#0b101e] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-indigo-500/40 transition-all shadow-2xl h-full">
                <div className="h-56 overflow-hidden relative">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b101e] via-transparent to-transparent" />
                  <div className="absolute top-6 right-6 px-3 py-1 bg-indigo-600/20 backdrop-blur-md border border-indigo-500/30 rounded-full text-[10px] font-bold text-indigo-400">
                    {cat.count}
                  </div>
                </div>
                
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-indigo-400 p-2.5 bg-indigo-500/10 rounded-xl">
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
                  <button className="mt-10 w-full py-4 bg-[#161b2a] border border-white/5 hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-900/30 rounded-2xl text-sm font-black transition-all group flex items-center justify-center space-x-2">
                    <span>立即查看</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Ecosystem */}
      <section className="py-32 px-6 bg-[#020617] relative">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: '政策直通车', icon: <Landmark className="text-purple-400" />, desc: '汇集国家、省、市惠企政策，通过AI算法实现“政策找人”，助力企业精准申报。' },
              { title: '产融对接', icon: <Briefcase className="text-cyan-400" />, desc: '搭建银企对接桥梁，汇聚优质金融产品，为企业提供融资贷款、上市辅导等金融服务。' },
              { title: '人才服务', icon: <Users className="text-blue-400" />, desc: '发布紧缺人才目录，连接高校与企业，提供人才引进、培训及安居保障一站式服务。' }
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
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600 to-blue-800 rounded-[4.5rem] p-20 text-center space-y-12 relative overflow-hidden shadow-[0_40px_120px_rgba(79,70,229,0.4)]">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            加入产业生态<br />共创数字经济未来
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 relative z-10">
            <button className="bg-white text-indigo-900 px-16 py-7 rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95 group flex items-center space-x-3">
              <span>企业入驻申请</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-transparent border border-white/40 text-white px-16 py-7 rounded-3xl font-black text-2xl hover:bg-white/10 transition-all backdrop-blur-xl">
              园区合作咨询
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryView;
