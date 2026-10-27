<script setup></script>

<template>
  <main class="p-home">
    <!-- Hero -->
    <section class="p-home__hero">
      <h1>HabitSeed 🌱</h1>
      <p>每一次投入，都是成長的開始。</p>
      <el-button type="primary"> 習慣設定 </el-button>
    </section>
    <!-- 主要總覽 -->
    <section class="p-home__overview">
      <!-- 月曆 -->
      <div class="p-home__calendar"></div>

      <!-- 選取日期後跳出的每日記錄 -->
      <div class="p-home__records">
        <div class="o-cardBlock"></div>
      </div>
    </section>

    <!-- 紀錄總結 -->
    <section class="p-home__summary">
      <div class="o-cardBlock"></div>
    </section>
  </main>
</template>
