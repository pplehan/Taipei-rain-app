<template>
  <div class="border p-4 rounded shadow-sm">
    <h2 class="font-bold">{{ station.SiteName }}</h2>
    <p>行政區：{{ station.Cnty }}</p>
    <p>即時雨量：{{ station.Rain }} mm</p>
  </div>
</template>

<script>
export default {
  props: {
    station: {
      type: Object,
      required: true
    }
  }
}
</script>
