function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export default function InsertionSort(bars) {
  const steps = []

  for (let i = 1; i < bars.length; i++) {
      for (let j = i - 1; j >= 0 && bars[j] > bars[j+1]; j--) {
          swap(bars, j, j+1)
          steps.push([j, j+1, null, null])            // Compare
          steps.push([j, j+1, bars.slice(), null])    // Swap
      }
  }
  for (let i = 0; i < bars.length; i++) {
      steps.push([null, null, null, i])
  }
  return steps
}
