function isLanguageDiverse(list) {
    var counts = {}
    ,     min = Number.MAX_VALUE
    ,     max = 0;
    
    for (var dev of list) 
      counts[dev.language] = (counts[dev.language] || 0) + 1;
        
    for (var lang in counts) {
      min = Math.min(counts[lang], min);
      max = Math.max(counts[lang], max);
    }
    
    return max <= 2 * min;
  }