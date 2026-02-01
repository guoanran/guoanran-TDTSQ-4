
import React, { useState } from 'react';
import { Search, ChevronRight, FileText, Terminal, Layers, Map as MapIcon, Database, Zap, Cpu, Box, Globe, Code2, Shield, Key, AlertCircle, ArrowLeft, Copy, Check, LayoutTemplate } from 'lucide-react';

const DocCenterView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('开发指南说明');
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sidebarItems = [
    { id: 'guide-intro', label: '开发指南说明', icon: <FileText size={16} /> },
    { id: 'tool', label: '工具算子服务', icon: <Cpu size={16} /> },
    { id: 'thematic', label: '专题产品服务', icon: <Box size={16} /> },
    { id: 'map', label: '主题地图服务', icon: <MapIcon size={16} /> },
  ];

  // Detailed Operator Documentation Component
  const renderOperatorDetail = (title: string) => (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
      <button 
        onClick={() => setSelectedDoc(null)}
        className="flex items-center space-x-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group mb-4"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>返回算子列表</span>
      </button>

      <div className="space-y-4 border-b border-slate-100 pb-8">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-black text-slate-900">{title}</h2>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-bold font-mono">v1.2.0</span>
        </div>
        <p className="text-slate-500 text-lg leading-relaxed">
          针对光学遥感影像中常见的云层遮挡问题，利用深度学习生成对抗网络（GAN）技术，自动检测并去除厚云与薄云，利用时序互补信息还原地表真实纹理信息，提升影像可用性。
        </p>
      </div>

      {/* 1. Interface Description */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
          接口说明
        </h3>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-bold w-20">接口地址</span>
            <code className="text-sm font-mono bg-white px-3 py-1.5 rounded border border-slate-200 text-slate-700 flex-1">
              https://api.spatial-engine.com/v1/process/cloud-removal
            </code>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-bold w-20">请求方式</span>
            <span className="text-xs font-bold text-white bg-green-500 px-2.5 py-1 rounded">POST</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-bold w-20">Content-Type</span>
            <span className="text-sm text-slate-700 font-mono">application/json</span>
          </div>
        </div>
      </section>

      {/* 2. Request Parameters */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
          请求参数
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="py-3 px-6 w-1/4">参数名称</th>
                <th className="py-3 px-6 w-1/6">类型</th>
                <th className="py-3 px-6 w-1/6">必填</th>
                <th className="py-3 px-6">描述</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">image_id</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">平台影像资产唯一标识ID</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">cloud_threshold</td>
                <td className="py-3 px-6 text-slate-500">Float</td>
                <td className="py-3 px-6 text-slate-400">否</td>
                <td className="py-3 px-6 text-slate-600">云量检测阈值 (0.0 - 1.0)，默认 0.5</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">use_gan</td>
                <td className="py-3 px-6 text-slate-500">Boolean</td>
                <td className="py-3 px-6 text-slate-400">否</td>
                <td className="py-3 px-6 text-slate-600">是否启用GAN网络进行纹理修复，默认 true</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">callback_url</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-slate-400">否</td>
                <td className="py-3 px-6 text-slate-600">异步任务完成后的回调通知地址</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Return Parameters */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-cyan-600 rounded-full"></span>
          返回参数
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="py-3 px-6 w-1/4">参数名称</th>
                <th className="py-3 px-6 w-1/6">类型</th>
                <th className="py-3 px-6">描述</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">code</td>
                <td className="py-3 px-6 text-slate-500">Integer</td>
                <td className="py-3 px-6 text-slate-600">状态码，200 表示成功</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">msg</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-slate-600">状态描述信息</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">data.task_id</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-slate-600">异步处理任务ID，用于查询进度</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">data.eta</td>
                <td className="py-3 px-6 text-slate-500">Integer</td>
                <td className="py-3 px-6 text-slate-600">预计处理耗时（秒）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Call Examples */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
          调用示例
        </h3>
        <div className="relative group">
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={handleCopy}
              className="p-2 bg-slate-700/50 hover:bg-slate-600 text-slate-300 rounded-lg backdrop-blur-sm transition-colors"
            >
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            </button>
          </div>
          <pre className="bg-[#1e293b] text-slate-300 p-6 rounded-xl font-mono text-sm overflow-x-auto leading-relaxed border border-slate-700 shadow-2xl">
{`curl -X POST "https://api.spatial-engine.com/v1/process/cloud-removal" \\
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
     -H "Content-Type: application/json" \\
     -d '{
           "image_id": "img_gf2_20231025_0012",
           "cloud_threshold": 0.65,
           "use_gan": true
         }'

// Response
{
  "code": 200,
  "msg": "success",
  "data": {
    "task_id": "job_cr_98237123",
    "status": "PROCESSING",
    "eta": 45
  },
  "timestamp": 1698230400
}`}
          </pre>
        </div>
      </section>
    </div>
  );

  // Thematic Product Detail Component (Consistent with Operator Detail)
  const renderThematicDetail = (title: string) => (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
      <button 
        onClick={() => setSelectedDoc(null)}
        className="flex items-center space-x-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group mb-4"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>返回产品列表</span>
      </button>

      <div className="space-y-4 border-b border-slate-100 pb-8">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-black text-slate-900">{title}</h2>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-xs font-bold font-mono">v2.0.0</span>
        </div>
        <p className="text-slate-500 text-lg leading-relaxed">
          基于多源遥感数据与行业知识图谱，通过智能解译算法自动化生产{title}产品。提供标准化的数据接口服务，支持按区域、按时间频次订阅，广泛应用于行业监管、资源调查与决策辅助。
        </p>
      </div>

      {/* 1. Interface Description */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
          接口说明
        </h3>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-bold w-20">接口地址</span>
            <code className="text-sm font-mono bg-white px-3 py-1.5 rounded border border-slate-200 text-slate-700 flex-1">
              https://api.spatial-engine.com/v2/product/data-retrieval
            </code>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-bold w-20">请求方式</span>
            <span className="text-xs font-bold text-white bg-green-500 px-2.5 py-1 rounded">POST</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-bold w-20">Content-Type</span>
            <span className="text-sm text-slate-700 font-mono">application/json</span>
          </div>
        </div>
      </section>

      {/* 2. Request Parameters */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
          请求参数
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="py-3 px-6 w-1/4">参数名称</th>
                <th className="py-3 px-6 w-1/6">类型</th>
                <th className="py-3 px-6 w-1/6">必填</th>
                <th className="py-3 px-6">描述</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">product_name</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">产品名称标识，例如 "{title}"</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">area_code</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-slate-400">否</td>
                <td className="py-3 px-6 text-slate-600">行政区划代码，如 "420100"</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">geometry</td>
                <td className="py-3 px-6 text-slate-500">GeoJSON</td>
                <td className="py-3 px-6 text-slate-400">否</td>
                <td className="py-3 px-6 text-slate-600">自定义区域的几何边界 (与area_code二选一)</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">date_time</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">数据时间，格式 "YYYY-MM-DD"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Return Parameters */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-cyan-600 rounded-full"></span>
          返回参数
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="py-3 px-6 w-1/4">参数名称</th>
                <th className="py-3 px-6 w-1/6">类型</th>
                <th className="py-3 px-6">描述</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">code</td>
                <td className="py-3 px-6 text-slate-500">Integer</td>
                <td className="py-3 px-6 text-slate-600">状态码，200 表示成功</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">data.url</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-slate-600">产品数据下载链接 (GeoJSON/Shapefile)</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">data.preview</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-slate-600">缩略图或预览图地址</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">data.stats</td>
                <td className="py-3 px-6 text-slate-500">Object</td>
                <td className="py-3 px-6 text-slate-600">统计分析结果（如面积、占比等）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Call Examples */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
          调用示例
        </h3>
        <div className="relative group">
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={handleCopy}
              className="p-2 bg-slate-700/50 hover:bg-slate-600 text-slate-300 rounded-lg backdrop-blur-sm transition-colors"
            >
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            </button>
          </div>
          <pre className="bg-[#1e293b] text-slate-300 p-6 rounded-xl font-mono text-sm overflow-x-auto leading-relaxed border border-slate-700 shadow-2xl">
{`curl -X POST "https://api.spatial-engine.com/v2/product/data-retrieval" \\
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
     -H "Content-Type: application/json" \\
     -d '{
           "product_name": "${title}",
           "area_code": "420100",
           "date_time": "2023-10-01"
         }'

// Response
{
  "code": 200,
  "msg": "success",
  "data": {
    "product_id": "prod_88273_wh_202310",
    "url": "https://oss.spatial-engine.com/products/2023/10/prod_88273.zip",
    "stats": {
      "total_area": 1250.5,
      "change_rate": 0.05
    }
  },
  "timestamp": 1698230400
}`}
          </pre>
        </div>
      </section>
    </div>
  );

  // Map Service Detail Component
  const renderMapServiceDetail = (title: string) => (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
      <button 
        onClick={() => setSelectedDoc(null)}
        className="flex items-center space-x-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group mb-4"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>返回地图服务列表</span>
      </button>

      <div className="space-y-6 border-b border-slate-100 pb-8">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-black text-slate-900">{title}</h2>
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-xs font-bold font-mono">OGC WMS 1.3.0</span>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h4 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
            <LayoutTemplate size={18} />
            应用说明
          </h4>
          <p className="text-blue-800/80 text-sm leading-relaxed">
            本服务遵循OGC Web Map Service (WMS) 标准协议，提供{title}的在线地图渲染与访问能力。
            该服务支持标准的GetCapabilities、GetMap和GetFeatureInfo操作，适用于各类WebGIS前端（如OpenLayers, Leaflet, Mapbox GL）调用、桌面GIS软件（如ArcGIS, QGIS）加载以及第三方业务系统集成。
            通过该接口，用户可以获取高质量、现势性强、经过统一配图的地图切片或动态渲染图，为业务应用提供直观的空间底图支撑。
          </p>
        </div>
      </div>

      {/* 1. Interface Description */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
          接口说明
        </h3>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-bold w-20">服务地址</span>
            <code className="text-sm font-mono bg-white px-3 py-1.5 rounded border border-slate-200 text-slate-700 flex-1 break-all">
              https://api.spatial-engine.com/services/wms/{title === '基础底图服务' ? 'basemap' : 'vector_layer'}
            </code>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-bold w-20">请求方式</span>
            <span className="text-xs font-bold text-white bg-green-500 px-2.5 py-1 rounded">GET</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-bold w-20">服务类型</span>
            <span className="text-sm text-slate-700 font-mono">WMS (Web Map Service)</span>
          </div>
        </div>
      </section>

      {/* 2. Request Parameters */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
          请求参数 (GetMap)
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="py-3 px-6 w-1/4">参数名称</th>
                <th className="py-3 px-6 w-1/6">类型</th>
                <th className="py-3 px-6 w-1/6">必填</th>
                <th className="py-3 px-6">描述</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">SERVICE</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">服务类型，固定值 "WMS"</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">VERSION</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">服务版本，如 "1.3.0"</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">REQUEST</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">操作类型，如 "GetMap"</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">LAYERS</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">请求的图层名称列表，逗号分隔</td>
              </tr>
               <tr>
                <td className="py-3 px-6 font-mono text-slate-700">BBOX</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">地图范围 bounding box (minx,miny,maxx,maxy)</td>
              </tr>
               <tr>
                <td className="py-3 px-6 font-mono text-slate-700">WIDTH</td>
                <td className="py-3 px-6 text-slate-500">Integer</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">返回图片的宽度（像素）</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">HEIGHT</td>
                <td className="py-3 px-6 text-slate-500">Integer</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">返回图片的高度（像素）</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">CRS</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">坐标参考系统，如 "EPSG:3857"</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-mono text-slate-700">FORMAT</td>
                <td className="py-3 px-6 text-slate-500">String</td>
                <td className="py-3 px-6 text-red-500 font-bold">是</td>
                <td className="py-3 px-6 text-slate-600">返回图片格式，如 "image/png"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Return Parameters */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-cyan-600 rounded-full"></span>
          返回参数
        </h3>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
               <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600">
                  <Box size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-slate-800 mb-2">地图影像流</h4>
                  <p className="text-slate-600 text-sm mb-4">对于 GetMap 请求，服务将直接返回渲染后的地图图片数据流。HTTP响应头中的 Content-Type 将与请求参数 FORMAT 一致。</p>
                  <ul className="list-disc list-inside text-sm text-slate-500 space-y-1 font-mono">
                      <li>Content-Type: image/png (或 image/jpeg)</li>
                      <li>Body: Binary Image Data</li>
                  </ul>
               </div>
            </div>
        </div>
      </section>

      {/* 4. Call Examples */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
          调用示例
        </h3>
        <div className="relative group">
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={handleCopy}
              className="p-2 bg-slate-700/50 hover:bg-slate-600 text-slate-300 rounded-lg backdrop-blur-sm transition-colors"
            >
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            </button>
          </div>
          <pre className="bg-[#1e293b] text-slate-300 p-6 rounded-xl font-mono text-sm overflow-x-auto leading-relaxed border border-slate-700 shadow-2xl">
{`https://api.spatial-engine.com/services/wms/${title === '基础底图服务' ? 'basemap' : 'vector_layer'}?
SERVICE=WMS&
VERSION=1.3.0&
REQUEST=GetMap&
FORMAT=image/png&
TRANSPARENT=true&
LAYERS=0&
WIDTH=256&
HEIGHT=256&
CRS=EPSG:3857&
BBOX=12945236.4,4852834.0,12947683.9,4855281.5&
STYLES=`}
          </pre>
        </div>
      </section>
    </div>
  );

  // Mock content data for each category
  const renderContent = () => {
    switch (activeCategory) {
      case '开发指南说明':
        return (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="space-y-6 border-b border-slate-100 pb-8">
              <h2 className="text-4xl font-black text-slate-900">平台开发指南</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                欢迎使用通导遥时空信息智能服务平台开放API。本指南旨在帮助开发者快速了解平台能力，掌握API调用方法，顺利完成应用开发与集成。
              </p>
              <div className="flex gap-4">
                 <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold border border-blue-100">V 2.0.1</span>
                 <span className="px-3 py-1 bg-green-50 text-green-600 rounded text-xs font-bold border border-green-100">Updated: 2023-12-01</span>
              </div>
            </div>

            <div className="space-y-10 text-slate-800">
              {/* Quick Start */}
              <section className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Zap size={24} className="text-blue-500" />
                  1. 快速开始
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  在调用 API 之前，您需要先注册成为平台开发者，并创建应用以获取 <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-500">API Key</code> 和 <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-500">Secret Key</code>。
                  认证鉴权采用 OAuth 2.0 标准协议，确保接口调用的安全性。
                </p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
                   <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                     <Key size={18} className="text-orange-500" />
                     鉴权流程
                   </h4>
                   <ol className="list-decimal list-inside space-y-3 text-slate-600 text-sm ml-2">
                      <li>登录开发者中心，创建应用。</li>
                      <li>获取应用凭证 (AK/SK)。</li>
                      <li>调用获取 Token 接口，换取访问令牌 (Access Token)。</li>
                      <li>在后续 API 请求头中携带 Token 进行调用。</li>
                   </ol>
                </div>
              </section>

              {/* Interface Spec */}
              <section className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Terminal size={24} className="text-purple-500" />
                  2. 接口规范
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  平台所有接口均采用 RESTful 风格，支持 HTTP/HTTPS 协议。请求参数和返回数据均使用 JSON 格式。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                   <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-sm">
                      <div className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider text-slate-500">通用请求头</div>
                      <pre className="text-xs bg-slate-900 text-slate-300 p-4 rounded-lg font-mono overflow-x-auto">
                        {`Content-Type: application/json
Authorization: Bearer <your_access_token>
X-App-Id: <your_app_id>`}
                      </pre>
                   </div>
                   <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-sm">
                      <div className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider text-slate-500">标准响应结构</div>
                      <pre className="text-xs bg-slate-900 text-slate-300 p-4 rounded-lg font-mono overflow-x-auto">
                        {`{
  "code": 200,
  "msg": "success",
  "data": { 
    "id": "job_123456",
    "status": "completed"
  },
  "timestamp": 1638345600
}`}
                      </pre>
                   </div>
                </div>
              </section>

              {/* Error Codes */}
              <section className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <AlertCircle size={24} className="text-red-500" />
                  3. 错误码说明
                </h3>
                <div className="overflow-hidden border border-slate-200 rounded-xl">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="py-3 px-6 font-bold text-slate-700 w-24">错误码</th>
                        <th className="py-3 px-6 font-bold text-slate-700 w-48">说明</th>
                        <th className="py-3 px-6 font-bold text-slate-700">解决方案</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      <tr>
                        <td className="py-3 px-6 text-red-500 font-mono font-medium">401</td>
                        <td className="py-3 px-6 text-slate-700 font-medium">Unauthorized</td>
                        <td className="py-3 px-6 text-slate-500">Token 过期或无效，请重新获取 Token。</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-red-500 font-mono font-medium">403</td>
                        <td className="py-3 px-6 text-slate-700 font-medium">Forbidden</td>
                        <td className="py-3 px-6 text-slate-500">账户无权限调用该接口，请检查服务订阅状态或联系管理员。</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-red-500 font-mono font-medium">429</td>
                        <td className="py-3 px-6 text-slate-700 font-medium">Too Many Requests</td>
                        <td className="py-3 px-6 text-slate-500">调用频率超限，请降低请求频率或升级套餐。</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-red-500 font-mono font-medium">500</td>
                        <td className="py-3 px-6 text-slate-700 font-medium">Internal Error</td>
                        <td className="py-3 px-6 text-slate-500">服务器内部错误，请记录 request_id 并联系技术支持。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        );
      case '工具算子服务':
        if (selectedDoc) {
          return renderOperatorDetail(selectedDoc);
        }
        return (
          <div className="space-y-12">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <h2 className="text-3xl font-bold text-slate-900">工具算子服务</h2>
              <p className="text-slate-500">提供高性能的遥感影像智能解译与处理算法接口，支持同步与异步调用。</p>
            </div>
            
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                  图像处理类
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['影像去云', '大气校正', '正射校正', '图像融合', '匀色镶嵌', '超分辨率重建'].map((item, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedDoc(item)}
                      className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md hover:bg-blue-50/10 transition-all cursor-pointer group"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{item}</span>
                        <Code2 size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                      <p className="text-xs text-slate-400 mt-2 font-mono">API: /v1/process/{i + 100}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
                  智能解译类
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['地物分类', '变化检测', '目标检测', '路网提取', '水体提取', '植被指数计算'].map((item, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedDoc(item)}
                      className="p-4 border border-slate-200 rounded-xl hover:border-purple-500 hover:shadow-md hover:bg-purple-50/10 transition-all cursor-pointer group"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-slate-700 group-hover:text-purple-600 transition-colors">{item}</span>
                        <Zap size={16} className="text-slate-400 group-hover:text-purple-500 transition-colors" />
                      </div>
                      <p className="text-xs text-slate-400 mt-2 font-mono">API: /v1/ai/{i + 200}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case '专题产品服务':
        if (selectedDoc) {
          return renderThematicDetail(selectedDoc);
        }
        return (
          <div className="space-y-12">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <h2 className="text-3xl font-bold text-slate-900">专题产品服务</h2>
              <p className="text-slate-500">面向特定行业场景的标准化数据产品接口，直接获取分析结果。</p>
            </div>
            
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
               {[
                 { title: '农业专题', color: 'bg-green-600', hoverColor: 'text-green-600', borderColor: 'hover:border-green-500', bgHover: 'hover:bg-green-50/10', apis: ['作物种植分布', '长势监测报告', '产量预估数据', '耕地非粮化监测'] },
                 { title: '生态专题', color: 'bg-teal-600', hoverColor: 'text-teal-600', borderColor: 'hover:border-teal-500', bgHover: 'hover:bg-teal-50/10', apis: ['森林覆盖度', '水质监测参数', '生态红线监管', '碳汇核算数据'] },
                 { title: '灾害专题', color: 'bg-red-600', hoverColor: 'text-red-600', borderColor: 'hover:border-red-500', bgHover: 'hover:bg-red-50/10', apis: ['洪涝淹没范围', '地质滑坡风险', '森林火点监测', '台风路径预测'] },
                 { title: '城市专题', color: 'bg-blue-600', hoverColor: 'text-blue-600', borderColor: 'hover:border-blue-500', bgHover: 'hover:bg-blue-50/10', apis: ['城市不透水面', '建筑高度估算', '城市绿地分析', '道路拥堵指数'] }
               ].map((group, idx) => (
                 <div key={idx}>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <span className={`w-1.5 h-6 ${group.color} rounded-full`}></span>
                      {group.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {group.apis.map((api, k) => (
                        <div 
                          key={k} 
                          onClick={() => setSelectedDoc(api)}
                          className={`p-4 border border-slate-200 rounded-xl ${group.borderColor} hover:shadow-md ${group.bgHover} transition-all cursor-pointer group/card`}
                        >
                          <div className="flex justify-between items-start">
                            <span className={`font-bold text-slate-700 ${group.hoverColor} transition-colors`}>{api}</span>
                            <Layers size={16} className={`text-slate-400 ${group.hoverColor} transition-colors`} />
                          </div>
                          <p className="text-xs text-slate-400 mt-2 font-mono">API: /v2/product/{idx + 10}{k}</p>
                        </div>
                      ))}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );
      case '主题地图服务':
        if (selectedDoc) {
          return renderMapServiceDetail(selectedDoc);
        }
        return (
          <div className="space-y-12">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <h2 className="text-3xl font-bold text-slate-900">主题地图服务</h2>
              <p className="text-slate-500">提供符合 OGC 标准的地图服务接口，包括 WMTS、WMS、WFS 等。</p>
            </div>

            <div className="space-y-6">
               {[
                 { name: '基础底图服务', desc: '包含全球影像底图、矢量底图、地形晕渲图等基础背景地图。', type: 'WMTS/XYZ' },
                 { name: '行政区划服务', desc: '提供省、市、县、乡镇四级行政区划边界矢量服务。', type: 'WFS/VectorTile' },
                 { name: '路网水系服务', desc: '高精度的道路网络与水系分布图层，支持样式自定义。', type: 'VectorTile' },
                 { name: '兴趣点(POI)服务', desc: '包含餐饮、住宿、交通、医疗等分类POI检索服务。', type: 'WFS/Search API' },
                 { name: '实时路况服务', desc: '基于实时交通流数据的路况渲染图层，每分钟更新。', type: 'WMS' }
               ].map((service, i) => (
                 <div 
                    key={i} 
                    onClick={() => setSelectedDoc(service.name)}
                    className="flex items-start space-x-4 p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all cursor-pointer group"
                 >
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                       <MapIcon size={24} />
                    </div>
                    <div className="flex-1">
                       <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{service.name}</h3>
                          <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-mono rounded group-hover:bg-blue-50 group-hover:text-blue-600">{service.type}</span>
                       </div>
                       <p className="text-slate-500 text-sm mb-3 group-hover:text-slate-600">{service.desc}</p>
                       <div className="flex gap-4 text-sm font-medium text-blue-600">
                          <span className="hover:underline">查看接口文档</span>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-white h-full overflow-hidden flex flex-col font-sans text-slate-800">
      
      {/* Header Banner - Matches NewsCenterView */}
      <div className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-12 px-8 border-b border-blue-50/50 shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">文档中心</h1>
            <p className="text-slate-500 text-lg font-light max-w-2xl">
              提供全面的开发指南、API文档、SDK下载及技术支持，助力开发者快速接入与应用构建。
            </p>
          </div>
          
          {/* Decorative Illustration (Abstract) */}
          <div className="hidden md:block relative w-48 h-32 opacity-80">
             <div className="absolute right-0 bottom-0 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
             <div className="absolute right-12 bottom-4 w-20 h-20 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700" />
             <div className="absolute right-4 bottom-12 w-16 h-16 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full">
        {/* Left Sidebar */}
        <aside className="w-64 bg-gray-50/50 border-r border-slate-200 flex flex-col overflow-y-auto no-scrollbar py-6 px-4 shrink-0">
          {/* Search */}
          <div className="relative mb-6">
            <input 
              type="text" 
              placeholder="在当前页面搜索" 
              className="w-full bg-white border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder-slate-400"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <div className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">开发指南</div>
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveCategory(item.label); setSelectedDoc(null); }}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === item.label
                    ? 'text-blue-600 bg-blue-50 border border-blue-100 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent'
                }`}
              >
                <span className={activeCategory === item.label ? 'text-blue-600' : 'text-slate-400'}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Right Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-white">
          <div className="max-w-4xl">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocCenterView;
