// 1-ое дз

// 1.1
let str = 'abcde';

    alert(str[0]);
    alert(str[1]);
    alert(str[4]); 
// 1.2
let a = parseInt(prompt("Введите первое число"));
let b = parseInt(prompt("Введите второе число"));
    console.log(a>0 || b>0);
// 1.3
    let age1 = parseInt(prompt("Введите возраст"));
        if (age1>=18) {
    console.log("Совершеннолетний");
    }   
        else {
        console.log("Несовершеннолетний");
    }

// 2-ое дз

// 2.1
let age2 = parseInt(prompt("Введите ваш возраст:"));

if (age2 >= 65) {
    console.log("Поздравляем с пенсионным возрастом!");
} else {
    console.log("Вам ещё рано на пенсию");
}
// 2.2
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

if (first > second) {
    console.log("Первое число больше");
} else if (first < second) {
    console.log("Второе число больше");
} else {
    console.log("Числа равны");
}
// 2.3
let num = parseInt(prompt("Введите число:"));

if (num % 2 == 0) {
    console.log("Это чётное число");
} else {
    console.log("Это нечётное число");
}
