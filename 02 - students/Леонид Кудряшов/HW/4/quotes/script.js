
let str = document.querySelector(".text").innerText;

const regFirst = /\'/g; //меняем все одинарные кавычки на двойные
let str1 = str.replace(regFirst, "\"");

//т.к. знаки препинания не являются границей слова, то можно сделать так:
const regSecond = /\b"/g;//возвращаем обратно апостроф
let str2 = str1.replace(regSecond, "\'");
console.log(str2);