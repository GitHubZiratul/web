function StringLength() {
    let max = -1,
        str,
        str_max,
        N;
    var i = 0;
    N = prompt("Количество строк:");
    for (i = 0; i < N; i++) {
        str = prompt("Введите строку:");
        if (str === null || str === " ") {
            alert("Вы не ввели строку.");
        }
        alert("Введенная строка: " + str + "\nЕе длина: " + str.length);
        if (str.length > max) {
            str_max = str;
            max = str.length;
        }
    }
    if (str_max === undefined) alert("Ошибка! Введите положительное число!")
    else alert("Самая длинная строка: " + str_max + "\nЕе длина: " + str.length);
}

function MostUsedSymbol() {
    let str,
        k = 0,
        max = 0,
        symbol;
    str = prompt("Введите строку:");
    if (str === null || str === undefined || str === "") {
        alert("Вы не указали строку.");
        MostUsedSymbol();
    }
    localStorage.setItem('strFR', str);
    str = str.toLowerCase();
    let arr = new Array(1);
    arr = str.split('');
    arr.sort();
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) k++;
        else if (k + 1 > max) {
            max = k + 1;
            symbol = arr[i];
            k = 0;
        }
    }
    if (str === null || str === undefined || symbol === null || symbol === undefined) {
        alert("Вы не указали строку.");
        MostUsedSymbol();
    } else {
        alert("Строка: " + localStorage.getItem('strFR') + "\nСамый частоиспользуемый символ: " + symbol);
        localStorage.setItem('symbolFR', symbol);
    }
}
/** function getPopularElement(array) {
  var count = 1, tempCount;
  var popular = array[0];
  var temp = 0;

  for (var i = 0; i < (array.length - 1); i++) {
    temp = array[i];
    tempCount = 0;

    for (var j = 1; j < array.length; j++) {
      if (temp == array[j]) {
        tempCount++;
      }
    }

    if (tempCount > count) {
      popular = temp;
      count = tempCount;
    }
  }

  return popular;
} */
function Replacer() {
    let t, symbol = localStorage.getItem('symbolFR'),
        str = localStorage.getItem('strFR');
    let arr = new Array(1000);
    t = prompt("Введите символ или строку.");
    arr = str.split('');
    for (i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() == symbol.toLowerCase()) arr[i] = t;
    }
    arr = arr.join('');
    if (t === null || t === "" || t === undefined) alert("Ошибка! Вы не ввели символ, которым вы хотите заменить самый частоиспользуемый символ в строке.")
    else alert("Полученная строка:\n" + arr);
}

function Anagram() {
    let str1, str2, k = 0;
    let arr1 = new Array(1);
    let arr2 = new Array(1);
    str1 = prompt("Введите первую строку.");
    str2 = prompt("Введите вторую строку.");
    if (str1 === null || str1 === undefined || str1 === "" || str1 === " " || str2 === null || str2 === undefined || str2 === "" || str2 === " ") {
        alert("Вы не указали одну из строк.");
        IsAnagram();
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    arr1 = str1.split('');
    arr2 = str2.split('');
    arr1.sort();
    arr2.sort();
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) k++;
    }
    if (k == arr1.length) alert("Первая строка: " + str1 + "\nВторая строка:" + str2 + "\nСтроки являются анаграммами");
    else alert("Первая строка: " + str1 + "\nВторая строка: " + str2 + "\nСтроки не являются анаграммами");
}