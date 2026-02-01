
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Send, 
  RotateCcw, 
  Calendar, 
  ChevronDown, 
  Upload, 
  Info,
  Building2,
  ClipboardList,
  Contact2,
  FileText, 
  MapPin,
  RefreshCw,
  Box,
  Layout,
  Globe,
  Sprout,
  Droplets,
  Trees,
  ShieldAlert,
  HeartPulse,
  MonitorCheck,
  Check
} from 'lucide-react';

interface AppCustomizationViewProps {
  onBack: () => void;
  onSubmit: () => void;
}

const AppCustomizationView: React.FC<AppCustomizationViewProps> = ({ onBack, onSubmit }) => {
  const [activeCategory, setActiveCategory] = useState('自然资源');
  const [deliveryMethod, setDeliveryMethod] = useState('online');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const categories = [
    { name: '自然资源', icon: <Trees size={14} /> },
    { name: '水利水务', icon: <Droplets size={14} /> },
    { name: '农业农村', icon: <Sprout size={14} /> },
    { name: '生态环境', icon: <Trees size={14} /> },
    { name: '应急灾害', icon: <ShieldAlert size={14} /> },
    { name: '城市规划', icon: <Building2 size={14} /> },
    { name: '住房保障', icon: <Building2 size={14} /> },
    { name: '交通运输', icon: <Building2 size={14} /> },
    { name: '智慧养老', icon: <HeartPulse size={14} /> },
  ];

  const outputTypes = [
    { label: '专题产品', checked: true },
    { label: '系统平台', checked: false },
    { label: '数据API', checked: false },
    { label: '报告文档', checked: false },
  ];

  const handleSubmit = () => {
    setShowSuccessDialog(true);
  };

  const handleConfirmSubmit = () => {
    setShowSuccessDialog(false);
    onSubmit();
  };

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto no-scrollbar relative animate-in fade-in duration-700 pb-24 text-slate-800">
      {/* Visual background decor - Light Theme */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
              <Check size={32} className="text-green-500" strokeWidth={3} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">需求已提交</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              我们已收到您的定制需求，技术团队将尽快进行评估并与您联系。请在个人中心查看进度。
            </p>
            <button 
              onClick={handleConfirmSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20"
            >
              前往查看进度
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-6 py-12 relative z-10 space-y-12">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-sm text-slate-500 hover:text-blue-600 transition-all group font-medium"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>返回应用中心</span>
        </button>

        {/* Page Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">应用定制</h1>
          <p className="text-slate-500 font-light text-lg">根据您的业务需求，定制专属的应用解决方案，满足特定场景下的数据处理和分析需求</p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat.name
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className={activeCategory === cat.name ? 'text-white' : 'text-slate-400'}>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Form Sections */}
        <div className="space-y-10">
          
          {/* Section 1: Basic Information */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm space-y-10">
            <div className="flex items-center space-x-3 text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                <Info size={16} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider">基础信息</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                  应用名称 <span className="text-red-500 ml-1">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="请输入应用名称" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-slate-400"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                  开始日期 <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="yyyy/mm/dd" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 pr-12 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-slate-400"
                  />
                  <Calendar size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                  结束日期 <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="yyyy/mm/dd" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 pr-12 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-slate-400"
                  />
                  <Calendar size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
              <div className="space-y-3 md:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                  行政区划 <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 pr-12 text-slate-800 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer">
                    <option className="text-slate-400">请选择行政区划</option>
                    <option>北京市</option>
                    <option>上海市</option>
                    <option>广州市</option>
                    <option>深圳市</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
                <p className="text-[10px] text-slate-400 font-medium">选择您需要定制应用的行政区划</p>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                  更新频次 <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 pr-12 text-slate-800 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer">
                    <option className="text-slate-400">请选择更新频次</option>
                    <option>每日</option>
                    <option>每周</option>
                    <option>每月</option>
                    <option>每季</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Requirement Details */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm space-y-10">
            <div className="flex items-center space-x-3 text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                <ClipboardList size={16} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider">需求详情</h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                  需求备注 <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea 
                  rows={4}
                  placeholder="请尽可能详细地描述您的需求，以便我们提供更精准的解决方案" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-6 px-6 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-slate-400 resize-none"
                />
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                  输出类型 <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex flex-wrap gap-6">
                  {outputTypes.map((type) => (
                    <div key={type.label} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                        type.checked 
                        ? 'bg-blue-600 border-blue-600 text-white' 
                        : 'bg-white border-slate-200 text-transparent group-hover:border-slate-300'
                      }`}>
                         <Check size={18} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-bold ${type.checked ? 'text-slate-800' : 'text-slate-500 transition-colors group-hover:text-slate-700'}`}>{type.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                  收货方式 <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    onClick={() => setDeliveryMethod('online')}
                    className={`p-8 rounded-[1.5rem] border transition-all cursor-pointer flex items-center space-x-6 ${
                      deliveryMethod === 'online' 
                      ? 'bg-blue-50 border-blue-500 shadow-md shadow-blue-100' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${deliveryMethod === 'online' ? 'border-blue-600' : 'border-slate-300'}`}>
                      {deliveryMethod === 'online' && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-800">线上下载</h4>
                      <p className="text-xs text-slate-500 font-light">通过系统平台直接下载定制结果</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => setDeliveryMethod('offline')}
                    className={`p-8 rounded-[1.5rem] border transition-all cursor-pointer flex items-center space-x-6 ${
                      deliveryMethod === 'offline' 
                      ? 'bg-blue-50 border-blue-500 shadow-md shadow-blue-100' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${deliveryMethod === 'offline' ? 'border-blue-600' : 'border-slate-300'}`}>
                      {deliveryMethod === 'offline' && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-800">线下交付</h4>
                      <p className="text-xs text-slate-500 font-light">通过邮件或快递方式交付定制结果</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Contact Information */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm space-y-10">
            <div className="flex items-center space-x-3 text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                <Contact2 size={16} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider">联系信息</h2>
            </div>

            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                    联系人姓名 <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="请输入联系人姓名" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-slate-400"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
                    联系电话 <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="请输入联系电话" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-slate-400"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">邮箱地址</label>
                  <input 
                    type="email" 
                    placeholder="请输入邮箱地址" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">附件上传</label>
                <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 bg-slate-50/50 flex flex-col items-center justify-center space-y-4 group cursor-pointer hover:border-blue-500 hover:bg-blue-50/30 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-500 shadow-sm">
                    <Upload size={32} />
                  </div>
                  <div className="text-center">
                    <p className="text-slate-600 text-sm font-bold">拖放文件到此处，或 <span className="text-blue-600 hover:underline">点击上传</span></p>
                    <p className="text-[10px] text-slate-400 mt-2">支持 PDF, Word, Excel, PPT 格式，单个文件不超过 20MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-end space-x-4 pt-6">
          <button className="px-10 py-4 bg-white border border-slate-200 text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-2xl font-bold transition-all active:scale-95 flex items-center space-x-2 shadow-sm">
            <RotateCcw size={18} />
            <span>重置</span>
          </button>
          <button 
            onClick={handleSubmit}
            className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg shadow-lg shadow-blue-600/30 transition-all active:scale-95 flex items-center space-x-3"
          >
            <Send size={20} />
            <span>提交需求</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCustomizationView;
