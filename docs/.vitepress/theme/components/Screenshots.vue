<script setup lang="ts">
import { ref } from 'vue'

const tabs = [
  {
    id: 'reader',
    title: 'Đọc Kinh Thánh',
    image: '/koinonia-site/images/reader.png'
  },
  {
    id: 'search',
    title: 'Tìm kiếm',
    image: '/koinonia-site/images/search.png'
  },
  {
    id: 'presentation',
    title: 'Trình chiếu',
    image: '/koinonia-site/images/presentation.png'
  },
  {
    id: 'settings',
    title: 'Cài đặt',
    image: '/koinonia-site/images/setting.png'
  }
]

const current = ref(tabs[0])
</script>

<template>
  <section class="screenshots">

    <h2>Khám phá giao diện</h2>

    <p>
      Giao diện được thiết kế đơn giản, dễ sử dụng và tối ưu cho việc đọc cũng như trình chiếu.
    </p>

    <div class="tabs">

      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ active: current.id === tab.id }"
        @click="current = tab"
      >
        {{ tab.title }}
      </button>

    </div>

    <div class="image-box">

      <img
        :src="current.image"
        :alt="current.title"
      />

    </div>

  </section>
</template>

<style scoped>

.screenshots{
    margin:100px auto;
    text-align:center;
}

.tabs{
    display:flex;
    justify-content:center;
    gap:16px;
    flex-wrap:wrap;
    margin:40px 0;
}

.tabs button{
    padding:12px 22px;
    border:none;
    border-radius:12px;
    cursor:pointer;
    background:#eef2ff;
}

.tabs button.active{
    background:#2563eb;
    color:white;
}

.image-box{

    margin:auto;
    max-width:1000px;

}

.image-box img{

    width:100%;
    border-radius:18px;

    box-shadow:
    0 20px 50px rgba(0,0,0,.15);

}

</style>