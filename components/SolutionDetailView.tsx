
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Building2, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Globe, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  FileText,
  Box
} from 'lucide-react';

interface SolutionDetailViewProps {
  solutionId: string | null;
  onBack: () => void;
}

const SolutionDetailView: React.FC<SolutionDetailViewProps> = ({ solutionId, onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'advantage' | 'arch' | 'cases'>('intro');

  // Mock data - In a real app, fetch based on solutionId
  const solutionData = {
    title: '智慧城市数字化底座解决方案',
    subtitle: 'Smart City Digital Foundation',
    desc: '集成高精度实景三维建模、卫星遥感监测与实时物联感知数据，构建城市运行生命体征监测体系。打通城市物理空间与数字空间的映射壁垒，赋能城市精细化管理、应急响应与规划决策。',
    tags: ['数字孪生', '城市治理', '时空大数据', 'AI赋能'],
    stats: [
      { label: '数据融合维度', value: '12+' },
      { label: '空间定位精度', value: 'cm级' },
      { label: '事件响应速度', value: '<3s' },
      { label: '覆盖城市数量', value: '40+' },
    ],
    advantages: [
      { 
        title: '全域感知能力', 
        desc: '融合天（卫星）、空（无人机）、地（传感器）多维数据，实现城市全要素、全天候的动态感知。',
        icon: <Globe size={24} /> 
      },
      { 
        title: '精准映射还原', 
        desc: '基于倾斜摄影与激光雷达技术，构建L3级高精度实景三维模型，还原真实城市肌理。',
        icon: <Box size={24} /> 
      },
      { 
        title: '智能决策中枢', 
        desc: '内置100+种城市治理AI算法模型，自动识别违建、拥堵、积水等城市病，辅助科学决策。',
        icon: <Cpu size={24} /> 
      },
      { 
        title: '敏捷应急响应', 
        desc: '打通多部门数据壁垒，在突发事件中实现跨部门协同指挥与资源的一键调度。',
        icon: <Zap size={24} /> 
      }
    ],
    cases: [
      {
        title: '某超大城市数字孪生治理平台',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80',
        desc: '构建了覆盖全市域的CIM基础平台，支撑了规划自然资源、住房建设、城市管理等20多个委办局的业务应用。',
        result: ['违建发现率提升300%', '审批效率提高50%']
      },
      {
        title: '滨海新区智慧应急指挥系统',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        desc: '针对台风、风暴潮等灾害，建立“抵御-响应-恢复”全周期韧性管理体系，实现灾情推演与物资精准投放。',
        result: ['应急响应时间缩短40%', '灾损降低15%']
      }
    ]
  };

  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', 
        backgroundSize: '60px 60px' 
      }} />
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 relative z-10 space-y-12">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">返回解决方案列表</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-[3rem] overflow-hidden border border-gray-800 bg-[#0b101e]/80 backdrop-blur-xl shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80" 
              className="w-full h-full object-cover opacity-40" 
              alt="Hero" 
            />
          </div>
          
          <div className="relative z-20 p-12 md:p-20 flex flex-col md:flex-row gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <Building2 size={14} />
                  <span>核心解决方案</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                  {solutionData.title}
                  <span className="block text-2xl md:text-3xl text-gray-500 mt-2 font-light tracking-tight">{solutionData.subtitle}</span>
                </h1>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light border-l-2 border-blue-500/50 pl-6">
                {solutionData.desc}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {solutionData.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-4 content-center">
              {solutionData.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-1 w-40 hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-black text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-bold uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="sticky top-0 z-30 bg-[#020617]/80 backdrop-blur-lg border-y border-gray-800 py-4">
          <div className="flex justify-center space-x-12">
            {[
              { id: 'intro', label: '方案介绍' },
              { id: 'advantage', label: '方案优势' },
              { id: 'arch', label: '方案架构' },
              { id: 'cases', label: '案例应用' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`text-sm font-bold transition-all relative px-4 py-2 ${
                  activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-24 py-10">
          
          {/* Introduction */}
          <section id="intro" className="scroll-mt-32 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
              <h2 className="text-3xl font-black text-white">方案介绍</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  随着城市化进程的加速，传统城市管理模式面临着数据孤岛严重、感知手段单一、决策响应滞后等挑战。
                </p>
                <p>
                  本方案依托自主可控的通导遥一体化服务平台，融合高分辨率卫星影像、倾斜摄影三维模型、城市BIM模型及IoT感知数据，构建全空间、全要素、全过程的城市数字底座。通过AI智能解译与大数据关联分析，为城市规划、建设、管理、运行全生命周期提供精准的时空信息服务。
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {['全要素数字化', '全状态可视化', '全场景智能化', '全周期闭环化'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 size={18} className="text-blue-500" />
                      <span className="text-gray-300 text-sm font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  alt="Intro" 
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section id="advantage" className="scroll-mt-32 space-y-12">
            <div className="flex items-center space-x-4">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
              <h2 className="text-3xl font-black text-white">方案优势</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutionData.advantages.map((adv, idx) => (
                <div key={idx} className="bg-[#0b101e] border border-gray-800 p-8 rounded-[2rem] hover:border-blue-500/50 hover:bg-[#0f172a] transition-all group duration-500">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {adv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section id="arch" className="scroll-mt-32 space-y-12">
            <div className="flex items-center space-x-4">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
              <h2 className="text-3xl font-black text-white">方案架构</h2>
            </div>
            <div className="bg-[#0b101e] border border-gray-800 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px]" />
              
              <div className="relative z-10 flex flex-col space-y-6">
                {/* Application Layer */}
                <div className="bg-blue-900/10 border border-blue-500/30 rounded-2xl p-6 text-center">
                  <div className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">智慧应用层</div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {['规划建设', '城市管理', '应急指挥', '交通出行', '生态环保'].map(item => (
                      <div key={item} className="bg-[#020617] py-3 rounded-xl border border-blue-500/20 text-gray-300 font-bold text-sm hover:text-white hover:border-blue-500/50 transition-colors">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-gray-700"><ArrowRight className="rotate-90" /></div>

                {/* Platform Layer */}
                <div className="bg-indigo-900/10 border border-indigo-500/30 rounded-2xl p-6 text-center">
                  <div className="text-indigo-400 font-bold mb-4 uppercase tracking-widest text-sm">时空智能中台</div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-[#020617] p-4 rounded-xl border border-indigo-500/20 space-y-2">
                      <div className="text-white font-bold text-sm">数据中台</div>
                      <div className="text-[10px] text-gray-500">多源汇聚 · 融合处理 · 资产管理</div>
                    </div>
                    <div className="flex-1 bg-[#020617] p-4 rounded-xl border border-indigo-500/20 space-y-2">
                      <div className="text-white font-bold text-sm">AI中台</div>
                      <div className="text-[10px] text-gray-500">模型训练 · 智能解译 · 知识图谱</div>
                    </div>
                    <div className="flex-1 bg-[#020617] p-4 rounded-xl border border-indigo-500/20 space-y-2">
                      <div className="text-white font-bold text-sm">业务中台</div>
                      <div className="text-[10px] text-gray-500">流程引擎 · 统一认证 · 消息服务</div>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-gray-700"><ArrowRight className="rotate-90" /></div>

                {/* Infrastructure Layer */}
                <div className="bg-gray-800/20 border border-gray-700/30 rounded-2xl p-6 text-center">
                  <div className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-sm">基础设施层</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#020617] py-3 rounded-xl border border-gray-700/50 text-gray-400 text-xs">云计算集群</div>
                    <div className="bg-[#020617] py-3 rounded-xl border border-gray-700/50 text-gray-400 text-xs">物联感知网</div>
                    <div className="bg-[#020617] py-3 rounded-xl border border-gray-700/50 text-gray-400 text-xs">安全防护网</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cases */}
          <section id="cases" className="scroll-mt-32 space-y-12">
            <div className="flex items-center space-x-4">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
              <h2 className="text-3xl font-black text-white">案例应用</h2>
            </div>
            <div className="space-y-8">
              {solutionData.cases.map((item, idx) => (
                <div key={idx} className="bg-[#0b101e] border border-gray-800 rounded-[3rem] overflow-hidden flex flex-col md:flex-row group hover:border-blue-500/30 transition-all">
                  <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                  </div>
                  <div className="flex-1 p-10 md:p-12 space-y-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                    <div className="space-y-3 pt-2">
                      {item.result.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-center space-x-3">
                          <CheckCircle2 size={16} className="text-green-500" />
                          <span className="text-sm text-gray-300 font-bold">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SolutionDetailView;
