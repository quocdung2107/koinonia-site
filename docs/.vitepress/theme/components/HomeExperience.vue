<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'
import { site } from '../../site'

/**
 * Trang chủ v2 — "Bản đồ tín hiệu".
 *
 * Thay hoàn toàn cách tiếp cận scroll-snap "từng khối rời rạc" trước đây
 * bằng MỘT canvas liên tục: các đường tín hiệu góc cạnh (SVG, vẽ theo vị
 * trí DOM thật) chạy xuyên suốt từ đầu đến cuối trang, tách nhánh rồi hội
 * tụ lại theo đúng ý nghĩa sản phẩm — mỗi đường màu = một đường tín hiệu
 * output (TV / máy chiếu / màn hình phụ / điện thoại điều khiển / màn
 * hình ban nhạc). Không dùng ảnh nền, không đường cong, không glow.
 *
 * Nội dung bên trong từng "screen" (các thanh placeholder) là khung chờ —
 * gán `image` cho từng ScreenSpec khi có ảnh chụp thật của app, khung
 * (kích thước, tỉ lệ, viền, vị trí, đường tín hiệu nối tới) giữ nguyên.
 */

type ScreenType = 'tv' | 'monitor' | 'phone' | 'projector' | 'band'
type ColorKey = 'create' | 'control' | 'tv' | 'projector' | 'band'

interface ScreenBar {
  width: string
  opacity?: number
}

interface ScreenSpec {
  key: string
  type: ScreenType
  color: ColorKey
  style: string
  label?: string
  bars: ScreenBar[]
  /** Ảnh chụp thật của app (docs/public/home/...) — thêm sau khi có. Khi
   *  có giá trị, ảnh thay cho các thanh placeholder, khung giữ nguyên. */
  image?: string
}

interface Beat {
  id: string
  kind: 'open' | 'content' | 'centered' | 'end'
  sectionStyle?: string
  stageStyle?: string
  tag?: string
  kwLines?: string[]
  kwHeadingStyle?: string
  kwStyle?: string
  vi?: string
  screens?: ScreenSpec[]
}

const beats: Beat[] = [
  {
    id: 'open',
    kind: 'open',
    vi: 'Ứng dụng trình chiếu dành cho Hội Thánh.'
  },

  {
    id: 'create',
    kind: 'content',
    kwStyle: 'left:6%; top:20%; --kw-color: var(--c-create);',
    tag: '01 · CREATE',
    kwLines: ['Create'],
    vi: 'Tạo bài giảng, bài hát và Kinh Thánh thành một Project chuyên nghiệp — không cần kỹ năng thiết kế.',
    screens: [
      {
        key: 'create-editor',
        type: 'monitor',
        color: 'create',
        style: 'left:calc(42% - 95px); top:52%;',
        label: 'EDITOR',
        bars: [
          { width: '62%', opacity: 0.8 },
          { width: '88%' },
          { width: '40%', opacity: 0.4 }
        ]
      }
    ]
  },

  {
    id: 'control',
    kind: 'content',
    sectionStyle: 'min-height: 58vh;',
    kwStyle: 'left:6%; top:52%; max-width:380px; --kw-color: var(--c-control);',
    tag: '02 · CONTROL',
    kwLines: ['Control'],
    vi: 'Điều khiển buổi trình chiếu từ bất kỳ đâu trong hội thánh — chỉ một thao tác, mọi màn hình đồng bộ.',
    screens: [
      {
        key: 'control-remote',
        type: 'phone',
        color: 'control',
        style: 'left:calc(72% - 39px); top:2%;',
        label: 'REMOTE',
        bars: [{ width: '70%' }, { width: '50%', opacity: 0.5 }]
      }
    ]
  },

  {
    id: 'outputs',
    kind: 'content',
    sectionStyle: 'min-height: 88vh;',
    stageStyle: 'min-height: 74vh;',
    kwStyle: 'left:6%; top:4%; max-width:440px;',
    kwHeadingStyle: 'font-size:clamp(2.2rem,5.4vw,4.2rem);',
    tag: '03 · OUTPUTS',
    kwLines: ['One signal.', 'Many screens.'],
    vi: 'Một máy tính, nhiều màn hình — mỗi màn hình hiển thị đúng thứ bạn cần.',
    screens: [
      {
        key: 'outputs-band',
        type: 'band',
        color: 'band',
        style: 'left:calc(94% - 78px); top:6%;',
        label: 'BAND MONITOR',
        bars: [{ width: '75%' }]
      },
      {
        key: 'outputs-phone',
        type: 'phone',
        color: 'control',
        style: 'left:calc(72% - 39px); top:20%;',
        label: 'PHONE',
        bars: [{ width: '65%' }]
      },
      {
        key: 'outputs-monitor',
        type: 'monitor',
        color: 'create',
        style: 'left:calc(50% - 76px); top:56%;',
        label: 'SIDE SCREEN',
        bars: [{ width: '60%' }, { width: '85%', opacity: 0.6 }]
      },
      {
        key: 'outputs-tv',
        type: 'tv',
        color: 'tv',
        style: 'left:calc(6% - 60px); top:60%;',
        label: 'TV',
        bars: [{ width: '80%' }, { width: '55%', opacity: 0.5 }]
      },
      {
        key: 'outputs-projector',
        type: 'projector',
        color: 'projector',
        style: 'left:calc(28% - 44px); top:78%;',
        label: 'PROJECTOR',
        bars: [{ width: '70%' }]
      }
    ]
  },

  {
    id: 'present',
    kind: 'content',
    sectionStyle: 'min-height: 60vh;',
    stageStyle: 'min-height: 46vh;',
    kwStyle: 'left:38%; top:4%; --kw-color: var(--c-tv);',
    tag: '04 · PRESENT',
    kwLines: ['Present'],
    vi: 'Bạn chỉ cần bấm một lần — mọi màn hình chuyển theo đúng chương trình, mỗi nơi một nội dung riêng.',
    screens: [
      {
        key: 'present-tv',
        type: 'tv',
        color: 'tv',
        style: 'left:calc(6% - 60px); top:56%;',
        bars: [{ width: '90%' }, { width: '40%', opacity: 0.5 }]
      },
      {
        key: 'present-band',
        type: 'band',
        color: 'band',
        style: 'left:calc(94% - 78px); top:60%;',
        bars: [{ width: '50%' }]
      }
    ]
  },

  {
    id: 'community',
    kind: 'centered',
    tag: '05 · COMMUNITY',
    kwLines: ['Built for', 'the church'],
    vi: 'Được thiết kế riêng cho các Hội Thánh và cộng đoàn Cơ Đốc Việt Nam.'
  },

  {
    id: 'end',
    kind: 'end',
    vi: `Miễn phí · ${site.release.platform} · ${site.release.size}`
  }
]

const containerRef = ref<HTMLElement | null>(null)
const diagramRef = ref<HTMLElement | null>(null)
const svgRef = ref<SVGSVGElement | null>(null)
const beatRefs = ref<HTMLElement[]>([])

function setBeatRef(i: number, el: Element | null) {
  if (el) beatRefs.value[i] = el as HTMLElement
}

const logoFailed = ref(false)

// Ảnh screen chưa tồn tại (chưa gán/đặt sai tên) -> ẩn thẻ <img> lỗi, giữ
// khung nền tối rỗng (giống cách xử lý ảnh scene cũ) thay vì icon vỡ.
function onScreenImageError(event: Event) {
  ;(event.target as HTMLImageElement).style.display = 'none'
}

let cleanupFns: Array<() => void> = []

onMounted(() => {
  const svg = svgRef.value
  const diagram = diagramRef.value
  const container = containerRef.value
  if (!svg || !diagram || !container) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function beatTop(i: number) {
    const r = beatRefs.value[i].getBoundingClientRect()
    return r.top + window.scrollY
  }
  function beatBottom(i: number) {
    const r = beatRefs.value[i].getBoundingClientRect()
    return r.top + window.scrollY + r.height
  }
  function beatMid(i: number) {
    return (beatTop(i) + beatBottom(i)) / 2
  }
  function laneX(frac: number) {
    const r = diagram!.getBoundingClientRect()
    return r.left + window.scrollX + frac * r.width
  }
  function elbow(x1: number, y1: number, x2: number, y2: number, ratio?: number) {
    if (Math.abs(x1 - x2) < 0.5) return `M ${x1} ${y1} L ${x2} ${y2}`
    const ym = y1 + (y2 - y1) * (ratio == null ? 0.5 : ratio)
    return `M ${x1} ${y1} L ${x1} ${ym} L ${x2} ${ym} L ${x2} ${y2}`
  }

  type Pt = [number, number, number]
  interface Route {
    color: string
    width?: number
    pts: Pt[]
    _el?: SVGPathElement
    _len?: number
    _yStart?: number
    _yEnd?: number
  }
  let routes: Route[] = []

  function buildRoutes() {
    routes = []
    const narrow = window.innerWidth <= 780

    if (narrow) {
      // trục dọc đơn giản cho màn hình nhỏ: ít lane hơn, vẫn tách/hợp
      const cx = 0.5, lx = 0.28, rx = 0.72
      routes.push({ color: 'var(--trunk)', pts: [[0, cx, beatTop(0)], [0, cx, beatMid(0)], [1, cx, beatBottom(1)]] })
      routes.push({ color: 'var(--trunk)', pts: [[1, cx, beatBottom(1)], [2, cx, beatTop(2)]] })
      routes.push({ color: 'var(--c-control)', pts: [[2, cx, beatTop(2)], [2, rx, beatBottom(2)], [3, rx, beatTop(3) + 40]] })
      routes.push({ color: 'var(--c-create)', pts: [[2, cx, beatTop(2)], [2, lx, beatBottom(2)], [3, lx, beatTop(3) + 40]] })
      routes.push({ color: 'var(--trunk)', pts: [[3, lx, beatBottom(3)], [4, cx, beatTop(4)]] })
      routes.push({ color: 'var(--trunk)', pts: [[3, rx, beatBottom(3)], [4, cx, beatTop(4) + 30]] })
      routes.push({ color: 'var(--trunk)', pts: [[4, cx, beatTop(4)], [6, cx, beatMid(6)]] })
      return
    }

    // ---- sơ đồ lane desktop ----
    const A = 0.42, B = 0.58 // hai lane trung tính mở đầu
    const TV = 0.06, PROJ = 0.28, MON = 0.5, PHONE = 0.72, BAND = 0.94

    // trục trung tính: open -> create -> control
    routes.push({ color: 'var(--trunk)', width: 1.6, pts: [[0, A, beatMid(0)], [1, A, beatTop(1)], [1, A, beatBottom(1)], [2, A, beatTop(2)]] })
    routes.push({ color: 'var(--trunk)', width: 1.6, pts: [[0, B, beatMid(0)], [1, B, beatTop(1)], [1, B, beatBottom(1)], [2, B, beatTop(2)]] })

    // control: B tách thành PHONE + BAND (có màu)
    routes.push({ color: 'var(--c-control)', pts: [[2, B, beatTop(2)], [2, PHONE, beatMid(2)], [3, PHONE, beatTop(3) + 60], [4, PHONE, beatBottom(4) - 40]] })
    routes.push({ color: 'var(--c-band)', pts: [[2, B, beatTop(2)], [2, BAND, beatMid(2)], [3, BAND, beatTop(3) + 60], [4, BAND, beatBottom(4) - 40]] })

    // A tiếp tục trung tính qua control -> outputs, tại đó tách TV / PROJ / MON
    routes.push({ color: 'var(--trunk)', width: 1.6, pts: [[2, A, beatTop(2)], [3, A, beatTop(3)]] })
    routes.push({ color: 'var(--c-tv)', pts: [[3, A, beatTop(3)], [3, TV, beatTop(3) + 60], [4, TV, beatBottom(4) - 40]] })
    routes.push({ color: 'var(--c-projector)', pts: [[3, A, beatTop(3)], [3, PROJ, beatTop(3) + 60], [4, PROJ, beatBottom(4) - 60]] })
    routes.push({ color: 'var(--c-create)', pts: [[3, A, beatTop(3)], [3, MON, beatTop(3) + 60], [4, MON, beatBottom(4) - 60]] })

    // community: năm nhánh hội tụ về hai, rồi về một ở cuối
    routes.push({ color: 'var(--trunk)', width: 1.6, pts: [[4, TV, beatBottom(4)], [5, 0.34, beatMid(5)]] })
    routes.push({ color: 'var(--trunk)', width: 1.6, pts: [[4, PROJ, beatBottom(4)], [5, 0.34, beatMid(5)]] })
    routes.push({ color: 'var(--trunk)', width: 1.6, pts: [[4, MON, beatBottom(4)], [5, 0.34, beatMid(5)]] })
    routes.push({ color: 'var(--trunk)', width: 1.6, pts: [[4, PHONE, beatBottom(4)], [5, 0.66, beatMid(5)]] })
    routes.push({ color: 'var(--trunk)', width: 1.6, pts: [[4, BAND, beatBottom(4)], [5, 0.66, beatMid(5)]] })
    routes.push({ color: 'var(--trunk)', width: 1.8, pts: [[5, 0.34, beatMid(5)], [6, 0.5, beatMid(6)]] })
    routes.push({ color: 'var(--trunk)', width: 1.8, pts: [[5, 0.66, beatMid(5)], [6, 0.5, beatMid(6)]] })
  }

  function pathFromPts(pts: Pt[]) {
    let d = ''
    for (let i = 0; i < pts.length - 1; i++) {
      const p1 = pts[i]
      const p2 = pts[i + 1]
      const x1 = laneX(p1[1])
      const y1 = p1[2]
      const x2 = laneX(p2[1])
      const y2 = p2[2]
      const seg = elbow(x1, y1, x2, y2)
      d += (i === 0 ? '' : ' ') + (i === 0 ? seg : seg.replace(/^M [^L]+/, `L ${x1} ${y1} `))
    }
    return d
  }

  function render() {
    if (!svg || !diagram) return
    buildRoutes()
    // Chiều cao SVG phải khớp đúng phần nội dung của component (từ đỉnh
    // beat đầu tới đáy beat cuối), KHÔNG dùng document.body.scrollHeight —
    // body còn chứa nav phía trên và footer chung của site phía dưới, nên
    // svg sẽ cao hơn chính .signal-map, tràn ra ngoài rồi sinh thêm một
    // thanh cuộn phụ (overflow-y auto trên .signal-map) bên cạnh thanh
    // cuộn chính của trang.
    const diagramRect = diagram.getBoundingClientRect()
    const svgHeight = diagramRect.bottom + window.scrollY
    svg.setAttribute('height', String(svgHeight))
    svg.innerHTML = ''

    routes.forEach((route, idx) => {
      const d = pathFromPts(route.pts)
      const el = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      el.setAttribute('d', d)
      el.setAttribute('stroke', route.color)
      el.setAttribute('stroke-width', String(route.width || 2.4))
      el.setAttribute('fill', 'none')
      el.setAttribute('stroke-linecap', 'butt')
      el.setAttribute('stroke-linejoin', 'miter')
      el.dataset.idx = String(idx)
      svg.appendChild(el)
    })

    if (!reduceMotion) {
      routes.forEach((route, idx) => {
        const el = svg!.querySelector<SVGPathElement>(`path[data-idx="${idx}"]`)
        if (!el) return
        const len = el.getTotalLength()
        el.style.strokeDasharray = String(len)
        el.style.strokeDashoffset = String(len)
        route._el = el
        route._len = len
        const ys = route.pts.map((p) => p[2])
        route._yStart = Math.min(...ys)
        route._yEnd = Math.max(...ys)
      })
      updateDraw()
    }
  }

  function updateDraw() {
    const viewMid = window.scrollY + window.innerHeight * 0.72
    routes.forEach((route) => {
      if (!route._el || route._yStart === undefined || route._yEnd === undefined || route._len === undefined) return
      const span = route._yEnd - route._yStart || 1
      let progress = (viewMid - route._yStart) / span
      progress = Math.max(0, Math.min(1, progress))
      route._el.style.strokeDashoffset = String(route._len * (1 - progress))
    })
  }

  let ticking = false
  function onScroll() {
    if (reduceMotion || ticking) return
    ticking = true
    requestAnimationFrame(() => {
      updateDraw()
      ticking = false
    })
  }

  let resizeTimer: ReturnType<typeof setTimeout>
  function onResize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(render, 150)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)

  const initialTimer = setTimeout(render, 80)
  let cancelled = false
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (!cancelled) render()
    })
  }
  // component được mount client-side (route home) sau khi sự kiện 'load'
  // của trang đã qua từ lâu -> chủ động vẽ lại 2 khung hình sau khi layout
  // ổn định, thay vì chờ 'load'.
  requestAnimationFrame(() => requestAnimationFrame(() => { if (!cancelled) render() }))

  let screenObserver: IntersectionObserver | null = null
  const screenEls = container.querySelectorAll('.screen')
  if ('IntersectionObserver' in window) {
    screenObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.25 }
    )
    screenEls.forEach((s) => screenObserver!.observe(s))
  } else {
    screenEls.forEach((s) => s.classList.add('is-visible'))
  }

  cleanupFns.push(() => {
    cancelled = true
    clearTimeout(initialTimer)
    clearTimeout(resizeTimer)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)
    screenObserver?.disconnect()
  })
})

onBeforeUnmount(() => {
  cleanupFns.forEach((fn) => fn())
  cleanupFns = []
})
</script>

<template>
  <div ref="containerRef" class="signal-map">
    <svg ref="svgRef" id="routeSvg"></svg>

    <main ref="diagramRef" id="diagram">
      <section
        v-for="(beat, i) in beats"
        :key="beat.id"
        :ref="(el) => setBeatRef(i, el as Element | null)"
        class="beat"
        :class="{ 'beat--open': beat.kind === 'open', 'beat--end': beat.kind === 'end' }"
        :style="beat.sectionStyle"
      >
        <div
          class="stage"
          :class="{ 'stage--centered': beat.kind === 'centered' }"
          :style="beat.stageStyle"
        >
          <template v-if="beat.kind === 'open' || beat.kind === 'end'">
            <img
              v-if="!logoFailed"
              class="logo-mark logo-mark--img"
              :src="withBase('/home/logoK.png')"
              alt="Koinonia"
              @error="logoFailed = true"
            />
            <div v-else class="logo-mark" />

            <h1 v-if="beat.kind === 'open'" class="wordmark">Koinonia</h1>
            <h2 v-else class="wordmark wordmark--sm">Download Koinonia</h2>

            <p v-if="beat.kind === 'open'" class="tagline-en">Create. Present. Connect.</p>
            <p class="tagline-vi">{{ beat.vi }}</p>

            <div v-if="beat.kind === 'end'" class="actions">
              <a class="btn btn--primary" :href="site.links.download" target="_blank" rel="noopener">Tải xuống</a>
              <a class="btn btn--ghost" :href="withBase(site.links.docs)">Hướng dẫn</a>
            </div>
          </template>

          <template v-else-if="beat.kind === 'centered'">
            <div class="keyword-block keyword-block--static">
              <span class="tag">{{ beat.tag }}</span>
              <h2 class="kw">
                <span v-for="(line, li) in beat.kwLines" :key="li" class="kw-line">{{ line }}</span>
              </h2>
              <p class="vi">{{ beat.vi }}</p>
            </div>
          </template>

          <template v-else>
            <div class="keyword-block" :style="beat.kwStyle">
              <span class="tag">{{ beat.tag }}</span>
              <h2 class="kw" :style="beat.kwHeadingStyle">
                <span v-for="(line, li) in beat.kwLines" :key="li" class="kw-line">{{ line }}</span>
              </h2>
              <p class="vi">{{ beat.vi }}</p>
            </div>

            <div
              v-for="s in beat.screens"
              :key="s.key"
              class="screen"
              :class="'screen--' + s.type"
              :style="s.style"
            >
              <div class="screen__inner">
                <img
                  v-if="s.image"
                  :src="withBase(s.image)"
                  :alt="s.label || beat.tag"
                  loading="lazy"
                  @error="onScreenImageError"
                />
                <template v-else>
                  <div
                    v-for="(bar, bi) in s.bars"
                    :key="bi"
                    class="screen__bar"
                    :style="{ width: bar.width, opacity: bar.opacity ?? 1, '--sc-color': 'var(--c-' + s.color + ')' }"
                  ></div>
                </template>
              </div>
              <span
                v-if="s.label"
                class="screen__label"
                :style="{ '--sc-color': 'var(--c-' + s.color + ')' }"
              >{{ s.label }}</span>
            </div>
          </template>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.signal-map {
  --bg: #0c0c0d;
  --surface: #171512;
  --text-1: #f4f1ea;
  --text-2: #8a8579;
  --text-3: #56534c;
  --line: #262420;
  --trunk: #55524a;

  --c-create: #c1622f;
  --c-control: #6f7c62;
  --c-tv: #cf9b3f;
  --c-projector: #7c8a99;
  --c-band: #9a7089;

  position: relative;
  background: var(--bg);
  color: var(--text-1);
  font-family: 'Be Vietnam Pro', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* Chỉ chặn cuộn ngang (vài đường tín hiệu/screen sát mép có thể tràn
     nhẹ ra ngoài ở màn hình hẹp) — overflow-y phải khai báo rõ "visible",
     nếu không trình duyệt tự suy ra overflow-y: auto (theo spec, khi chỉ
     một trục overflow khác "visible" thì trục còn lại cũng bị ép khỏi
     "visible"), biến chính khối này thành một vùng cuộn riêng, sinh thêm
     thanh cuộn phụ bên cạnh thanh cuộn chính của trang. */
  overflow-x: hidden;
  overflow-y: visible;
}

.signal-map ::selection {
  background: var(--c-create);
  color: #100b08;
}

#routeSvg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: visible;
}

#diagram {
  position: relative;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 56px);
}

.stage {
  position: relative;
  z-index: 1;
  min-height: 46vh;
  padding: clamp(3rem, 8vh, 6rem) 0;
}

.beat--open .stage {
  min-height: 64vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: clamp(4rem, 12vh, 7rem);
}

.beat--end .stage {
  min-height: 58vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.stage--centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.keyword-block {
  position: absolute;
  max-width: 420px;
}

.keyword-block--static {
  position: static;
}

.keyword-block--static .vi {
  margin: 0 auto;
}

.keyword-block .tag {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  color: var(--kw-color, var(--text-2));
  margin-bottom: 10px;
}

.keyword-block h2.kw {
  font-family: 'Big Shoulders Display', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 0.86;
  letter-spacing: 0.01em;
  font-size: clamp(2.6rem, 6.4vw, 5.2rem);
  margin: 0 0 0.5rem;
  color: var(--text-1);
}

.kw-line {
  display: block;
}

.keyword-block p.vi {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-2);
  max-width: 34ch;
  margin: 0;
}

.screen {
  position: absolute;
  background: var(--surface);
  border: 1.5px solid var(--line);
  opacity: 0;
  transform: translateY(18px) scale(0.97);
  transition: opacity 0.75s cubic-bezier(0.2, 0.7, 0.3, 1), transform 0.75s cubic-bezier(0.2, 0.7, 0.3, 1);
}

.screen.is-visible {
  opacity: 1;
  transform: none;
}

.screen__inner {
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 14%;
}

.screen__inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}

.screen__bar {
  height: 7%;
  background: var(--sc-color, var(--text-2));
  opacity: 0.55;
  border-radius: 1px;
}

.screen__label {
  position: absolute;
  left: 0;
  bottom: -22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  color: var(--sc-color, var(--text-2));
}

.screen--tv {
  width: min(230px, 30vw);
  aspect-ratio: 16 / 9;
  border-width: 7px;
}

.screen--projector {
  width: min(150px, 22vw);
  aspect-ratio: 4 / 3;
  border-radius: 3px 3px 14px 14px;
}

.screen--monitor {
  width: min(190px, 26vw);
  aspect-ratio: 16 / 10;
}

.screen--monitor::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -22px;
  width: 5px;
  height: 22px;
  background: var(--line);
  transform: translateX(-50%);
}

.screen--phone {
  width: 78px;
  aspect-ratio: 9 / 18.5;
  border-radius: 12px;
  border-width: 5px;
}

.screen--band {
  width: min(150px, 22vw);
  aspect-ratio: 5 / 2;
  border-radius: 2px;
}

.wordmark {
  font-family: 'Big Shoulders Display', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  letter-spacing: 0.02em;
  margin: 0;
}

.wordmark--sm {
  font-size: clamp(2rem, 5.6vw, 3.6rem);
}

.logo-mark {
  width: 34px;
  height: 34px;
  background: var(--text-1);
  clip-path: polygon(0 0, 68% 0, 100% 32%, 100% 100%, 32% 100%, 0 68%);
  margin-bottom: 22px;
}

.logo-mark--img {
  object-fit: contain;
  background: none;
  clip-path: none;
}

.tagline-en {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  color: var(--text-2);
  margin: 14px 0 4px;
  text-transform: uppercase;
}

.tagline-vi {
  font-size: 1rem;
  color: var(--text-2);
  margin: 0;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border: 1px solid var(--line);
  color: var(--text-1);
  transition: border-color 0.2s ease, background 0.2s ease;
}

.btn--primary {
  background: var(--text-1);
  color: #100b08;
  border-color: var(--text-1);
}

.btn--primary:hover {
  background: var(--c-create);
  border-color: var(--c-create);
  color: var(--text-1);
}

.btn--ghost:hover {
  border-color: var(--text-2);
}

.btn:focus-visible {
  outline: 2px solid var(--c-create);
  outline-offset: 2px;
}

@media (max-width: 780px) {
  .beat,
  .stage {
    min-height: 0 !important;
  }

  .keyword-block {
    position: static !important;
    max-width: none;
    margin-bottom: 22px;
  }

  .stage {
    display: flex;
    flex-direction: column;
    padding: 2.2rem 0 !important;
  }

  .beat--open .stage,
  .beat--end .stage {
    padding-top: 3.2rem !important;
  }

  .screen {
    position: static !important;
    margin: 0 0 28px;
    transform: translateY(14px);
  }

  .screen.is-visible {
    transform: none;
  }

  .screen__inner {
    position: static !important;
    inset: auto;
    padding: 14% 12%;
  }

  .screen__inner img {
    position: static;
  }

  .screen__bar {
    height: 6px !important;
  }

  .screen__label {
    position: static !important;
    display: block;
    left: auto;
    bottom: auto;
    margin-top: 8px;
  }

  .screen--monitor::after {
    display: none;
  }

  .beat:not(.beat--open):not(.beat--end) .stage {
    padding-left: 4px;
  }

  #routeSvg {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .screen {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
</style>
