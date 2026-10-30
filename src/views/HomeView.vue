<script setup>
import { ref, computed } from "vue";
import { FORMAT_PATTERNS, formatDate } from "../utils/dateTimeUtils";

const selectedDate = ref(new Date());

const selectedMonth = computed(() =>
  formatDate(selectedDate.value, FORMAT_PATTERNS.MONTH_NAME_SHORT),
);

const selectedDay = computed(() =>
  formatDate(selectedDate.value, FORMAT_PATTERNS.DAY_ONLY),
);
</script>

<template>
  <main class="p-home">
    <!-- Hero -->
    <section class="p-home__hero">
      <h1>HabitSeed 🌱</h1>
      <p>每一次投入，都是成長的開始。</p>
      <el-button type="primary">打開習慣設定面板</el-button>
    </section>
    <!-- 主要總覽 -->
    <section class="p-home__overview">
      <!-- 月曆 -->
      <div class="p-home__calendar">
        <el-calendar v-model="selectedDate" />
      </div>

      <!-- 選取日期後跳出的每日記錄 -->
      <div class="p-home__records">
        <div class="o-cardBlock">
          <div class="o-cardBlock__content">
            <div class="m-recordCard">
              <div class="m-recordCard__dateBadge">
                <span class="m-recordCard__month"> {{ selectedMonth }}. </span>
                <span class="m-recordCard__day">
                  {{ selectedDay }}
                </span>
              </div>
              <div class="m-recordCard__head"></div>
              <div class="m-recordCard__body"></div>
            </div>
            <div class="o-cardBlock__head">
              <div class="o-cardBlock__title"></div>
            </div>
            <div class="o-cardBlock__body"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 紀錄總結 -->
    <section class="p-home__summary">
      <div class="o-cardBlock"></div>
    </section>
  </main>
</template>
