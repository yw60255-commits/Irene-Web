阶段 1 — 正式交付文档（表格版）

说明
- 本文作为正式的阶段 1 文档，聚焦首页核心区域的基线记录、设计系统微调草案以及对比验收要点。文档以表格形式呈现，便于对比、追溯与实现落地。
- 变更前后对比字段已直接嵌入到每个区域/组件的条目中，便于后续验收与实现对照。

表头说明
- 区域/组件：需要变更的具体区域或组件
- 当前状态：变更前的状态描述
- 目标状态：变更后的目标状态
- 变更要点：本次变更的核心内容与设计要点
- token 来源： Tokens 草案的来源文件或来源字段
- token 应用：在具体组件/样式中的应用范围
- 当前状态/目标状态 对比：将变更前后要点进行文本化对照摘要
- 优先级：P1 高优先级、P2、中、P3低
- 验收方式：验收的方法和要点
- 交付物：本阶段将产出的具体文档/样式片段
- 备注：其他需要说明的事项

表格 1：阶段 1 基线要点与对比（示例）
| 区域/组件 | 当前状态 | 目标状态 | 变更要点 | token 来源 | token 应用 | 当前状态 / 目标状态 对比 | 优先级 | 验收方式 | 交付物 | 备注 |
|---|---|---|---|---|---|---|---|---|---|---|
| Hero/CTA | Hero 文案与 CTA 间距未统一 | Hero/CTA 文案和 CTA 间距已统一，间距 24px | 统一 Hero 文案、CTA 间距，确保视觉层级 | design-tokens-stage1.json | heroCTA.gap、colors、typography | 现状未统一 → 统一后间距与文案 | 高 | 对比图、可访问性检查、演示样例 | phase-1-baseline.md / 风格草案 | 需要确保与品牌风格对齐 |
| Card Grid | Card Grid 的桌面与移动端间距不一致 | 桌面 16px、移动端 12px，统一网格间距 | 统一网格间距，确保对齐 | design-tokens-stage1.json | gridDesktopGap、mobileGap | 不统一 → 统一 | 中 | 布局对比、网格对齐演示 | Tokens 与实现样例 |
| 导航/页头 | 导航项高度和间距未严格统一 | 导航项高度 36–40px，项间距 8px，header 内边距 12px/16px | 标尺化导航尺寸与间距 | design-tokens-stage1.json | nav.itemHeight、spacing、colors | 不统一 → 统一 | 高 | 可访问性测试、可用性演示 | Tokens 与实现样例 |
| 卡片网格 | 桌面/移动端间距不一致 | 桌面 gap 16px，移动端 gap 12px | 统一网格间距，确保对齐 | design-tokens-stage1.json | cardGrid.desktopGap、cardGrid.mobileGap | 不统一 → 统一 | 中/高 | 布局对比图、样式对比 | 组件样例 |
| 表单控件 | 字段间距、标签与输入间距不一致 | 字段间距 16px，label–input 8px，错误信息 6–8px | 提升表单一致性和可读性 | design-tokens-stage1.json | form.fieldGap、form.labelToInput、form.errorToField | 不一致 → 统一 | 高 | 表单可访问性检查、错误提示可见性测试 | 表单样式草案 |
| 全局焦点 | 焦点样式不统一 | 统一焦点轮廓 2px，accent 颜色 | 对焦点统一化以提升可访问性与美观 | design-tokens-stage1.json | focus.outline | 不统一 → 统一 | 高 | 焦点可见性测试 | 焦点样式规范 |
| ARIA 要点 | icon-only 按钮缺少 aria-label | icon-only 按钮需 aria-label；错误信息 aria-describedby | ARIA 规范全面覆盖 | design-tokens-stage1.json | aria.iconButtonHasAriaLabel、aria.errorDescribe | 未完全覆盖 → 全部覆盖 | 高 | ARIA 检查清单 | ARIA 使用规范 |
| 品牌要素 | 现阶段素材不足，统一风格需要素材 | 待补充 Logo/图标素材 | 品牌统一性提升 | design-tokens-stage1.json | 品牌相关 | 不足 → 补充素材 | 中 | 风格对齐演示、素材清单 |

表格 2：Tokens 草案（示例字段）
| Token | 分类 | 当前状态/示例 | 说明 |
|---|---|---|---|
| colors.primary | color | #243B53 | 主色，贯穿全站 |
| colors.neutral | color | #E9EDF2 | 辅助背景色 |
| colors.accent | color | #2F80ED | 强调色 |
| typography.baseFontSize | size | 16px | 基线字号 |
| typography.heading | size | 20px / 28px / 34px | 标题尺寸 |
| spacing.base | px | 8px | 行/间距基线 |
| radii | px | 4 / 6 / 8 | 圆角 |
| shadows.card | box-shadow | 0 4px 12px rgba(0,0,0,0.12) | 卡片阴影 |
| motion.duration | ms | 180 | 动效时长 |
| focus.outline | color | #2F80ED | 焦点颜色 |

当前状态 / 目标状态 与 token 来源在上文区域条目中已标注，验收方式在各条目中定义。

阶段 1 输出物
- phase-1-baseline.md（基线清单与执行草案）
- design-tokens-stage1.json（Tokens 草案）
- stage1-delivery-table.md（正式交付文档）
