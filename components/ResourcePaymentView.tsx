
import React from 'react';
import { 
  Package, 
  Clock, 
  FileText, 
  Download, 
  MapPin, 
  Check,
  List,
  ArrowLeft,
  RefreshCw,
  XCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { CartItem } from '../App';

interface ResourcePaymentViewProps {
  cartItems: CartItem[];
  onBack: () => void;
  onGoToCheckout?: () => void;
  onCancelOrder?: () => void;
  isPaid?: boolean;
  isCancelled?: boolean;
}

const ResourcePaymentView: React.FC<ResourcePaymentViewProps> = ({ 
  cartItems, 
  onBack, 
  onGoToCheckout, 
  onCancelOrder,
  isPaid = false, 
  isCancelled = false 
}) => {
  const orderId = "AP20251203000005";
  const orderTime = "2025-12-03 14:24";

  // Consistent display item with ResourceOrderView
  const displayItem = cartItems.length > 0 ? cartItems[0] : {
    name: 'Sentinel-2',
    satellite: 'Sentinel-2',
    resolution: '10.0米',
    area: '6930.6736km²',
    sensor: 'MSI',
    date: '2025-11-29',
    cloud: '0.0%',
    price: 89.00,
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80'
  };

  // Status configuration
  const statusLabel = isCancelled ? '已撤回' : (isPaid ? '审核完成' : '审核中');
  const statusColor = isCancelled ? 'text-gray-500' : (isPaid ? 'text-green-500' : 'text-blue-500');

  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-500 pb-20">
      {/* 蓝色细格纹背景 */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }} />

      {/* Main Container - Adjusted to match Service View width */}
      <div className="max-w-[1400px] mx-auto px-10 py-12 relative z-10 space-y-8">
        
        {/* Top Header */}
        <div className="space-y-2">
           <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group w-fit mb-4"
           >
             <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
             <span className="font-medium">返回首页</span>
           </button>
           
           <h1 className="text-4xl font-black text-white tracking-tight">数据申请</h1>
           <p className="text-gray-500 font-light text-sm">查看您的数据申请进度与审核状态</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Main Content Area */}
          <div className="flex-1 space-y-6">
            
            {/* 1. 申请状态与进度卡片 */}
            <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md space-y-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className={`px-4 py-1 rounded-full text-xs font-bold border ${isPaid ? 'bg-green-600/20 text-green-500 border-green-600/30' : (isCancelled ? 'bg-red-600/20 text-red-500 border-red-600/30' : 'bg-blue-600/20 text-blue-500 border-blue-600/30')}`}>
                    {statusLabel}
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <FileText size={18} className="text-blue-500" />
                    <span className="font-bold text-sm">申请信息</span>
                  </div>
                </div>
                {!isPaid && !isCancelled && (
                  <div className="flex items-center space-x-2 text-gray-500 text-xs font-mono">
                    <Clock size={14} />
                    <span>预计审核时间: 1-3个工作日</span>
                  </div>
                )}
              </div>

              <div className="px-4 text-xs text-gray-500 font-mono tracking-tight text-left">
                申请编号：{orderId}
              </div>

              {/* 进度条 */}
              <div className="relative pt-6 pb-4">
                <div className="absolute top-[34px] left-[5%] right-[5%] h-[1px] bg-gray-800" />
                <div className="flex justify-between relative z-10 px-2">
                  {[
                    { label: '提交申请', time: orderTime, active: true },
                    { label: '数据审核', time: isPaid ? '审核通过' : (isCancelled ? '已终止' : '进行中'), active: true },
                    { label: '审核完成', time: isPaid ? '已交付' : '等待中', active: isPaid },
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                      <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                        step.active 
                        ? 'bg-blue-500 border-blue-500 ring-4 ring-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.6)]' 
                        : 'bg-[#0b101e] border-gray-700'
                      }`} />
                      <div className="text-center space-y-1">
                        <div className={`text-sm font-bold ${step.active ? 'text-white' : 'text-gray-600'}`}>{step.label}</div>
                        <div className="text-[10px] text-gray-700 font-mono">{step.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. 商品信息卡片 */}
            <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md space-y-8">
              <div className="flex items-center space-x-3 text-blue-500">
                <Package size={20} />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">申请数据详情</h2>
              </div>

              <div className="flex items-start space-x-8">
                <div className="w-40 h-32 rounded-xl overflow-hidden border border-white/5 bg-black/40 shrink-0">
                  <img src={displayItem.thumbnail} className="w-full h-full object-cover opacity-90" alt="thumb" />
                </div>
                
                <div className="flex-1 space-y-6">
                  <h3 className="text-xl font-black text-white">{displayItem.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex justify-between text-xs border-b border-gray-800/50 pb-2">
                      <span className="text-gray-500">商品名称</span>
                      <span className="text-gray-300 font-medium">光学影像</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-gray-800/50 pb-2">
                      <span className="text-gray-500">卫星</span>
                      <span className="text-gray-300 font-medium">{displayItem.satellite}</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-gray-800/50 pb-2">
                      <span className="text-gray-500">分辨率</span>
                      <span className="text-gray-300 font-medium">{displayItem.resolution}</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-gray-800/50 pb-2">
                      <span className="text-gray-500">面积</span>
                      <span className="text-gray-300 font-medium">{displayItem.area}</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-gray-800/50 pb-2">
                      <span className="text-gray-500">云量</span>
                      <span className="text-gray-300 font-medium">{displayItem.cloud}</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-gray-800/50 pb-2">
                      <span className="text-gray-500">采集时间</span>
                      <span className="text-gray-300 font-medium">{displayItem.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 交付方式卡片 */}
            <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md space-y-6">
              <div className="flex items-center space-x-3 text-blue-500">
                <Download size={20} />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">交付方式</h2>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-gray-300 font-medium px-4">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                   <Check size={12} className="text-white" strokeWidth={4} />
                </div>
                <span>审核通过后在线下载</span>
              </div>
            </div>
            
          </div>

          {/* Right Sidebar: Status & Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md shadow-2xl sticky top-8 space-y-10">
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-white">申请汇总信息</h2>
                <div className="space-y-4 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">数据类型</span>
                    <span className="text-white">遥感影像</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">申请时间</span>
                    <span className="text-white font-mono">{orderTime}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800/50 flex justify-between items-center">
                <span className="text-base font-bold text-white">审核状态</span>
                <span className={`text-lg font-bold ${statusColor}`}>
                    {statusLabel}
                </span>
              </div>

              <div className="space-y-4">
                {!isPaid && !isCancelled ? (
                  <>
                    <button 
                      onClick={onGoToCheckout}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-3 shadow-xl shadow-blue-900/30 transition-all active:scale-95"
                    >
                      <RefreshCw size={18} />
                      <span>查看审核进度</span>
                    </button>

                    <button 
                      onClick={onCancelOrder}
                      className="w-full bg-[#161b2a] border border-gray-800 hover:border-gray-700 hover:text-white text-gray-400 py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-3 transition-all active:scale-95"
                    >
                      <XCircle size={18} />
                      <span>撤回申请</span>
                    </button>
                  </>
                ) : (
                  <>
                    {!isPaid && (
                      <button 
                        onClick={onBack}
                        className="w-full bg-blue-600/10 border border-blue-500/30 text-blue-400 py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-3 transition-all"
                      >
                        <span>返回上一页</span>
                      </button>
                    )}
                    {isPaid && (
                      <>
                        <div className="w-full py-5 bg-green-600/10 border border-green-500/30 rounded-xl flex items-center justify-center space-x-2 text-green-500 font-bold mb-1">
                          <CheckCircle2 size={20} />
                          <span>数据已准备</span>
                        </div>
                        <button 
                          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
                        >
                          <Download size={18} />
                          <span>立即下载</span>
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-600">
                <ShieldCheck size={14} />
                <span>数据合规 | 安全保障</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResourcePaymentView;
