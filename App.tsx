
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GlobeContainer from './components/GlobeContainer';
import HomeView from './components/HomeView';
import ResourceView from './components/ResourceView';
import DataSearchView from './components/DataSearchView';
import OrderSubmissionView from './components/OrderSubmissionView';
import ResourceOrderView from './components/ResourceOrderView';
import OrderPaymentView from './components/OrderPaymentView';
import ResourcePaymentView from './components/ResourcePaymentView';
import OrderCheckoutView from './components/OrderCheckoutView';
import ServiceCenterView from './components/ServiceCenterView';
import AlgorithmDetailView from './components/AlgorithmDetailView';
import AppCenterView from './components/AppCenterView';
import AppDetailView from './components/AppDetailView';
import AppCustomizationView from './components/AppCustomizationView';
import SolutionsView from './components/SolutionsView';
import SolutionDetailView from './components/SolutionDetailView';
import HelpCenterView from './components/HelpCenterView';
import HelpDetailView from './components/HelpDetailView';
import NewsCenterView from './components/NewsCenterView';
import NewsDetailView from './components/NewsDetailView';
import DocCenterView from './components/DocCenterView';
import AboutPlatformView from './components/AboutPlatformView';
import UserCenterView from './components/UserCenterView';
import MapCenterView from './components/MapCenterView';
import EcoCreationView from './components/EcoCreationView';
import ModelTrainingView from './components/ModelTrainingView';
import AgentCenterView from './components/AgentCenterView';
import IntelligentAnalysisView from './components/IntelligentAnalysisView';
import IndustryView from './components/IndustryView';
import { Package, Map, ArrowLeft, ShoppingCart, Info, HelpCircle, Zap, BrainCircuit, Bot } from 'lucide-react';

export type ActivePage = 'home' | 'map-center' | 'resource-center' | 'resource' | 'service' | 'service-detail' | 'app' | 'app-detail' | 'app-customization' | 'co-creation' | 'solutions' | 'solution-detail' | 'about' | 'about-platform' | 'help-center' | 'help-detail' | 'news-center' | 'news-detail' | 'doc-center' | 'order' | 'resource-order' | 'payment' | 'resource-payment' | 'checkout' | 'user-center' | 'resource-search' | 'model-training' | 'agents' | 'eco-creation' | 'intelligent-analysis' | 'activity' | 'industry' | 'resource-image' | 'resource-thematic';

export type ActiveTab = 'standard' | 'thematic';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
  // Additional fields for order view
  satellite?: string;
  area?: string;
  date?: string;
  resolution?: string;
  sensor?: string;
  cloud?: string;
}

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [activeTab, setActiveTab] = useState<ActiveTab>('standard');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isResourceListView, setIsResourceListView] = useState(false);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [selectedSolutionId, setSelectedSolutionId] = useState<string | null>(null);
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const [selectedHelpId, setSelectedHelpId] = useState<string | null>(null);
  const [userCenterTab, setUserCenterTab] = useState<'profile' | 'orders' | 'customization' | 'collections' | 'notifications' | 'drive'>('profile');
  
  // 卫星轨道特效开关
  const [showOrbit, setShowOrbit] = useState(false);

  // 订单状态控制
  const [isPaid, setIsPaid] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  
  // Store the page to return to after checkout
  const [returnPage, setReturnPage] = useState<ActivePage>('payment');

  const handlePageChange = (page: ActivePage) => {
    // Handle navigation to data search view (embedded in resource page)
    if (page === 'resource-search') {
      setActivePage('resource');
      setIsResourceListView(true);
      setIsCartOpen(false);
      setShowOrbit(false);
    } else if (page === 'resource-image') {
      setActivePage('resource');
      setActiveTab('standard');
      setIsResourceListView(false);
      setIsCartOpen(false);
      setShowOrbit(false);
    } else if (page === 'resource-thematic') {
      setActivePage('resource');
      setActiveTab('thematic');
      setIsResourceListView(false);
      setIsCartOpen(false);
      setShowOrbit(false);
    } else {
      setActivePage(page);
      setIsCartOpen(false);
      setIsResourceListView(false);
      if (page !== 'resource') {
        setShowOrbit(false);
      }
    }

    if (page === 'user-center') {
      setUserCenterTab('profile');
    }
  };

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      const newItem = {
        ...item,
        satellite: item.satellite || 'Sentinel-2',
        area: item.area || '6930.6736km²',
        date: item.date || '2025-11-29',
        resolution: item.resolution || '10.0米',
        sensor: item.sensor || 'MSI',
        cloud: item.cloud || '0.0%'
      };
      return [...prev, newItem];
    });
  };

  const removeFromCart = (ids: string[]) => {
    setCartItems(prev => prev.filter(item => !ids.includes(item.id)));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const iNewQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: iNewQty };
      }
      return item;
    }));
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  // 模拟下单逻辑
  const handleStartServiceOrder = () => {
    setIsPaid(false);
    setIsCancelled(false);
    setActivePage('order');
  };

  const handleStartResourceOrder = () => {
    setIsPaid(false);
    setIsCancelled(false);
    setActivePage('resource-order');
  };

  const handleOrderSubmitted = () => {
    if (activePage === 'resource-order') {
      setActivePage('resource-payment');
    } else {
      setActivePage('payment');
    }
  };

  const handlePaymentSuccess = () => {
    setIsPaid(true);
    setIsCancelled(false);
    if (activePage === 'checkout') {
      setActivePage(returnPage);
    }
  };

  const handleCancelOrder = () => {
    setIsCancelled(true);
    setIsPaid(false);
  };

  const handleEnterAppDetail = (appId: string) => {
    setSelectedAppId(appId);
    setActivePage('app-detail');
  };

  const handleEnterSolutionDetail = (solutionId: string) => {
    setSelectedSolutionId(solutionId);
    setActivePage('solution-detail');
  };

  const handleEnterNewsDetail = (newsId: number) => {
    setSelectedNewsId(newsId);
    setActivePage('news-detail');
  };

  const handleEnterHelpDetail = (helpId: string) => {
    setSelectedHelpId(helpId);
    setActivePage('help-detail');
  };

  const handleGoToOrderManagement = () => {
    setUserCenterTab('orders');
    setActivePage('user-center');
  };

  const handleCustomizationSubmit = () => {
    setUserCenterTab('customization');
    setActivePage('user-center');
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#020617] text-gray-100">
      <Header 
        activePage={(activePage === 'service-detail' || activePage === 'order') ? 'service' : (activePage === 'resource-order' || activePage === 'resource-payment' ? 'resource' : (activePage === 'app-detail' || activePage === 'app-customization' ? 'app' : (activePage === 'news-detail' ? 'news-center' : (activePage === 'eco-creation' || activePage === 'model-training' || activePage === 'agents' || activePage === 'intelligent-analysis' ? 'eco-creation' : (activePage === 'help-detail' ? 'help-center' : activePage)))))} 
        onPageChange={handlePageChange} 
        cartCount={totalCartCount}
        onOpenCart={() => {
          setActivePage('resource');
          setIsCartOpen(true);
        }}
      />
      
      <main className="flex flex-1 relative overflow-hidden">
        {activePage === 'home' ? (
          <HomeView onNavigate={(page) => handlePageChange(page as ActivePage)} />
        ) : activePage === 'map-center' ? (
          <MapCenterView />
        ) : activePage === 'resource-center' ? (
          <ResourceView onEnterExplorer={() => handlePageChange('resource')} />
        ) : activePage === 'industry' ? (
          <IndustryView />
        ) : activePage === 'resource' ? (
          isResourceListView ? (
            <DataSearchView onBack={() => setIsResourceListView(false)} onOrder={handleStartResourceOrder} />
          ) : (
            <>
              <div className="w-16 bg-[#0b101e] border-r border-gray-800 flex flex-col items-center py-4 space-y-6 z-50">
                <button 
                  onClick={() => { setActiveTab('standard'); setIsCartOpen(false); setIsResourceListView(false); }}
                  className={`p-2 rounded-lg transition-all group relative flex flex-col items-center justify-center space-y-1 ${
                    activeTab === 'standard' && !isCartOpen
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                    : 'text-gray-500 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Package size={24} />
                  <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 border border-gray-700 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-[60]">
                    标准产品
                  </span>
                  <div className="text-[10px] font-medium">标准</div>
                </button>
                
                <button 
                  onClick={() => { setActiveTab('thematic'); setIsCartOpen(false); setIsResourceListView(false); }}
                  className={`p-2 rounded-lg transition-all group relative flex flex-col items-center justify-center space-y-1 ${
                    activeTab === 'thematic' && !isCartOpen
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                    : 'text-gray-500 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Map size={24} />
                  <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 border border-gray-700 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-[60]">
                    专题产品
                  </span>
                  <div className="text-[10px] font-medium">专题</div>
                </button>

                <button 
                  onClick={() => setIsCartOpen(true)}
                  className={`p-2 rounded-lg transition-all group relative flex flex-col items-center justify-center space-y-1 ${
                    isCartOpen
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                    : 'text-gray-500 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <ShoppingCart size={24} />
                  {totalCartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-[#0b101e] font-bold">
                      {totalCartCount}
                    </span>
                  )}
                  <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 border border-gray-700 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-[60]">
                    购物车
                  </span>
                  <div className="text-[10px] font-medium">购物车</div>
                </button>
              </div>

              <Sidebar 
                activeTab={activeTab} 
                isCartView={isCartOpen} 
                setIsCartView={setIsCartOpen}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                onToggleListView={() => setIsResourceListView(true)}
                onGoToOrder={handleStartResourceOrder}
                showOrbit={showOrbit}
                onToggleOrbit={() => setShowOrbit(!showOrbit)}
              />
              <GlobeContainer showOrbit={showOrbit} />
            </>
          )
        ) : activePage === 'service' ? (
          <ServiceCenterView onEnterDetail={() => setActivePage('service-detail')} />
        ) : activePage === 'service-detail' ? (
          <AlgorithmDetailView 
            onBack={() => setActivePage('service')} 
            onBuy={handleStartServiceOrder} 
          />
        ) : activePage === 'order' ? (
          <OrderSubmissionView 
            cartItems={cartItems} 
            onBack={() => setActivePage('service')} 
            onOrderSubmitted={handleOrderSubmitted}
          />
        ) : activePage === 'resource-order' ? (
          <ResourceOrderView 
            cartItems={cartItems} 
            onBack={() => {
              setActivePage('resource');
              setIsCartOpen(true);
            }} 
            onOrderSubmitted={handleOrderSubmitted}
          />
        ) : activePage === 'payment' ? (
          <OrderPaymentView 
            cartItems={cartItems}
            onBack={() => setActivePage('home')}
            onGoToCheckout={handleGoToOrderManagement}
            onCancelOrder={handleCancelOrder}
            onGoToOrderManagement={handleGoToOrderManagement}
            isPaid={isPaid}
            isCancelled={isCancelled}
          />
        ) : activePage === 'resource-payment' ? (
          <ResourcePaymentView 
            cartItems={cartItems}
            onBack={() => setActivePage('home')}
            onGoToCheckout={handleGoToOrderManagement}
            onCancelOrder={handleCancelOrder}
            isPaid={isPaid}
            isCancelled={isCancelled}
          />
        ) : activePage === 'checkout' ? (
          <OrderCheckoutView 
            totalAmount={9.90}
            onBack={() => setActivePage(returnPage)}
            onPaymentSuccess={handlePaymentSuccess}
          />
        ) : activePage === 'app' ? (
          <AppCenterView onEnterDetail={handleEnterAppDetail} />
        ) : activePage === 'app-detail' ? (
          <AppDetailView 
            appId={selectedAppId} 
            onBack={() => setActivePage('app')} 
            onEnterCustomization={() => setActivePage('app-customization')}
          />
        ) : activePage === 'app-customization' ? (
          <AppCustomizationView 
            onBack={() => setActivePage('app')} 
            onSubmit={handleCustomizationSubmit}
          />
        ) : activePage === 'eco-creation' ? (
          <EcoCreationView />
        ) : activePage === 'model-training' ? (
          <ModelTrainingView />
        ) : activePage === 'agents' ? (
          <AgentCenterView />
        ) : activePage === 'intelligent-analysis' ? (
          <IntelligentAnalysisView />
        ) : activePage === 'activity' ? (
          <div className="flex-1 flex items-center justify-center bg-[#020617] relative overflow-hidden h-full">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="text-center space-y-6 relative z-10 p-12 bg-[#0b101e]/80 border border-white/10 rounded-3xl backdrop-blur-xl max-w-lg shadow-2xl">
               <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.3)] animate-pulse">
                  <Zap size={48} className="text-blue-400" fill="currentColor" />
               </div>
               <h2 className="text-4xl font-black text-white tracking-tight">活动中心</h2>
               <p className="text-gray-400 text-lg leading-relaxed font-light">
                 汇聚行业前沿动态，发布开发者大赛、技术沙龙与生态合作伙伴大会。
                 <br/><span className="text-blue-500 font-bold mt-2 block">精彩活动，即将上线</span>
               </p>
               <button className="px-10 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-white transition-all">
                 敬请期待
               </button>
            </div>
          </div>
        ) : activePage === 'solutions' ? (
          <SolutionsView onNavigate={handlePageChange} onEnterDetail={handleEnterSolutionDetail} />
        ) : activePage === 'solution-detail' ? (
          <SolutionDetailView 
            solutionId={selectedSolutionId}
            onBack={() => setActivePage('solutions')}
          />
        ) : activePage === 'about-platform' ? (
          <AboutPlatformView />
        ) : activePage === 'help-center' ? (
          <HelpCenterView onEnterDetail={handleEnterHelpDetail} />
        ) : activePage === 'help-detail' ? (
          <HelpDetailView helpId={selectedHelpId} onBack={() => setActivePage('help-center')} />
        ) : activePage === 'news-center' ? (
          <NewsCenterView onEnterDetail={handleEnterNewsDetail} />
        ) : activePage === 'news-detail' ? (
          <NewsDetailView newsId={selectedNewsId} onBack={() => setActivePage('news-center')} />
        ) : activePage === 'doc-center' ? (
          <DocCenterView />
        ) : activePage === 'user-center' ? (
          <UserCenterView initialTab={userCenterTab} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            板块开发中...
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
