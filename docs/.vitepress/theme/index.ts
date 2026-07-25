import DefaultTheme from 'vitepress/theme'
import './style.css'

import Screenshots from './components/Screenshots.vue'
import DownloadCard from './components/DownloadCard.vue'
import WhyKoinonia from './components/WhyKoinonia.vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Screenshots', Screenshots)
    app.component('DownloadCard', DownloadCard)
    app.component('WhyKoinonia', WhyKoinonia)
  }
}