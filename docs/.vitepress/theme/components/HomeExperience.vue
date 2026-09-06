<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { site } from '../../site'

interface Scene {
  id: string
  kind: 'hero' | 'feature' | 'cta'
  eyebrow?: string
  title: string
  detail?: string
  actions?: { label: string; href: string; primary?: boolean }[]
  visual: 'hero' | 'multi-output' | 'timeline' | 'detach' | 'roles' | 'tree' | 'cta'
}

const scenes: Scene[] = [
  {
    id: 'hero',
    kind: 'hero',
    eyebrow: site.app.name,
    title: site.app.slogan,
    detail:
      'Phần mềm miễn phí, hoạt động ngoại tuyến, hỗ trợ nhiều bản dịch — thiết kế cho cá nhân, nhóm học Kinh Thánh và Hội Thánh.',
    actions: [
      { label: 'Tải xuống', href: site.links.download, primary: true },
      { label: 'Hướng dẫn', href: site.links.docs }
    ],
    visual: 'hero'
  },
  {
    id: 'multi-output',
    kind: 'feature',
    eyebrow: '01 — Đa màn hình',
    title: 'Một buổi lễ, nhiều màn hình — không còn ai phải hét gọi nhau chỉnh slide',
    detail:
      'Kiến trúc đa cửa sổ tách biệt Control – Output – Presentation, đồng bộ qua kênh nội bộ, mỗi thiết bị lo đúng một phần việc.',
    visual: 'multi-output'
  },
  {
    id: 'timeline',
    kind: 'feature',
    eyebrow: '02 — Một dòng thời gian',
    title: 'Nhấn một nút, mọi màn hình cùng chuyển — nhưng mỗi nơi hiển thị đúng kiểu của nó',
    detail:
      'Một Playlist Master duy nhất điều khiển tiến trình; mỗi Output còn lại tự resolve nội dung theo luật định tuyến riêng, không cần đồng bộ tay.',
    visual: 'timeline'
  },
  {
    id: 'detach',
    kind: 'feature',
    eyebrow: '03 — Tách màn hình',
    title: 'Cần một màn hình đi khác nhịp? Tách ra và giao cho người khác điều khiển',
    detail:
      'Bất kỳ Output nào ngoài Master đều có thể chuyển sang Ghi đè thủ công, điều khiển độc lập bởi một vai trò từ xa chỉ có quyền trên đúng Output đó — xong việc thì đưa nó theo Master trở lại chỉ bằng một nút.',
    visual: 'detach'
  },
  {
    id: 'roles',
    kind: 'feature',
    eyebrow: '04 — Phân quyền',
    title: 'Ai được chỉnh gì, giới hạn ở đâu — đặt một lần, dùng lại mọi buổi lễ',
    detail:
      'Vai trò từ xa gắn theo phạm vi (Master hoặc một Output cụ thể), giới hạn hành động cho phép và có thể khoanh vùng theo từng Nhóm.',
    visual: 'roles'
  },
  {
    id: 'tree',
    kind: 'feature',
    eyebrow: '05 — Cấu trúc rõ ràng',
    title: 'Danh sách dài cũng không rối — nhóm slide theo từng phần, khoá lại phần đã xong',
    detail:
      'Slide tổ chức theo cây Nhóm lồng nhau, kéo-thả sắp xếp, khoá/ẩn từng nhóm khi trình chiếu — một mạch điều khiển duy nhất cho toàn bộ deck dù cấu trúc bên dưới phức tạp.',
    visual: 'tree'
  },
  {
    id: 'download',
    kind: 'cta',
    eyebrow: 'Sẵn sàng dùng thử?',
    title: `Tải Koinonia Bible ${site.release.version}`,
    detail: `${site.release.platform} · ${site.release.size}`,
    actions: [{ label: 'Tải xuống miễn phí', href: site.links.download, primary: true }],
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
          <div class="hero-mark">📖</div>
        </div>

        <!-- 01: multi-output -->
        <div v-else-if="scene.visual === 'multi-output'" class="diagram diagram--multi">
          <div class="node node--control">Control</div>
          <div class="link-set">
            <span class="link" />
            <span class="link" />
            <span class="link" />
          </div>
          <div class="node-col">
            <div class="node node--output">Output 1</div>
            <div class="node node--output">Output 2</div>
            <div class="node node--output">Output 3</div>
          </div>
        </div>

        <!-- 02: timeline -->
        <div v-else-if="scene.visual === 'timeline'" class="diagram diagram--timeline">
          <div class="timeline-track">
            <span class="timeline-dot" />
          </div>
          <div class="timeline-outputs">
            <div class="mini-screen mini-screen--a">A</div>
            <div class="mini-screen mini-screen--b">B</div>
            <div class="mini-screen mini-screen--c">C</div>
          </div>
        </div>

        <!-- 03: detach -->
        <div v-else-if="scene.visual === 'detach'" class="diagram diagram--detach">
          <div class="node node--control">Control</div>
          <div class="node-col">
            <div class="node node--output">Output 1</div>
            <div class="node node--output">Output 2</div>
          </div>
          <div class="detached">
            <span class="detach-line" />
            <div class="node node--output node--detached">Output 3</div>
            <div class="node node--control node--secondary">Control #2</div>
          </div>
        </div>

        <!-- 04: roles -->
        <div v-else-if="scene.visual === 'roles'" class="diagram diagram--roles">
          <div class="role-card">
            <span class="role-name">Master</span>
            <span class="role-tag">navigate</span>
            <span class="role-tag">jump</span>
          </div>
          <div class="role-card">
            <span class="role-name">Output 2</span>
            <span class="role-tag">navigate</span>
            <span class="role-tag">setBlank</span>
          </div>
          <div class="role-card">
            <span class="role-name">Nhóm "Thánh Ca"</span>
            <span class="role-tag">navigate</span>
          </div>
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

/* ---- shared diagram look ---- */
.diagram {
  width: 100%;
  max-width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.node {
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid var(--koinonia-border);
  background: var(--koinonia-surface);
  font-size: 13px;
  white-space: nowrap;
}

.node--control {
  color: var(--koinonia-accent-2);
  border-color: var(--koinonia-accent-2);
}

.node-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link-set {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 44px;
}

.link {
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    var(--koinonia-accent-2) 0 6px,
    transparent 6px 12px
  );
  animation: dash-move 1.4s linear infinite;
}

@keyframes dash-move {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 24px 0;
  }
}

/* timeline */
.diagram--timeline {
  flex-direction: column;
  gap: 28px;
}

.timeline-track {
  position: relative;
  width: 260px;
  height: 2px;
  background: var(--koinonia-border);
}

.timeline-dot {
  position: absolute;
  top: 50%;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--koinonia-accent-2);
  transform: translateY(-50%);
  animation: timeline-move 3s ease-in-out infinite;
}

@keyframes timeline-move {
  0%, 100% {
    left: 0;
  }
  50% {
    left: calc(100% - 10px);
  }
}

.timeline-outputs {
  display: flex;
  gap: 14px;
}

.mini-screen {
  width: 64px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border: 1px solid var(--koinonia-border);
  background: var(--koinonia-surface);
}

.mini-screen--a {
  border-color: var(--koinonia-accent-1);
}
.mini-screen--b {
  border-color: var(--koinonia-accent-2);
}
.mini-screen--c {
  border-color: #a855f7;
}

/* detach */
.diagram--detach {
  align-items: flex-start;
  gap: 22px;
}

.detached {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.9;
}

.detach-line {
  width: 1px;
  height: 18px;
  background: repeating-linear-gradient(
    180deg,
    var(--koinonia-border) 0 5px,
    transparent 5px 10px
  );
}

.node--detached {
  border-style: dashed;
}

.node--secondary {
  font-size: 12px;
  opacity: 0.85;
}

/* roles */
.diagram--roles {
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
}

.role-card {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--koinonia-border);
  background: var(--koinonia-surface);
}

.role-name {
  font-weight: 600;
  font-size: 13px;
  color: var(--koinonia-text-1);
  margin-right: 4px;
}

.role-tag {
  font-size: 11px;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.18);
  color: var(--koinonia-accent-2);
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
