
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Building2, 
  Sprout, 
  Droplets, 
  Trees, 
  ShieldAlert, 
  Layout,
  Users,
  CheckCircle2,
  Sparkles,
  Zap,
  FileText,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { ActivePage } from '../App';

interface SolutionItem {
  id: string;
  title: string;
  desc: string;
  category: string;
  image: string;
  features: string[];
  icon: React.ReactNode;
}

const mockSolutions: SolutionItem[] = [
  {
    id: 'sol1',
    title: '智慧水务管控',
    desc: '利用物联网、大数据和人工智能技术，构建“感知-诊断-决策-控制”闭环体系，实现水资源、水环境、水安全的精细化管理与调度。',
    category: '水利水务',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
    icon: <Droplets />,
    features: ['全域感知', '智能调度', '水质监测']
  },
  {
    id: 'sol2',
    title: '地质灾害风险预警',
    desc: '集成InSAR形变监测、光学遥感与地面传感数据，构建空天地一体化监测网，实现滑坡、泥石流等灾害的早期识别与精准预警。',
    category: '防灾减灾',
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
    icon: <ShieldAlert />,
    features: ['形变监测', '风险研判', '即时预警']
  },
  {
    id: 'sol3',
    title: '耕地保护智能监测',
    desc: '基于高频次卫星遥感影像，利用AI深度学习算法自动提取“非农化”、“非粮化”图斑，构建耕地数量、质量、生态“三位一体”保护体系。',
    category: '自然资源',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    icon: <Sprout />,
    features: ['图斑提取', '动态巡查', '用途管制']
  },
  {
    id: 'sol4',
    title: '国土空间生态修复监管',
    desc: '面向山水林田湖草沙系统治理，提供生态修复工程全生命周期监管服务，通过多维指标体系评估生态修复成效，辅助生态补偿机制落地。',
    category: '生态环保',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    icon: <Trees />,
    features: ['成效评估', '工程监管', '生态审计']
  },
  {
    id: 'sol5',
    title: '空间地理信息交换平台',
    desc: '构建跨部门、跨层级的空间地理信息资源共享交换枢纽，打破信息孤岛，提供统一的标准服务接口，支撑数字政府与智慧城市建设。',
    category: '智慧城市',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    icon: <Layout />,
    features: ['数据共享', '服务聚合', '互联互通']
  },
  {
    id: 'sol6',
    title: '高速公路施工信息化',
    desc: '融合BIM、GIS与物联网技术，对高速公路施工全过程进行数字化映射与精细化管理，提升工程质量管控水平，保障施工安全与进度。',
    category: '智慧交通',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    icon: <Building2 />,
    features: ['BIM+GIS', '进度可视', '安全监管']
  }
];

interface SolutionsViewProps {
  onNavigate?: (page: ActivePage) => void;
  onEnterDetail?: (id: string) => void;
}

const SolutionsView: React.FC<SolutionsViewProps> = ({ onNavigate, onEnterDetail }) => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setScrolled(target.scrollTop > 100);
    };
    const el = document.getElementById('solutions-container');
    el?.addEventListener('scroll', handleScroll);
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['全部', '智慧城市', '智慧农业', '生态环保', '自然资源', '防灾减灾', '水利水务', '智慧交通'];

  const filteredSolutions = activeCategory === '全部' 
    ? mockSolutions 
    : mockSolutions.filter(s => s.category === activeCategory);

  return (
    <div id="solutions-container" className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700 scroll-smooth">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-20 transition-transform duration-[10s] hover:scale-105"
            alt="City Skyline"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-950/80 to-[#020617]" />
          
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ 
            backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full animate-pulse pointer-events-none" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-5xl animate-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            为您提供多行业解决方案
          </h1>
          <p className="text-blue-100/70 text-lg md:text-xl font-light max-w-3xl leading-relaxed">
            深度集结各领域前沿解决方案，深度赋能千行百业，全力助推产业迭代升级
          </p>
          
          <button 
            onClick={() => onNavigate?.('app-customization')}
            className="group px-8 py-3.5 bg-blue-600/10 border border-blue-500/50 hover:bg-blue-600/20 hover:border-blue-500 rounded-lg font-bold text-blue-400 flex items-center space-x-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl backdrop-blur-md"
          >
            <FileText size={18} />
            <span>应用场景定制</span>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
      </section>

      {/* --- MAIN SOLUTIONS AREA --- */}
      <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-24 relative z-10 space-y-24">
        
        <div className="text-center space-y-6 animate-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">行业解决方案</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            我们针对不同行业特点，提供定制化的时空信息解决方案，助力行业数字化转型
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 bg-[#0b101e]/60 p-4 border border-gray-800 rounded-3xl backdrop-blur-3xl shadow-xl">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 transform active:scale-95 ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)]' 
                : 'bg-white/5 text-gray-500 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-32">
          {filteredSolutions.map((sol, index) => (
            <div 
              key={sol.id} 
              style={{ animationDelay: `${index * 100}ms` }}
              className="group relative flex flex-col bg-[#0b101e]/40 border border-gray-800 rounded-[2.5rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl h-full animate-in fade-in slide-in-from-bottom-12"
            >
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500" />
              
              <div className="h-64 relative overflow-hidden shrink-0">
                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover transition-all duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b101e] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-widest shadow-xl">
                  {sol.category}
                </div>

                <div className="absolute -bottom-6 right-10 w-16 h-16 bg-[#0b101e] border border-gray-800 rounded-2xl flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-500 shadow-2xl group-hover:rotate-12 transform">
                  {/* Fix TypeScript error by adding generic type parameter to cloneElement */}
                  {React.cloneElement(sol.icon as React.ReactElement<any>, { size: 32 })}
                </div>
              </div>

              <div className="p-10 pt-14 flex-1 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tight leading-tight">
                    {sol.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-3 group-hover:text-gray-300 transition-colors">
                    {sol.desc}
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    {sol.features.map(feat => (
                      <div key={feat} className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                          <CheckCircle2 size={14} className="text-blue-500" />
                        </div>
                        <span className="text-xs font-bold">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <button 
                    onClick={() => onEnterDetail && onEnterDetail(sol.id)}
                    className="flex items-center space-x-2 text-sm font-black text-blue-500 group/btn transition-all hover:text-blue-300"
                  >
                    <span>方案详情</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                  
                  <div className="flex items-center -space-x-2 group-hover:translate-x-1 transition-transform">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border border-[#0b101e] bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-500 group-hover:border-blue-500/30">
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CUSTOM HIGH-FIDELITY CTA SECTION (MATCHING SCREENSHOT) --- */}
        <div className="relative rounded-[2rem] overflow-hidden group/cta-section animate-in zoom-in-95 duration-1000 min-h-[400px] flex items-center justify-center">
          {/* Background meeting image */}
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&w=1920&q=80" 
               className="w-full h-full object-cover transition-transform duration-[5s] group-hover/cta-section:scale-105" 
               alt="Meeting" 
             />
             {/* Dark Blue Overlay matching the reference */}
             <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply" />
             <div className="absolute inset-0 bg-[#020617]/40" />
             
             {/* Grid overlay */}
             <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ 
                backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
             }} />
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-10 px-6 max-w-4xl">
             <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">需要定制化解决方案？</h2>
             <p className="text-blue-100/80 text-xl font-light max-w-2xl leading-relaxed">
               联系我们的解决方案专家，为您的业务量身定制时空信息服务方案
             </p>
             
             <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all active:scale-95 flex items-center justify-center space-x-3">
                   <MessageSquare size={22} fill="currentColor" />
                   <span>预约专家咨询</span>
                </button>
                <button 
                  onClick={() => onNavigate?.('app-customization')}
                  className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center space-x-3 group/btn3"
                >
                   <FileText size={22} className="group-hover/btn3:scale-110 transition-transform" />
                   <span>应用场景定制</span>
                </button>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 border-t border-white/5">
           {[
             { label: '行业方案总数', value: '72+' },
             { label: '服务行业领域', value: '18+' },
             { label: '成功案例', value: '450+' },
             { label: '专家团队', value: '50+' },
           ].map((stat, i) => (
             <div key={i} className="text-center space-y-2 group">
               <div className="text-4xl md:text-5xl font-black text-white group-hover:text-blue-500 transition-colors duration-500">{stat.value}</div>
               <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
      
      <div className={`fixed bottom-10 right-10 z-50 transition-all duration-500 transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
         <button 
          onClick={() => document.getElementById('solutions-container')?.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-blue-500 active:scale-90 transition-all group"
         >
           <ChevronRight size={28} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
         </button>
      </div>

      <footer className="py-20 border-t border-gray-900 text-center bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="text-gray-600 text-sm font-medium opacity-50 relative z-10">
          <p>© 2024 武汉光谷信息技术股份有限公司 版权所有</p>
        </div>
      </footer>
    </div>
  );
};

export default SolutionsView;
