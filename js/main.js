/**
 * 末日后我成了守墓人 — 废土风小说网站
 * 最小化脚本：导航高亮 + 平滑滚动 + 褪入动画
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 当前页导航高亮 ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // --- 页面进入淡入 ---
  document.querySelector('.site-wrapper')?.classList.add('fade-in');

  // --- 章节页：为将来加载章节内容预留 ---
  // 后续可通过 fetch 加载 chapters/ 下的 HTML 片段

  // --- 平滑滚动（用于锚点） ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- 动态视差效果（可选：废土颗粒感随鼠标微移） ---
  // 仅在桌面端启用
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 4;
      const y = (e.clientY / window.innerHeight - 0.5) * 4;
      document.querySelectorAll('.dust-particle').forEach((p, i) => {
        const speed = 0.3 + (i % 3) * 0.2;
        p.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    }, { passive: true });
  }

});
