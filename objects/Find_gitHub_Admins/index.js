function findAdmin(list, lang) {
    // thank you for checking out the Coding Meetup kata :)
    //params: list (an array of objects describing each develop at the conference)
    //params: lang which is the list.language
    //return: an array of objects where list.language === lang and list.githubAdmin === "yes"
    //examples 
    return list.filter(developer => developer.language === lang && developer.githubAdmin === 'yes' )
  }