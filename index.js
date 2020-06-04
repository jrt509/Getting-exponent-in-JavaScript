

const getExponent = (base, exp) => {
    const items = Array(exp).fill(base);
    const reducer = (total, currVal) => total * currVal;
    return items.reduce(reducer);
    
}
getExponent(2, 4);
getExponent(3, 5);