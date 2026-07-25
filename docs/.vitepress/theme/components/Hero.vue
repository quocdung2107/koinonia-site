<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Koinonia Bible</h1>

      <p>Phần mềm đọc và trình chiếu Kinh Thánh</p>

      <p class="subtitle">Nhanh • Ngoại tuyến • Miễn phí • Đa bản dịch</p>

      <div class="buttons">
        <a
          class="hero-btn primary"
          href="https://github.com/quocdung2107/koinonia-bible-app/releases/latest"
          target="_blank"
        >
          Tải xuống
        </a>

        <a href="/guide/getting-started" class="secondary"> Hướng dẫn </a>
      </div>
    </div>

    <div class="hero-image">
      <div class="placeholder">Ảnh phần mềm</div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 60px;

  padding: 80px 0;
}

.hero-content {
  flex: 1;
}

.hero-image {
  flex: 1;

  display: flex;

  justify-content: center;
}

.placeholder {
  width: 100%;

  height: 420px;

  border-radius: 20px;

  background: #eef4ff;

  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 24px;

  color: #2563eb;
}

h1 {
  font-size: 58px;

  margin-bottom: 20px;
}

.subtitle {
  margin-top: 20px;

  color: #666;
}

.buttons {
  display: flex;

  gap: 20px;

  margin-top: 35px;
}

.primary {
  padding: 14px 28px;

  background: #2563eb;

  color: white;

  border-radius: 12px;

  text-decoration: none;
}

.secondary {
  padding: 14px 28px;

  border: 1px solid #ccc;

  border-radius: 12px;

  text-decoration: none;
}
</style>
