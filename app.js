// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (a) => {

    let result = (a * oneEuroIs.USD) * oneEuroIs.JPY;

  return result;
};
console.log(fromDollarToYen(1));

const fromEuroToDollar = (a) => {
    let result = a * oneEuroIs.USD;

    return result;
};
console.log(fromEuroToDollar(1));

const fromYenToPound = (a) => {

    let result = (a * oneEuroIs.JPY) * oneEuroIs.GBP;

    return result;  
 
};
console.log(fromYenToPound(1));

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }