
import React, { useState } from 'react';
import { 
  Package, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Cpu, 
  Check, 
  Calendar, 
  Zap, 
  List,
  Edit3,
  User,
  Mail,
  Phone,
  Building2,
  ArrowLeft,
  Calculator,
  UserCheck
} from 'lucide-react';
import { CartItem } from '../App';

interface OrderSubmissionViewProps {
  cartItems: CartItem[];
  onBack: () => void;
  onOrderSubmitted?: () => void;
}

const OrderSubmissionView: React.FC<OrderSubmissionViewProps> = ({ cartItems, onBack, onOrderSubmitted }) => {
  const [agreedToService, setAgreedToService] = useState(false);
  const [serviceUsage, setServiceUsage] = useState('');
  const [applicantInfo, setApplicantInfo] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  });

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

  const isFormValid = agreedToService && serviceUsage && applicantInfo.name && applicantInfo.email && applicantInfo.phone && applicantInfo.organization;

  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-500">
      {/* 蓝色网格背景 */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }} />
      
      {/* 背景发光效果 */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-10 py-12 relative z-10 space-y-12">
        {/* 顶部标题栏 */}
        <div className="space-y-4">
            <button 
                onClick={onBack}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group mb-4"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">返回详情</span>
            </button>
          <h1 className="text-4xl font-black text-white tracking-tight">服务调用申请</h1>
          <p className="text-gray-500 font-light text-sm">请填写申请信息，审核通过后即可调用服务。</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* 左侧主要区域 */}
          <div className="flex-1 space-y-10">
            
            {/* 1. 产品信息 */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-blue-400">
                <Package size={20} />
                <h2 className="text-lg font-bold text-white">产品信息</h2>
              </div>
              
              <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 flex items-start space-x-8 backdrop-blur-md transition-all hover:border-gray-700">
                <div className="w-20 h-20 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/20 shrink-0">
                  <Cpu className="text-blue-500" size={36} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">地块提取算法服务</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    基于计算机视觉的地块边界智能提取算法，支持农田、建筑用地等地块精确识别，提取准确率达94.2%。
                  </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-3">
                    {[
                      '自动边界识别', '多尺度分析', '形状优化处理', '批量处理能力'
                    ].map(tag => (
                      <div key={tag} className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                          <Check size={10} className="text-white" strokeWidth={4} />
                        </div>
                        <span className="text-xs text-gray-400">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 选择服务 */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-blue-400">
                <List size={20} />
                <h2 className="text-lg font-bold text-white">选择服务</h2>
              </div>
              
              <div className="bg-[#0b101e]/80 border border-blue-600 rounded-2xl p-8 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.1)] relative">
                <div className="flex items-center justify-between">
                  <div className="space-y-6 w-full">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-lg font-bold text-white">地块提取算法服务</h3>
                    </div>
                    <div className="flex items-center space-x-10">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calculator size={14} className="text-blue-500" />
                        <span className="text-xs">调用量：100次</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar size={14} className="text-blue-500" />
                        <span className="text-xs">有效期限：7日</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Zap size={14} className="text-blue-500" />
                        <span className="text-xs">服务接口：1个</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 申请详情 (服务用途 + 申请人信息) */}
            <div className="space-y-6">
                <div className="flex items-center space-x-3 text-blue-400">
                    <Edit3 size={20} />
                    <h2 className="text-lg font-bold text-white">申请详情</h2>
                </div>

                <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md space-y-8">
                    
                    {/* Applicant Info (Moved to Top) */}
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

                    {/* Service Usage (Moved to Bottom) */}
                    <div className="space-y-3 pt-8 border-t border-gray-800">
                        <label className="flex items-center text-sm font-bold text-gray-300">
                            服务用途 <span className="text-red-500 ml-1">*</span>
                        </label>
                        <textarea 
                            value={serviceUsage}
                            onChange={(e) => setServiceUsage(e.target.value)}
                            placeholder="请描述您的服务使用场景及目的..."
                            className="w-full h-32 bg-[#161b2a] border border-gray-700 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                        />
                    </div>

                </div>
            </div>

          </div>

          {/* 右侧申请确认 */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md shadow-2xl sticky top-8 space-y-8">
              <div className="flex items-center space-x-3 text-white">
                <FileText size={18} className="text-blue-500" />
                <h2 className="text-xl font-bold">申请确认</h2>
              </div>
              
              <div className="space-y-6">
                <div className="text-sm text-gray-400 leading-relaxed">
                    请仔细核对您的申请信息和服务用途，提交后我们将尽快进行审核。
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-white/5">
                <div className="flex items-start space-x-3 cursor-pointer group">
                  <div 
                    onClick={() => setAgreedToService(!agreedToService)}
                    className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${agreedToService ? 'bg-white border-white' : 'border-gray-700 bg-gray-900 group-hover:border-gray-500'}`}
                  >
                    {agreedToService && <Check size={12} className="text-black" strokeWidth={4} />}
                  </div>
                  <div className="text-[11px] text-gray-500 leading-relaxed font-light select-none">
                    我已阅读并同意 <span className="text-blue-500 hover:underline">《服务使用协议》</span>
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
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-600 pt-4">
                <ShieldCheck size={14} />
                <span>数据安全保障</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSubmissionView;
