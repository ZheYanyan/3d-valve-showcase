import { useState } from 'react';
import Scene3D from '@/components/Scene3D';
import Controls from '@/components/Controls';

export default function Home() {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-slate-950">
      <div className="absolute top-6 left-6 z-10">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
          3D 阀门模型展示
        </h1>
        <p className="text-slate-400 text-sm max-w-md">
          使用 Three.js 构建的交互式工业阀门模型
        </p>
      </div>

      <Scene3D autoRotate={autoRotate} />

      <Controls autoRotate={autoRotate} setAutoRotate={setAutoRotate} />
    </div>
  );
}
