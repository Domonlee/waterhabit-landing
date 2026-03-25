# Water Habit Landing Page - TODO

## 后续更新任务

### 1. 截图替换
- [ ] 替换 Screenshots 组件中的占位图为真实 APP 截图
- 文件: `src/components/Screenshots.tsx`

### 2. 下载链接
- [ ] 添加真实 App Store 下载链接
- 文件: `src/components/Hero.tsx`, `src/components/CTA.tsx`
- [ ] 添加真实 Google Play 下载链接

### 3. 用户评价
- [ ] 替换 Testimonials 中的占位评价为真实用户评价
- 文件: `src/components/Testimonials.tsx`

### 4. 品牌资产
- [ ] 添加 APP Logo
- [ ] 确认品牌色是否需要调整

### 5. 链接完善
- [ ] 添加隐私政策页面链接
- [ ] 添加服务条款页面链接
- [ ] 确认联系邮箱

### 6. SEO 优化
- [ ] 添加更多 meta 标签
- [ ] 添加 sitemap
- [ ] 添加 robots.txt

### 7. 分析工具
- [ ] 添加 Google Analytics
- [ ] 或添加其他统计工具

---

## 自动部署说明

每次推送到 GitHub master 分支后，Vercel 会自动部署。

```bash
git add .
git commit -m "Update: description"
git push
```

部署地址: https://waterhabit-landing.vercel.app
