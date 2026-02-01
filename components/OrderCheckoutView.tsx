
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  QrCode, 
  CreditCard,
  Smartphone
} from 'lucide-react';

interface OrderCheckoutViewProps {
  totalAmount: number;
  onBack: () => void;
  onPaymentSuccess: () => void;
}

const OrderCheckoutView: React.FC<OrderCheckoutViewProps> = ({ totalAmount, onBack, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'wechat'>('alipay');

  return (
    <div className="flex-1 bg-[#020617] flex items-center justify-center relative overflow-hidden animate-in fade-in duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-xl w-full mx-6 relative z-10">
        <div className="bg-[#0b101e]/90 border border-gray-800 rounded-[3rem] p-12 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] space-y-10">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="text-gray-500 hover:text-white transition-colors flex items-center space-x-2">
              <ArrowLeft size={18} />
              <span className="text-sm">返回</span>
            </button>
            <div className="flex items-center space-x-2 text-blue-500">
              <ShieldCheck size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Secure Checkout</span>
            </div>
          </div>

          {/* Amount */}
          <div className="text-center space-y-2">
            <div className="text-gray-400 text-sm font-light">应付总额</div>
            <div className="text-6xl font-black text-white font-mono">¥{totalAmount.toFixed(2)}</div>
          </div>

          {/* Payment Method Selector */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setPaymentMethod('alipay')}
              className={`p-5 rounded-2xl border transition-all flex flex-col items-center space-y-3 ${
                paymentMethod === 'alipay' ? 'bg-blue-600/10 border-blue-500 shadow-lg shadow-blue-900/20' : 'bg-black/20 border-gray-800 hover:border-gray-700 text-gray-500'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${paymentMethod === 'alipay' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-600'}`}>
                <Smartphone size={24} />
              </div>
              <span className={`text-sm font-bold ${paymentMethod === 'alipay' ? 'text-white' : 'text-gray-500'}`}>支付宝支付</span>
            </button>

            <button 
              onClick={() => setPaymentMethod('wechat')}
              className={`p-5 rounded-2xl border transition-all flex flex-col items-center space-y-3 ${
                paymentMethod === 'wechat' ? 'bg-green-600/10 border-green-500 shadow-lg shadow-green-900/20' : 'bg-black/20 border-gray-800 hover:border-gray-700 text-gray-500'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${paymentMethod === 'wechat' ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-600'}`}>
                <Smartphone size={24} />
              </div>
              <span className={`text-sm font-bold ${paymentMethod === 'wechat' ? 'text-white' : 'text-gray-500'}`}>微信支付</span>
            </button>
          </div>

          {/* Simulated QR Code */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative group cursor-pointer">
              <div className={`absolute -inset-4 rounded-[2rem] blur-2xl transition-all duration-700 opacity-20 group-hover:opacity-40 ${paymentMethod === 'alipay' ? 'bg-blue-500' : 'bg-green-500'}`} />
              <div className="w-56 h-56 bg-white rounded-[2rem] p-6 relative z-10 shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Simulated QR pattern using CSS or Icon */}
                <div className="w-full h-full relative border-4 border-gray-100 rounded-xl overflow-hidden">
                  <QrCode size={140} className={`w-full h-full transition-colors duration-500 ${paymentMethod === 'alipay' ? 'text-blue-600' : 'text-green-600'}`} strokeWidth={1} />
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-lg border-2 flex items-center justify-center shadow-lg ${paymentMethod === 'alipay' ? 'border-blue-500' : 'border-green-500'}`}>
                    {paymentMethod === 'alipay' ? (
                      <div className="w-6 h-6 bg-blue-500 rounded-sm" />
                    ) : (
                      <div className="w-6 h-6 bg-green-500 rounded-sm" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-light flex items-center space-x-2">
              <Smartphone size={14} />
              <span>请使用{paymentMethod === 'alipay' ? '支付宝' : '微信'}扫描二维码完成支付</span>
            </div>
          </div>

          {/* Simulation button to finish payment */}
          <button 
            onClick={onPaymentSuccess}
            className="w-full py-5 bg-white text-black rounded-2xl font-black text-lg hover:scale-[1.02] transition-all active:scale-95 shadow-2xl"
          >
            我已完成支付
          </button>

          <div className="flex items-center justify-center space-x-4">
             <div className="h-px bg-gray-800 flex-1" />
             <div className="text-[10px] text-gray-600 uppercase tracking-tighter">Verified by SecurePay</div>
             <div className="h-px bg-gray-800 flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCheckoutView;
