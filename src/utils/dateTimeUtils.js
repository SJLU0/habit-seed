import dayjs from "dayjs";

/**
 * 日期格式化函式（formatDate），未來可再擴充添加日期時間換算
 *
 * 功能：
 * 1. 檢查傳入的日期是否為空值。
 * 2. 使用 Day.js 將輸入資料解析為日期物件。
 * 3. 檢查日期是否有效，避免無法解析的資料進入後續處理。
 *
 * 執行流程：
 * 1：檢查 null、undefined、空字串 → 回傳「日期未設定」
 * 2：使用 dayjs(date) 解析日期，並使用 isValid() 檢查解析結果
 * 3.
 *
 * 注意：
 * Day.js 預設採非嚴格解析，部分不存在的日期可能被自動修正。
 * 目前尚未實作格式化輸出，因此有效日期會回傳 undefined。
 */

const FORMAT_PATTERNS = {
  //年月日皆有
  DATE_FULL: "YYYY-MM-DD",
  DATE_FULL_ZH_TW: "YYYY年MM月DD日",
  //月日
  MONTH_DAY: "MM-DD",
  MONTH_DAY_ZH_TW: "MM月DD日",
  //月
  MONTH_ONLY: "MM",
  MONTH_NAME_SHORT: "MMM",
  MONTH_NAME_FULL: "MMMM",
  //日
  DAY_ONLY: "DD",
};

function formatDate(date, formatPattern = FORMAT_PATTERNS.DATE_FULL) {
  if (date == null || date === "") return "日期未設定";

  const parsedDate = dayjs(date);

  if (!parsedDate.isValid()) {
    return "日期格式錯誤";
  }

  return parsedDate.format(formatPattern);
}

export { FORMAT_PATTERNS, formatDate };
