function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }

  // i wonder if if this might be a better solution because it's only comparing the
  // highest number to the limit, instead of every value.