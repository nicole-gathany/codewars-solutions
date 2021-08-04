const dbSort = ( arr ) => [...arr.filter(el => typeof el === 'number').sort((a, b)=> a - b)]
                          .concat([...arr.filter(el => typeof el === 'string').sort()])