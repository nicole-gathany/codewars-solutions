//i feel like this is really similar to my solution. i don't know how to use .trim() though
function travel(r, zipcode) {
    const addressList = r.split(",");

    const streets = [];
    const numbers = [];

    addressList.forEach(address => {
        let zip = address.substring(address.length - 8, address.length);
        if (zip === zipcode) {
            let number = address.substring(0, address.indexOf(" ") + 1);
            let street = address.substring(address.indexOf(" "), address.length -8);
            
            streets.push(street.trim());
            numbers.push(number.trim());
        }
    });
    return `${zipcode}:${streets.join(",")}/${numbers.join(",")}`;
}