"use strict"

let someVar = 0
++someVar
if (someVar) {
    console.log(someVar)
}

for (let i = 1; i <= 10; i++) {
    console.log(`Пункт №${i}`)
}

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
    console.log('000');
}

function divide(a = 1, b = 1) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Результат ділення: Дозволені лише числа.";
    }
    if (b === 0) {
        return "Результат ділення: Ділення на нуль неможливе";
    }
    let result = a / b;
    return `Результат ділення: ${result}`;
}
console.log(divide(80, 4)); // Результат ділення: 20
console.log(divide(8, 0)); // Результат ділення: Ділення на нуль неможливе
console.log(divide("8", 2)); // Результат ділення: Дозволені лише числа.


const array = [1, 3, 10, 81, 6];
array.forEach(element => {
    if (element === 10) {
        console.log(element);
    }
});