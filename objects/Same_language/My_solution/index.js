function isSameLanguage(list) {
    // thank you for checking out the Coding Meetup kata :)
    //parameters array of objects
    //return boolean, true or false
    //examples [{language: JavaScript}, {language: JavaScript}, {language: JavaScript}] return true
    //[{language: Python}, {language: JavaScript}, {language: JavaScript}] return false
    //save const that is list[0].language
    //return each developer's language ===firstLanguage
    return list.every(item => item.language === list[0].language)
  }