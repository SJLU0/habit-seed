<script setup>
import zhTw from "element-plus/es/locale/lang/zh-tw"; //元件介面文字
import "dayjs/locale/zh-tw"; //日期本身的語系，如星期一
</script>

<template>
  <!-- 接收 zhTw 物件，裡頭有繁中翻譯資料 -->
  <el-config-provider :locale="zhTw">
    <router-view />
  </el-config-provider>
</template>
