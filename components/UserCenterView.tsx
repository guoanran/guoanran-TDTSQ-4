
import React, { useState } from 'react';
import { 
  User, 
  ShoppingCart, 
  Settings, 
  Heart, 
  Bell, 
  Cloud, 
  Edit3, 
  Key, 
  Phone, 
  Mail, 
  Building2, 
  MapPin, 
  Search, 
  Filter, 
  CheckCircle2, 
  MoreHorizontal,
  FolderPlus,
  Upload,
  FileText, 
  ChevronLeft,
  ChevronRight,
  Download,
  X,
  Info,
  List,
  Truck,
  MessageSquare,
  Copy,
  Code,
  FileCode,
  Database,
  Eye,
  EyeOff
} from 'lucide-react';

interface UserCenterViewProps {
  initialTab?: 'profile' | 'orders' | 'customization' | 'collections' | 'notifications' | 'drive';
}

const UserCenterView: React.FC<UserCenterViewProps> = ({ initialTab = 'profile' }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'customization' | 'collections' | 'notifications' | 'drive'>(initialTab);

  const menuItems = [
    { id: 'profile', label: '个人资料', icon: <User size={18} /> },
    { id: 'orders', label: '订单管理', icon: <ShoppingCart size={18} /> },
    { id: 'customization', label: '应用定制', icon: <Settings size={18} /> },
    { id: 'collections', label: '收藏管理', icon: <Heart size={18} /> },
    { id: 'notifications', label: '消息通知', icon: <Bell size={18} /> },
    { id: 'drive', label: '个人云盘', icon: <Cloud size={18} /> },
  ];

  return (
    <div className="flex-1 bg-gray-50 h-full flex overflow-hidden text-slate-800 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800">个人中心</h2>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-slate-600 hover:bg-gray-50 hover:text-slate-900'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
           <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-xs font-bold text-blue-800 mb-1">专属客服经理</div>
              <div className="text-[10px] text-blue-600 mb-2">周一至周五 9:00-18:00</div>
              <div className="text-sm font-bold text-slate-700">186-2718-xxxx</div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* Adjusted max-width to reduce blank space on sides */}
        <div className="max-w-[1600px] mx-auto">
          {activeTab === 'profile' && <ProfilePanel />}
          {activeTab === 'orders' && <OrdersPanel />}
          {activeTab === 'customization' && <CustomizationPanel />}
          {activeTab === 'collections' && <CollectionsPanel />}
          {activeTab === 'notifications' && <NotificationsPanel />}
          {activeTab === 'drive' && <DrivePanel />}
        </div>
      </main>
    </div>
  );
};

const ProfilePanel = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [userData, setUserData] = useState({
    phone: '138****6789',
    email: 'zhangming@example.com',
    address: '北京市朝阳区建国路88号'
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      {/* Modals */}
      {isEditProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-slate-800">编辑个人资料</h3>
              <button 
                onClick={() => setIsEditProfileOpen(false)}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">联系电话</label>
                <input 
                  type="text" 
                  defaultValue={userData.phone}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">电子邮箱</label>
                <input 
                  type="email" 
                  defaultValue={userData.email}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">联系地址</label>
                <textarea 
                  defaultValue={userData.address}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm resize-none"
                />
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
              <button 
                onClick={() => setIsEditProfileOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-gray-200 rounded-lg transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => setIsEditProfileOpen(false)}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/30 transition-colors"
              >
                保存修改
              </button>
            </div>
          </div>
        </div>
      )}

      {isChangePasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-slate-800">修改密码</h3>
              <button 
                onClick={() => setIsChangePasswordOpen(false)}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">当前密码</label>
                <input 
                  type="password" 
                  placeholder="请输入当前密码"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">新密码</label>
                <input 
                  type="password" 
                  placeholder="请输入新密码"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                />
                <p className="text-xs text-slate-400">密码长度至少8位，包含字母和数字</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">确认新密码</label>
                <input 
                  type="password" 
                  placeholder="请再次输入新密码"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                />
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
              <button 
                onClick={() => setIsChangePasswordOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-gray-200 rounded-lg transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => setIsChangePasswordOpen(false)}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/30 transition-colors"
              >
                确认修改
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Info Card */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden shrink-0 border-4 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="User" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-slate-800">张明</h2>
              <span className="text-sm text-slate-400">账号: zhangming123</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Phone size={14} /> {userData.phone}</div>
              <div className="flex items-center gap-2"><Mail size={14} /> {userData.email}</div>
              <div className="flex items-center gap-2"><MapPin size={14} /> {userData.address}</div>
              <div className="flex items-center gap-2"><Building2 size={14} /> 科技有限公司</div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsEditProfileOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-slate-600 transition-colors"
          >
            <Edit3 size={14} /> 编辑资料
          </button>
          <button 
            onClick={() => setIsChangePasswordOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Key size={14} /> 修改密码
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <User size={24} />
          </div>
          <div>
            <div className="text-sm text-slate-500">个人资料</div>
            <div className="text-lg font-bold text-slate-800">完善度 85%</div>
          </div>
        </div>
        <div className="bg-green-50/50 rounded-xl p-6 border border-green-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <ShoppingCart size={24} />
          </div>
          <div>
            <div className="text-sm text-slate-500">我的订单</div>
            <div className="text-lg font-bold text-slate-800">12 个待处理</div>
          </div>
        </div>
        <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
            <Heart size={24} />
          </div>
          <div>
            <div className="text-sm text-slate-500">我的收藏</div>
            <div className="text-lg font-bold text-slate-800">24 个项目</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-slate-800 mb-4">最近订单</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <div>
                <div className="font-medium text-slate-800">订单 #12345</div>
                <div className="text-xs text-slate-400">2023-06-15</div>
              </div>
              <span className="text-green-600 text-sm font-medium">已完成</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <div>
                <div className="font-medium text-slate-800">订单 #12346</div>
                <div className="text-xs text-slate-400">2023-06-18</div>
              </div>
              <span className="text-blue-600 text-sm font-medium">待审核</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-slate-800 mb-4">最新通知</h3>
          <div className="space-y-4">
            <div className="py-3 border-b border-gray-50 last:border-0">
              <div className="font-medium text-slate-800 text-sm">账户安全提醒</div>
              <div className="text-xs text-slate-500 mt-1">您的密码将于30天后过期，请及时更换</div>
            </div>
            <div className="py-3 border-b border-gray-50 last:border-0">
              <div className="font-medium text-slate-800 text-sm">订单发货通知</div>
              <div className="text-xs text-slate-500 mt-1">您的订单 #12345 已发货</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrdersPanel = () => {
  const [viewingOrder, setViewingOrder] = useState<any>(null);
  const [downloadOrder, setDownloadOrder] = useState<any>(null); // State for download dialog
  const [downloadType, setDownloadType] = useState<'dataset' | 'api' | null>(null); // Type of download
  const [tokenVisible, setTokenVisible] = useState(false);

  const orders = [
    { id: '#12345', date: '2023-11-15 14:30', name: '行政区划数据集', type: '数据集', price: '¥ 1,299.00', status: '已完成', statusColor: 'bg-green-100 text-green-700' },
    { id: '#12346', date: '2023-11-16 09:45', name: '水稻识别算法服务', type: 'API服务', price: '¥ 899.00', status: '待审核', statusColor: 'bg-blue-100 text-blue-700' },
    { id: '#12347', date: '2023-11-17 10:15', name: 'GF2卫星数据集', type: '数据集', price: '¥ 2,499.00', status: '已驳回', statusColor: 'bg-red-100 text-red-700' },
    { id: '#12348', date: '2023-11-18 11:20', name: '油菜识别算法服务', type: 'API服务', price: '¥ 1,599.00', status: '已取消', statusColor: 'bg-gray-100 text-gray-700' },
    { id: '#12350', date: '2023-11-20 14:15', name: '湖北省一张图正射影像', type: '数据集', price: '¥ 3,699.00', status: '已完成', statusColor: 'bg-green-100 text-green-700' },
    { id: '#12351', date: '2023-11-21 16:30', name: '道路提取算法服务', type: 'API服务', price: '¥ 2,000.00', status: '已完成', statusColor: 'bg-green-100 text-green-700' },
  ];

  const handleDownload = (order: any) => {
    setDownloadOrder(order);
    if (order.type === '数据集') {
      setDownloadType('dataset');
    } else if (order.type === 'API服务') {
      setDownloadType('api');
    }
  };

  const closeDownload = () => {
    setDownloadOrder(null);
    setDownloadType(null);
    setTokenVisible(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      
      {/* Dataset Download Modal */}
      {downloadOrder && downloadType === 'dataset' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2 text-slate-800">
                <Database size={20} className="text-blue-600" />
                <h3 className="text-lg font-bold">数据资源下载</h3>
              </div>
              <button onClick={closeDownload} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                <div className="text-sm font-bold text-slate-700 mb-1">{downloadOrder.name}</div>
                <div className="text-xs text-slate-500">订单号：{downloadOrder.id}</div>
              </div>
              
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">文件列表</div>
                {[
                  { name: 'HB_2023_DOM_Part1.tiff', size: '1.2 GB', type: 'TIFF' },
                  { name: 'HB_2023_DOM_Part2.tiff', size: '1.1 GB', type: 'TIFF' },
                  { name: 'Metadata.xml', size: '12 KB', type: 'XML' },
                  { name: 'RPC_Params.txt', size: '4 KB', type: 'TXT' },
                ].map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-slate-500 font-bold text-[10px]">
                        {file.type}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{file.name}</div>
                        <div className="text-xs text-slate-400">{file.size}</div>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-blue-600 p-2">
                      <Download size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button onClick={closeDownload} className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-slate-700 rounded-lg text-sm font-medium transition-colors">关闭</button>
            </div>
          </div>
        </div>
      )}

      {/* API Service Download Modal */}
      {downloadOrder && downloadType === 'api' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2 text-slate-800">
                <Code size={20} className="text-purple-600" />
                <h3 className="text-lg font-bold">API服务授权信息</h3>
              </div>
              <button onClick={closeDownload} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                <div className="text-sm font-bold text-slate-700 mb-1">{downloadOrder.name}</div>
                <div className="text-xs text-slate-500">服务有效期至：2024-12-31</div>
              </div>

              <div className="space-y-4">
                {/* Endpoint */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">服务地址 (Endpoint)</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-slate-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono text-slate-600 select-all">
                      https://api.spatial-cloud.com/v1/services/algo/detection
                    </div>
                    <button className="px-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-slate-600 transition-colors" title="复制">
                      <Copy size={16} />
                    </button>
                  </div>
                </div>

                {/* Token */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">访问令牌 (Access Token)</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-slate-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono text-slate-600 flex items-center justify-between">
                      <span>{tokenVisible ? 'sk_live_8374928374928347923847293847' : 'sk_live_****************************'}</span>
                      <button onClick={() => setTokenVisible(!tokenVisible)} className="text-slate-400 hover:text-slate-600">
                        {tokenVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                    <button className="px-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-slate-600 transition-colors" title="复制">
                      <Copy size={16} />
                    </button>
                  </div>
                  <p className="text-[10px] text-orange-500 flex items-center gap-1">
                    <Info size={10} /> 请妥善保管您的Token，切勿泄露给第三方
                  </p>
                </div>

                {/* Params */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">参数示例</label>
                  <div className="bg-[#1e293b] rounded-lg p-3 text-xs font-mono text-blue-300 overflow-x-auto">
                    <pre>{`{
  "model": "crop_detection_v2",
  "input": {
    "image": "base64_string...",
    "region": [114.30, 30.59, 114.35, 30.62]
  }
}`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
              <button className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
                <FileText size={16} /> 下载接口说明文档.docx
              </button>
              <button onClick={closeDownload} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">确认</button>
            </div>
          </div>
        </div>
      )}

      {/* Order Details Modal (Existing) */}
      {viewingOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
             {/* Modal Header */}
             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-slate-800">订单详情</h3>
                <button onClick={() => setViewingOrder(null)} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-colors">
                  <X size={20} />
                </button>
             </div>
             
             {/* Modal Body - Scrollable */}
             <div className="p-6 overflow-y-auto">
                {/* Section 1: Order Info */}
                <h4 className="font-bold text-slate-800 mb-4">订单信息</h4>
                <div className="grid grid-cols-2 gap-y-4 text-sm mb-8">
                   <div><span className="text-slate-500 text-xs block mb-1">订单编号</span> <div className="font-medium text-slate-800">{viewingOrder.id}</div></div>
                   <div><span className="text-slate-500 text-xs block mb-1">下单时间</span> <div className="font-medium text-slate-800">{viewingOrder.date}</div></div>
                   <div><span className="text-slate-500 text-xs block mb-1">订单状态</span> <div className={`font-medium ${viewingOrder.status === '已完成' ? 'text-green-600' : 'text-blue-600'}`}>{viewingOrder.status}</div></div>
                </div>

                {/* Section 2: Product List */}
                <h4 className="font-bold text-slate-800 mb-4">产品列表</h4>
                <div className="border border-gray-100 rounded-lg overflow-hidden mb-8">
                   <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-slate-500 text-xs">
                         <tr>
                            <th className="px-4 py-3 font-medium">产品名称</th>
                            <th className="px-4 py-3 font-medium">产品规格</th>
                            <th className="px-4 py-3 font-medium">数量</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                         <tr>
                            <td className="px-4 py-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded bg-blue-100 overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" alt="" /></div>
                                  <div>
                                     <div className="font-medium text-slate-700 text-xs sm:text-sm">{viewingOrder.name}</div>
                                     <div className="text-[10px] text-slate-400 mt-0.5">{viewingOrder.type}</div>
                                  </div>
                               </div>
                            </td>
                            <td className="px-4 py-4 text-slate-600">{viewingOrder.type === 'API服务' ? '基础版' : '标准版'}</td>
                            <td className="px-4 py-4 text-slate-600">1</td>
                         </tr>
                      </tbody>
                   </table>
                </div>

                {/* Section 3: Delivery Info */}
                <h4 className="font-bold text-slate-800 mb-4">收货信息</h4>
                <div className="grid grid-cols-2 gap-y-4 text-sm mb-8">
                   <div><span className="text-slate-500 text-xs block mb-1">发货方式</span> <span className="font-medium text-slate-800">线上下载</span></div>
                   <div><span className="text-slate-500 text-xs block mb-1">附件信息</span> <span className="font-medium text-slate-800">{viewingOrder.type === 'API服务' ? 'API文档.pdf' : '无'}</span></div>
                </div>
             </div>

             {/* Footer */}
             <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button onClick={() => setViewingOrder(null)} className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-slate-700 rounded-lg text-sm font-medium transition-colors">关闭</button>
             </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">订单管理</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg text-slate-500"><Settings size={20} /></button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="搜索订单名称..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" />
        </div>
        <div className="relative w-40">
          <select className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white text-sm appearance-none cursor-pointer">
            <option>全部状态</option>
            <option>待审核</option>
            <option>已完成</option>
            <option>已驳回</option>
            <option>已取消</option>
          </select>
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-slate-500">
              <th className="px-6 py-4 font-medium">订单编号</th>
              <th className="px-6 py-4 font-medium">下单时间</th>
              <th className="px-6 py-4 font-medium">产品名称</th>
              <th className="px-6 py-4 font-medium">产品类别</th>
              <th className="px-6 py-4 font-medium">状态</th>
              <th className="px-6 py-4 font-medium">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-slate-700">{order.id}</td>
                <td className="px-6 py-4 text-slate-500">{order.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-blue-100 overflow-hidden shrink-0">
                       <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover opacity-80" alt="" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-700">{order.name}</div>
                      <div className="text-xs text-slate-400">{order.type}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500">{order.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${order.statusColor}`}>{order.status}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 text-blue-600">
                    <button 
                      onClick={() => setViewingOrder(order)}
                      className="hover:text-blue-700 text-xs font-medium"
                    >
                      查看
                    </button>
                    {order.status === '已完成' && (
                      <button 
                        onClick={() => handleDownload(order)}
                        className="hover:text-blue-700 text-xs font-medium flex items-center gap-1"
                      >
                        <Download size={12}/> 下载
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <div>显示 1 至 6 条，共 13 条</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 transition-colors">上一页</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 transition-colors">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 transition-colors">3</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 transition-colors">下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomizationPanel = () => {
  const [viewingRequest, setViewingRequest] = useState<any>(null);
  const [viewingFeedback, setViewingFeedback] = useState<any>(null);

  const requests = [
    { 
      name: '农业监测系统', 
      category: '农业农村', 
      date: '2023-11-15', 
      status: '已反馈', 
      statusColor: 'bg-green-100 text-green-700',
      region: '江苏省南京市江宁区',
      startDate: '2023-11-01',
      endDate: '2023-12-31',
      frequency: '每日更新',
      description: '基于Web的农业监测应用，需要实现农作物生长状态监测、病虫害识别、产量预测等功能。支持多源遥感数据接入，提供可视化分析报告。',
      outputType: '数据接口、可视化报表、分析报告',
      delivery: 'online',
      contact: '张三',
      phone: '15812345678',
      email: 'zhangsan@example.com',
      address: '江苏省南京市江宁区科学园天元东路1号',
      feedback: '您的定制需求已收到，我们将在3个工作日内进行评估并与您联系。如有任何疑问，请随时联系我们的客服团队。'
    },
    { 
      name: '城市规划决策系统', 
      category: '城市规划', 
      date: '2023-11-10', 
      status: '已提交', 
      statusColor: 'bg-blue-100 text-blue-700',
      region: '湖北省武汉市洪山区',
      startDate: '2024-01-01',
      endDate: '2024-06-30',
      frequency: '每月更新',
      description: '辅助城市规划决策所在的绿地分析系统，提供绿地空间分布、生态效益评估和规划方案优化功能。',
      outputType: '系统平台、数据服务',
      delivery: 'offline',
      contact: '李四',
      phone: '13987654321',
      email: 'lisi@example.com',
      address: '湖北省武汉市洪山区珞喻路1037号',
      feedback: '暂无反馈'
    },
    { 
      name: '环境监测预警平台', 
      category: '生态环境', 
      date: '2023-11-05', 
      status: '已反馈', 
      statusColor: 'bg-green-100 text-green-700',
      region: '广东省广州市天河区',
      startDate: '2023-10-01',
      endDate: '2023-12-31',
      frequency: '每周更新',
      description: '实时监测水质参数和水生态环境的应用平台，支持污染溯源分析和水环境质量评估。',
      outputType: 'API接口',
      delivery: 'online',
      contact: '王五',
      phone: '13600001111',
      email: 'wangwu@example.com',
      address: '广东省广州市天河区珠江新城',
      feedback: '需求已确认，技术团队正在进行可行性评估，预计将在下周一给出详细方案。'
    },
    { 
      name: '智慧交通管理系统', 
      category: '交通运输', 
      date: '2023-10-28', 
      status: '已提交', 
      statusColor: 'bg-blue-100 text-blue-700',
      region: '北京市朝阳区',
      startDate: '2023-12-01',
      endDate: '2024-11-30',
      frequency: '实时更新',
      description: '整合路网拓扑、交通流量与基础设施状态，为城市交通疏导与路网优化提供决策支持。',
      outputType: '系统集成',
      delivery: 'offline',
      contact: '赵六',
      phone: '18912348888',
      email: 'zhaoliu@example.com',
      address: '北京市朝阳区建国门外大街',
      feedback: '暂无反馈'
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      {/* Request Details Modal */}
      {viewingRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
             {/* Modal Header */}
             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-slate-800">需求详情</h3>
                <button onClick={() => setViewingRequest(null)} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-colors">
                  <X size={20} />
                </button>
             </div>
             
             {/* Modal Body */}
             <div className="p-6 overflow-y-auto space-y-8">
                {/* Section 1: Basic Info */}
                <div className="space-y-4">
                   <div className="flex items-center space-x-2 text-blue-600">
                      <Info size={18} />
                      <h4 className="font-bold text-sm">基础信息</h4>
                   </div>
                   <div className="bg-slate-50 rounded-xl p-5 grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                      <div>
                         <span className="text-xs text-slate-500 block mb-1">应用名称</span>
                         <div className="font-medium text-slate-800">{viewingRequest.name}</div>
                      </div>
                      <div>
                         <span className="text-xs text-slate-500 block mb-1">行政区划</span>
                         <div className="font-medium text-slate-800">{viewingRequest.region}</div>
                      </div>
                      <div>
                         <span className="text-xs text-slate-500 block mb-1">开始时间</span>
                         <div className="font-medium text-slate-800">{viewingRequest.startDate}</div>
                      </div>
                      <div>
                         <span className="text-xs text-slate-500 block mb-1">结束时间</span>
                         <div className="font-medium text-slate-800">{viewingRequest.endDate}</div>
                      </div>
                      <div>
                         <span className="text-xs text-slate-500 block mb-1">更新频次</span>
                         <div className="font-medium text-slate-800">{viewingRequest.frequency}</div>
                      </div>
                      <div>
                         <span className="text-xs text-slate-500 block mb-1">状态</span>
                         <div className={`font-medium ${viewingRequest.status === '已反馈' ? 'text-green-600' : 'text-blue-600'}`}>{viewingRequest.status}</div>
                      </div>
                   </div>
                </div>

                {/* Section 2: Requirement Details */}
                <div className="space-y-4">
                   <div className="flex items-center space-x-2 text-purple-600">
                      <List size={18} />
                      <h4 className="font-bold text-sm">需求详情</h4>
                   </div>
                   <div className="space-y-4 px-2">
                      <div>
                         <span className="text-xs text-slate-500 block mb-2">需求描述</span>
                         <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700 leading-relaxed">
                            {viewingRequest.description}
                         </div>
                      </div>
                      <div>
                         <span className="text-xs text-slate-500 block mb-1">输出类型</span>
                         <div className="font-medium text-slate-800 text-sm">{viewingRequest.outputType}</div>
                      </div>
                   </div>
                </div>

                {/* Section 3: Delivery Method */}
                <div className="space-y-4">
                   <div className="flex items-center space-x-2 text-orange-500">
                      <Truck size={18} />
                      <h4 className="font-bold text-sm">收货方式</h4>
                   </div>
                   <div className="flex items-center space-x-8 px-2">
                      <div className="flex items-center space-x-2">
                         <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${viewingRequest.delivery === 'online' ? 'border-blue-500' : 'border-gray-300'}`}>
                            {viewingRequest.delivery === 'online' && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                         </div>
                         <span className="text-sm text-slate-700">线上交付</span>
                      </div>
                      <div className="flex items-center space-x-2">
                         <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${viewingRequest.delivery === 'offline' ? 'border-blue-500' : 'border-gray-300'}`}>
                            {viewingRequest.delivery === 'offline' && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                         </div>
                         <span className="text-sm text-slate-700">线下交付</span>
                      </div>
                   </div>
                </div>

                {/* Section 4: Contact Info */}
                <div className="space-y-4">
                   <div className="flex items-center space-x-2 text-green-600">
                      <User size={18} />
                      <h4 className="font-bold text-sm">联系信息</h4>
                   </div>
                   <div className="grid grid-cols-2 gap-y-4 px-2 text-sm">
                      <div>
                         <span className="text-xs text-slate-500 block mb-1">联系人</span>
                         <div className="font-medium text-slate-800">{viewingRequest.contact}</div>
                      </div>
                      <div>
                         <span className="text-xs text-slate-500 block mb-1">联系电话</span>
                         <div className="font-medium text-slate-800">{viewingRequest.phone}</div>
                      </div>
                      <div className="col-span-2">
                         <span className="text-xs text-slate-500 block mb-1">电子邮箱</span>
                         <div className="font-medium text-slate-800">{viewingRequest.email}</div>
                      </div>
                      <div className="col-span-2">
                         <span className="text-xs text-slate-500 block mb-1">联系地址</span>
                         <div className="font-medium text-slate-800">{viewingRequest.address}</div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Footer */}
             <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end space-x-3">
                <button onClick={() => setViewingRequest(null)} className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-slate-700 rounded-lg text-sm font-medium transition-colors">关闭</button>
             </div>
          </div>
        </div>
      )}

      {/* Feedback Log Modal */}
      {viewingFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-slate-800">反馈日志</h3>
                <button onClick={() => setViewingFeedback(null)} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-colors">
                  <X size={20} />
                </button>
             </div>
             
             <div className="p-6 space-y-6">
                <div className="space-y-2">
                   <label className="text-sm text-slate-500">反馈信息</label>
                   <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 leading-relaxed min-h-[100px]">
                      {viewingFeedback.feedback}
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="text-sm text-slate-500">联系人</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700">
                         {viewingFeedback.contact}
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm text-slate-500">联系电话</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700">
                         {viewingFeedback.phone}
                      </div>
                   </div>
                </div>
             </div>

             <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button onClick={() => setViewingFeedback(null)} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">关闭</button>
             </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex justify-between items-center bg-gradient-to-r from-blue-50 to-white">
        <div className="flex gap-6 items-center">
           <img src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&w=400&q=80" className="w-48 h-24 object-cover rounded-lg shadow-sm" alt="Custom Service" />
           <div className="space-y-2">
             <h2 className="text-xl font-bold text-slate-800">应用定制服务</h2>
             <p className="text-slate-500 text-sm">提供专业的个性化应用开发解决方案，满足您的特定业务需求。</p>
             <div className="flex gap-4 text-xs text-green-600 pt-1">
               <span className="flex items-center gap-1"><CheckCircle2 size={12}/> 从需求分析到设计再到部署维护</span>
               <span className="flex items-center gap-1"><CheckCircle2 size={12}/> 专业团队一对一服务</span>
             </div>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6 shadow-sm">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-800">需求筛选</h3>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-500">应用类型</label>
            <select className="w-full p-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500">
              <option>全部应用类型</option>
              <option>自然资源</option>
              <option>水利水务</option>
              <option>农业农村</option>
              <option>生态环境</option>
              <option>应急灾害</option>
              <option>城市规划</option>
              <option>住房保障</option>
              <option>交通运输</option>
              <option>智慧养老</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-500">状态</label>
            <select className="w-full p-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500">
              <option>全部状态</option>
              <option>已反馈</option>
              <option>已提交</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-500">更新时间</label>
            <select className="w-full p-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500">
              <option>全部时间</option>
              <option>今天</option>
              <option>一周内</option>
              <option>一月内</option>
              <option>一年内</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
           <div className="relative flex-1">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
             <input type="text" placeholder="搜索需求名称..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm" />
           </div>
           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
             <Filter size={16} /> 筛选
           </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-slate-500">
              <th className="px-6 py-4 font-medium">需求名称</th>
              <th className="px-6 py-4 font-medium">应用类型</th>
              <th className="px-6 py-4 font-medium">提交时间</th>
              <th className="px-6 py-4 font-medium">状态</th>
              <th className="px-6 py-4 font-medium text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {requests.map((req, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-slate-700 font-medium">{req.name}</td>
                <td className="px-6 py-4 text-slate-500">{req.category}</td>
                <td className="px-6 py-4 text-slate-500">{req.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${req.statusColor}`}>{req.status}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-3 text-blue-600">
                    <button 
                      onClick={() => setViewingRequest(req)}
                      className="hover:text-blue-700 text-xs font-medium"
                    >
                      详情
                    </button>
                    {req.status === '已反馈' && (
                      <button 
                        onClick={() => setViewingFeedback(req)}
                        className="hover:text-blue-700 text-xs font-medium"
                      >
                        反馈日志
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <div>显示第 1 到 4 条，共 4 条结果</div>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50"><ChevronLeft size={14}/></button>
            <button className="w-8 h-8 flex items-center justify-center bg-blue-50 border border-blue-200 text-blue-600 rounded">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50"><ChevronRight size={14}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollectionsPanel = () => {
  const [activeType, setActiveType] = useState('数据收藏');
  
  const items = [
    { title: '行政区划数据集', sub: '全国省市县行政区划边界与属性数据', type: '地理数据', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80', tag: '地理数据' },
    { title: '黑臭水体监测数据集', sub: '全国重点城市黑臭水体监测与评估数据', type: '环境数据', img: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=400&q=80', tag: '环境数据' },
    { title: '土壤肥力监测数据集', sub: '耕地土壤养分含量与肥力等级监测数据', type: '农业数据', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80', tag: '农业数据' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">收藏管理</h2>
      </div>

      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          {['数据收藏', '服务收藏', '应用收藏'].map(type => (
            <button 
              key={type}
              onClick={() => setActiveType(type)}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeType === type ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input type="text" placeholder="请输入关键字搜索数据收藏内容..." className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
            <div className="h-40 overflow-hidden relative">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} />
              <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500 shadow-md">
                <Heart size={16} fill="currentColor" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="font-bold text-slate-800">{item.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-2">{item.sub}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-green-600 font-medium">{item.tag}</span>
                <button className="text-blue-600 text-xs font-medium hover:underline">查看详情</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-6">
        <button className="px-6 py-2 border border-gray-200 rounded-lg text-sm text-slate-600 hover:bg-gray-50 transition-colors">加载更多</button>
      </div>
    </div>
  );
};

const NotificationsPanel = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">消息通知</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <CheckCircle2 size={16} /> 全部标记已读
        </button>
      </div>

      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          <button className="pb-4 text-sm font-medium border-b-2 border-blue-600 text-blue-600">全部消息</button>
          <button className="pb-4 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-800">已读</button>
          <button className="pb-4 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-800">未读</button>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { title: '账户安全提醒', desc: '您的密码将于30天后过期，请及时更换以保障账户安全。', time: '今天 09:30', read: false, type: 'security' },
          { title: '订单发货通知', desc: '您的订单 #12345 已发货，快递公司：顺丰速运，运单号：SF1234567890。', time: '昨天 15:45', read: true, type: 'logistics' },
          { title: '618年中大促活动通知', desc: '618年中大促活动即将开始，全场商品低至5折，更有满减优惠券等您领取！', time: '2023-06-10', read: true, type: 'activity' }
        ].map((msg, idx) => (
          <div key={idx} className={`p-6 rounded-xl border transition-colors ${msg.read ? 'bg-white border-gray-100' : 'bg-blue-50/30 border-blue-100'}`}>
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                msg.type === 'security' ? 'bg-blue-100 text-blue-600' : 
                msg.type === 'logistics' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
              }`}>
                {msg.type === 'security' ? <ShieldCheckIcon size={20} /> : 
                 msg.type === 'logistics' ? <TruckIcon size={20} /> : <MegaphoneIcon size={20} />}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-slate-800 text-sm">{msg.title}</h3>
                  <span className="text-xs text-slate-400">{msg.time}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{msg.desc}</p>
                <div className="pt-2">
                  <button className="text-blue-600 text-xs font-medium hover:underline">{msg.type === 'logistics' ? '查看物流' : msg.type === 'security' ? '立即更换' : '了解详情'}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DrivePanel = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [activeUploadTab, setActiveUploadTab] = useState('image');

  const files = [
    { name: '影像文件', date: '2023-06-15', size: '-', type: 'folder' },
    { name: '矢量文件', date: '2023-06-15', size: '-', type: 'folder' },
    { name: '标注文件', date: '2023-06-15', size: '-', type: 'folder' },
    { name: '栅格文件', date: '2023-06-15', size: '-', type: 'folder' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      {/* Upload File Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-slate-800">上传文件</h3>
              <button onClick={() => setIsUploadModalOpen(false)} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="px-6 pt-4">
              <div className="flex gap-6 border-b border-gray-100">
                <button onClick={() => setActiveUploadTab('image')} className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeUploadTab === 'image' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>影像数据</button>
                <button onClick={() => setActiveUploadTab('vector')} className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeUploadTab === 'vector' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>矢量文件</button>
                <button onClick={() => setActiveUploadTab('geojson')} className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeUploadTab === 'geojson' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>GEOJSON文件</button>
              </div>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-gray-200 rounded-xl bg-slate-50/50 flex flex-col items-center justify-center py-12 cursor-pointer hover:border-blue-500/50 hover:bg-blue-50/10 transition-all group">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-500 transition-colors">
                  <Upload size={24} />
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  {activeUploadTab === 'image' && <>拖放TIF/TIFF文件到此处，或 <span className="text-blue-600 hover:underline">浏览文件</span></>}
                  {activeUploadTab === 'vector' && <>拖放压缩包到此处，或 <span className="text-blue-600 hover:underline">浏览文件</span></>}
                  {activeUploadTab === 'geojson' && <>拖放GEOJSON文件到此处，或 <span className="text-blue-600 hover:underline">浏览文件</span></>}
                </p>
                <p className="text-xs text-slate-400">
                  {activeUploadTab === 'image' && '支持格式：tif、tiff，单个文件不超过1GB'}
                  {activeUploadTab === 'vector' && '支持包含shp、prj、shx、dbf的压缩包，UTF-8编码，不超过50M'}
                  {activeUploadTab === 'geojson' && '支持geojson文件，UTF-8编码'}
                </p>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setIsUploadModalOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-slate-600 hover:bg-gray-50 transition-colors">取消</button>
              <button onClick={() => setIsUploadModalOpen(false)} className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm transition-colors">上传</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">个人云盘</h2>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button 
            onClick={() => setIsUploadModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Upload size={16} /> 上传文件
          </button>
          <button className="border border-gray-200 hover:bg-gray-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
            <FolderPlus size={16} /> 新建文件夹
          </button>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="搜索文件或文件夹..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 w-64" />
          </div>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button className="px-3 py-2 bg-gray-50 hover:bg-gray-100 border-r border-gray-200 text-slate-600"><List size={16}/></button>
            <button className="px-3 py-2 bg-white hover:bg-gray-50 text-slate-400"><LayoutGrid size={16}/></button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
        <div>全部文件</div>
        <div>4个文件</div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center gap-4 text-xs">
        <div className="text-slate-500">存储空间: 5.2GB / 20GB</div>
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 w-[26%] rounded-full" />
        </div>
        <div className="text-slate-500">26% 已使用</div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-slate-500">
              <th className="px-6 py-3 font-medium">名称</th>
              <th className="px-6 py-3 font-medium">修改日期</th>
              <th className="px-6 py-3 font-medium">大小</th>
              <th className="px-6 py-3 font-medium text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {files.map((file, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {file.type === 'folder' ? <FolderIcon className="text-yellow-400" size={20} /> : <FileText size={20} className="text-blue-400" />}
                    <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{file.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500">{file.date}</td>
                <td className="px-6 py-4 text-slate-500">{file.size}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Helper Icons
const ShieldCheckIcon = ({size}: {size:number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-current"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
);
const TruckIcon = ({size}: {size:number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
);
const MegaphoneIcon = ({size}: {size:number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
);
const FolderIcon = ({size, className}: {size:number, className?: string}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
);
const LayoutGrid = ({size}: {size:number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
);

export default UserCenterView;
