export function getPageNumbers(current: number, total: number) {
  const delta = 2
  const range: number[] = []
  const rangeWithDots: (number | "...")[] = []
  let l: number | undefined

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i)
    }
  }

  for (const i of range) {
    if (l !== undefined) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l > 2) {
        rangeWithDots.push("...")
      }
    }
    rangeWithDots.push(i)
    l = i
  }
 
    
  return rangeWithDots
}
