export default function SelectionSort(bars) {
    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    const steps = []
    for (let i = bars.length-1; i >= 0; i--) {
        let largest = 0
        let largest_index = 0
        for (let j = 0; j <= i; j++) {
            steps.push([i, j, null, null])                  // Compare
            if (bars[j] > largest) {
                largest = bars[j]
                largest_index = j
                steps.push([i, j, bars.slice(), null])      // Swap
            }
        }
        swap(bars, largest_index, i)
        steps.push([null, null, null, i])
    }
    return steps
}
