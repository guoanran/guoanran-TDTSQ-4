
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Info, 
  Cpu, 
  Layout, 
  FileText, 
  Heart, 
  Rocket, 
  ChevronRight, 
  Sparkles,
  Layers,
  Monitor,
  CheckCircle2,
  Box,
  Image as ImageIcon,
  ExternalLink,
  ArrowRight,
  Settings
} from 'lucide-react';

interface AppDetailViewProps {
  appId: string | null;
  onBack: () => void;
  onEnterCustomization?: () => void;
}

const AppDetailView: React.FC<AppDetailViewProps> = ({ appId, onBack, onEnterCustomization }) => {
  const [activeTab, setActiveTab] = useState('intro');
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock application data (in real app, fetch based on appId)
  const appData = {
    title: '智慧农业监测平台',
    category: '农业农村',
    desc: '基于多源遥感数据的农业监测平台，提供作物生长状态评估、产量预测和病虫害预警功能。系统集成高分辨率光学影像与气象时空场数据，实现农田级精准管理。',
    icon: <Sparkles size={48} className="text-blue-500" />,
    features: ['长势监测', '产量估算', '灾害预警', '物候分析'],
    techs: [
      { name: 'GeoAI 深度学习引擎', desc: '采用最新语义分割模型，自动识别地块与作物类型。' },
      { name: '多维时空数据库', desc: '支持PB级卫星影像的高效存储与分布式查询。' },
      { name: '动态云屏蔽算法', desc: '全自动化去除卫星影像中的云层干扰，提供纯净地表数据。' }
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80'
    ],
    cases: [
      {
        title: '某省300万亩小麦估产项目',
        result: '产量预测精度达到95.8%，提前15天发布收割指导建议。',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: '南方水灾农田损失评估',
        result: '在灾后48小时内完成全区域受灾面积核算，支持理赔定损。',
        image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80'
      }
    ]
  };

  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700 pb-20">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', 
        backgroundSize: '80px 80px' 
      }} />
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-8 md:px-12 py-10 relative z-10 space-y-10">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-all group animate-in slide-in-from-left duration-500"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">返回应用中心</span>
        </button>

        {/* Hero Card */}
        <div className="bg-[#0b101e]/80 border border-gray-800 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-3xl shadow-2xl relative animate-in slide-in-from-bottom-8 duration-700">
          
          {/* Action Buttons - Top Right Corner Layout */}
          <div className="absolute top-10 right-10 hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsFavorited(!isFavorited)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all border ${
                isFavorited 
                ? 'bg-red-500/10 border-red-500/30 text-red-500' 
                : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/30'
              }`}
              title={isFavorited ? '取消收藏' : '收藏'}
            >
              <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-black flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-xl shadow-blue-900/40">
              <Rocket size={18} />
              <span className="text-sm">立即体验</span>
            </button>
            <button 
              onClick={onEnterCustomization}
              className="bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 py-3.5 px-8 rounded-xl font-black flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <Settings size={18} />
              <span className="text-sm">应用定制</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="w-28 h-28 bg-blue-600/10 rounded-3xl flex items-center justify-center shrink-0 border border-blue-500/30 shadow-2xl shadow-blue-900/20 group">
              {appData.icon}
            </div>
            <div className="space-y-6 flex-1 pr-0 md:pr-96"> {/* Pr-96 to avoid overlapping with top-right buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-4xl font-black text-white tracking-tighter">{appData.title}</h1>
                <span className="px-4 py-1.5 bg-blue-600/20 text-blue-400 text-xs font-black rounded-lg border border-blue-500/20 uppercase tracking-widest">
                  {appData.category}
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-4xl">
                {appData.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {appData.features.map(feat => (
                  <span key={feat} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-xl text-xs text-gray-300 font-bold">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex md:hidden grid grid-cols-1 gap-4 mt-10">
              <button 
                onClick={() => setIsFavorited(!isFavorited)}
                className={`w-full py-4 rounded-xl font-black border flex items-center justify-center space-x-3 ${
                  isFavorited ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-white/5 border-white/10 text-white/60'
                }`}
              >
                <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
                <span>{isFavorited ? '已收藏' : '收藏'}</span>
              </button>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black flex items-center justify-center space-x-3">
                <Rocket size={20} />
                <span>立即体验</span>
              </button>
              <button 
                onClick={onEnterCustomization}
                className="w-full bg-white/5 border border-white/10 text-white/80 py-4 rounded-xl font-black flex items-center justify-center space-x-3"
              >
                <Settings size={20} />
                <span>应用定制</span>
              </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#0b101e]/80 border border-gray-800 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-12 duration-1000">
          <div className="flex flex-wrap border-b border-white/5 bg-white/5">
            {[
              { id: 'intro', label: '应用详情', icon: <Info size={18} /> },
              { id: 'tech', label: '主要技术', icon: <Cpu size={18} /> },
              { id: 'screenshots', label: '应用截图', icon: <ImageIcon size={18} /> },
              { id: 'cases', label: '应用案例', icon: <FileText size={18} /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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

          <div className="p-10 md:p-14 min-h-[600px]">
            {activeTab === 'intro' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                <div className="space-y-6">
                  <h2 className="text-2xl font-black text-white flex items-center space-x-3">
                    <div className="w-1.5 h-8 bg-blue-500 rounded-full" />
                    <span>详细介绍</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <p className="text-gray-400 leading-relaxed text-lg font-light">
                        本应用旨在解决传统农业监测时效性差、精度低的问题。通过集成国产多源卫星影像（高分系列、吉林一号）与国际开源遥感数据（Sentinel-2），实现全天候、全维度的农田健康体检。
                      </p>
                      <ul className="space-y-4">
                        {[
                          '全自动地块边界识别，支持矢量导出。',
                          '多指标植被指数（NDVI, EVI, LSWI）动态反演。',
                          '亚米级精准定位与实地导航功能对接。',
                          '支持海量样本的深度学习模型在线调用。'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start space-x-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-3xl p-8 border border-white/5 flex flex-col justify-center space-y-6">
                      <div className="flex items-center space-x-4">
                        <Box size={32} className="text-blue-400" />
                        <h4 className="text-lg font-bold text-white">数据支撑底座</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                          <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">影像分辨率</div>
                          <div className="text-xl font-black text-white">0.5m - 10m</div>
                        </div>
                        <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                          <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">重访周期</div>
                          <div className="text-xl font-black text-white">1 - 3 天</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-500">
                {appData.techs.map((tech, i) => (
                  <div key={i} className="group p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                    <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                      <Cpu size={28} />
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">{tech.name}</h3>
                    <p className="text-gray-500 leading-relaxed font-light">{tech.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'screenshots' && (
              <div className="space-y-10 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {appData.screenshots.map((src, i) => (
                    <div key={i} className="group aspect-video rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
                      <img src={src} alt={`Screenshot ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-blue-600/90 backdrop-blur-xl p-4 rounded-full text-white">
                          <Monitor size={24} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'cases' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in duration-500">
                {appData.cases.map((item, i) => (
                  <div key={i} className="group bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden flex flex-col hover:border-blue-500/30 transition-all duration-500 h-[480px]">
                    <div className="h-60 relative overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-6 left-8 flex items-center space-x-2">
                        <span className="px-3 py-1 bg-blue-600/30 backdrop-blur-md border border-blue-500/30 rounded-lg text-[10px] font-black text-blue-400 uppercase tracking-widest">Successful Case</span>
                      </div>
                    </div>
                    <div className="p-10 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-black text-white tracking-tight">{item.title}</h3>
                        <p className="text-gray-400 font-light leading-relaxed">{item.result}</p>
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <button className="flex items-center space-x-2 text-blue-500 font-black group/btn hover:text-blue-400 transition-colors">
                          <span>阅读案例报告</span>
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailView;
