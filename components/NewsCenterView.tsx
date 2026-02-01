
import React, { useState } from 'react';
import { Search, ChevronRight, ChevronLeft, Calendar, ArrowRight, LayoutGrid, List } from 'lucide-react';

interface NewsCenterViewProps {
  onEnterDetail?: (id: number) => void;
}

const newsData = [
  {
    id: 1,
    title: '天地图·湖北一体化服务平台正式上线，开启地理信息服务新篇章',
    desc: '湖北省地理信息公共服务平台（天地图·湖北）完成全面升级，实现了省市县三级节点的一体化协同服务，为政府决策、企业应用及公众生活提供更优质的地理信息支撑。',
    date: '2025-08-04 16:23:50',
    link: '#'
  },
  {
    id: 2,
    title: '自然资源部：全面推进实景三维中国建设，天地图作为主要发布渠道',
    desc: '自然资源部部署全面推进实景三维中国建设，天地图将作为实景三维数据的主要互联网发布窗口，向社会提供高精度、逼真的三维地理空间服务。',
    date: '2025-04-23 17:50:24',
    link: '#'
  },
  {
    id: 3,
    title: '天地图2025版API发布，新增矢量瓦片与路径规划高级功能',
    desc: '国家地理信息公共服务平台（天地图）发布2025版应用程序开发接口（API），全面支持矢量瓦片地图服务，并优化了路径规划算法，大幅提升开发者的调用体验。',
    date: '2025-04-23 17:37:53',
    link: '#'
  },
  {
    id: 4,
    title: '“天地图”助力乡村振兴，精准地理信息服务深入田间地头',
    desc: '利用天地图的高分辨率影像与地理信息数据，各地自然资源部门积极开展乡村振兴专项服务，为农村规划、土地流转、产业发展提供精准的底图支撑。',
    date: '2025-04-23 17:12:36',
    link: '#'
  },
  {
    id: 5,
    title: '天地图累计注册开发者突破100万，日均地图服务调用量创新高',
    desc: '截至目前，天地图门户网站累计注册开发者已突破100万，日均地图服务接口调用量超过10亿次，广泛应用于智慧城市、智能交通、物流配送等领域。',
    date: '2025-04-23 17:03:35',
    link: '#'
  },
  {
    id: 6,
    title: '湖北省测绘地理信息局举办“天地图”应用推广交流会',
    desc: '会议邀请了省内多家相关企业和事业单位代表参加，共同探讨天地图在自然资源管理、应急指挥、生态保护等行业的深度应用与创新发展。',
    date: '2025-03-15 09:30:00',
    link: '#'
  }
];

const NewsCenterView: React.FC<NewsCenterViewProps> = ({ onEnterDetail }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex-1 bg-white overflow-y-auto no-scrollbar relative animate-in fade-in duration-500 font-sans text-slate-800">
      
      {/* Header Banner - Updated Gradient */}
      <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-white pt-16 pb-12 px-8 border-b border-blue-50/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">资讯动态</h1>
            <p className="text-slate-500 text-lg font-light max-w-2xl">
              最新行业动向、技术前沿资讯、产品内容上新、开发者动态一手掌握
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        
        {/* News List */}
        <div className="space-y-0 divide-y divide-slate-100">
          {newsData.map((item) => (
            <div key={item.id} className="group py-10 hover:bg-slate-50/50 transition-colors rounded-xl px-4 -mx-4">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-sm text-slate-400 font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                    {item.date}
                  </div>
                  <button 
                    onClick={() => onEnterDetail && onEnterDetail(item.id)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 group/btn"
                  >
                    查看详情
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-8 border-t border-slate-100 text-sm text-slate-600">
          <button className="px-3 py-1.5 border border-slate-200 rounded hover:bg-slate-50 hover:text-blue-600 transition-colors">首页</button>
          <button className="px-2 py-1.5 border border-slate-200 rounded hover:bg-slate-50 hover:text-blue-600 transition-colors">
            <ChevronLeft size={14} />
          </button>
          
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded font-medium shadow-sm shadow-blue-200">1</button>
          <button className="px-3 py-1.5 border border-slate-200 rounded hover:bg-slate-50 hover:text-blue-600 transition-colors">2</button>
          <span className="px-1 text-slate-400">...</span>
          
          <button className="px-2 py-1.5 border border-slate-200 rounded hover:bg-slate-50 hover:text-blue-600 transition-colors">
            <ChevronRight size={14} />
          </button>
          <button className="px-3 py-1.5 border border-slate-200 rounded hover:bg-slate-50 hover:text-blue-600 transition-colors">尾页</button>
          
          <div className="relative ml-2">
            <select className="appearance-none bg-white border border-slate-200 text-slate-600 py-1.5 pl-3 pr-8 rounded focus:outline-none focus:border-blue-500 cursor-pointer hover:bg-slate-50 transition-colors">
              <option>10条/页</option>
              <option>20条/页</option>
              <option>50条/页</option>
            </select>
            <ChevronRight size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsCenterView;
