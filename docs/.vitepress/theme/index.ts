import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
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
    const route = useRoute()
    const syncHomeClass = () => {
      const isHome = route.path === '/' || route.path.endsWith('/index.html')
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
