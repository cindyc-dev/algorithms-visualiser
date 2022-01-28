export default function NaiveSearch(T, P) {
    const tl = T.length
    const pl = P.length
    const steps = []
    // step format: [j, k, patOffset, green, red, newResult, newExplanation]

    let s = 0
    let green = []
    while (s <= tl-pl) {
        let i
        for (i=0; i < pl; i++) {
            steps.push([s+i, s+i, null, false, false, null, `Comparing T[${s+i}]: ${T[s+i]} and P[${i}]: ${P[s+i]}`])  // Comparing
            if (T[s+i] !== P[i]){
                green = []
                steps.push([s+i, s+i, null, false, true, null, `T[${s+i}]: ${T[s+i]} and P[${i}]: ${P[s+i]} are NOT EQUAL`])  // Red
                let shift = s+i-1
                if (i===0) {
                    shift = s+i+1
                }
                let newPat = [...Array(Math.abs(shift)).fill(" "), ...P]

                steps.push([null, null, newPat, green, false, null, `Shift the pattern ${shift} step(s) forward`])  // Shift
                break
            }
            green = [...green, s+i, i]
            steps.push([null, null, null, green, false, null, `T[${s+i}]: ${T[s+i]} and P[${i}]: ${P[s+i]} are EQUAL`])  // Green
        }
        if (i === pl){
            steps.push([null, null, null, null, null, s, `Pattern found at index ${s}`])  // Add Result
            green = []
            let newPat = [...Array(s+i-1).fill(" "), ...P]
            steps.push([null, null, newPat, green, false, null, `Shift the pattern ${s+i-1} step(s) forward`])  // Shift
        }
        s++
    }
    steps.push([null, null, null, null, null, null, `Done searching!`])
    return steps
}
