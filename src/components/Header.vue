<template>
  <div class="flex flex-wrap items-center justify-between mb-4 gap-2 w-full box-border">
    <!-- 標題 -->
    <h1 class="text-xl font-bold">
      臺北市雨量站即時資料
    </h1>

    <!-- 搜尋框 -->
    <input 
      type="text" 
      placeholder="搜尋雨量站" 
      class="border border-gray-400 p-2 flex-1 min-w-[120px] rounded focus:outline-none focus:ring-2 w-full sm:w-auto"
      :value="search"
      @input="$emit('update:search', $event.target.value)"
    />

    <!-- 字級選單 -->
    <select 
      class="border border-gray-400 p-2 rounded flex-shrink-0 w-full sm:w-auto"
      :value="fontSize"
      @change="$emit('update:fontSize', Number($event.target.value))"
    >
      <option value="14">14px</option>
      <option value="16">16px</option>
      <option value="18">18px</option>
      <option value="20">20px</option>
      <option value="22">22px</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    search: String,
    fontSize: Number
  }
}
</script>
