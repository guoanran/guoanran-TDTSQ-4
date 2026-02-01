
import React, { useEffect, useRef, useMemo, useState } from 'react';
import Globe from 'react-globe.gl';
import { X, Calendar, Camera, Maximize2, Cloud, MapPin, Info } from 'lucide-react';

interface MarkerMetadata {
  lat: number;
  lng: number;
  color: string;
  name: string;
  satellite: string;
  date: string;
  resolution: string;
  sensor: string;
  cloudCover: string;
}

interface GlobeContainerProps {
  showOrbit?: boolean;
}

const GlobeContainer: React.FC<GlobeContainerProps> = ({ showOrbit = false }) => {
  const globeEl = useRef<any>(null);
  const [selectedMarker, setSelectedMarker] = useState<MarkerMetadata | null>(null);
  const [satelliteData, setSatelliteData] = useState<any[]>([]);
  const [orbitPaths, setOrbitPaths] = useState<any[]>([]);

  // Enhanced mock data for markers with metadata
  const markerData: MarkerMetadata[] = useMemo(() => [
    { 
      lat: 37.7749, 
      lng: -122.4194, 
      color: '#f87171', 
      name: '区域采集点 A',
      satellite: '高分二号 (GF-2)',
      date: '2023-11-24 10:45:22',
      resolution: '0.8m',
      sensor: 'PMS (全色/多光谱)',
      cloudCover: '1.2%'
    },
    { 
      lat: 15.0, 
      lng: -140.0, 
      color: '#4ade80', 
      name: '太平洋观测区 04',
      satellite: '哨兵一号 (Sentinel-1)',
      date: '2023-12-12 02:15:00',
      resolution: '10m',
      sensor: 'SAR (合成孔径雷达)',
      cloudCover: '0.0%'
    },
    { 
      lat: 31.2304, 
      lng: 121.4737, 
      color: '#60a5fa', 
      name: '上海核心区影像',
      satellite: '吉林一号 (JL-1)',
      date: '2024-01-05 14:20:11',
      resolution: '0.5m',
      sensor: 'HR (高分视频)',
      cloudCover: '5.4%'
    }
  ], []);

  // Generate simple orbit paths
  const calcOrbitPath = (inclination: number, altitude: number, segments = 60) => {
    const path = [];
    for (let i = 0; i <= 360; i += 360 / segments) {
      // Simple approximate visualization of an orbit
      // Lat varies by inclination * sin(angle)
      const angle = i * Math.PI / 180;
      const lat = inclination * Math.sin(angle);
      path.push({ lat, lng: i, alt: altitude });
    }
    return path;
  };

  useEffect(() => {
    if (showOrbit) {
      // Generate paths
      const paths = [
        calcOrbitPath(80, 0.4),
        calcOrbitPath(45, 0.5),
        calcOrbitPath(-30, 0.6),
        calcOrbitPath(90, 0.35), // Polar
      ];
      setOrbitPaths(paths);

      // Generate satellites
      const sats = Array.from({ length: 12 }).map((_, i) => ({
        id: `sat-${i}`,
        lat: 0,
        lng: i * 30,
        alt: 0.4 + (i % 3) * 0.1, // Match altitudes from paths roughly
        inclination: [80, 45, -30, 90][i % 4],
        speed: 0.5 + Math.random() * 0.5,
        angle: i * 30
      }));
      setSatelliteData(sats);

      const interval = setInterval(() => {
        setSatelliteData(prev => prev.map(sat => {
          const newAngle = (sat.angle + sat.speed) % 360;
          const lat = sat.inclination * Math.sin(newAngle * Math.PI / 180);
          return { ...sat, lat, lng: newAngle, angle: newAngle };
        }));
      }, 50);

      return () => clearInterval(interval);
    } else {
      setOrbitPaths([]);
      setSatelliteData([]);
    }
  }, [showOrbit]);

  useEffect(() => {
    if (globeEl.current) {
      // Set initial POV to match image (around North America/Pacific)
      // Lower altitude makes the globe appear larger
      globeEl.current.pointOfView({ lat: 25, lng: -110, altitude: 1.7 }, 0);
      
      const controls = globeEl.current.controls();
      controls.autoRotate = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
    }
  }, []);

  const handlePointClick = (point: any) => {
    setSelectedMarker(point as MarkerMetadata);
    // Smoothly pan to the clicked point
    if (globeEl.current) {
      globeEl.current.pointOfView({
        lat: point.lat,
        lng: point.lng,
        altitude: 1.2
      }, 1000);
    }
  };

  return (
    <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0}
        backgroundColor="#000000"
        
        // Markers
        pointsData={markerData}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointRadius={0.6}
        pointAltitude={0.02}
        onPointClick={handlePointClick}
        pointLabel={(d: any) => `${d.name} (${d.satellite})`}

        // Orbits (Paths)
        pathsData={orbitPaths}
        pathPoints={d => d}
        pathPointLat={d => d.lat}
        pathPointLng={d => d.lng}
        pathPointAlt={d => d.alt}
        pathColor={() => 'rgba(100, 200, 255, 0.4)'}
        pathStroke={1}
        
        // Moving Satellites (Using Labels for visual icon)
        labelsData={satelliteData}
        labelLat={d => d.lat}
        labelLng={d => d.lng}
        labelAltitude={d => d.alt}
        labelText={() => '🛰️'}
        labelSize={1.5}
        labelDotRadius={0}
      />

      {/* Metadata Detail Card */}
      {selectedMarker && (
        <div className="absolute left-6 top-6 w-72 bg-[#0b101e]/90 backdrop-blur-xl border border-blue-500/30 rounded-lg shadow-2xl z-50 animate-in fade-in slide-in-from-left-4 duration-300">
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-blue-400">
              <Info size={16} />
              <span className="font-semibold text-sm">影像详细信息</span>
            </div>
            <button 
              onClick={() => setSelectedMarker(null)}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="space-y-1">
              <h3 className="text-white font-bold text-base">{selectedMarker.name}</h3>
              <p className="text-xs text-gray-400 flex items-center">
                <MapPin size={10} className="mr-1" />
                {selectedMarker.lat.toFixed(4)}, {selectedMarker.lng.toFixed(4)}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 bg-white/5 p-2 rounded border border-white/5">
                <Camera size={14} className="text-blue-400" />
                <div>
                  <div className="text-[10px] text-gray-500 uppercase">卫星载荷</div>
                  <div className="text-xs font-medium">{selectedMarker.satellite}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 p-2 rounded border border-white/5">
                <Calendar size={14} className="text-blue-400" />
                <div>
                  <div className="text-[10px] text-gray-500 uppercase">采集时间</div>
                  <div className="text-xs font-medium">{selectedMarker.date}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 p-2 rounded border border-white/5">
                  <div className="flex items-center text-[10px] text-gray-500 mb-1">
                    <Maximize2 size={10} className="mr-1" /> 分辨率
                  </div>
                  <div className="text-xs font-bold text-blue-300">{selectedMarker.resolution}</div>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/5">
                  <div className="flex items-center text-[10px] text-gray-500 mb-1">
                    <Cloud size={10} className="mr-1" /> 云量
                  </div>
                  <div className="text-xs font-bold text-blue-300">{selectedMarker.cloudCover}</div>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs py-2 rounded font-medium transition-all shadow-lg shadow-blue-900/40">
              获取完整数据
            </button>
          </div>
        </div>
      )}

      {/* Region labels overlay matching image */}
      <div className="absolute top-[68%] left-[55%] text-blue-400/80 pointer-events-none select-none font-medium text-base tracking-widest blur-[0.3px]">
        太平洋
      </div>
      <div className="absolute top-[35%] right-[16%] text-blue-400/80 pointer-events-none select-none font-medium text-base tracking-widest blur-[0.3px]">
        大西洋
      </div>

      {/* Float controls matching image */}
      <div className="absolute right-6 bottom-16 flex flex-col space-y-4 z-10">
        <button 
          onClick={() => globeEl.current && globeEl.current.pointOfView({ altitude: globeEl.current.pointOfView().altitude * 0.8 }, 300)}
          className="w-10 h-10 bg-[#0b101e]/80 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-sm"
        >
          <Plus size={18} />
        </button>
        <button 
          onClick={() => globeEl.current && globeEl.current.pointOfView({ altitude: globeEl.current.pointOfView().altitude * 1.2 }, 300)}
          className="w-10 h-10 bg-[#0b101e]/80 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-sm"
        >
          <Minus size={18} />
        </button>
        <button 
          onClick={() => globeEl.current && globeEl.current.pointOfView({ lat: 25, lng: -110, altitude: 1.7 }, 1000)}
          className="w-10 h-10 bg-[#0b101e]/80 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-sm"
        >
           <Maximize size={18} />
        </button>
        <button className="w-10 h-10 bg-[#0b101e]/80 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-sm">
           <Navigation size={18} />
        </button>
      </div>

      {/* Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/40 backdrop-blur-sm border-t border-gray-900/50 flex items-center justify-center text-[9px] text-gray-600 z-10 uppercase tracking-tighter">
        数据更新时间: 2023-12-31 | 坐标系: GCS_WGS_1984
      </div>
    </div>
  );
};

const Plus = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const Minus = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const Maximize = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
);
const Navigation = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
);

export default GlobeContainer;
