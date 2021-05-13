//my solution and the best practice are actually the same
function isSameLanguage(list) {
    return list.every(e => e.language === list[0].language);
  }