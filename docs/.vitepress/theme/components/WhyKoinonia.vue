<script setup lang="ts">
const items = [
  {
    icon: "📖",
    title: "Thiết kế riêng cho Kinh Thánh",
    text: "Không phải phần mềm trình chiếu tổng quát. Mọi chức năng đều được tối ưu cho việc đọc và trình chiếu Kinh Thánh."
  },
  {
    icon: "⚡",
    title: "Nhanh và nhẹ",
    text: "Khởi động nhanh, giao diện đơn giản và phản hồi mượt mà."
  },
  {
    icon: "💾",
    title: "Hoạt động ngoại tuyến",
    text: "Không cần kết nối Internet để đọc, tìm kiếm và trình chiếu."
  },
  {
    icon: "🌍",
    title: "Hỗ trợ nhiều bản dịch",
    text: "Dễ dàng chuyển đổi giữa các bản dịch trong quá trình sử dụng."
  },
  {
    icon: "🎥",
    title: "Trình chiếu chuyên dụng",
    text: "Hiển thị câu Kinh Thánh rõ ràng, phù hợp cho nhóm học và Hội Thánh."
  },
  {
    icon: "🆓",
    title: "Miễn phí",
    text: "Tải về và sử dụng miễn phí."
  }
]
</script>

<template>
<section class="why">

<h2>Tại sao chọn Koinonia Bible?</h2>

<p class="intro">
Được xây dựng để giúp việc đọc, tìm kiếm và trình chiếu Kinh Thánh trở nên đơn giản hơn.
</p>

<div class="grid">

<div
v-for="item in items"
:key="item.title"
class="card"
>

<div class="icon">
{{ item.icon }}
</div>

<h3>{{ item.title }}</h3>

<p>{{ item.text }}</p>

</div>

</div>

</section>
</template>

<style scoped>

.why{
margin:100px auto;
}

.why h2{
text-align:center;
font-size:36px;
margin-bottom:12px;
}

.intro{
text-align:center;
max-width:720px;
margin:auto;
color:#666;
margin-bottom:48px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:24px;
}

.card{
padding:28px;
border:1px solid var(--vp-c-divider);
border-radius:18px;
background:var(--vp-c-bg-soft);
transition:.2s;
}

.card:hover{
transform:translateY(-4px);
}

.icon{
font-size:32px;
margin-bottom:16px;
}

.card h3{
margin-bottom:12px;
}

</style>