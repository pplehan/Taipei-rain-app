<template>
  <!-- 外層卡片容器，帶邊框、內距、圓角與陰影效果 -->
  <div class="border p-4 rounded shadow-sm">
    <!-- 顯示氣象站名稱，文字加粗 -->
    <h2 class="font-bold">{{ station.SiteName }}</h2>

    <!-- 顯示氣象站所屬行政區 -->
    <p>行政區：{{ station.Cnty }}</p>

    <!-- 顯示氣象站即時雨量（單位 mm） -->
    <p>即時雨量：{{ station.Rain }} mm</p>
  </div>
</template>

<script>
export default {
  props: {
    // 從父組件傳入的氣象站資料
    station: {
      type: Object,    // station 必須是物件類型
      required: true   // station 為必填 prop
    }
  }
}
</script>
