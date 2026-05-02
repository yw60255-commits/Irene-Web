阶段 1 文档模板（表格版）

概览
- 目标：在不修改代码的情况下，整理首页核心区域的基线记录及设计系统微调草案，便于后续实现阶段落地。
- 输出：表格化的基线要点、Tokens 映射示例、验收要点清单。

表格 1：阶段 1 基线要点（按区域聚合）
| 区域/组件 | 具体要点 | 优先级 | 产出物/交付物 | 备注 |
|---|---|---:|---|---|
| Hero/CTA | 文案、CTA 文案、间距 24px | 高 | Tokens 映射、CSS 变量应用示例 | 需要确保与品牌风格统一 |
| 导航/页头 | 导航项高度 36-40px，项间距 8px，header 内边距 12px/16px | 高 | 导航样式草案、对比草案 | 关注可访问性焦点状态 |
| 卡片网格 | 桌面 gap 16px，移动端 gap 12px | 中 | 网格对齐规则、组件样例 | 适配不同分辨率 |
| 表单控件 | 字段间距 16px，label–input 8px，错误文本 6-8px | 高 | 表单样式草案、对比草案 | ARIA 要点应实现 |
| 全局焦点/可访问性 | 2px 外描边，accent 色，offset 2px | 高 | Focus 样式规范 | 与 Tokens 对齐 |
| ARIA 要点 | icon-only 按钮 aria-label；字段有 label；错误信息 aria-describedby | 高 | ARIA 使用规范 | 确保无无障碍缺陷 |
| 品牌要素 | 统一风格但素材尚缺 | 中 | 品牌元素需求清单 | 需提供素材 |
| 验收要点 | 视觉对比、可访问性清单、Tokens 使用映射 | 高 | 验收清单 | 以对比为主验收依据 |

表格 2：设计 Tokens 草案示例（结构化字段）
| Token | 分类 | 现值/示例 | 说明 |
|---|---|---|---|
| colors.primary | color | #243B53 | 主色，贯穿全站 |
| colors.neutral | color | #E9EDF2 | 辅助背景色 |
| colors.accent | color | #2F80ED | 强调色 |
| typography.baseFontSize | size | 16px | 基线字号 |
| typography.heading | size | 20px / 28px / 34px | 三级标题尺寸 |
| spacing.base | px | 8px | 行/间距基线 |
| radii | px | 4 / 6 / 8 | 圆角 |
| shadows.card | box-shadow | 0 4px 12px rgba(0,0,0,0.12) | 卡片阴影 |
| motion.duration | ms | 180 | 动效时长 |
| focus.outline | color | #2F80ED | 焦点颜色 |

阶段 2/3/4 的计划框架与验收要点，见阶段 1 草案之外的附文。
