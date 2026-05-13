# 3D 阀门模型展示

使用 Three.js 构建的交互式工业阀门 3D 模型展示应用。

## ✨ 功能特性

- 🎯 **3D 模型展示**: 高质量工业阀门模型，支持 360 度旋转查看
- 🔄 **自动旋转**: 可开关的模型自动旋转动画
- 🖱️ **鼠标交互**: 拖拽旋转、滚轮缩放、右键平移
- 💡 **光照系统**: 多光源配置，呈现真实的金属质感
- 📱 **响应式设计**: 适配各种屏幕尺寸
- 🎨 **现代 UI**: 简洁美观的后台控制面板

## 🛠️ 技术栈

- **React 18** - 用户界面框架
- **TypeScript** - 类型安全
- **Three.js** - 3D 渲染引擎
- **React Three Fiber** - React 的 Three.js 绑定
- **React Three Drei** - Three.js 常用工具集
- **Vite** - 快速构建工具
- **Tailwind CSS** - 样式框架

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173/

### 构建生产版本

```bash
npm run build
```

## 📁 项目结构

```
src/
├── components/
│   ├── ValveModel.tsx    # 3D 阀门模型组件
│   ├── Scene3D.tsx       # 3D 场景管理
│   ├── Lighting.tsx      # 光照系统
│   └── Controls.tsx      # 用户控制面板
├── pages/
│   └── Home.tsx          # 主页面
├── App.tsx               # 应用入口
└── main.tsx              # 入口文件
```

## 🎮 操作指南

- **鼠标拖拽**: 旋转查看模型
- **滚轮缩放**: 放大/缩小视图
- **右键拖动**: 平移视角
- **控制面板**: 切换自动旋转、重置视角

## 📝 License

MIT License
