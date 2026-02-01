
import React, { useState } from 'react';
import { 
  Package, 
  FileText, 
  CheckCircle2, 
  Check,
  ShieldCheck,
  Building2,
  User,
  Mail,
  Phone,
  Edit3,
  UserCheck,
  ArrowLeft
} from 'lucide-react';
import { CartItem } from '../App';

interface ResourceOrderViewProps {
  cartItems: CartItem[];
  onBack: () => void;
  onOrderSubmitted?: () => void;
}

const ResourceOrderView: React.FC<ResourceOrderViewProps> = ({ cartItems, onBack, onOrderSubmitted }) => {
  const [agreedAgreements, setAgreedAgreements] = useState<Set<string>>(new Set(['service', 'license']));
  const [dataUsage, setDataUsage] = useState('');
  const [applicantInfo, setApplicantInfo] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  });

  const toggleAgreement = (id: string) => {
    const next = new Set(agreedAgreements);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setAgreedAgreements(next);
  };

  const handleInputChange = (field: string, value: string) => {
    setApplicantInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const fillLoginInfo = () => {
    setApplicantInfo({
      name: '张三',
      email: 'zhangsan@example.com',
      phone: '13800138000',
      organization: '武汉光谷信息技术股份有限公司'
    });
  };

  const isFormValid = agreedAgreements.size >= 2 && dataUsage && applicantInfo.name && applicantInfo.email && applicantInfo.phone && applicantInfo.organization;

  // Use the first item for the primary display if available
  const displayItem = cartItems.length > 0 ? cartItems[0] : {
    name: 'Sentinel-2',
    satellite: 'Sentinel-2',
    resolution: '10.0米',
    area: '6930.6736km²',
    sensor: 'MSI',
    date: '2025-11-29',
    cloud: '0.0%',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80'
  };

  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-500">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }} />

      {/* Main container */}
      <div className="max-w-[1400px] mx-auto px-10 py-12 relative z-10 flex flex-col h-full">
        {/* Header Area */}
        <div className="space-y-4 mb-8">
            <button 
                onClick={onBack}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group mb-4"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">返回购物车</span>
            </button>
          <h1 className="text-4xl font-black text-white tracking-tight">数据申请</h1>
          <p className="text-gray-500 text-sm font-light">请填写数据用途及申请人信息，提交后我们将尽快审核</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Main Content */}
            <div className="flex-1 space-y-10">
                {/* 1. 商品信息 */}
                <section className="space-y-6">
                  <div className="flex items-center space-x-3 text-blue-400">
                    <Package size={20} />
                    <h2 className="text-lg font-bold text-white">申请数据信息</h2>
                  </div>
                  
                  <div className="bg-[#0b101e]/60 border border-gray-800/50 rounded-[2rem] p-8 flex items-center space-x-8 backdrop-blur-md">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border border-white/5 bg-black/40 shrink-0">
                      <img src={displayItem.thumbnail} className="w-full h-full object-cover" alt="thumb" />
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <h3 className="text-2xl font-black text-white">{displayItem.name}</h3>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
                        <div className="space-y-1">
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">卫星:</div>
                          <div className="text-sm font-medium text-gray-200">{displayItem.satellite}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">分辨率:</div>
                          <div className="text-sm font-medium text-gray-200">{displayItem.resolution}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">申请面积:</div>
                          <div className="text-sm font-medium text-gray-200">{displayItem.area}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">传感器:</div>
                          <div className="text-sm font-medium text-gray-200">{displayItem.sensor}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">采集时间:</div>
                          <div className="text-sm font-medium text-gray-200">{displayItem.date}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">云量:</div>
                          <div className="text-sm font-medium text-gray-200">{displayItem.cloud}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. 申请详情 */}
                <section className="space-y-6">
                  <div className="flex items-center space-x-3 text-blue-400">
                    <Edit3 size={20} />
                    <h2 className="text-lg font-bold text-white">申请详情</h2>
                  </div>
                  
                  <div className="bg-[#0b101e]/60 border border-gray-800/50 rounded-[2rem] p-8 backdrop-blur-md space-y-8">
                     
                     {/* Applicant Info (Swapped to top) */}
                     <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">申请人信息</h3>
                            <button 
                                onClick={fillLoginInfo}
                                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium hover:bg-blue-500/20 hover:border-blue-500/40 transition-all group"
                            >
                                <UserCheck size={14} />
                                <span>与登录人一致</span>
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="flex items-center text-xs font-medium text-gray-400">
                                 <User size={14} className="mr-2" /> 姓名 <span className="text-red-500 ml-1">*</span>
                              </label>
                              <input 
                                 type="text" 
                                 value={applicantInfo.name}
                                 onChange={(e) => handleInputChange('name', e.target.value)}
                                 className="w-full bg-[#161b2a] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
                                 placeholder="请输入真实姓名"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="flex items-center text-xs font-medium text-gray-400">
                                 <Mail size={14} className="mr-2" /> 邮箱 <span className="text-red-500 ml-1">*</span>
                              </label>
                              <input 
                                 type="email" 
                                 value={applicantInfo.email}
                                 onChange={(e) => handleInputChange('email', e.target.value)}
                                 className="w-full bg-[#161b2a] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
                                 placeholder="请输入工作邮箱"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="flex items-center text-xs font-medium text-gray-400">
                                 <Phone size={14} className="mr-2" /> 电话号码 <span className="text-red-500 ml-1">*</span>
                              </label>
                              <input 
                                 type="tel" 
                                 value={applicantInfo.phone}
                                 onChange={(e) => handleInputChange('phone', e.target.value)}
                                 className="w-full bg-[#161b2a] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
                                 placeholder="请输入联系电话"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="flex items-center text-xs font-medium text-gray-400">
                                 <Building2 size={14} className="mr-2" /> 工作单位 <span className="text-red-500 ml-1">*</span>
                              </label>
                              <input 
                                 type="text" 
                                 value={applicantInfo.organization}
                                 onChange={(e) => handleInputChange('organization', e.target.value)}
                                 className="w-full bg-[#161b2a] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
                                 placeholder="请输入所属单位全称"
                              />
                           </div>
                        </div>
                     </div>

                     {/* Data Usage (Swapped to bottom with top border) */}
                     <div className="space-y-3 pt-8 border-t border-gray-800">
                        <label className="flex items-center text-sm font-bold text-gray-300">
                           数据用途 <span className="text-red-500 ml-1">*</span>
                        </label>
                        <textarea 
                           value={dataUsage}
                           onChange={(e) => setDataUsage(e.target.value)}
                           placeholder="请详细描述申请数据的使用目的、项目背景及应用场景..."
                           className="w-full h-32 bg-[#161b2a] border border-gray-700 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                        />
                     </div>

                  </div>
                </section>
            </div>

            {/* Right Sidebar: Confirmation */}
            <div className="w-full lg:w-96 shrink-0">
                <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md shadow-2xl sticky top-8 space-y-8">
                    <div className="flex items-center space-x-3 text-white">
                        <FileText size={18} className="text-blue-500" />
                        <h2 className="text-xl font-bold">申请确认</h2>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="text-sm text-gray-400 leading-relaxed">
                            请确认您的申请信息及数据用途，并同意相关协议条款。
                        </div>
                        <div className="pt-4 border-t border-white/5 space-y-3">
                            <div 
                                className="flex items-start space-x-3 cursor-pointer group select-none"
                                onClick={() => toggleAgreement('service')}
                            >
                                <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                                    agreedAgreements.has('service') ? 'bg-blue-600 border-blue-600' : 'border-gray-700 bg-gray-900 group-hover:border-gray-500'
                                }`}>
                                    {agreedAgreements.has('service') && <Check size={12} className="text-white" strokeWidth={4} />}
                                </div>
                                <div className="text-xs text-gray-400 leading-relaxed">
                                    我已阅读并同意 <span className="text-blue-500 hover:underline">《数据使用承诺书》</span>
                                </div>
                            </div>

                            <div 
                                className="flex items-start space-x-3 cursor-pointer group select-none"
                                onClick={() => toggleAgreement('license')}
                            >
                                <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                                    agreedAgreements.has('license') ? 'bg-blue-600 border-blue-600' : 'border-gray-700 bg-gray-900 group-hover:border-gray-500'
                                }`}>
                                    {agreedAgreements.has('license') && <Check size={12} className="text-white" strokeWidth={4} />}
                                </div>
                                <div className="text-xs text-gray-400 leading-relaxed">
                                    我已阅读并同意 <span className="text-blue-500 hover:underline">《保密协议》</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={onOrderSubmitted}
                        disabled={!isFormValid}
                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/30 transition-all active:scale-95 flex items-center justify-center space-x-3"
                    >
                        <CheckCircle2 size={20} />
                        <span>提交申请</span>
                    </button>
                    
                    <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-600">
                        <ShieldCheck size={14} />
                        <span>信息安全保障 | 数据合规使用</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceOrderView;
