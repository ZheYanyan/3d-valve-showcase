import { RotateCcw, Info } from 'lucide-react';

interface ControlsProps {
  autoRotate: boolean;
  setAutoRotate: (value: boolean) => void;
}

export default function Controls({ autoRotate, setAutoRotate }: ControlsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-10">
      <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl shadow-2xl w-72">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-blue-400" />
          <h3 className="text-slate-100 font-semibold">控制面板</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">自动旋转</span>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                autoRotate ? 'bg-blue-600' : 'bg-slate-700'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  autoRotate ? 'left-7' : 'left-1'
                }`}
              />
            </button>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm transition-colors border border-slate-600"
          >
            <RotateCcw className="w-4 h-4" />
            重置视角
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-700">
          <p className="text-xs text-slate-500 mb-2">操作说明:</p>
          <div className="text-xs text-slate-500 space-y-1">
            <p>🖱️ 拖拽：旋转模型</p>
            <p>🔄 滚轮：缩放视图</p>
            <p>👉 右键拖动：平移视图</p>
          </div>
        </div>
      </div>
    </div>
  );
}
