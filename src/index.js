module.exports = function check(str, bracketsConfig) {

let arrStr = []
let arrArr = []
let arrAll = []
let stack = [];
//Создаем обьект - ключ(закрывающая):значение(открывающая)
let brackets = { [')'] : '(', ['}'] : '{', [']'] : '[', ['|'] : '|', ['2'] : '1', ['4'] : '3', ['6'] : '5', ['7'] : '7', ['8'] : '8'}

//Входной массив - убираем подмассивы и обьеденяем все в один массив
arrArr = bracketsConfig.flat()
//Входная строка - разбиваем строку на элементы и ложим в массив
arrStr = str.split('')
//Обьеденяем все входные данные в один массив
arrAll = [...arrStr, ...arrArr]

    for(let i = 0; i < arrAll.length; i++) {
//Элемент массива
    let iarrAll = arrAll[i];
//Верхний элемент в стэке
    let topElStack = stack[stack.length - 1];
      if(brackets[iarrAll] === topElStack && stack.length !== 0) {
        stack.pop();
      } else {
        stack.push(iarrAll)
        }
}
//Если в стэке что-то есть -false, если ничего нет -true
  return stack.length === 0;
}






