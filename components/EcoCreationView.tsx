
import React from 'react';
import { 
  Users, 
  Rocket, 
  Handshake, 
  Globe, 
  Building2, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Share2, 
  Cpu, 
  Layers, 
  Award, 
  Network, 
  Database, 
  Code2, 
  Hexagon, 
  LayoutGrid, 
  Box,
  Target,
  Scale,
  Gem,
  FileEdit,
  FileCheck,
  FileSignature,
  Store,
  UserPlus,
  Search
} from 'lucide-react';

const EcoCreationView: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partners = [
    '武汉光谷信息', '吉奥时空', '湖北地信', '超图软件', '光谷信息', 
    '圆周率', '长空科技', '易米景', '吉威空间', '上海华测导航'
  ];

  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700 font-sans text-slate-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[600px] flex items-center justify-center px-6 overflow-hidden group">
        {/* Background Image & Dynamic Ecosystem */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Base Image */}
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80" 
              className="w-full h-full object-cover opacity-20 scale-105 transition-transform duration-[20s] group-hover:scale-110"
              alt="Handshake"
            />
            
            {/* Tech Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)] z-[1]" />

            {/* Dynamic Particles/Nodes */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
               {[...Array(20)].map((_, i) => {
                 const size = Math.random() * 6 + 2;
                 return (
                   <div 
                     key={`particle-${i}`}
                     className="absolute rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse"
                     style={{
                       width: size + 'px',
                       height: size + 'px',
                       top: Math.random() * 100 + '%',
                       left: Math.random() * 100 + '%',
                       opacity: Math.random() * 0.5 + 0.2,
                       animationDuration: Math.random() * 3 + 2 + 's'
                     }}
                   />
                 )
               })}
               
               {/* Floating Connection Nodes representing Partners */}
               {[...Array(8)].map((_, i) => (
                 <div
                    key={`node-${i}`}
                    className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-900/10 backdrop-blur-md animate-[float_15s_ease-in-out_infinite]"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${10 + Math.random() * 80}%`,
                      animationDelay: `${i * 1.2}s`,
                      animationDuration: `${12 + Math.random() * 10}s`
                    }}
                 >
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                    <div className="w-12 h-1.5 bg-blue-500/20 rounded-full" />
                 </div>
               ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-blue-900/10 z-[3]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/30 to-[#020617] z-[3]" />
        </div>

        <div className="max-w-7xl w-full relative z-20 pt-10">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              共建时空智能、<br />
              <span className="text-blue-500">数字新生态</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed border-l-4 border-blue-600 pl-6">
              成为天地图市场化生态合作伙伴，利用时空数据引领发展，赋智千行百业。
              <br/>共建、共享、共生，开启时空智能新时代。
            </p>
            <div className="pt-4">
              <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all active:scale-95 flex items-center space-x-3 group">
                <span>立即加入</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY JOIN (VALUE PROPOSITION) --- */}
      <section id="why" className="py-24 px-6 relative bg-white/[0.02]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white">为什么要加入生态合作伙伴</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '数据资产共享',
                desc: '开放海量卫星影像、电子地图与时空矢量数据，打破数据孤岛，助力合作伙伴进行深度挖掘与增值开发。',
                icon: <Database className="text-blue-400" size={32} />
              },
              {
                title: 'AI 引擎赋能',
                desc: '依托平台强大的 GeoAI 算法模型库与高性能算力底座，为合作伙伴提供零门槛的智能化解译与分析能力支持。',
                icon: <Cpu className="text-blue-400" size={32} />
              },
              {
                title: '商机优先匹配',
                desc: '基于平台庞大的用户群体与需求池，通过智能推荐算法，将优质项目线索与商机优先推送给核心合作伙伴。',
                icon: <TrendingUp className="text-blue-400" size={32} />
              },
              {
                title: '联合解决方案',
                desc: '针对垂直行业痛点，与合作伙伴深度融合，共同打造“数据+算法+应用”的一体化联合解决方案并推广落地。',
                icon: <Handshake className="text-blue-400" size={32} />
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 bg-[#0f172a] border border-gray-800 rounded-2xl hover:border-blue-500/50 hover:bg-[#162032] transition-all duration-300 flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center group-hover:bg-blue-600/20 transition-colors border border-blue-500/20">
                  {item.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS (RIGHTS) --- */}
      <section id="benefits" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white">四大核心权益，助力伙伴成长</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: '资源共享',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
                icon: <Share2 size={24} />,
                items: ['数据/算力开放', '技术成果共享']
              },
              {
                title: '业务赋能',
                image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80',
                icon: <Zap size={24} />,
                items: ['营销体系支持', '专业培训赋能']
              },
              {
                title: '项目合作',
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
                icon: <Handshake size={24} />,
                items: ['联合解决方案', '重大项目攻关']
              },
              {
                title: '平台推广',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
                icon: <Globe size={24} />,
                items: ['品牌联合营销', '展会活动推介']
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <ul className="space-y-2 text-sm text-gray-300">
                      {item.items.map((sub, i) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS LOGO GRID --- */}
      <section id="partners" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white">聚力共建生态，携手共赢未来</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="h-20 bg-white rounded-lg flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm group"
              >
                {/* Simulated Logo Text/Image */}
                <div className="w-full h-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                   <span className="text-slate-800 font-bold text-sm text-center">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPLICATION PROCESS --- */}
      <section id="apply" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white">入驻申请流程</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-800 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: '注册账号', sub: '注册天地图市场化专区企业认证账号', icon: <UserPlus size={24} /> },
                { step: '提交资料', sub: '申请成为生态合作伙伴', icon: <FileEdit size={24} /> },
                { step: '资质审核', sub: '1-2个工作日完成资质审核', icon: <FileCheck size={24} /> },
                { step: '签署协议', sub: '双方完成合同签署', icon: <FileSignature size={24} /> },
                { step: '入驻成功', sub: '企业店铺可上下架产品服务', icon: <Store size={24} /> },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                  <div className={`w-20 h-20 rounded-full bg-[#020617] border-4 border-gray-800 flex items-center justify-center group-hover:border-blue-500 group-hover:text-blue-500 transition-colors ${idx === 0 ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}>
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{item.step}</h3>
                    <p className="text-xs text-gray-500 max-w-[120px] mx-auto">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <button className="px-16 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black text-xl shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 hover:-translate-y-1">
              立即加入
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900/20 to-transparent border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-white">共建·共享·共生</h2>
          <p className="text-blue-200 text-lg">
            加入我们，共同探索时空信息的无限可能，构建数字经济新生态。
          </p>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(5px) translateX(-5px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
      `}} />

    </div>
  );
};

export default EcoCreationView;
