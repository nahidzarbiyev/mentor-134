function add(n1,n2) {
    let result;
    if (typeof n1 === "string" && typeof n2 === "string") {
        result = n1 + n2
        return result
    }
    else if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 - n2
        return result
    }
}

console.log(add(10,12));