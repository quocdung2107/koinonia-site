<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'
import { site } from '../../site'

interface Scene {
  id: string
  kind: 'hero' | 'feature' | 'cta'
  eyebrow?: string
  title: string
  detail?: string
  actions?: { label: string; href: string; primary?: boolean }[]
  visual: 'hero' | 'multi-output' | 'timeline' | 'detach' | 'roles' | 'tree' | 'cta'
  /** Ảnh thật minh hoạ khối (docs/public/home/home_N.png) — có giá trị thì
   *  template ưu tiên render ảnh, KHÔNG còn dùng sơ đồ CSS giả lập nữa.
   *  Khung hiển thị cố định tỉ lệ 3:2 — xem .scene__frame bên dưới. */
  image?: string
  /** Logo hiển thị trong vòng glow của khối Hero (docs/public/home/logoK.png).
   *  Nếu ảnh lỗi/thiếu, tự rơi về icon 📖 cũ — xem heroLogoFailed. */
  logo?: string
}


const scenes: Scene[] = [
  {
    id: 'hero',
    kind: 'hero',
    eyebrow: site.app.name,
    title: 'Tổ chức toàn bộ nội dung trình chiếu của buổi nhóm thành một Project chuyên nghiệp',
    detail:
      'Koinonia giúp bạn chuẩn bị, điều khiển và trình chiếu nội dung Kinh Thánh, bài hát và bài giảng trên nhiều màn hình — đơn giản, rõ ràng và không phụ thuộc Internet.',
    actions: [
      { label: 'Tải xuống', href: site.links.download, primary: true },
      { label: 'Hướng dẫn', href: site.links.docs }
    ],
    visual: 'hero',
    logo: '/home/logoK.png'
  },

  {
    id: 'multi-output',
    kind: 'feature',
    eyebrow: '01 — Nhiều màn hình',
    title: 'Một máy tính, nhiều màn hình — mỗi màn hình hiển thị đúng thứ bạn cần',
    detail:
      'Màn hình chính để điều khiển. Màn hình phía trước để trình chiếu. Màn hình khác có thể hiển thị nội dung riêng. Koinonia giúp bạn quản lý tất cả trong cùng một hệ thống.',
    visual: 'multi-output',
    image: '/home/home_1.png'
  },

  {
    id: 'timeline',
    kind: 'feature',
    eyebrow: '02 — Điều khiển đồng bộ',
    title: 'Bạn chỉ cần bấm một lần — mọi màn hình chuyển theo đúng chương trình',
    detail:
      'Không cần chạy từng màn hình bằng tay. Koinonia giữ một tiến trình trình chiếu thống nhất, đồng thời cho phép mỗi màn hình hiển thị nội dung phù hợp với vai trò của nó.',
    visual: 'timeline',
    image: '/home/home_2.png'
  },

  {
    id: 'detach',
    kind: 'feature',
    eyebrow: '03 — Linh hoạt khi trình chiếu',
    title: 'Màn hình nào cần chạy riêng? Tách nó ra mà không làm gián đoạn chương trình',
    detail:
      'Khi một màn hình cần hiển thị nội dung khác, bạn có thể giao quyền điều khiển riêng cho người phụ trách. Khi cần, chỉ một thao tác là đưa màn hình đó trở lại chương trình chính.',
    visual: 'detach',
    image: '/home/home_3.png'
  },

  {
    id: 'roles',
    kind: 'feature',
    eyebrow: '04 — Làm việc theo vai trò',
    title: 'Mỗi người phụ trách một phần — không ai vô tình điều khiển nhầm màn hình',
    detail:
      'Phân quyền điều khiển theo từng màn hình và từng khu vực nội dung. Người vận hành chỉ nhìn thấy và thay đổi những gì họ được giao.',
    visual: 'roles',
    image: '/home/home_4.png'
  },

  {
    id: 'tree',
    kind: 'feature',
    eyebrow: '05 — Chuẩn bị chương trình',
    title: 'Chương trình dài cũng dễ quản lý — mọi nội dung được sắp xếp thành từng phần',
    detail:
      'Chia bài hát, Kinh Thánh, bài giảng và các nội dung khác thành từng nhóm. Sắp xếp lại dễ dàng, khóa những phần đã chuẩn bị xong và giữ toàn bộ chương trình luôn gọn gàng.',
    visual: 'tree'
  },

  {
    id: 'download',
    kind: 'cta',
    eyebrow: 'Bắt đầu với Koinonia',
    title: `Tải Koinonia Bible ${site.release.version}`,
    detail:
      `Miễn phí · ${site.release.platform} · ${site.release.size}`,
    actions: [
      { label: 'Tải xuống miễn phí', href: site.links.download, primary: true }
    ],
    visual: 'cta'
  }
]


const containerRef = ref<HTMLElement | null>(null)
const sceneRefs = ref<Record<string, HTMLElement | null>>({})
const visibleIds = ref<Set<string>>(new Set())
const activeId = ref(scenes[0].id)

const setSceneRef = (id: string) => (el: unknown) => {
  sceneRefs.value[id] = (el as HTMLElement) ?? null
}

let observer: IntersectionObserver | null = null

function scrollToScene(id: string) {
  sceneRefs.value[id]?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start'
  })
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Ảnh chưa tồn tại (chưa export/đặt sai tên) -> ẩn thẻ <img> lỗi, giữ lại
// khung nền tối rỗng thay vì hiện icon "ảnh vỡ" xấu giữa trang.
function onImageError(event: Event) {
  ;(event.target as HTMLImageElement).style.display = 'none'
}

// Logo ở khối Hero lỗi/thiếu -> rơi về icon 📖 cũ thay vì để trống.
const heroLogoFailed = ref(false)

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).dataset.sceneId
        if (!id) continue
        if (entry.isIntersecting) {
          visibleIds.value.add(id)
          if (entry.intersectionRatio > 0.5) activeId.value = id
        }
      }
      // trigger reactivity for the Set
      visibleIds.value = new Set(visibleIds.value)
    },
    { threshold: [0, 0.5, 0.75] }
  )

  for (const scene of scenes) {
    const el = sceneRefs.value[scene.id]
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div ref="containerRef" class="home-experience">
    <nav class="scene-dots" aria-label="Điều hướng theo phần">
      <button
        v-for="scene in scenes"
        :key="scene.id"
        class="scene-dot"
        :class="{ 'is-active': activeId === scene.id }"
        :aria-label="scene.title"
        @click="scrollToScene(scene.id)"
      />
    </nav>

    <section
      v-for="scene in scenes"
      :key="scene.id"
      :ref="setSceneRef(scene.id)"
      :data-scene-id="scene.id"
      class="scene"
      :class="[`scene--${scene.kind}`, { 'is-visible': visibleIds.has(scene.id) }]"
    >
      <div class="scene__visual">
        <!-- Hero -->
        <div v-if="scene.visual === 'hero'" class="diagram diagram--hero">
          <div class="hero-glow" />
          <img
            v-if="scene.logo && !heroLogoFailed"
            class="hero-logo"
            :src="withBase(scene.logo)"
            :alt="scene.eyebrow ?? 'Koinonia Bible'"
            @error="heroLogoFailed = true"
          />
          <div v-else class="hero-mark">📖</div>
        </div>

        <!-- 01-04: ảnh thật của app (khung cố định tỉ lệ 3:2 — xem
             .scene__frame). Thay sơ đồ CSS giả lập trước đây. -->
        <div v-else-if="scene.image" class="scene__frame">
          <img
            :src="withBase(scene.image)"
            :alt="scene.title"
            loading="lazy"
            @error="onImageError"
          />
        </div>

        <!-- 05: tree -->
        <div v-else-if="scene.visual === 'tree'" class="diagram diagram--tree">
          <div class="tree-row tree-row--group">📁 Thờ phượng mở đầu</div>
          <div class="tree-row tree-row--slide">— Slide 1</div>
          <div class="tree-row tree-row--slide">— Slide 2</div>
          <div class="tree-row tree-row--group">📁 Giảng luận <span class="lock">🔒</span></div>
          <div class="tree-row tree-row--slide">— Slide 1</div>
          <div class="tree-row tree-row--group">📁 Thánh ca kết thúc</div>
          <div class="tree-row tree-row--slide">— Slide 1</div>
        </div>

        <!-- CTA -->
        <div v-else class="diagram diagram--cta">
          <div class="hero-glow" />
          <div class="hero-mark">⬇</div>
        </div>
      </div>

      <div class="scene__text">
        <p v-if="scene.eyebrow" class="eyebrow">{{ scene.eyebrow }}</p>
        <h2 class="scene__title">{{ scene.title }}</h2>
        <p v-if="scene.detail" class="scene__detail">{{ scene.detail }}</p>
        <div v-if="scene.actions" class="scene__actions">
          <a
            v-for="action in scene.actions"
            :key="action.label"
            :href="action.href"
            target="_blank"
            class="scene-btn"
            :class="{ 'scene-btn--primary': action.primary }"
          >
            {{ action.label }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-experience {
  height: 100svh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background: var(--koinonia-bg);
  color: var(--koinonia-text-1);
}

.scene {
  min-height: 100svh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  padding: 72px 24px 48px;
  padding-left: max(24px, env(safe-area-inset-left));
  padding-right: max(24px, env(safe-area-inset-right));
  opacity: 0.4;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scene.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .scene {
    transition: none;
    transform: none;
  }
}

.scene__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
}

.scene__text {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 13px;
  color: var(--koinonia-accent-2);
  margin: 0 0 12px;
  font-weight: 600;
}

.scene__title {
  font-size: clamp(24px, 6vw, 38px);
  line-height: 1.25;
  margin: 0 0 16px;
  color: var(--koinonia-text-1);
}

.scene--hero .scene__title {
  font-size: clamp(30px, 8vw, 52px);
}

.scene__detail {
  font-size: clamp(15px, 3.6vw, 17px);
  line-height: 1.6;
  color: var(--koinonia-text-2);
  margin: 0;
}

.scene__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 28px;
}

.scene-btn {
  padding: 13px 26px;
  border-radius: 12px;
  border: 1px solid var(--koinonia-border);
  color: var(--koinonia-text-1);
  text-decoration: none;
  font-size: 15px;
  transition: transform 0.2s ease, background 0.2s ease;
}

.scene-btn:hover {
  transform: translateY(-2px);
}

.scene-btn--primary {
  background: linear-gradient(120deg, var(--koinonia-accent-1), var(--koinonia-accent-2));
  border-color: transparent;
  color: #04101f;
  font-weight: 600;
}

/* ---- dot navigation ---- */
.scene-dots {
  position: fixed;
  z-index: 20;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scene-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--koinonia-border);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease, transform 0.2s ease;
}

.scene-dot.is-active {
  background: var(--koinonia-accent-2);
  transform: scale(1.4);
}

@media (max-width: 640px) {
  .scene-dots {
    right: 10px;
    gap: 8px;
  }
}

/* ---- shared diagram look (hero / cta / tree — xem block "khung ảnh
   thật" riêng bên dưới cho khối 01-04) ---- */
.diagram {
  width: 100%;
  max-width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

/* ---- khung ảnh thật cho khối 01-04 ----
   Tỉ lệ CỐ ĐỊNH 3:2. Thiết kế/export ảnh đúng bội số của khung hiển thị
   tối đa (600 × 400px) để nét trên màn hình Retina — khuyến nghị xuất
   PNG 1200 × 800px (@2x). object-fit: cover -> ảnh sẽ bị CẮT nếu không
   đúng tỉ lệ 3:2, nên bố cục nội dung quan trọng (chữ, icon...) tránh
   nằm sát mép, giữ trong vùng an toàn ~90% giữa khung. */
.scene__frame {
  width: 100%;
  max-width: 600px;
  aspect-ratio: 3 / 2;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--koinonia-border);
  background: var(--koinonia-surface);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
}

.scene__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* tree */
.diagram--tree {
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  font-size: 13px;
}

.tree-row {
  color: var(--koinonia-text-2);
}

.tree-row--group {
  color: var(--koinonia-text-1);
  font-weight: 600;
  margin-top: 6px;
}

.tree-row--slide {
  padding-left: 22px;
}

.lock {
  font-size: 11px;
  margin-left: 6px;
}

/* hero / cta glow */
.diagram--hero,
.diagram--cta {
  position: relative;
  width: 220px;
  height: 220px;
}

.hero-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(37, 99, 235, 0.35),
    rgba(6, 182, 212, 0.08) 60%,
    transparent 70%
  );
  filter: blur(2px);
}

.hero-mark {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
}

.hero-logo {
  position: relative;
  width: 72%;
  height: 72%;
  object-fit: contain;
  filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.35));
}

/* ---- desktop: side-by-side layout ---- */
@media (min-width: 900px) {
  .scene {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 64px;
    padding: 0 80px;
  }

  .scene__visual {
    flex: 1;
    min-height: unset;
  }

  .scene__text {
    flex: 1;
    text-align: left;
    margin: 0;
  }

  .scene__actions {
    justify-content: flex-start;
  }

  .scene--hero .scene__visual,
  .scene--cta .scene__visual {
    order: 2;
  }
}
</style>
