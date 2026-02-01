
import React from 'react';
import { Bot, MessageSquare, Workflow, Zap, Sparkles, Command, GitBranch, ArrowRight } from 'lucide-react';

const AgentCenterView: React.FC = () => {
  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', 
        backgroundSize: '50px 50px' 
      }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 relative z-10 space-y-24">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-16 py-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] animate-in slide-in-from-left duration-700 delay-100">
              时空<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">智能体</span>中心
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl animate-in slide-in-from-left duration-700 delay-200">
              构建具备地理空间感知、逻辑推理与任务执行能力的行业智能体。通过自然语言交互，实现复杂时空分析任务的自动化编排与执行。
            </p>
            <div className="flex gap-6 pt-4 animate-in slide-in-from-left duration-700 delay-300">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center space-x-3 transition-all shadow-lg shadow-blue-900/40 active:scale-95">
                <Sparkles size={20} />
                <span>创建智能体</span>
              </button>
              <button className="px-8 py-4 bg-transparent border border-gray-700 hover:border-white/50 text-white rounded-xl font-bold flex items-center space-x-3 transition-all">
                <MessageSquare size={20} />
                <span>对话演示</span>
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-in slide-in-from-right duration-700">
            <div className="relative z-10 bg-[#0b101e]/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl max-w-lg mx-auto">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-gray-400">User</span>
                  </div>
                  <div className="bg-[#1e293b] p-4 rounded-2xl rounded-tl-none text-gray-200 text-sm">
                    请帮我分析一下武汉市过去5年的城市扩张情况，并预测未来2年的趋势。
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="space-y-3 w-full">
                    <div className="bg-blue-600/10 border border-blue-500/20 p-4 rounded-2xl rounded-tr-none text-blue-100 text-sm">
                      <div className="flex items-center space-x-2 mb-3 text-blue-400 text-xs font-bold uppercase tracking-wider">
                        <Zap size={12} className="animate-pulse" />
                        <span>Thinking Process</span>
                      </div>
                      <div className="space-y-2 text-xs opacity-80 font-mono">
                        <div className="flex items-center"><Command size={10} className="mr-2"/> 检索 2018-2023 Landsat 影像...</div>
                        <div className="flex items-center"><Workflow size={10} className="mr-2"/> 调用不透水面提取算法...</div>
                        <div className="flex items-center"><GitBranch size={10} className="mr-2"/> 运行 CA-Markov 预测模型...</div>
                      </div>
                    </div>
                    <div className="bg-[#1e293b] p-4 rounded-2xl text-gray-200 text-sm">
                      已完成分析。过去5年武汉市建设用地面积增长约 12.5%，主要向东部光谷方向扩张。预测显示未来2年将保持年均 2.1% 的增长率...
                      <div className="mt-3">
                        <button className="text-blue-400 text-xs font-bold flex items-center hover:text-blue-300 transition-colors">
                          查看详细报告 <ArrowRight size={12} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decor elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-[60px] opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-[60px] opacity-20" />
          </div>
        </section>

        {/* Capabilities */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-black text-white">智能体核心能力</h2>
            <p className="text-gray-400">赋予 Agent 专业的时空技能，处理复杂业务场景</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '多模态感知', desc: '能够理解卫星影像、矢量数据、文本报告等多种模态的时空信息。', icon: <EyeIcon /> },
              { title: '工具链调用', desc: '自动调用 GIS 分析工具、AI 解译模型与业务系统接口执行任务。', icon: <ToolIcon /> },
              { title: '知识库增强', desc: '内置地理信息领域专业知识图谱，提升推理的准确性与专业度。', icon: <BookIcon /> },
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-[#0b101e] border border-gray-800 hover:border-blue-500/40 transition-all hover:bg-[#0f172a]">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
);
const ToolIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);
const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
);

export default AgentCenterView;
