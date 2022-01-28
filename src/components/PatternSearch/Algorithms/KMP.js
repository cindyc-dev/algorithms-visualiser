function FindFailureArray(P) {
    let s = 2
    let c = 0
    let F = []
    // Set first 2 elements to -1 and 0
    F[0] = -1
    F[1] = 0

    while (s < P.length) {
        if (P[c] === P[s-1]) {
            c++
            F[s] = c
            s++
        } else if (c > 0) {
            c = F[c]
        } else {
            F[s] = 0
            s++
        }
    }

    return F
}

export default function KMPSearch(T, P) {
    const tl = T.length
    const pl = P.length
    const steps = []
    // step format: [j, k, patOffset, green, red, newResult, newExplanation]
    let F = FindFailureArray(P)
    steps.push([null, null, null, null, null, null, `Failure Array: [${F}]`])

    let s = 0
    let i = 0
    let al = 1
    let green = []
    steps.push([null, null, null, null, null, null, "Alignment 1: Position 0"])
    while (s <= tl-pl) {
        steps.push([s+i, s+i, null, null, null, null, `Comparing T[${s+i}]: ${T[s+i]} and P[${i}]: ${P[i]}`])  // Comparing
        if (T[s+i] === P[i]) {
            green = [...green, s+i, i]
            steps.push([null, null, null, green, false, null, `T[${s+i}]: ${T[s+i]} and P[${i}]: ${P[s+i]} are EQUAL`])  // Green
            i++
            if (i === pl) {
                steps.push([null, null, null, null, null, s, `Found pattern at ${s}`])  // Add Result
                green = []
                s++
                i=0
                let shift = s+i
                let newPat = [...Array(Math.abs(shift)).fill(" "), ...P]
                steps.push([null, null, newPat, null, null, null, `Shift the pattern ${shift} step(s) forward`])  // Shift
            }
        } else {
            green = []
            steps.push([s+i, s+i, null, false, true, null, `T[${s+i}]: ${T[s+i]} and P[${i}]: ${P[s+i]} are NOT EQUAL`])  // Red
            s = s+i-F[i]
            i = Math.max(F[i], 0)
            al++
            let newPat = [...Array(Math.abs(s)).fill(" "), ...P]

            steps.push([null, null, newPat, null, null, null, `Shift the pattern ${al} step(s) forward`])  // Shift
            steps.push([null, null, null, null, null, null, `Alignment ${al} Position ${s}`])
        }
    }
    steps.push([null, null, null, null, null, null, `Done searching!`])
    return steps
}
