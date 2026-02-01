
import React, { useState } from 'react';
import { Rocket, LifeBuoy, ArrowRight, Layout, Zap, HelpCircle, UserPlus, Search, Play, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface HelpCenterViewProps {
  onNavigate?: (page: string) => void;
  onEnterDetail?: (id: string) => void;
}

const HelpCenterView: React.FC<HelpCenterViewProps> = ({ onNavigate, onEnterDetail }) => {
  const [activeTab, setActiveTab] = useState('quickstart');

  const faqs = [
    { id: 'q1', question: '如何申请高分辨率卫星影像的下载权限？' },
    { id: 'q2', question: '平台支持哪些格式的矢量数据上传？' },
    { id: 'q3', question: '订购的数据产品通常多久可以交付？' },
    { id: 'q4', question: '如何通过API接口调用AI解译服务？' },
    { id: 'q5', question: '企业认证需要准备哪些材料？' },
    { id: 'q6', question: '平台的数据更新频率是怎样的？' }
  ];

  return (
    <div className="flex-1 bg-white overflow-y-auto no-scrollbar relative animate-in fade-in duration-500 font-sans text-slate-800">
      
      {/* Header Banner - Matches NewsCenterView */}
      <div className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-12 px-8 border-b border-blue-50/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">帮助中心</h1>
            <p className="text-slate-500 text-lg font-light max-w-2xl">
              查找使用指南、常见问题解答和技术支持资源，助您快速掌握平台功能
            </p>
          </div>
          
          {/* Decorative Illustration (Abstract) */}
          <div className="hidden md:block relative w-48 h-32 opacity-80">
             <div className="absolute right-0 bottom-0 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
             <div className="absolute right-12 bottom-4 w-20 h-20 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700" />
             <div className="absolute right-4 bottom-12 w-16 h-16 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-10 border-b border-slate-200">
           {['快速入门', '常见问题'].map((tab) => {
             const tabKey = tab === '快速入门' ? 'quickstart' : 'faq';
             const isActive = activeTab === tabKey;
             return (
               <button
                 key={tabKey}
                 onClick={() => setActiveTab(tabKey)}
                 className={`pb-4 text-sm font-bold transition-all relative ${
                   isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
                 }`}
               >
                 {tab}
                 {isActive && (
                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                 )}
               </button>
             );
           })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'quickstart' && (
            <div className="flex flex-col lg:flex-row gap-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Left: Steps Timeline */}
              <div className="flex-1 space-y-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">快速入门指南</h3>
                <div className="relative space-y-8 pl-4">
                  {/* Vertical Line */}
                  <div className="absolute left-[27px] top-6 bottom-6 w-px bg-slate-200" />
                  
                  {/* Steps */}
                  {[
                    { id: 1, title: '注册与登录', desc: '通过手机号或邮箱注册账号，完成实名认证后即可登录平台' },
                    { id: 2, title: '完善个人信息', desc: '登录后完善个人资料和企业信息，以便获取更精准的服务推荐' },
                    { id: 3, title: '浏览资源中心', desc: '在资源中心浏览和搜索各类遥感数据、行业报告和应用工具' },
                    { id: 4, title: '订阅或购买服务', desc: '根据需求选择合适的服务套餐，完成订阅或购买流程' },
                    { id: 5, title: '开始使用平台', desc: '访问应用中心，选择需要的应用工具开始使用平台功能' },
                  ].map((step, index) => (
                    <div key={step.id} className="relative flex items-start gap-6 group">
                      <div className="relative z-10 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shrink-0 mt-1 shadow-md shadow-blue-200 group-hover:scale-110 transition-transform">
                        {step.id}
                      </div>
                      <div className="space-y-1 p-4 -my-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 hover:shadow-sm transition-all flex-1">
                        <h4 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Video Tutorials */}
              <div className="flex-1 space-y-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">新手教程视频</h3>
                
                {/* Main Video */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden group cursor-pointer hover:border-blue-300 hover:shadow-lg transition-all shadow-sm">
                  <div className="relative aspect-video bg-slate-100 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                      alt="Video thumbnail" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                        <Play size={28} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-2 bg-white">
                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">平台快速入门教程 (5:32)</h4>
                    <p className="text-sm text-slate-500 font-light">了解平台基本功能和操作流程，快速上手核心业务。</p>
                  </div>
                </div>

                {/* Sub Videos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                       <UserPlus size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">账号注册与认证</div>
                      <div className="text-xs text-slate-400 mt-0.5">2:15</div>
                    </div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                       <Search size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">数据资源搜索</div>
                      <div className="text-xs text-slate-400 mt-0.5">3:40</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
               {/* Search Box */}
               <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="搜索常见问题..." 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700"
                  />
               </div>

               {/* FAQ List */}
               <div className="space-y-4">
                  {faqs.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => onEnterDetail && onEnterDetail(item.id)}
                        className="bg-white border border-slate-200 rounded-2xl p-6 flex justify-between items-center cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                        <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.question}</span>
                        <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
               </div>

               {/* Pagination */}
               <div className="flex items-center justify-center gap-2 pt-4">
                  <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors">
                    <ChevronLeft size={18} />
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm transition-all hover:bg-blue-700">1</button>
                  <button className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-all">2</button>
                  <button className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-all">3</button>
                  <span className="text-slate-400 px-2">...</span>
                  <button className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-all">8</button>
                  <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
                    <ChevronRight size={18} />
                  </button>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterView;
