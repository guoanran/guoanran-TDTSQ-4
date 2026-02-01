
import React from 'react';
import { 
  Package, 
  Clock, 
  CreditCard, 
  XCircle, 
  CheckCircle2, 
  FileText, 
  ChevronLeft,
  Info,
  ShoppingCart,
  ShieldCheck,
  Cpu,
  Check,
  List,
  RefreshCw
} from 'lucide-react';
import { CartItem } from '../App';

interface OrderPaymentViewProps {
  cartItems: CartItem[];
  onBack: () => void;
  onGoToCheckout?: () => void;
  onCancelOrder?: () => void;
  onGoToOrderManagement?: () => void;
  isPaid?: boolean; // Reused as 'Review Complete'
  isCancelled?: boolean;
}

const OrderPaymentView: React.FC<OrderPaymentViewProps> = ({ 
  cartItems, 
  onBack, 
  onGoToCheckout, 
  onCancelOrder,
  onGoToOrderManagement,
  isPaid = false, 
  isCancelled = false 
}) => {
  const orderId = "OP0025120511041648";
  const orderTime = "2025-12-05 11:04:16";

  // 状态解析
  const getStatusConfig = () => {
    if (isCancelled) return { label: '已撤回', color: 'bg-red-600/20 text-red-500 border-red-600/30' };
    if (isPaid) return { label: '审核完成', color: 'bg-green-600/20 text-green-500 border-green-600/30' };
    return { label: '审核中', color: 'bg-blue-600/20 text-blue-500 border-blue-600/30' };
  };

  const status = getStatusConfig();

  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-500 pb-20">
      {/* 蓝色细格纹背景 */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }} />

      <div className="max-w-[1400px] mx-auto px-10 py-12 relative z-10 space-y-8">
        {/* 顶部标题 */}
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-white tracking-tight">服务调用申请</h1>
          <p className="text-gray-500 font-light text-sm">查看您的服务申请进度与审核状态</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧详情区 */}
          <div className="flex-1 space-y-6">
            
            {/* 1. 订单状态与进度 */}
            <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md space-y-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className={`px-4 py-1 rounded-full text-xs font-bold border ${status.color}`}>
                    {status.label}
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

              <div className="px-4 space-y-1 text-xs text-gray-500 font-mono">
                <div>申请编号：{orderId}</div>
                <div>申请时间：{orderTime}</div>
              </div>

              {/* 进度条：还原图中 3 节点设计 */}
              <div className="relative pt-6 pb-4">
                <div className="absolute top-[34px] left-[5%] right-[5%] h-[1px] bg-gray-800" />
                <div className="flex justify-between relative z-10 px-2">
                  {[
                    { label: '提交申请', time: '2025-12-05 11:04', active: true },
                    { label: '服务审核', time: isPaid ? '审核通过' : (isCancelled ? '已终止' : '进行中'), active: true },
                    { label: '审核完成', time: isPaid ? '已开通' : '等待中', active: isPaid },
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                      <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                        step.active 
                        ? 'bg-cyan-400 border-cyan-400 ring-4 ring-cyan-400/20' 
                        : 'bg-[#0b101e] border-gray-700'
                      }`} />
                      <div className="text-center space-y-1">
                        <div className={`text-sm font-bold ${step.active ? 'text-white' : 'text-gray-500'}`}>{step.label}</div>
                        <div className="text-[10px] text-gray-600 font-mono">{step.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. 商品详细信息表格 */}
            <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md space-y-8">
              <div className="flex items-center space-x-3 text-blue-500">
                <Package size={20} />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">服务详细信息</h2>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {/* 表头 */}
                <div className="col-span-12 grid grid-cols-12 text-[10px] text-gray-600 font-bold uppercase tracking-widest pb-4 border-b border-gray-800/50">
                  <div className="col-span-4 pl-4">服务名称</div>
                  <div className="col-span-3">规格</div>
                  <div className="col-span-2">类型</div>
                  <div className="col-span-1">数量</div>
                  <div className="col-span-2 text-right pr-4">状态</div>
                </div>

                {/* 表体 */}
                <div className="col-span-12 grid grid-cols-12 items-center gap-y-4 py-4">
                  <div className="col-span-4 flex items-center space-x-4 pl-4">
                    <div className="w-16 h-12 bg-blue-900/20 rounded-lg overflow-hidden border border-white/5 shrink-0">
                      <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover opacity-80" alt="algorithm" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">地块提取算法服务</div>
                      <div className="text-[10px] text-gray-600">(在线API调用)</div>
                    </div>
                  </div>
                  
                  <div className="col-span-3 space-y-1.5">
                    {[
                      { l: '有效期限', v: '7日' },
                      { l: '调用量', v: '100次' },
                      { l: '服务接口', v: '1个' },
                    ].map(spec => (
                      <div key={spec.l} className="flex justify-between pr-8 text-[11px]">
                        <span className="text-gray-500">{spec.l}</span>
                        <span className="text-gray-300 font-mono">{spec.v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-2 text-[11px] text-gray-300">
                    算法服务
                  </div>
                  
                  <div className="col-span-1 text-[11px] text-gray-300 font-mono">
                    1
                  </div>

                  <div className="col-span-2 text-right pr-4 text-[11px] text-gray-300">
                    {status.label}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 使用流程说明 */}
            <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md space-y-10">
              <div className="flex items-center space-x-3 text-blue-500">
                <Info size={18} />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">开通流程说明</h2>
              </div>

              <div className="relative pt-6 pb-4">
                <div className="absolute top-[52px] left-[18%] right-[18%] h-[1px] bg-gray-800" />
                <div className="flex justify-around relative z-10">
                  <div className="flex flex-col items-center space-y-5">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">1</div>
                    <div className="text-center space-y-1">
                      <div className="text-sm font-bold text-white">提交申请</div>
                      <div className="text-[11px] text-gray-500">填写用途并提交</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-5">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">2</div>
                    <div className="text-center space-y-1">
                      <div className="text-sm font-bold text-white">获取Token</div>
                      <div className={`text-[11px] text-gray-500`}>审核通过后发放凭证</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧支付结算卡片 */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-[#0b101e]/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-md shadow-2xl sticky top-8 space-y-10">
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-white">申请汇总信息</h2>
                <div className="space-y-4 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">服务类型</span>
                    <span className="text-white">在线API</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">申请时间</span>
                    <span className="text-white font-mono">2025-12-05</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800/50 flex justify-between items-center">
                <span className="text-base font-bold text-white">审核状态</span>
                <span className={`text-lg font-bold ${isCancelled ? 'text-gray-600' : (isPaid ? 'text-green-500' : 'text-blue-500')}`}>
                    {status.label}
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
                          <span>服务已开通</span>
                        </div>
                        <button 
                          onClick={onGoToOrderManagement}
                          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
                        >
                          <List size={18} />
                          <span>查看我的服务</span>
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

export default OrderPaymentView;
