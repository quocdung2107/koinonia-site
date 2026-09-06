<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { site } from '../../site'

interface CommunitySong {
  id: string
  title: string
  reference: string | null
  group_name: string | null
  tags: string[] | null
  lyrics_raw: string
  created_at: string
}

const songs = ref<CommunitySong[]>([])
const status = ref<'loading' | 'ready' | 'error' | 'empty'>('loading')
const copiedId = ref<string | null>(null)

async function loadSongs() {
  const { supabaseUrl, supabaseAnonKey, table } = site.community

  if (!supabaseUrl || supabaseUrl.includes('YOUR_PROJECT_REF')) {
    status.value = 'error'
    return
  }

  try {
    const url =
      `${supabaseUrl}/rest/v1/${table}` +
      `?select=id,title,reference,group_name,tags,lyrics_raw,created_at` +
      `&is_public=eq.true&deleted_at=is.null&order=created_at.desc`

    const res = await fetch(url, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`
      }
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = (await res.json()) as CommunitySong[]
    songs.value = data
    status.value = data.length ? 'ready' : 'empty'
  } catch (err) {
    console.error('[CommunitySongs] load failed:', err)
    status.value = 'error'
  }
}

async function copySong(song: CommunitySong) {
  try {
    await navigator.clipboard.writeText(song.lyrics_raw)
    copiedId.value = song.id
    setTimeout(() => {
      if (copiedId.value === song.id) copiedId.value = null
    }, 2000)
  } catch (err) {
    console.error('[CommunitySongs] copy failed:', err)
  }
}

function downloadSong(song: CommunitySong) {
  const blob = new Blob([song.lyrics_raw], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${song.title.replace(/[\\/:*?"<>|]+/g, '') || 'bai-hat'}.txt`
  a.click()
  URL.revokeObjectURL(url)
}

onMounted(loadSongs)
</script>

<template>
  <section class="community-songs">
    <div v-if="status === 'loading'" class="state-box">Đang tải danh sách bài hát…</div>

    <div v-else-if="status === 'error'" class="state-box error">
      Chưa thể tải dữ liệu cộng đồng. Nếu bạn là quản trị viên, kiểm tra lại
      <code>community.supabaseUrl</code> / <code>supabaseAnonKey</code> trong
      <code>docs/.vitepress/site.ts</code>.
    </div>

    <div v-else-if="status === 'empty'" class="state-box">
      Chưa có bài hát nào được chia sẻ.
    </div>

    <div v-else class="grid">
      <article v-for="song in songs" :key="song.id" class="card">
        <h3>{{ song.title }}</h3>
        <p v-if="song.reference" class="reference">{{ song.reference }}</p>

        <div class="badges">
          <span v-if="song.group_name" class="badge group">{{ song.group_name }}</span>
          <span v-for="tag in song.tags ?? []" :key="tag" class="badge tag">#{{ tag }}</span>
        </div>

        <div class="actions">
          <button class="ghost-btn" @click="copySong(song)">
            {{ copiedId === song.id ? 'Đã sao chép ✓' : '📋 Sao chép' }}
          </button>
          <button class="ghost-btn" @click="downloadSong(song)">⬇ Tải .txt</button>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.community-songs {
  margin: 60px auto;
  max-width: 1200px;
}

.state-box {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.state-box.error {
  color: #b91c1c;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card h3 {
  margin: 0 0 6px;
}

.reference {
  margin: 0 0 12px;
  color: #666;
  font-size: 14px;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.badge {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
}

.badge.group {
  background: #eef2ff;
  color: #2563eb;
}

.badge.tag {
  background: #f3f4f6;
  color: #555;
}

.actions {
  display: flex;
  gap: 10px;
}

.ghost-btn {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
}

.ghost-btn:hover {
  background: #f3f4f6;
}
</style>
