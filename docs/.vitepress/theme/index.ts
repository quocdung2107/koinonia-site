import DefaultTheme from 'vitepress/theme'
import { useRoute, withBase } from 'vitepress'
import { watch, onMounted } from 'vue'
import './style.css'

import Screenshots from './components/Screenshots.vue'
import DownloadCard from './components/DownloadCard.vue'
import WhyKoinonia from './components/WhyKoinonia.vue'
import CommunitySongs from './components/CommunitySongs.vue'
import HomeExperience from './components/HomeExperience.vue'

export default {
  extends: DefaultTheme,
  setup() {
    // Trang chủ (route "/") dùng tông tối riêng — xem style.css khối
    // "html.koinonia-dark-home". Toggle theo route thay vì hard-code
    // trong CSS toàn cục để các trang Hướng dẫn/FAQ/Tải xuống/Cộng đồng
    // KHÔNG bị đổi màu theo.
    //
    // route.path (phía client) LUÔN bao gồm tiền tố `base` (vd:
    // "/koinonia-site/", không phải "/") — so sánh cứng với "/" chỉ đúng
    // khi chạy dev server ở gốc, còn bản build thật (base có tiền tố,
    // như khi deploy lên GitHub Pages) sẽ không bao giờ khớp, khiến trang
    // chủ bị rơi về theme sáng mặc định. Dùng withBase('/') để so sánh
    // đúng trong cả hai trường hợp.
    const route = useRoute()
    const syncHomeClass = () => {
      const isHome = route.path === withBase('/') || route.path.endsWith('/index.html')
      document.documentElement.classList.toggle('koinonia-dark-home', isHome)
    }
    onMounted(syncHomeClass)
    watch(() => route.path, syncHomeClass)
  },
  enhanceApp({ app }) {
    app.component('Screenshots', Screenshots)
    app.component('DownloadCard', DownloadCard)
    app.component('WhyKoinonia', WhyKoinonia)
    app.component('CommunitySongs', CommunitySongs)
    app.component('HomeExperience', HomeExperience)
  }
}
