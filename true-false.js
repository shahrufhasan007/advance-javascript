// Falsy
// undefined
// null
// 0
// NaN

// Truthy
// "0"

let name = 12;
if (name || name == 0) {
    console.log("true")
} else {
    console.log("false")
}