function greetDevelopers(list) {
    return list.map(item => Object.assign(item, {greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`}))
  }