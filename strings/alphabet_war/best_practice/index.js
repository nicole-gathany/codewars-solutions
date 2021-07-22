function alphabetWar(fight)
{
    const powers = {
      "w": 4,
      "p": 3,
      "b": 2,
      "s": 1,
      "m": -4,
      "q": -3,
      "d": -2,
      "z": -1
    }
    const score = fight.split("").map(a => powers[a] ? powers[a] : a)
                                 .map((a, i, arr) => a > 0 && (arr[i-1] == "j" || arr[i+1] == "j") && arr[i-1] != "t" && arr[i+1] != "t" ? a * -1 : a)
                                 .map((a, i, arr) => a < 0 && (arr[i-1] == "t" || arr[i+1] == "t") && arr[i-1] != "j" && arr[i+1] != "j" ? a * -1 : a)
                                 .reduce((accum, b) => Number.isInteger(b) ? accum + b : accum, 0)
    
    return score > 0 ? "Left side wins!" : score < 0 ? "Right side wins!" : "Let's fight again!";
}