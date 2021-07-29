function commas(num){
    
    var isNegative = false;
    var integerPart = "";
    var decimalPart = "";
    var array = [];
    
    num = num.toFixed(3) - 0;
    
    if(num < 0){
        isNegative = true;
        num = -num;
    }
    
    var str = num + "";
    var parts = str.split(".");
    integerPart = parts[0];
    
    if(parts.length === 2){
        decimalPart = parts[1];
    }
    
    while(integerPart.length > 0){
        array.unshift(integerPart.slice(-3));
        integerPart = integerPart.slice(0,-3);
    }
    
    var res = array.join(",");
    
    if(decimalPart){
        res += "." + decimalPart;
    }
    
    if(isNegative){
        res = "-" + res;
    }
    
    return res;
}

//the way they did this is kinda interesting