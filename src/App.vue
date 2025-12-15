<template>
  <div class="p-4 max-w-6xl mx-auto" :style="{ fontSize: fontSize + 'px' }">
    <Header 
      :search="search" 
      :fontSize="fontSize" 
      @update:search="search = $event" 
      @update:fontSize="fontSize = $event"
    />

    <main v-if="!loading" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <StationCard 
        v-for="station in filteredStations" 
        :key="station.SiteId" 
        :station="station"
      />
    </main>
    <p v-else class="text-center text-gray-500">資料載入中...</p>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import StationCard from './components/StationCard.vue'

export default {
  components: { Header, StationCard },
  data() {
    return {
      search: '',
      stations: [],
      fontSize: 16,
      loading: true
    }
  },
  // 新增 watch：當 fontSize 改變時，立即寫入 localStorage
  watch: {
    fontSize(newVal) {
      localStorage.setItem('fontSize', newVal)
      console.log('Saved to localStorage:', newVal)
    }
  },
  computed: {
    filteredStations() {
      return this.stations.filter(s => 
        s.SiteName.includes(this.search) || s.Cnty.includes(this.search)
      )
    }
  },
  mounted() {
    // 1. 初始化讀取：從 localStorage 嘗試抓取舊設定
    const saved = localStorage.getItem('fontSize')
    if (saved) {
      this.fontSize = parseInt(saved)
    }

    // 2. 抓取 API 資料
    fetch('/rain-api')
      .then(res => res.json())
      .then(data => {
        console.log('API 回傳:', data)
        this.stations = data.data.map(item => ({
          SiteId: item.stationNo,
          SiteName: item.stationName,
          Cnty: '臺北市',
          Rain: item.rain
        }))
        this.loading = false
      })
      .catch(err => {
        console.error('API Error:', err)
        this.loading = false
      })
  }
}
</script>