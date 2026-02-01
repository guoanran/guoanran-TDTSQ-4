
import React from 'react';
import { 
  Database, 
  Cpu, 
  Globe, 
  Layers, 
  Server, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Layout, 
  Sprout, 
  Droplets, 
  Trees, 
  ShieldAlert, 
  Building2, 
  Users, 
  Code2, 
  Share2,
  BarChart3,
  Network,
  Sparkles
} from 'lucide-react';

const AboutPlatformView: React.FC = () => {
  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700 pb-20">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', 
        backgroundSize: '60px 60px' 
      }} />
      
      {/* Dynamic Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 relative z-10 space-y-32">
        
        {/* Section 1: Platform Introduction */}
        <section className="space-y-16">
          <div className="space-y-8 animate-in slide-in-from-left duration-700 relative">
            
            {/* Enhanced Background Animation for Title Area */}
            <div className="absolute -top-32 -left-32 w-[800px] h-[400px] bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent blur-[100px] -z-10 animate-pulse pointer-events-none" />
            
            <div className="relative inline-block">
               {/* Decorative Tech Elements */}
               <div className="absolute -top-6 -left-6 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl pointer-events-none opacity-0 animate-[fadeIn_1s_ease-out_forwards]" />
               <div className="absolute -bottom-4 -right-12 w-16 h-16 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl pointer-events-none opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]" />
               
               {/* Animated Grid Behind Title */}
               <div className="absolute inset-0 -z-10 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
               </div>

               <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] relative z-10">
                 通导遥时空信息<br className="md:hidden" />
                 <span className="relative inline-block ml-0 md:ml-4 mt-2 md:mt-0">
                    {/* Glowing effect behind text */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 blur-2xl opacity-20 animate-[pulse_4s_ease-in-out_infinite]" />
                    
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent relative z-10">
                      智能服务平台
                    </span>
                    
                    <div className="absolute -top-3 -right-8 animate-[bounce_3s_infinite]">
                      <Sparkles className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" size={32} />
                    </div>
                 </span>
               </h1>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="relative text-gray-300 text-lg leading-relaxed font-light max-w-4xl border-l-4 border-blue-500/50 pl-8 bg-gradient-to-r from-blue-900/20 to-transparent py-6 pr-6 rounded-r-2xl backdrop-blur-sm shadow-sm hover:border-blue-400 transition-colors">
                通导遥时空信息智能服务平台，是按照光谷信息“数字经济统领、时空信息特色、产业数据赋能”的总体思路，建设立足湖北、面向全国、服务全球的通导遥时空信息智能服务平台。以时空信息基础应用、遥感智能服务的基础能力和典型应用，形成数据集市、算法集市、应用集市。通过输出基础能力，压缩场景创新、应用搭建、快速发布的周期，打造时空快应用生态，力促在自然资源、能源、农业农村、交通、水务水利、金融、应急管理、产业发展等领域，实现规模化应用。
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 animate-in slide-in-from-bottom-8 duration-700">
            <div className="flex-1 space-y-8">
              <div className="flex items-center space-x-3 text-blue-500">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <h2 className="text-3xl font-black text-white">平台建设作用</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                通导遥时空信息智能服务平台是以高频遥感数据为基底汇聚海量时空大数据，深度融合人工智能算法，精准解译各个专题应用，为各个行业提供全面、高效、智能的数据服务、应用服务的平台。
              </p>
            </div>
            <div className="flex-1 relative group">
              {/* Laptop Mockup */}
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[280px] max-w-[500px] md:h-[320px] md:max-w-[600px] shadow-[0_0_50px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_80px_rgba(59,130,246,0.3)] transition-shadow duration-700">
                <div className="rounded-lg overflow-hidden h-full bg-[#020617] relative">
                   <img 
                     src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
                     className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-[20s]" 
                     alt="Platform Screen" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
                   <div className="absolute bottom-10 left-10 right-10 text-center space-y-2">
                      <div className="text-xl font-black text-white tracking-widest">通导遥时空信息智能服务平台</div>
                      <div className="text-[8px] text-gray-400">以高频遥感数据为基底汇聚海量时空大数据，深度融合人工智能算法...</div>
                   </div>
                </div>
              </div>
              <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[24px] max-w-[580px] md:max-w-[700px] border border-gray-800 shadow-2xl"></div>
              {/* Glow effect behind laptop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none -z-10" />
            </div>
          </div>
        </section>

        {/* Section 2: Platform Architecture */}
        <section className="space-y-12 animate-in slide-in-from-bottom-8 duration-700 delay-100">
          <div className="flex items-center space-x-3 text-blue-500">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <h2 className="text-3xl font-black text-white">平台架构</h2>
          </div>

          <div className="relative p-8 border border-white/5 rounded-[3rem] bg-[#0b101e]/50 backdrop-blur-sm overflow-hidden">
            {/* Background Grid for Architecture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px]" />

            <div className="space-y-8 relative z-10">
              {/* Layer 1: Industries */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { id: '01', name: '自然资源', icon: <Trees size={20} />, sub: ['调查监测', '空间规划', '耕地保护', '城市体检'] },
                  { id: '02', name: '水利水务', icon: <Droplets size={20} />, sub: ['水文监测', '水土保持', '水质监测', '效益评估'] },
                  { id: '03', name: '农业农村', icon: <Sprout size={20} />, sub: ['农业普查', '农情监测', '土壤墒情', '作物估产'] },
                  { id: '04', name: '生态环境', icon: <Globe size={20} />, sub: ['环境监测', '生态保护', '生态评估', '土地退化'] },
                  { id: '05', name: '应急灾害', icon: <ShieldAlert size={20} />, sub: ['灾害预警', '应急调度', '灾害评估', '重建监测'] },
                  { id: '06', name: '住建保障', icon: <Building2 size={20} />, sub: ['城市"两违"', '垃圾治理', '地面沉降', '黑臭水体'] },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col h-full">
                    <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-t-2xl p-4 text-center relative overflow-hidden group">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[40px] font-black text-white/5 select-none">{item.id}</div>
                      <div className="relative z-10 flex flex-col items-center space-y-2">
                        <div className="p-2 bg-white/10 rounded-full">{item.icon}</div>
                        <h3 className="font-bold text-white">{item.name}</h3>
                      </div>
                    </div>
                    <div className="bg-blue-900/10 border-x border-b border-blue-500/20 rounded-b-2xl p-4 flex-1">
                      <ul className="space-y-2 text-center">
                        {item.sub.map((sub, sIdx) => (
                          <li key={sIdx} className="text-xs text-blue-200/70">{sub}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Layer 2: Cloud Services */}
              <div className="border border-dashed border-blue-500/30 rounded-2xl p-6 bg-blue-500/5 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#0b101e] text-blue-400 font-bold text-sm">云服务中心</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left: Market */}
                  <div className="space-y-3">
                    <div className="bg-blue-600 text-white text-center py-1.5 rounded text-sm font-bold">成果展示</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 border border-white/5 py-2 text-center text-xs text-gray-300 rounded">数据集市</div>
                      <div className="bg-white/5 border border-white/5 py-2 text-center text-xs text-gray-300 rounded">应用集市</div>
                      <div className="bg-white/5 border border-white/5 py-2 text-center text-xs text-gray-300 rounded">算法集市</div>
                    </div>
                  </div>
                  {/* Middle: Public Services */}
                  <div className="space-y-3">
                    <div className="bg-blue-600 text-white text-center py-1.5 rounded text-sm font-bold">公共服务</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 border border-white/5 py-2 text-center text-xs text-gray-300 rounded">模型集市</div>
                      <div className="bg-white/5 border border-white/5 py-2 text-center text-xs text-gray-300 rounded">行业指数</div>
                      <div className="bg-white/5 border border-white/5 py-2 text-center text-xs text-gray-300 rounded">专题报告</div>
                    </div>
                  </div>
                  {/* Right: Trading */}
                  <div className="space-y-3">
                    <div className="bg-blue-600 text-white text-center py-1.5 rounded text-sm font-bold">交易撮合</div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-white/5 border border-white/5 py-2 text-center text-xs text-gray-300 rounded">评估报告</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 3: Interpretation & Training */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-dashed border-blue-500/30 rounded-2xl p-6 bg-blue-500/5 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#0b101e] text-blue-400 font-bold text-sm">在线智能解译中心</div>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {['数据选用', '解译', '成果发布', '应用搭建', '产品上架'].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 py-2 text-center text-xs text-blue-300 rounded hover:bg-blue-500/20 transition-colors cursor-default">{item}</div>
                    ))}
                  </div>
                </div>
                <div className="border border-dashed border-blue-500/30 rounded-2xl p-6 bg-blue-500/5 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#0b101e] text-blue-400 font-bold text-sm">算法模型训练中心</div>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {['数据甄选', '样本制作', '算法开发', '模型训练'].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 py-2 text-center text-xs text-blue-300 rounded hover:bg-blue-500/20 transition-colors cursor-default">{item}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Layer 4: Data Management */}
              <div className="border border-dashed border-blue-500/30 rounded-2xl p-6 bg-blue-500/5 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#0b101e] text-blue-400 font-bold text-sm">时空大数据管理中心</div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-2">
                  {['卫星数据接收与存储', '影像预处理', '数据上架', '资源中心', '用户和企业授权', '交易管理'].map((item, i) => (
                    <div key={i} className="bg-white/10 border border-white/5 py-3 text-center text-xs text-white font-medium rounded shadow-sm">{item}</div>
                  ))}
                </div>
              </div>

              {/* Layer 5: Computing Engine */}
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 rounded-xl p-4 flex flex-col items-center space-y-3">
                <div className="text-blue-400 font-bold text-sm">大数据智算引擎</div>
                <div className="flex flex-wrap justify-center gap-4">
                  {['TensorFlow', 'PyTorch', 'MindSpore', '监督分类', '非监督分类', '卷积神经网络', '对象分类', '决策树和随机森林'].map((item, i) => (
                    <span key={i} className="bg-[#0b101e] px-3 py-1 rounded text-[10px] text-blue-200 border border-blue-500/20">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Implementation Path */}
        <section className="space-y-12 animate-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="flex items-center space-x-3 text-blue-500">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <h2 className="text-3xl font-black text-white">平台实现路径</h2>
          </div>
          <p className="text-gray-400 font-light">平台基于通导遥相关数据资源，应用平台服务</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Horizontal Line connector for desktop */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0 z-0" />

            {[
              { title: '全域感知', icon: <Activity size={32} />, sub: '全域感知体系', desc: ['建设全域感知数据体系', '基于高频遥感的时空数据体系'], color: 'text-cyan-400' },
              { title: '治理与服务', icon: <ShieldCheck size={32} />, sub: '平台智能化服务能力', desc: ['建设综合平台能力', '数据中台 | AI中台 | 云服务', '安全和规范体系'], color: 'text-blue-400' },
              { title: '抽象与集成', icon: <Database size={32} />, sub: '一体化数据产品体系', desc: ['加工数据产品体系', '静态 -> 动态'], color: 'text-indigo-400' },
              { title: '业务应用', icon: <Layout size={32} />, sub: '多维应用场景', desc: ['运营与服务', '多维 | 多层 | 多级', '产品体系 | 业务场景'], color: 'text-purple-400' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white px-8 py-2 rounded-lg font-bold shadow-lg shadow-blue-900/20">{step.title}</div>
                <div className="relative">
                  <div className={`w-24 h-24 rounded-full bg-[#0b101e] border-2 border-dashed border-gray-700 flex items-center justify-center ${step.color} shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:scale-110 transition-transform duration-500 bg-gradient-to-b from-blue-900/20 to-transparent`}>
                    {step.icon}
                  </div>
                  <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20" />
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                <div className="space-y-3">
                  <h4 className="font-bold text-white">{step.sub}</h4>
                  <div className="space-y-2">
                    {step.desc.map((d, dIdx) => (
                      <div key={dIdx} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">{d}</div>
                    ))}
                  </div>
                </div>
                {idx < 3 && (
                  <div className="md:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Business Features */}
        <section className="space-y-12 pb-20 animate-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="flex items-center space-x-3 text-blue-500">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <h2 className="text-3xl font-black text-white">平台业务特点</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed font-light max-w-5xl">
            研发通导遥时空信息智能服务平台，全面发挥通导遥数据存储超算中心资源使用效率，提供遥感智能解译服务、共创共建治理服务、标准化应用场景服务、产业发展大数据服务。
          </p>

          <div className="space-y-6">
            {[
              { 
                title: '遥感智能解译服务', 
                icon: <Code2 size={28} />, 
                desc: '承载通导遥多源时空大数据的数算一体、流批一体支撑环境；研发结合时空关系与人工智能的智算引擎、算法，汇集多尺度多时相的标签库、样本库，提供在线训练、学习能力，形成具备行业特殊的预训练模型，提供面向行业场景的在线智能遥感解译服务。',
                bg: 'bg-blue-600',
                lightBg: 'bg-blue-600/10'
              },
              { 
                title: '共创共建治理服务', 
                icon: <Users size={28} />, 
                desc: '扩展时空大数据的智能化、模式化、多元化、简单化的处理和集成能力，深化时空大数据治理与挖掘服务，通过元数据建模、动态数据服务、拖拽式可视化场景构建、发布共享机制等，实现数据到应用全周期、应用触达用户全链条的服务体系，提供时空应用快速构建、柔性定制、共创共建服务。',
                bg: 'bg-orange-500',
                lightBg: 'bg-orange-500/10'
              },
              { 
                title: '服务自然资源、农业等遥感监测解决方案', 
                icon: <Sprout size={28} />, 
                desc: '基于国产环境、遥感数据集、遥感深度学习框架构建智能化检测平台，人工标注和模型预测循环联动，动态提升样本数量和质量，大大提升数据标注的效率和准确性，综合使用基于深度学习等多中变化检测模型，结合超分辩率、语义分割任务提升变化检测系统的泛化能力。',
                bg: 'bg-teal-500',
                lightBg: 'bg-teal-500/10'
              },
              { 
                title: '产业聚合发展', 
                icon: <Network size={28} />, 
                desc: '通过产业联盟的聚合聚集创新资源，打通政产学研用，实现科技成果转化及产业化、科技资源共享服务，以先进科研成果集聚产业合作伙伴，打造国产技术成果转化“朋友圈”，逐步形成大算力使能通导遥时空大模型，赋能新应用的发展格局。',
                bg: 'bg-purple-600',
                lightBg: 'bg-purple-600/10'
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#0b101e]/80 border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row gap-8 hover:border-blue-500/30 transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-full ${feature.bg} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light text-justify">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes titleScan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default AboutPlatformView;
