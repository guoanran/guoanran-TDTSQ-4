
import React from 'react';
import { ArrowLeft, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';

interface HelpDetailViewProps {
  helpId: string | null;
  onBack: () => void;
}

const helpData = [
  {
    id: 'q1',
    title: '如何申请高分辨率卫星影像的下载权限？',
    content: `
      <p class="mb-4 text-slate-600 leading-relaxed">
        尊敬的用户，您好！申请高分辨率卫星影像的下载权限，请按照以下步骤操作：
      </p>
      <ol class="list-decimal pl-5 mb-6 text-slate-600 space-y-2">
        <li><strong>登录平台账号：</strong> 请确保您已注册并登录光谷信息市场化服务专区账号。</li>
        <li><strong>完成企业/实名认证：</strong> 进入“个人中心” -> “实名认证”页面，提交相关资料完成认证。高分辨率影像下载通常仅面向认证用户开放。</li>
        <li><strong>提交申请：</strong> 在数据中心找到所需的高分辨率影像产品，点击“申请下载”或“立即订购”按钮。</li>
        <li><strong>填写用途说明：</strong> 在弹出的申请表单中，如实填写数据使用用途、项目名称等信息，并提交审核。</li>
        <li><strong>等待审核：</strong> 平台工作人员将在 1-3 个工作日内完成审核。审核结果将通过短信或站内信通知您。</li>
      </ol>
      <p class="mb-4 text-slate-600 leading-relaxed">
        审核通过后，您即可在“我的订单”或数据详情页下载相关数据。如有疑问，请联系客服。
      </p>
    `,
    category: '数据获取',
    updated: '2023-11-20'
  },
  {
    id: 'q2',
    title: '平台支持哪些格式的矢量数据上传？',
    content: `
      <p class="mb-4 text-slate-600 leading-relaxed">
        平台支持多种常见的地理信息矢量数据格式上传，主要包括：
      </p>
      <ul class="list-disc pl-5 mb-6 text-slate-600 space-y-2">
        <li><strong>Shapefile (.shp):</strong> 请将 .shp, .shx, .dbf, .prj 等同名文件打包为 .zip 压缩包上传。</li>
        <li><strong>GeoJSON (.geojson / .json):</strong> 标准的 GeoJSON 格式文件。</li>
        <li><strong>KML/KMZ (.kml / .kmz):</strong> Google Earth 支持的地理标记语言文件。</li>
        <li><strong>AutoCAD DXF (.dxf):</strong> 常见的 CAD 数据交换格式。</li>
      </ul>
      <p class="mb-4 text-slate-600 leading-relaxed">
        <strong>注意事项：</strong>
        <br/>1. 上传文件大小限制为 500MB 以内。
        <br/>2. 请确保数据坐标系为 WGS84 或 CGCS2000，否则可能无法正确叠加显示。
        <br/>3. 压缩包内请勿包含文件夹，直接压缩文件即可。
      </p>
    `,
    category: '数据管理',
    updated: '2023-10-15'
  },
  {
    id: 'q3',
    title: '订购的数据产品通常多久可以交付？',
    content: `
      <p class="mb-4 text-slate-600 leading-relaxed">
        数据产品的交付时间取决于数据的类型和处理难度：
      </p>
      <ul class="list-disc pl-5 mb-6 text-slate-600 space-y-2">
        <li><strong>标准存档数据：</strong> 对于已处理好的标准分幅影像或矢量数据，订购成功后可<strong>立即在线下载</strong>。</li>
        <li><strong>定制化处理数据：</strong> 如需进行正射校正、融合、镶嵌等定制处理，通常需要 <strong>1-3 个工作日</strong>。</li>
        <li><strong>编程拍摄数据：</strong> 如果您订购的是未来时间的卫星编程拍摄任务，交付时间取决于卫星过境计划和云量情况，通常在拍摄完成后 <strong>24小时内</strong> 交付。</li>
        <li><strong>离线介质交付：</strong> 如选择硬盘邮寄方式，将在数据准备完成后寄出，物流时间约为 <strong>3-5 天</strong>。</li>
      </ul>
    `,
    category: '订单服务',
    updated: '2023-12-01'
  },
  {
    id: 'q4',
    title: '如何通过API接口调用AI解译服务？',
    content: `
      <p class="mb-4 text-slate-600 leading-relaxed">
        调用 AI 解译服务 API 的基本流程如下：
      </p>
      <ol class="list-decimal pl-5 mb-6 text-slate-600 space-y-2">
        <li><strong>获取 API Key：</strong> 在“个人中心” -> “API 管理”中创建应用，获取 API Key 和 Secret Key。</li>
        <li><strong>查阅开发文档：</strong> 访问“文档中心”，查看相关算法服务的 API 接口文档，了解请求参数和返回格式。</li>
        <li><strong>获取 Access Token：</strong> 使用 AK/SK 调用鉴权接口获取临时的 Access Token。</li>
        <li><strong>发起请求：</strong> 使用 Access Token，按照文档规范向服务接口发送 HTTP POST 请求，上传待处理影像或指定影像 ID。</li>
        <li><strong>获取结果：</strong> 接口将同步返回解译结果（如 GeoJSON）或返回任务 ID（异步任务），您可以通过查询接口获取最终结果。</li>
      </ol>
      <p class="text-slate-600">详细代码示例请参考文档中心的 SDK 指南。</p>
    `,
    category: '技术支持',
    updated: '2023-09-28'
  },
  {
    id: 'q5',
    title: '企业认证需要准备哪些材料？',
    content: `
      <p class="mb-4 text-slate-600 leading-relaxed">
        进行企业认证，请准备以下材料的扫描件或清晰照片：
      </p>
      <ul class="list-disc pl-5 mb-6 text-slate-600 space-y-2">
        <li><strong>营业执照副本：</strong> 需加盖企业公章，且在有效期内。</li>
        <li><strong>法人代表身份证：</strong> 正反面复印件，需加盖公章。</li>
        <li><strong>授权委托书：</strong> 如由经办人申请，需提供加盖公章的授权委托书。</li>
        <li><strong>经办人身份证：</strong> 正反面复印件，需加盖公章。</li>
      </ul>
      <p class="text-slate-600">请确保所有上传的图片清晰可见，文字内容完整。认证审核通常需要 1-2 个工作日。</p>
    `,
    category: '账号管理',
    updated: '2023-08-10'
  },
  {
    id: 'q6',
    title: '平台的数据更新频率是怎样的？',
    content: `
      <p class="mb-4 text-slate-600 leading-relaxed">
        平台各类数据的更新频率如下：
      </p>
      <ul class="list-disc pl-5 mb-6 text-slate-600 space-y-2">
        <li><strong>卫星影像数据：</strong> 每日更新。接入多颗国内外卫星数据，实时接收并处理。</li>
        <li><strong>基础地理信息（矢量）：</strong> 季度更新。路网、水系、居民地等基础要素每季度进行一次全面更新。</li>
        <li><strong>专题监测数据：</strong> 根据专题类型不同而异。例如，空气质量监测数据为小时级更新，农作物长势监测数据为旬度（10天）更新。</li>
        <li><strong>实景三维模型：</strong> 根据项目建设进度不定期更新，重点城市区域通常每年更新一次。</li>
      </ul>
    `,
    category: '数据说明',
    updated: '2023-11-05'
  }
];

const HelpDetailView: React.FC<HelpDetailViewProps> = ({ helpId, onBack }) => {
  const article = helpData.find(item => item.id === helpId);

  if (!article) {
    return (
      <div className="flex-1 bg-white flex items-center justify-center font-sans text-slate-500">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">未找到该问题</h2>
          <button onClick={onBack} className="text-blue-600 hover:underline font-medium">返回帮助中心</button>
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
            <span>返回帮助中心</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10 border-b border-slate-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
            {article.title}
          </h1>
          <div className="text-slate-400 text-sm">更新于 {article.updated}</div>
        </div>

        <div className="prose prose-slate max-w-none prose-lg">
           <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        <div className="mt-16 pt-10 border-t border-slate-100">
           <div className="bg-slate-50 rounded-2xl p-8 text-center space-y-6">
              <h3 className="font-bold text-slate-800">这篇文档对您有帮助吗？</h3>
              <div className="flex justify-center gap-6">
                 <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
                    <ThumbsUp size={18} />
                    <span className="text-sm font-medium">有帮助</span>
                 </button>
                 <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 rounded-xl hover:border-slate-400 hover:text-slate-600 transition-all shadow-sm text-slate-500">
                    <ThumbsDown size={18} />
                    <span className="text-sm font-medium">没帮助</span>
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDetailView;
