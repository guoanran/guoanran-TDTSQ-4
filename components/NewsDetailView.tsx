
import React from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

interface NewsDetailViewProps {
  newsId: number | null;
  onBack: () => void;
}

const newsData = [
  {
    id: 1,
    title: '天地图·湖北一体化服务平台正式上线，开启地理信息服务新篇章',
    desc: '湖北省地理信息公共服务平台（天地图·湖北）完成全面升级，实现了省市县三级节点的一体化协同服务，为政府决策、企业应用及公众生活提供更优质的地理信息支撑。',
    date: '2025-08-04 16:23:50',
    author: '天地图运营中心',
    tags: ['平台动态', '产品发布'],
    content: `
      <p class="mb-6 leading-loose text-slate-600">
        近日，湖北省地理信息公共服务平台（天地图·湖北）完成全面升级，正式上线一体化服务平台。此次升级标志着湖北省在地理信息公共服务领域迈出了重要一步，实现了省、市、县三级节点的一体化协同服务，将为政府决策、企业应用及公众生活提供更优质、更高效的地理信息支撑。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        新版平台在数据资源、服务功能、用户体验等方面进行了全面优化。首先，数据资源更加丰富，整合了全省最新的高分辨率遥感影像、电子地图、地形晕渲图等基础地理信息数据，以及自然资源、交通、水利、旅游等多个行业的专题数据，形成了覆盖全省、要素齐全、更新及时的地理信息大数据池。
      </p>
      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" alt="天地图平台展示" class="w-full h-auto object-cover" />
        <div class="bg-slate-50 p-3 text-center text-xs text-slate-500">平台界面展示</div>
      </div>
      <p class="mb-6 leading-loose text-slate-600">
        其次，服务功能更加强大。新平台提供了丰富的API接口和SDK开发包，支持Web端、移动端等多种应用场景的快速开发。新增了矢量瓦片服务、路径规划、空间分析等高级功能，满足了不同用户在地图可视化、位置服务、数据分析等方面的多样化需求。同时，平台还引入了云计算和人工智能技术，提升了数据处理和服务的智能化水平。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        此外，用户体验也得到了显著提升。平台界面设计简洁美观，操作流程更加人性化。用户可以通过一站式门户网站，轻松获取所需的地图数据和服务。平台还建立了完善的用户反馈机制，及时响应用户需求，不断优化服务质量。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        天地图·湖北一体化服务平台的上线，将有力推动湖北省地理信息产业的发展，促进地理信息资源在各行各业的广泛应用。未来，平台将继续秉承“开放、共享、合作、共赢”的理念，不断创新服务模式，丰富数据资源，提升服务能力，为建设数字湖北、智慧湖北贡献力量。
      </p>
    `
  },
  {
    id: 2,
    title: '自然资源部：全面推进实景三维中国建设，天地图作为主要发布渠道',
    desc: '自然资源部部署全面推进实景三维中国建设，天地图将作为实景三维数据的主要互联网发布窗口，向社会提供高精度、逼真的三维地理空间服务。',
    date: '2025-04-23 17:50:24',
    author: '政策法规处',
    tags: ['行业政策', '实景三维'],
    content: `
      <p class="mb-6 leading-loose text-slate-600">
        自然资源部近日印发通知，部署全面推进实景三维中国建设。通知明确，实景三维中国建设是落实数字中国、平安中国、数字经济战略的重要举措，是新型基础设施建设的重要组成部分。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        实景三维作为真实、立体、时序化反映人类生产、生活和生态空间的时空信息，是国家重要的新型基础设施。通知指出，天地图将作为实景三维数据的主要互联网发布窗口，承担向社会提供高精度、逼真的三维地理空间服务的重要任务。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        通过天地图平台，公众和企业将能够便捷地访问和使用实景三维数据，体验身临其境的地理信息服务。这将极大地丰富地理信息产品的形式和内容，提升地理信息服务的价值和影响力。
      </p>
    `
  },
  {
    id: 3,
    title: '天地图2025版API发布，新增矢量瓦片与路径规划高级功能',
    desc: '国家地理信息公共服务平台（天地图）发布2025版应用程序开发接口（API），全面支持矢量瓦片地图服务，并优化了路径规划算法，大幅提升开发者的调用体验。',
    date: '2025-04-23 17:37:53',
    author: '研发中心',
    tags: ['技术动态', 'API更新'],
    content: `
      <p class="mb-6 leading-loose text-slate-600">
        为了更好地满足广大开发者对高品质地理信息服务的需求，国家地理信息公共服务平台（天地图）正式发布了2025版应用程序开发接口（API）。此次升级在功能特性、性能效率及易用性方面均有显著提升。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        2025版API的一大亮点是全面支持矢量瓦片地图服务。相比传统的栅格瓦片，矢量瓦片具有数据体积小、传输速度快、样式可定制、无级缩放不失真等优势。开发者可以根据业务需求，灵活定制地图的显示风格，为用户提供更加个性化、流畅的地图浏览体验。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        此外，新版API还对路径规划算法进行了深度优化。不仅提升了规划速度，还增加了多种交通方式（如驾车、骑行、步行）的路线推荐，以及实时路况避堵功能。开发者可以利用这些高级功能，轻松构建智能交通、物流配送、旅游出行等应用。
      </p>
    `
  },
  {
    id: 4,
    title: '“天地图”助力乡村振兴，精准地理信息服务深入田间地头',
    desc: '利用天地图的高分辨率影像与地理信息数据，各地自然资源部门积极开展乡村振兴专项服务，为农村规划、土地流转、产业发展提供精准的底图支撑。',
    date: '2025-04-23 17:12:36',
    author: '应用推广部',
    tags: ['乡村振兴', '应用案例'],
    content: `
      <p class="mb-6 leading-loose text-slate-600">
        在乡村振兴战略的深入实施过程中，地理信息技术正发挥着越来越重要的作用。各地自然资源部门依托“天地图”平台，利用其丰富的高分辨率影像和地理信息数据，积极开展乡村振兴专项服务，将精准的地理信息服务送到了田间地头。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        在农村规划方面，天地图提供的高精度底图帮助规划人员准确掌握村庄的空间布局、土地利用现状等信息，为科学编制村庄规划提供了有力支撑。在土地流转方面，通过天地图的地块查询和量算功能，农民和企业可以清晰地了解流转土地的位置、面积、权属等情况，促进了土地资源的合理配置和高效利用。
      </p>
    `
  },
  {
    id: 5,
    title: '天地图累计注册开发者突破100万，日均地图服务调用量创新高',
    desc: '截至目前，天地图门户网站累计注册开发者已突破100万，日均地图服务接口调用量超过10亿次，广泛应用于智慧城市、智能交通、物流配送等领域。',
    date: '2025-04-23 17:03:35',
    author: '运营数据组',
    tags: ['平台数据', '里程碑'],
    content: `
      <p class="mb-6 leading-loose text-slate-600">
        据最新统计数据显示，国家地理信息公共服务平台（天地图）门户网站累计注册开发者数量已突破100万大关，标志着天地图的开发者生态建设迈上了新的台阶。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        与此同时，天地图的服务能力也在不断提升。日均地图服务接口调用量已超过10亿次，服务范围覆盖了智慧城市、智能交通、物流配送、电子商务、政务服务等众多领域。这充分体现了天地图作为国家级地理信息公共服务平台的强大影响力和广泛应用价值。
      </p>
    `
  },
  {
    id: 6,
    title: '湖北省测绘地理信息局举办“天地图”应用推广交流会',
    desc: '会议邀请了省内多家相关企业和事业单位代表参加，共同探讨天地图在自然资源管理、应急指挥、生态保护等行业的深度应用与创新发展。',
    date: '2025-03-15 09:30:00',
    author: '会议报道组',
    tags: ['行业交流', '会议活动'],
    content: `
      <p class="mb-6 leading-loose text-slate-600">
        为了进一步推广天地图的应用，加强行业间的交流与合作，湖北省测绘地理信息局近日在武汉举办了“天地图”应用推广交流会。会议邀请了省内自然资源、应急管理、生态环境、交通运输等多个行业的企事业单位代表参加。
      </p>
      <p class="mb-6 leading-loose text-slate-600">
        会上，天地图·湖北的技术专家详细介绍了平台的最新建设成果和服务功能，并分享了多个典型应用案例。与会代表围绕天地图在各自领域的应用需求、存在问题及未来发展方向进行了深入探讨和交流。大家一致认为，天地图作为权威、统一的地理信息公共服务平台，在促进行业数字化转型、提升治理能力现代化水平方面发挥着重要作用。
      </p>
    `
  }
];

const NewsDetailView: React.FC<NewsDetailViewProps> = ({ newsId, onBack }) => {
  const news = newsData.find(n => n.id === newsId);

  if (!news) {
    return (
      <div className="flex-1 bg-white flex items-center justify-center text-slate-500 font-sans">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">文章未找到</h2>
          <button onClick={onBack} className="text-blue-600 hover:underline">返回资讯列表</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white overflow-y-auto no-scrollbar relative animate-in fade-in duration-500 font-sans text-slate-800">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-500 hover:text-blue-600 transition-colors group text-sm font-medium"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>返回列表</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Article Header */}
        <div className="mb-10 space-y-6">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {news.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{news.date.split(' ')[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{news.date.split(' ')[1]}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{news.author || '光谷信息'}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-slate max-w-none prose-lg prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: news.content || `<p>${news.desc}</p>` }}
        />

        {/* Footer Navigation */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <div className="flex justify-between items-center text-sm">
            <div className="space-y-1">
              <span className="text-slate-400 block text-xs">上一篇</span>
              <button className="text-slate-800 hover:text-blue-600 font-medium truncate max-w-[200px] md:max-w-xs block text-left">
                上一篇文章标题...
              </button>
            </div>
            <div className="space-y-1 text-right">
              <span className="text-slate-400 block text-xs">下一篇</span>
              <button className="text-slate-800 hover:text-blue-600 font-medium truncate max-w-[200px] md:max-w-xs block text-right">
                下一篇文章标题...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailView;
