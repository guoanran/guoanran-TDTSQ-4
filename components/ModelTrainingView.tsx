import React from 'react';
import { BrainCircuit, Cpu, Database, Play, BarChart3, Code2, Layers, Terminal } from 'lucide-react';

const ModelTrainingView: React.FC = () => {
  return (
    <div className="flex-1 bg-[#020617] overflow-y-auto no-scrollbar relative animate-in fade-in duration-700">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)', 
        backgroundSize: '60px 60px' 
      }} />
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 relative z-10 space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 py-10">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter animate-in slide-in-from-bottom-4 duration-700 delay-100">
            模型训练<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">中心</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-200">
            提供从数据标注、模型构建、训练调优到部署发布的一站式 AI 开发流程。内置丰富的高性能预训练模型，助力时空智能应用快速落地。
          </p>
          <div className="flex justify-center gap-6 pt-4 animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold flex items-center space-x-2 transition-all shadow-lg shadow-purple-900/40 active:scale-95">
              <Play size={20} fill="currentColor" />
              <span>开始训练</span>
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold flex items-center space-x-2 transition-all">
              <Code2 size={20} />
              <span>查看文档</span>
            </button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '弹性算力调度', icon: <Cpu size={32} />, desc: '基于 Kubernetes 的云原生架构，支持 GPU 资源秒级弹性伸缩，从容应对大规模训练任务。', color: 'text-purple-400', bg: 'bg-purple-500/10' },
            { title: '海量预训练模型', icon: <Layers size={32} />, desc: '内置 ResNet, YOLO, DeepLab 等经典模型及遥感专用大模型，开箱即用，支持迁移学习。', color: 'text-pink-400', bg: 'bg-pink-500/10' },
            { title: '自动化MLOps', icon: <Database size={32} />, desc: '全流程流水线管理，涵盖数据版本控制、实验追踪、模型评估与自动部署，提升研发效能。', color: 'text-blue-400', bg: 'bg-blue-500/10' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0b101e]/80 border border-gray-800 p-8 rounded-3xl hover:border-purple-500/30 transition-all group hover:-translate-y-2 duration-300">
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className={item.color}>{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Interactive Console Preview (Visual Only) */}
        <section className="relative rounded-2xl overflow-hidden border border-gray-800 bg-[#0f172a] shadow-2xl">
          <div className="flex items-center px-6 py-3 border-b border-gray-800 bg-[#020617]">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-6 text-xs text-gray-500 font-mono">training_task_v1.0.py</div>
          </div>
          <div className="p-8 font-mono text-sm text-gray-300 overflow-x-auto">
            <div className="space-y-2">
              <div className="flex"><span className="text-purple-400 mr-2">import</span> torch</div>
              <div className="flex"><span className="text-purple-400 mr-2">import</span> geovis_ai <span className="text-purple-400 mx-2">as</span> gv</div>
              <div className="h-4" />
              <div className="text-gray-500"># Initialize model with pre-trained weights</div>
              <div>model = gv.models.Segmentation(backbone=<span className="text-green-400">'resnet50'</span>, pretrained=<span className="text-blue-400">True</span>)</div>
              <div className="h-4" />
              <div className="text-gray-500"># Load satellite dataset</div>
              <div>dataset = gv.data.RemoteSensingDataset(root=<span className="text-green-400">'./data/gf2'</span>, bands=[<span className="text-green-400">'R'</span>, <span className="text-green-400">'G'</span>, <span className="text-green-400">'B'</span>, <span className="text-green-400">'NIR'</span>])</div>
              <div className="h-4" />
              <div className="text-gray-500"># Start training</div>
              <div>trainer = gv.Trainer(model, gpus=<span className="text-blue-400">4</span>)</div>
              <div className="flex items-center">
                <span>trainer.fit(dataset)</span>
                <span className="ml-2 w-2 h-4 bg-purple-500 animate-pulse" />
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800/50 text-xs">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-green-400">Epoch 1/50</span>
                <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[45%]" />
                </div>
                <span>45%</span>
              </div>
              <div className="text-gray-500">loss: 0.4231 - accuracy: 0.892 - time: 2m 14s</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ModelTrainingView;
