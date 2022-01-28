let steps = []

function swap (arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function partition (dupBlocks, l, r) {
  const pivot = l
  let j = l

  for (let i = l + 1; i <= r; i++) {
    steps.push([i, pivot, null, null])
    if (dupBlocks[i] < dupBlocks[pivot]) {
      j += 1
      swap(dupBlocks, i, j)
      steps.push([i, j, dupBlocks.slice(), null])
    }
  }

  swap(dupBlocks, pivot, j)
  steps.push([pivot, j, dupBlocks.slice(), null])
  steps.push([null, null, null, j])
  return j
}

/* Recursive Quicksort helper function */
function quickSortHelper(dupBlocks, l, r) {
  if (l >= r) {
    if (l === r) steps.push([null, null, null, l])
    return
  }

  const pivot = l + Math.floor(Math.random() * (r - l))

  swap(dupBlocks, l, pivot)
  steps.push([l, pivot, dupBlocks.slice(), null])

  const m = partition(dupBlocks, l, r)

  quickSortHelper(dupBlocks, l, m - 1)
  quickSortHelper(dupBlocks, m + 1, r)

  return
}

function Quicksort (bars) {
  steps = []
  quickSortHelper(bars, 0, bars.length - 1)
  return steps
}

export default Quicksort
