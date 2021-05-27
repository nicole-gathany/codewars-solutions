//very similar to mine save for the .substr part
function scale(strng, k, n) {
    let l;
    return (l = strng
        .split("\n")
        .map(w => w
            .split("")
            .map(v => v.repeat(k))
            .join("")
        )
        .map(r => r ? (r+"\n").repeat(n) : "")
        .join("")
    ).substr(0,l.length-1)
}