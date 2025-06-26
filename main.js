// function isDateInRange(date, start, end) {
//   const d = date.getTime()
//   const s = start.getTime()
//   const e = end ? end.getTime() : s

//   return d >= s && d <= e
// }

// const date = new Date("2024-03-15")
// const start = new Date("2024-03-10")
// const end = new Date("2024-03-20")

// console.log(isDateInRange(date, start, end)) // true
// console.log(isDateInRange(date, start)) // false (если end нет, то date должна быть равна start)

// ! -------------------------------------------------------

function formatDateAgo(date) {
  const now = new Date()
  const diffMs = now - date
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHrs = Math.floor(diffMin / 60)
  const diffDays = Math.floor(diffHrs / 24)

  const rtf = new Intl.RelativeTimeFormat("ru", {numeric: "auto"})

  if (diffSec < 60) {
    return "только что"
  } else if (diffMin < 60) {
    return rtf.format(-diffMin, "minute")
  } else if (diffHrs < 24) {
    return rtf.format(-diffHrs, "hour")
  } else if (diffDays === 1) {
    return "вчера"
  } else if (diffDays < 5) {
    return rtf.format(-diffDays, "day")
  } else {
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  }
}

const now = new Date()

console.log(formatDateAgo(new Date(now - 30 * 1000)))
console.log(formatDateAgo(new Date(now - 5 * 60 * 1000)))
console.log(formatDateAgo(new Date(now - 3 * 86400000)))
console.log(formatDateAgo(new Date("2023-01-01")))
