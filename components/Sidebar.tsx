
import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  RotateCcw,
  ChevronDown,
  Calendar,
  X,
  Plus,
  MapPin,
  PenTool,
  Upload,
  MousePointer2,
  List,
  ArrowRightLeft,
  ChevronRight,
  Circle,
  Activity,
  Square,
  Hexagon,
  MousePointerClick,
  ShoppingCart,
  ArrowLeft,
  Check,
  Trash2,
  Minus,
  Lock,
  Orbit,
  FileText,
  Eye,
  Database,
  ChevronLeft,
  Server
} from 'lucide-react';
import { ActiveTab, CartItem } from '../App';
import { SensorType } from '../types';

interface SidebarProps {
  activeTab: ActiveTab;
  isCartView: boolean;
  setIsCartView: (val: boolean) => void;
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (ids: string[]) => void;
  updateQuantity: (id: string, delta: number) => void;
  onToggleListView?: () => void;
  onGoToOrder?: () => void;
  showOrbit?: boolean;
  onToggleOrbit?: () => void;
}

type CoverageType = 'admin' | 'draw' | 'coords' | 'upload';

interface SatelliteSensor {
  name: string;
  id: string;
}

interface Satellite {
  name: string;
  id: string;
  sensors?: SatelliteSensor[];
  isOpen?: boolean;
}

interface SatelliteGroup {
  title: string;
  satellites: Satellite[];
}

interface SearchResult {
  id: string;
  name: string;
  resolution?: string;
  category?: string;
  date: string;
  thumbnail: string;
  price: number;
  productId?: string;
  cloud?: string;
}

const mockStandardResults: SearchResult[] = [
  { id: 's1', name: 'GF2-PMS2-LEVEL1A-14775358001', resolution: '1m', date: '2025-07-19', thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=200&q=80', price: 99.99, productId: '14775358001', cloud: '-%' },
  { id: 's2', name: 'GF2-PMS1-LEVEL1A-14775509001', resolution: '1m', date: '2025-07-19', thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=200&q=80', price: 99.99, productId: '14775509001', cloud: '-%' },
  { id: 's3', name: 'GF2-PMS1-LEVEL1A-14775508001', resolution: '1m', date: '2025-07-19', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80', price: 89.00, productId: '14775508001', cloud: '-%' },
  { id: 's4', name: 'GF2-PMS2-LEVEL1A-14775357001', resolution: '1m', date: '2025-07-19', thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=200&q=80', price: 75.50, productId: '14775357001', cloud: '-%' },
  { id: 's5', name: 'GF2-PMS2-LEVEL1A-14775353001', resolution: '1m', date: '2025-07-19', thumbnail: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&w=200&q=80', price: 120.00, productId: '14775353001', cloud: '-%' },
];

const mockThematicResults: SearchResult[] = [
  { id: 't1', name: '土地利用分类图_2023Q4', category: '土地利用', date: '2023-10-15', thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=200&q=80', price: 199.00 },
  { id: 't2', name: '植被覆盖度分析_华南', category: '植被覆盖', date: '2023-09-22', thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=200&q=80', price: 249.00 },
  { id: 't3', name: '水体变化监测_长江流域', category: '水体监测', date: '2023-11-05', thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=200&q=80', price: 159.00 },
];

const satelliteGroupsData: SatelliteGroup[] = [
  {
    title: '优于1米',
    satellites: [
      { 
        name: '高分二号卫星(GF2)', 
        id: 'gf2',
        sensors: [{ name: 'PMS(1米全色和4米多光谱相机)', id: 'gf2_pms' }] 
      },
      { 
        name: '高分七号卫星(GF7)', 
        id: 'gf7',
        sensors: [
          { name: 'BWD(后视0.8米全色和3.2米多光谱)', id: 'gf7_bwd' },
          { name: 'DLC(前后视0.8米全色和3.2米多光谱)', id: 'gf7_dlc' }
        ] 
      },
      { 
        name: '四维高景三号01星(SVN3-01)', 
        id: 'svn301',
        sensors: [
          { name: 'TMS(前视和后视、正下视相机)', id: 'svn301_tms' },
          { name: 'DLC(前、后视)', id: 'svn301_dlc' },
          { name: 'MUX(多光谱成像仪)', id: 'svn301_mux' }
        ] 
      },
    ]
  },
  {
    title: '2米',
    satellites: [
      { 
        name: '中巴一号02B卫星(CBERS2B)', 
        id: 'cbers2b',
        sensors: [{ name: 'HR(2.36米高分辨率相机)', id: 'cbers2b_hr' }] 
      },
      { 
        name: '资源一号02C卫星(ZY02C)', 
        id: 'zy02c_2m',
        sensors: [{ name: 'HRC(2.36米高分辨率相机)', id: 'zy02c_hrc' }] 
      },
      { 
        name: '资源三号卫星(ZY3)', 
        id: 'zy3_2m',
        sensors: [
          { name: 'NAD(2.1米正视相机)', id: 'zy3_nad' },
          { name: 'TLC(三线阵相机（含前3.5米多光谱）)', id: 'zy3_tlc' }
        ] 
      },
      { 
        name: '高分一号星(GF1)', 
        id: 'gf1_2m',
        sensors: [{ name: 'PMS(2米全色和8米多光谱相机)', id: 'gf1_pms' }] 
      },
    ]
  },
  {
    title: '5米',
    satellites: [
      { 
        name: '资源一号02C卫星(ZY02C)', 
        id: 'zy02c_5m',
        sensors: [{ name: 'PMS(5米全色和10米多光谱相机)', id: 'zy02c_pms' }] 
      },
      { 
        name: '中巴地球资源卫星04星(CB04)', 
        id: 'cb04_5m',
        sensors: [{ name: 'P5M(5米全色)', id: 'cb04_p10' }] 
      },
    ]
  },
  {
    title: '5-16米',
    satellites: [
      { 
        name: '资源三号卫星(ZY3)', 
        id: 'zy3_16m',
        sensors: [{ name: 'MUX(6米多光谱相机)', id: 'zy3_mux' }] 
      },
      { 
        name: '高分一号01星(GF1)', 
        id: 'gf1_16m',
        sensors: [{ name: 'WFV(16米宽视场相机)', id: 'gf1_wfv' }] 
      },
      { 
        name: '中巴地球资源卫星04星(CB04)', 
        id: 'cb04_16m',
        sensors: [{ name: 'P10(10米多光谱)', id: 'cb04_p10' }] 
      },
      { 
        name: '哨兵2(SENTINEL-2)', 
        id: 'sentinel2',
        sensors: [{ name: 'MSI(10米多光谱)', id: 'sentinel2_msi' }] 
      },
      { name: '资源三号2号卫星(ZY302)', id: 'zy302' },
    ]
  },
  {
    title: '16米以上',
    satellites: [
      { 
        name: 'MODIS(MODIS)', 
        id: 'modis',
        sensors: [
          { name: 'MOD09A1(500米地表反射率)', id: 'modis_09a1' },
          { name: 'MOD11A1(地表温度/发射率)', id: 'modis_11a1' },
          { name: 'MOD14A1(8天1000米火灾异常)', id: 'modis_14a1' },
          { name: 'MOD15A2H(1KM叶面积指数)', id: 'modis_15a2h' },
          { name: 'MOD17A2H(1KM总初级生产力)', id: 'modis_17a2h' }
        ] 
      },
      { name: '中巴一号01星(CBERS01)', id: 'cbers01' },
    ]
  }
];

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  isCartView, 
  setIsCartView, 
  cartItems, 
  addToCart, 
  removeFromCart, 
  updateQuantity,
  onToggleListView,
  onGoToOrder,
  showOrbit,
  onToggleOrbit
}) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sensorType, setSensorType] = useState<SensorType>(SensorType.OPTICAL);
  const [coverageType, setCoverageType] = useState<CoverageType>('admin');
  const [cloudRange, setCloudRange] = useState<[number, number]>([0, 75]);
  const [showSatelliteSelector, setShowSatelliteSelector] = useState(false);
  const [selectedSatelliteIds, setSelectedSatelliteIds] = useState<Set<string>>(new Set());
  const [openSatelliteIds, setOpenSatelliteIds] = useState<Set<string>>(new Set(satelliteGroupsData.flatMap(g => g.satellites.map(s => s.id))));
  const [drawMode, setDrawMode] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [selectedResultIds, setSelectedResultIds] = useState<Set<string>>(new Set());
  const [selectedCartIds, setSelectedCartIds] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<string | null>(null);
  const [metadataItem, setMetadataItem] = useState<SearchResult | null>(null);
  
  const selectorRef = useRef<HTMLDivElement>(null);

  const currentResults = activeTab === 'standard' ? mockStandardResults : mockThematicResults;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setShowSatelliteSelector(false);
      }
    };
    if (showSatelliteSelector) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSatelliteSelector]);

  // Reset showResults when tab changes to avoid carrying over standard results view to thematic
  useEffect(() => {
    setShowResults(false);
    setSelectedResultIds(new Set());
  }, [activeTab]);

  const toggleSatelliteId = (id: string, sensors?: SatelliteSensor[]) => {
    const newSet = new Set(selectedSatelliteIds);
    if (newSet.has(id)) {
      newSet.delete(id);
      sensors?.forEach(s => newSet.delete(s.id));
    } else {
      newSet.add(id);
      sensors?.forEach(s => newSet.add(s.id));
    }
    setSelectedSatelliteIds(newSet);
  };

  const toggleSensorId = (sensorId: string, parentId: string, allParentSensors: SatelliteSensor[]) => {
    const newSet = new Set(selectedSatelliteIds);
    if (newSet.has(sensorId)) {
      newSet.delete(sensorId);
      newSet.delete(parentId); 
    } else {
      newSet.add(sensorId);
      const allChecked = allParentSensors.every(s => newSet.has(s.id) || s.id === sensorId);
      if (allChecked) {
        newSet.add(parentId);
      }
    }
    setSelectedSatelliteIds(newSet);
  };

  const toggleResultSelection = (id: string) => {
    const newSet = new Set(selectedResultIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedResultIds(newSet);
  };

  const toggleSelectAllResults = () => {
    if (selectedResultIds.size === currentResults.length) {
      setSelectedResultIds(new Set());
    } else {
      setSelectedResultIds(new Set(currentResults.map(r => r.id)));
    }
  };

  const handleAddToCart = (id?: string) => {
    const idsToAdd = id ? [id] : Array.from(selectedResultIds);
    if (idsToAdd.length === 0) return;

    idsToAdd.forEach(resultId => {
      const result = currentResults.find(r => r.id === resultId);
      if (result) {
        addToCart({
          id: result.id,
          name: result.name,
          price: result.price,
          thumbnail: result.thumbnail,
          quantity: 1
        });
        setToast(`${result.name}已添加到购物车`);
      }
    });

    // Don't clear selection on add, maybe user wants to add multiple times or just keep context
    // if (!id) setSelectedResultIds(new Set());
    
    setTimeout(() => setToast(null), 3000);
  };

  const handleBulkDeleteFromCart = () => {
    removeFromCart(Array.from(selectedCartIds));
    setSelectedCartIds(new Set());
  };

  const toggleSelectAllCart = () => {
    if (selectedCartIds.size === cartItems.length) {
      setSelectedCartIds(new Set());
    } else {
      setSelectedCartIds(new Set(cartItems.map(i => i.id)));
    }
  };

  const toggleCartItemSelection = (id: string) => {
    const newSet = new Set(selectedCartIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedCartIds(newSet);
  };

  const toggleOpenState = (id: string) => {
    const newSet = new Set(openSatelliteIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setOpenSatelliteIds(newSet);
  };

  const thematicTypes = [
    '基础地理信息', '遥感地物要素',
    '遥感参量反演', '自然资源',
    '农业农村', '水利水务',
    '城市治理', '低空经济',
    '防灾减灾', '交通运输',
    '社会综合', '能源建设'
  ];

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  // 购物车 View
  if (isCartView) {
    return (
      <aside className="w-80 h-[calc(100vh-64px)] bg-[#0b101e] border-r border-gray-800 flex flex-col z-40 relative animate-in slide-in-from-left duration-300">
        <div className="p-5 flex flex-col h-full space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">购物车</h3>
            {toast && (
              <div className="absolute top-4 right-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 animate-in fade-in slide-in-from-top-2 z-[100] shadow-xl">
                <Check size={16} />
                <span className="text-xs font-bold">{toast}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{cartItems.length} 件商品</span>
            <button 
              onClick={() => setIsCartView(false)}
              className="flex items-center space-x-1 text-xs text-blue-500 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={14} className="mr-1" />
              <span>返回检索</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pr-1">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
                <ShoppingCart size={48} className="opacity-20" />
                <span className="text-sm">您的购物车是空的</span>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id}
                  className={`relative bg-[#161b2a]/30 border rounded-2xl p-4 transition-all duration-300 ${
                    selectedCartIds.has(item.id) ? 'border-blue-500/60 bg-[#1a2135]' : 'border-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      onClick={() => toggleCartItemSelection(item.id)}
                      className={`shrink-0 w-4 h-4 rounded border flex items-center justify-center cursor-pointer mt-1 transition-all ${
                        selectedCartIds.has(item.id) ? 'bg-white border-white' : 'border-gray-700'
                      }`}
                    >
                      {selectedCartIds.has(item.id) && <Check size={12} className="text-black" strokeWidth={3} />}
                    </div>

                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="text-sm font-bold text-gray-200 truncate">{item.name}</div>
                      {/* Removed price display */}
                    </div>

                    <div className="flex flex-col items-end space-y-4">
                      <div className="flex items-center bg-[#0b101e] border border-gray-800 rounded-lg overflow-hidden h-7">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 text-gray-500 hover:text-white transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-bold text-gray-200 min-w-[30px] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 text-gray-500 hover:text-white transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="bg-[#161b2a]/60 border border-gray-800 rounded-[2.5rem] p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={toggleSelectAllCart}>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    selectedCartIds.size === cartItems.length && cartItems.length > 0 ? 'bg-white border-white' : 'border-gray-600'
                  }`}>
                    {selectedCartIds.size === cartItems.length && cartItems.length > 0 && <Check size={12} className="text-black" strokeWidth={3} />}
                  </div>
                  <span className="text-sm font-bold text-gray-200">全选</span>
                </div>
                <button 
                  onClick={handleBulkDeleteFromCart}
                  disabled={selectedCartIds.size === 0}
                  className="flex items-center space-x-2 text-sm text-gray-500 hover:text-red-400 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <Trash2 size={16} />
                  <span>删除所选</span>
                </button>
              </div>

              {/* Removed Total Price Section */}

              <button 
                onClick={onGoToOrder}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black transition-all active:scale-95 flex items-center justify-center space-x-3 shadow-xl shadow-blue-900/30"
              >
                <FileText size={18} />
                <span>立即申请</span>
              </button>
            </div>
          )}
        </div>
      </aside>
    );
  }

  // 检索结果 View (Unifies Standard and Thematic)
  if (showResults) {
    const isThematic = activeTab === 'thematic';
    
    return (
      <div className="flex h-full relative">
        <aside className="w-[360px] h-[calc(100vh-64px)] bg-[#020617] border-r border-gray-800 flex flex-col z-40 relative animate-in slide-in-from-left duration-300 shrink-0">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-gray-800 bg-[#0b101e]">
              <h3 className="text-sm font-bold text-white flex items-center">
                检索结果 
                <span className="ml-2 text-blue-500 font-medium text-xs">({currentResults.length})</span>
              </h3>
              <button 
                onClick={() => setShowResults(false)}
                className="flex items-center space-x-1 text-[10px] text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-white/5"
              >
                <ArrowLeft size={12} className="mr-1" />
                <span>返回筛选</span>
              </button>
            </div>

            {toast && (
              <div className="absolute top-16 right-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 animate-in fade-in slide-in-from-top-2 z-[100] shadow-xl">
                <Check size={16} />
                <span className="text-xs font-bold">{toast}</span>
              </div>
            )}

            {/* Results List */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-3 bg-[#0b101e]/50">
              {currentResults.map((result) => (
                <div 
                  key={result.id}
                  className={`group relative bg-white bg-opacity-[0.02] border rounded-md transition-all duration-200 hover:bg-opacity-[0.05] ${
                    selectedResultIds.has(result.id) ? 'border-blue-500/50 bg-blue-500/5' : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex p-3 items-start relative">
                    {/* Checkbox Column */}
                    <div className="pr-3 pt-2 shrink-0">
                      <div 
                        onClick={() => toggleResultSelection(result.id)}
                        className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-all ${
                          selectedResultIds.has(result.id) ? 'bg-blue-600 border-blue-600' : 'border-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {selectedResultIds.has(result.id) && <Check size={10} className="text-white" strokeWidth={4} />}
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className="w-16 h-16 rounded overflow-hidden border border-gray-700 bg-black/40 shrink-0 mr-3">
                        <img src={result.thumbnail} className="w-full h-full object-cover" alt="thumb" />
                    </div>

                    {/* Text Details - Middle */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="text-xs font-bold text-gray-200 truncate leading-tight mb-2" title={result.name}>{result.name}</div>
                      <div className="grid grid-cols-1 gap-1 text-[10px] text-gray-500 font-mono">
                          <div className="flex justify-between">
                              <span>{isThematic ? '数据时间' : '成像时间'}: {result.date}</span>
                              {!isThematic && <span className="text-gray-400">分辨率: {result.resolution || 'N/A'}</span>}
                          </div>
                          {isThematic ? (
                             <div className="flex justify-between">
                                <span>应用场景: {result.category || '通用'}</span>
                             </div>
                          ) : (
                             <div className="flex justify-between">
                                <span className="truncate max-w-[90px]" title={result.productId}>产品号: {result.productId || result.id}</span>
                                <span className="text-gray-400">云量: {result.cloud || '-'}</span>
                             </div>
                          )}
                      </div>
                    </div>

                    {/* Action Buttons - Right */}
                    <div className="flex flex-col space-y-2 shrink-0 ml-2 pt-0.5">
                        <button 
                            className="text-gray-500 hover:text-white transition-colors"
                            title="查看详情"
                        >
                            <Eye size={16} />
                        </button>
                        
                        {!isThematic && (
                            <button 
                                onClick={() => setMetadataItem(result)}
                                className="text-gray-500 hover:text-white transition-colors"
                                title="元数据"
                            >
                                <Database size={16} />
                            </button>
                        )}
                        
                        <button 
                            onClick={() => handleAddToCart(result.id)}
                            className={`transition-all ${
                            cartItems.find(i => i.id === result.id) ? 'text-blue-400' : 'text-gray-500 hover:text-white'
                            }`}
                            title="加入购物车"
                        >
                            <ShoppingCart size={16} />
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Pagination */}
            <div className="p-3 border-t border-gray-800 bg-[#0b101e] flex items-center justify-between text-[10px] text-gray-500">
              <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 rounded hover:bg-white/10 disabled:opacity-50" disabled>
                      <ChevronLeft size={12} />
                  </button>
                  <span className="text-blue-400 font-bold">1</span>
                  <span className="hover:text-white cursor-pointer">2</span>
                  <span className="hover:text-white cursor-pointer">...</span>
                  <span className="hover:text-white cursor-pointer">48</span>
                  <button className="px-2 py-1 rounded hover:bg-white/10">
                      <ChevronRight size={12} />
                  </button>
              </div>
              <div className="flex items-center space-x-1">
                  <span>前往</span>
                  <input type="text" defaultValue="1" className="w-8 h-5 bg-[#161b2a] border border-gray-700 rounded text-center text-white focus:border-blue-500 outline-none" />
                  <span>页</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Metadata Drawer Overlay */}
        {metadataItem && (
          <div className="fixed top-16 right-0 bottom-0 w-[900px] bg-[#020617] border-l border-gray-800 shadow-[0_0_100px_rgba(0,0,0,0.8)] z-50 transform transition-transform duration-300 animate-in slide-in-from-right flex flex-col font-sans">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-800/80 bg-[#0b101e]">
              <div className="flex items-center space-x-4 truncate pr-8">
                <h3 className="text-lg font-bold text-white truncate font-mono tracking-tight">{metadataItem.name}</h3>
                <div className="px-2 py-0.5 rounded bg-blue-900/30 border border-blue-500/30 text-[10px] text-blue-400 font-bold uppercase tracking-wider shrink-0">Standard Level 1A</div>
              </div>
              <button 
                onClick={() => setMetadataItem(null)}
                className="text-gray-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-0 flex">
              {/* Left Image Area */}
              <div className="w-[500px] bg-black relative border-r border-gray-800 flex items-center justify-center overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                 <img 
                   src={metadataItem.thumbnail} 
                   className="w-[85%] h-auto object-contain opacity-90 shadow-2xl rotate-[-2deg] scale-110 border-4 border-white/5 rounded-sm"
                   alt="metadata preview" 
                 />
                 <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-2">
                       <span>Preview Mode</span>
                       <span>100%</span>
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                       <div className="w-1/3 h-full bg-blue-600" />
                    </div>
                 </div>
              </div>

              {/* Right Details Area */}
              <div className="flex-1 bg-[#0b101e] p-8 space-y-8">
                 <div className="space-y-6">
                    <h4 className="text-sm font-bold text-blue-500 uppercase tracking-widest flex items-center gap-2">
                       <Server size={14} /> 基础信息
                    </h4>
                    <div className="grid grid-cols-[100px_1fr] gap-y-5 text-sm">
                       <div className="text-gray-500">卫星</div>
                       <div className="text-gray-200 font-medium">Sentinel-1</div>
                       
                       <div className="text-gray-500">级别</div>
                       <div className="text-gray-200 font-medium">GRD</div>
                       
                       <div className="text-gray-500">采集时间</div>
                       <div className="text-gray-200 font-medium font-mono">2026-01-27</div>
                       
                       <div className="text-gray-500">分辨率</div>
                       <div className="text-gray-200 font-medium">未知米</div>
                       
                       <div className="text-gray-500">坐标系</div>
                       <div className="text-gray-200 font-medium font-mono">4326</div>
                    </div>
                 </div>

                 <div className="w-full h-px bg-gray-800" />

                 <div className="space-y-6">
                    <h4 className="text-sm font-bold text-blue-500 uppercase tracking-widest flex items-center gap-2">
                       <Orbit size={14} /> 空间信息
                    </h4>
                    <div className="grid grid-cols-[100px_1fr] gap-y-5 text-sm">
                       <div className="text-gray-500">影像高</div>
                       <div className="text-gray-200 font-medium font-mono">19474</div>
                       
                       <div className="text-gray-500">影像宽</div>
                       <div className="text-gray-200 font-medium font-mono">29614</div>
                       
                       <div className="text-gray-500">左上角</div>
                       <div className="text-gray-200 font-medium font-mono text-xs">89.008360, 38.159661</div>
                       
                       <div className="text-gray-500">左下角</div>
                       <div className="text-gray-200 font-medium font-mono text-xs">89.008360, 36.021168</div>
                       
                       <div className="text-gray-500">右上角</div>
                       <div className="text-gray-200 font-medium font-mono text-xs">92.260355, 38.159661</div>
                       
                       <div className="text-gray-500">右下角</div>
                       <div className="text-gray-200 font-medium font-mono text-xs">92.260355, 36.021168</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Standard Tab Filter View
  if (activeTab === 'standard') {
    return (
      <aside className="w-80 h-[calc(100vh-64px)] bg-[#0b101e]/95 backdrop-blur-md border-r border-gray-800 flex flex-col z-40 relative">
        <div className="p-5 space-y-6 overflow-y-auto no-scrollbar flex-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">影像产品筛选</span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={onToggleOrbit}
                className={`p-1.5 rounded-lg transition-all ${
                  showOrbit 
                  ? 'text-blue-400 bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/10'
                }`}
                title={showOrbit ? "关闭卫星轨道" : "开启卫星轨道"}
              >
                <Orbit size={16} />
              </button>
              
              <List size={16} className="text-blue-500 cursor-pointer" />
              <ArrowRightLeft 
                size={16} 
                className="text-gray-500 cursor-pointer hover:text-white transition-colors" 
                onClick={onToggleListView}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-medium text-gray-400">传感器类型</label>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setSensorType(SensorType.OPTICAL)}
                className={`flex items-center space-x-2 px-3 py-2 rounded border text-xs transition-all ${
                  sensorType === SensorType.OPTICAL 
                  ? 'bg-blue-600/20 border-blue-500 text-blue-400' 
                  : 'bg-[#161b2a] border-gray-800 text-gray-400 hover:border-gray-700'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${sensorType === SensorType.OPTICAL ? 'border-blue-400' : 'border-gray-600'}`}>
                  {sensorType === SensorType.OPTICAL && <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </div>
                <span>光学</span>
              </button>
              <button 
                onClick={() => setSensorType(SensorType.RADAR)}
                className={`flex items-center space-x-2 px-3 py-2 rounded border text-xs transition-all ${
                  sensorType === SensorType.RADAR 
                  ? 'bg-blue-600/20 border-blue-500 text-blue-400' 
                  : 'bg-[#161b2a] border-gray-800 text-gray-400 hover:border-gray-700'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${sensorType === SensorType.RADAR ? 'border-blue-400' : 'border-gray-600'}`}>
                  {sensorType === SensorType.RADAR && <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </div>
                <span>雷达</span>
              </button>
            </div>
          </div>

          <div className="relative pt-1">
            <div 
              onClick={() => setShowSatelliteSelector(!showSatelliteSelector)}
              className={`w-full h-24 border-2 border-dashed rounded-lg flex flex-col items-center justify-center space-y-1 bg-[#161b2a]/30 hover:border-blue-500/50 cursor-pointer transition-all group ${
                showSatelliteSelector ? 'border-blue-500 bg-blue-500/10' : 'border-gray-800'
              }`}
            >
              <Plus size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 group-hover:text-blue-400">
                {/* Fixed TypeScript error: 'id' in filter was inferred as 'unknown'. Explicitly type it as 'string'. */}
                {selectedSatelliteIds.size > 0 ? `已选 ${Array.from(selectedSatelliteIds).filter((id: string) => !id.includes('_')).length} 个卫星` : '+ 选择卫星'}
              </span>
            </div>

            {showSatelliteSelector && (
              <div 
                ref={selectorRef}
                className="fixed left-96 top-24 w-[1100px] bg-[#0b101e] border border-gray-800 rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] z-[200] p-8 animate-in fade-in slide-in-from-left-4 duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white flex items-center space-x-3">
                    <div className="p-1.5 bg-blue-600/20 rounded-lg"><SatelliteIcon className="text-blue-500" size={20} /></div>
                    <span>卫星资源选择库</span>
                  </h3>
                  <button onClick={() => setShowSatelliteSelector(false)} className="text-gray-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-8 overflow-x-auto pb-4 no-scrollbar">
                  {satelliteGroupsData.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-6 min-w-[200px]">
                      <div className="text-sm font-bold text-gray-100 bg-gray-800/40 px-4 py-2.5 rounded-lg border-l-4 border-blue-500 shadow-sm">
                        {group.title}
                      </div>
                      <div className="space-y-5">
                        {group.satellites.map((sat) => (
                          <div key={sat.id} className="space-y-3">
                            <div className="flex items-start space-x-2 group">
                              <button 
                                onClick={() => toggleOpenState(sat.id)}
                                className={`mt-1 text-gray-600 hover:text-blue-400 transition-transform ${openSatelliteIds.has(sat.id) ? 'rotate-0' : '-rotate-90'}`}
                              >
                                <ChevronDown size={14} />
                              </button>
                              <div className="flex items-start space-x-2 cursor-pointer flex-1" onClick={() => toggleSatelliteId(sat.id, sat.sensors)}>
                                <div className={`mt-1 w-3.5 h-3.5 rounded-sm border flex items-center justify-center transition-all ${
                                  selectedSatelliteIds.has(sat.id) ? 'bg-blue-600 border-blue-600' : 'border-gray-700 bg-gray-800/50 group-hover:border-gray-500'
                                }`}>
                                  {selectedSatelliteIds.has(sat.id) && <CheckIcon className="text-white" size={10} />}
                                </div>
                                <span className={`text-[11px] leading-tight select-none transition-colors ${
                                  selectedSatelliteIds.has(sat.id) ? 'text-blue-400 font-medium' : 'text-gray-300 group-hover:text-white'
                                }`}>
                                  {sat.name}
                                </span>
                              </div>
                            </div>
                            
                            {sat.sensors && openSatelliteIds.has(sat.id) && (
                              <div className="ml-8 space-y-2 border-l border-gray-800/50 pl-4 animate-in fade-in slide-in-from-left-2 duration-200">
                                {sat.sensors.map((sensor) => (
                                  <div 
                                    key={sensor.id} 
                                    className="flex items-start space-x-2 cursor-pointer group/sensor"
                                    onClick={() => toggleSensorId(sensor.id, sat.id, sat.sensors!)}
                                  >
                                    <div className={`mt-0.5 w-3 h-3 rounded-sm border flex items-center justify-center transition-all ${
                                      selectedSatelliteIds.has(sensor.id) ? 'bg-blue-500 border-blue-500' : 'border-gray-800 bg-gray-900/30 group-hover/sensor:border-gray-600'
                                    }`}>
                                      {selectedSatelliteIds.has(sensor.id) && <CheckIcon className="text-white" size={8} />}
                                    </div>
                                    <span className={`text-[10px] select-none leading-tight transition-colors ${
                                      selectedSatelliteIds.has(sensor.id) ? 'text-blue-500/80' : 'text-gray-500 group-hover/sensor:text-gray-400'
                                    }`}>
                                      {sensor.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-800 flex justify-end items-center space-x-6">
                  <div className="text-xs text-gray-500">
                    已选择 <span className="text-blue-400 font-bold">{selectedSatelliteIds.size}</span> 个具体层级
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setSelectedSatelliteIds(new Set())}
                      className="px-6 py-2.5 text-xs text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-all"
                    >
                      清空所选
                    </button>
                    <button 
                      onClick={() => setShowSatelliteSelector(false)}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2.5 rounded-lg text-xs font-bold shadow-lg shadow-blue-900/20 active:scale-95 transition-all"
                    >
                      确认所选卫星
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {sensorType === SensorType.OPTICAL && (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <label className="text-xs font-medium text-gray-400">云量范围</label>
              <div className="px-1 py-4">
                <div className="relative h-1.5 bg-gray-800 rounded-full">
                  <div 
                    className="absolute h-full bg-blue-500 rounded-full" 
                    style={{ left: '0%', width: `${cloudRange[1]}%` }}
                  />
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={cloudRange[1]}
                    onChange={(e) => setCloudRange([0, parseInt(e.target.value)])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div 
                    className="absolute -top-1.5 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-lg pointer-events-none"
                    style={{ left: `${cloudRange[1]}%`, transform: 'translateX(-50%)' }}
                  />
                </div>
                <div className="flex justify-between mt-3 text-[10px] text-gray-500 font-mono">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-[10px] text-blue-400 bg-blue-500/10 px-1.5 rounded">{cloudRange[1]}%</span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <label className="text-xs font-medium text-gray-400">采集时间</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="yyyy/mm/dd" 
                  className="w-full bg-[#161b2a] border border-gray-800 rounded px-2 pr-7 py-2 text-[10px] text-gray-300 focus:border-blue-500 outline-none"
                />
                <Calendar size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600" />
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="yyyy/mm/dd" 
                  className="w-full bg-[#161b2a] border border-gray-800 rounded px-2 pr-7 py-2 text-[10px] text-gray-300 focus:border-blue-500 outline-none"
                />
                <Calendar size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-medium text-gray-400">覆盖范围</label>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setCoverageType('admin')}
                className={`flex items-center justify-center space-x-1 py-2 rounded border transition-all text-[10px] ${
                  coverageType === 'admin' 
                  ? 'border-blue-500 bg-blue-600/20 text-blue-400' 
                  : 'border-gray-800 bg-[#161b2a] text-gray-400 hover:border-gray-700'
                }`}
              >
                <MapPin size={12} />
                <span>行政区划</span>
              </button>
              <button 
                onClick={() => setCoverageType('draw')}
                className={`flex items-center justify-center space-x-1 py-2 rounded border transition-all text-[10px] ${
                  coverageType === 'draw' 
                  ? 'border-blue-500 bg-blue-600/20 text-blue-400' 
                  : 'border-gray-800 bg-[#161b2a] text-gray-400 hover:border-gray-700'
                }`}
              >
                <PenTool size={12} />
                <span>绘制区域</span>
              </button>
              <button 
                onClick={() => setCoverageType('coords')}
                className={`flex items-center justify-center space-x-1 py-2 rounded border transition-all text-[10px] ${
                  coverageType === 'coords' 
                  ? 'border-blue-500 bg-blue-600/20 text-blue-400' 
                  : 'border-gray-800 bg-[#161b2a] text-gray-400 hover:border-gray-700'
                }`}
              >
                <MousePointer2 size={12} />
                <span>经纬度</span>
              </button>
              <button 
                onClick={() => setCoverageType('upload')}
                className={`flex items-center justify-center space-x-1 py-2 rounded border transition-all text-[10px] ${
                  coverageType === 'upload' 
                  ? 'border-blue-500 bg-blue-600/20 text-blue-400' 
                  : 'border-gray-800 bg-[#161b2a] text-gray-400 hover:border-gray-700'
                }`}
              >
                <Upload size={12} />
                <span>上传矢量</span>
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800/50">
            {coverageType === 'admin' && (
              <div className="grid grid-cols-3 gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                {[
                  { label: '省', value: '全国' },
                  { label: '市', value: '广州市' },
                  { label: '县/区', value: '天河区' }
                ].map((loc, idx) => (
                  <div key={idx} className="relative group">
                    <select className="w-full bg-[#161b2a] border border-gray-800 rounded px-2 pr-6 py-2 text-[10px] text-gray-300 appearance-none outline-none focus:border-blue-500 transition-all cursor-pointer">
                      <option>{loc.value}</option>
                    </select>
                    <ChevronDown size={10} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none group-hover:text-blue-500" />
                  </div>
                ))}
              </div>
            )}

            {coverageType === 'draw' && (
              <div className="flex items-center justify-around bg-[#161b2a] border border-gray-800 rounded-lg p-3 animate-in fade-in slide-in-from-top-2 duration-300">
                {[
                  { id: 'point', icon: <Circle size={14} />, label: '点' },
                  { id: 'line', icon: <Activity size={14} />, label: '线' },
                  { id: 'rect', icon: <Square size={14} />, label: '矩形' },
                  { id: 'poly', icon: <Hexagon size={14} />, label: '多边形' }
                ].map((tool) => (
                  <button 
                    key={tool.id}
                    onClick={() => setDrawMode(tool.id)}
                    className={`flex flex-col items-center space-y-1.5 transition-all ${
                      drawMode === tool.id ? 'text-blue-400 scale-110' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <div className={`p-1.5 rounded ${drawMode === tool.id ? 'bg-blue-500/10' : ''}`}>
                      {tool.icon}
                    </div>
                    <span className="text-[10px]">{tool.label}</span>
                  </button>
                ))}
              </div>
            )}

            {coverageType === 'coords' && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 bg-[#161b2a] border border-gray-800 border-dashed rounded-lg p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                {[
                  { label: '经度(左)', placeholder: '' },
                  { label: '纬度(上)', placeholder: '' },
                  { label: '经度(右)', placeholder: '' },
                  { label: '纬度(下)', placeholder: '' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-[10px] text-gray-400 whitespace-nowrap">{item.label}</span>
                    <input 
                      type="text" 
                      placeholder={item.placeholder}
                      className="w-full bg-transparent border border-gray-700 rounded px-2 py-1 text-[10px] text-white focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                ))}
              </div>
            )}

            {coverageType === 'upload' && (
              <div className="flex flex-col items-center justify-center space-y-2 bg-[#161b2a] border border-gray-800 border-dashed rounded-lg p-6 group cursor-pointer hover:border-blue-500/50 transition-all animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center space-x-2 text-gray-200 group-hover:text-blue-400 transition-colors">
                  <Plus size={16} />
                  <span className="text-sm font-medium">点击上传矢量文件</span>
                </div>
                <div className="text-center text-gray-500 text-[10px] leading-relaxed max-w-[200px]">
                  支持.zip、.geojson格式，文件大小≤1MB，不超过10个
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-5 border-t border-gray-800 bg-[#0b101e]">
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setShowResults(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded font-bold text-sm flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              <Search size={16} />
              <span>检索</span>
            </button>
            <button 
              onClick={() => setSelectedTypes([])}
              className="bg-transparent border border-gray-700 hover:border-gray-500 hover:text-white text-gray-400 py-2.5 rounded font-bold text-sm flex items-center justify-center space-x-2 transition-all"
            >
              <RotateCcw size={16} />
              <span>重置</span>
            </button>
          </div>
        </div>
      </aside>
    );
  }

  // Thematic Tab Filter View
  return (
    <aside className="w-80 h-[calc(100vh-64px)] bg-[#0b101e]/95 backdrop-blur-md border-r border-gray-800 flex flex-col z-40">
      <div className="p-5 space-y-6 flex-1 overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">专题产品筛选</span>
          <ArrowRightLeft 
            size={16} 
            className="text-gray-500 cursor-pointer hover:text-white transition-colors" 
            onClick={onToggleListView}
          />
        </div>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input 
            type="text" 
            placeholder="请输入关键字搜索..." 
            className="w-full bg-[#161b2a] border border-gray-800 rounded px-9 py-2 text-xs text-gray-300 focus:border-blue-500 outline-none placeholder-gray-600 transition-all"
          />
        </div>

        <div className="space-y-4">
          <label className="text-xs font-medium text-gray-400">专题类型</label>
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            {thematicTypes.map((type) => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`text-left text-[11px] py-1.5 px-2 rounded transition-all hover:bg-blue-600/10 ${
                  selectedTypes.includes(type) ? 'text-blue-400 font-medium' : 'text-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-medium text-gray-400">覆盖范围</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: '省', value: '北京市' },
              { label: '市', value: '广州市' },
              { label: '县/区', value: '天河区', disabled: true }
            ].map((loc, idx) => (
              <div key={idx} className="relative group">
                <select 
                  disabled={loc.disabled}
                  className={`w-full bg-[#161b2a] border border-gray-800 rounded px-2 pr-6 py-2 text-[10px] appearance-none outline-none transition-all ${
                    loc.disabled ? 'text-gray-600 opacity-50 cursor-not-allowed' : 'text-gray-300 focus:border-blue-500'
                  }`}
                >
                  <option>{loc.value}</option>
                </select>
                <ChevronDown size={10} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 group-hover:text-blue-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-medium text-gray-400">数据时间</label>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <input 
                type="text" 
                defaultValue="2018/01/01" 
                className="w-full bg-[#161b2a] border border-gray-800 rounded px-2 pr-7 py-2 text-[10px] text-gray-300 focus:border-blue-500 outline-none"
              />
              <Calendar size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600" />
            </div>
            <div className="relative">
              <input 
                type="text" 
                defaultValue="2023/12/31" 
                className="w-full bg-[#161b2a] border border-gray-800 rounded px-2 pr-7 py-2 text-[10px] text-gray-300 focus:border-blue-500 outline-none"
              />
              <Calendar size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-gray-800 bg-[#0b101e]">
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setShowResults(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded font-bold text-sm flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
          >
            <Search size={16} />
            <span>检索</span>
          </button>
          <button 
            onClick={() => setSelectedTypes([])}
            className="bg-transparent border border-gray-700 hover:border-gray-500 hover:text-white text-gray-400 py-2.5 rounded font-bold text-sm flex items-center justify-center space-x-2 transition-all"
          >
            <RotateCcw size={16} />
            <span>重置</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const SatelliteIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 7 9 3 5 7l4 4"/><path d="m17 11 4 4-4 4-4-4"/><path d="m4.5 15.5 2 2"/><path d="m13 13-3 3"/><path d="M2 22 7.6 16.4"/><path d="m14.5 3.5 2 2"/><path d="m13 13 3-3"/><path d="m16.4 7.6 5.6-5.6"/></svg>
);
const CheckIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
);

export default Sidebar;
