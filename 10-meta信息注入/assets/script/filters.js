export const zeroNu = num => {
  return num < 10 ? '0' + num : num
}

export const formatTime = time => {
  const d = new Date()
  d.setTime(time)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  const hour = d.getHours()
  const min = d.getMinutes()
  const sec = d.getSeconds()
  return `${year}年${zeroNu(month)}月${zeroNu(day)}日 ${zeroNu(hour)}时${zeroNu(min)}分${zeroNu(sec)}秒`
}