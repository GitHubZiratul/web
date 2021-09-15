document.getElementById("yourName").innerHTML = localStorage.getItem('1');

/* Имя пользователя в localStorage */
function sendForm() {
    let name = document.getElementById("name").value;
    localStorage.setItem('1', name);
    document.getElementById("hello").innerHTML = "Hi " + name;
    document.getElementById("yourName").innerHTML = name;
}

function showTriangle() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    let e = document.getElementById("Test");
    let g = document.getElementById("Miniature");
    if (a.style.visibility == 'hidden') {
        a.style.visibility = 'visible';
        b.style.visibility = 'hidden';
        c.style.visibility = 'hidden';
        d.style.visibility = 'hidden';
        e.style.visibility = 'hidden';
        g.style.visibility = 'hidden';
    } else {
        a.style.visibility = 'hidden';
    }
}

function showString() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    let e = document.getElementById("Test");
    let g = document.getElementById("Miniature");
    if (b.style.visibility == 'hidden') {
        a.style.visibility = 'hidden';
        b.style.visibility = 'visible';
        c.style.visibility = 'hidden';
        d.style.visibility = 'hidden';
        e.style.visibility = 'hidden';
        g.style.visibility = 'hidden';
    } else {
        b.style.visibility = 'hidden';
    }
}

function showMass() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    let e = document.getElementById("Test");
    if (c.style.visibility == 'hidden') {
        a.style.visibility = 'hidden';
        b.style.visibility = 'hidden';
        c.style.visibility = 'visible';
        d.style.visibility = 'hidden';
        e.style.visibility = 'hidden';
    } else {
        c.style.visibility = 'hidden';
    }
}

function showTimer() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    let e = document.getElementById("Test");
    let g = document.getElementById("Miniature");
    if (d.style.visibility == 'hidden') {
        a.style.visibility = 'hidden';
        b.style.visibility = 'hidden';
        c.style.visibility = 'hidden';
        d.style.visibility = 'visible';
        e.style.visibility = 'hidden';
        g.style.visibility = 'hidden';
    } else {
        d.style.visibility = 'hidden';
    }
}

function showTest() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    let e = document.getElementById("Test");
    let g = document.getElementById("Miniature");
    if (e.style.visibility == 'hidden') {
        a.style.visibility = 'hidden';
        b.style.visibility = 'hidden';
        c.style.visibility = 'hidden';
        d.style.visibility = 'hidden';
        e.style.visibility = 'visible';
        g.style.visibility = 'hidden';
    } else {
        e.style.visibility = 'hidden';
    }
}

/* Заставка */
function showMiniature() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    let e = document.getElementById("Test");
    let g = document.getElementById("Miniature");
    if (g.style.visibility == 'hidden') {
        a.style.visibility = 'hidden';
        b.style.visibility = 'hidden';
        c.style.visibility = 'hidden';
        d.style.visibility = 'hidden';
        e.style.visibility = 'hidden';
        g.style.visibility = 'visible';
    } else {
        g.style.visibility = 'hidden';
    }
}


/* Площадь треугольника */
function areaOfTriangle(obj) {
    var a = 1 * obj.st1.value;
    var b = 1 * obj.st2.value;
    var c = 1 * obj.st3.value;
    var p = (a + b + c) / 2;
    var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    obj.res.value = s;
}

/* Стравнение строк */
function compareString() {
    let a = document.getElementById("string1");
    let b = document.getElementById("string2");
    if (a.value == b.value) {
        document.getElementById("ans1").innerHTML = 'true';
    } else {
        document.getElementById("ans1").innerHTML = 'false';
    }
}

/* Мак и мин в массиве */
function calculateMass() {
    let arr = [];
    let form = document.getElementById("formid");
    let els = form.getElementsByTagName("input");
    for (let i = 0; i < els.length; i++) {
        let a = [];
        a[0] = els[i].name;
        a[0] = els[i].value;
        arr[i] = a;
    }
    document.getElementById("ans2a").innerHTML = "Max: " + Math.max.apply(null, arr);
    document.getElementById("ans2b").innerHTML = "Min: " + Math.min.apply(null, arr);
}



/* Тест */
const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

class Quiz {
    constructor(type, questions, results) {
        this.type = type;

        this.questions = questions;

        this.results = results;

        this.score = 0;

        this.result = 0;

        this.current = 0;
    }

    Click(index) {
        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;

        if (value >= 1) {
            correct = index;
        } else {
            for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                if (this.questions[this.current].answers[i].value >= 1) {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }

    Next() {
        this.current++;

        if (this.current >= this.questions.length) {
            this.End();
        }
    }

    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;
            }
        }
    }
}

class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }

    Click(index) {
        return this.answers[index].value;
    }
}

class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

class Result {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }

    Check(value) {
        if (this.value <= value) {
            return true;
        } else {
            return false;
        }
    }
}

const results = [
    new Result("Вам многому нужно научиться", 0),
    new Result("Вы уже неплохо разбираетесь", 2),
    new Result("Ваш уровень выше среднего", 4),
    new Result("Вы в совершенстве знаете тему", 6)
];

const questions = [
    new Question("Чему равна сумма [] + 1 + 2?", [
        new Answer("1", 0),
        new Answer("NaN", 0),
        new Answer("undefined", 0),
        new Answer("12", 1)
    ]),

    new Question("Чему равно значение выражения 4 - 5 + 0xf - 1e1", [
        new Answer("Цифре", 1),
        new Answer("Строке", 0),
        new Answer("NaN", 0),
        new Answer("undefined", 0)
    ]),

    new Question("Что такое ECMAScript?", [
        new Answer("Новый язык программирования.", 0),
        new Answer("Переработанная реализация Javascript.", 0),
        new Answer("Спецификация языка Javascript.", 1),
        new Answer("IDE", 0)
    ]),

    new Question("Какие циклы есть в языке JavaScript? ", [
        new Answer("for, while, do while", 1),
        new Answer("for, while, do while, foreach", 0),
        new Answer("for, forMap, foreach, while, do while", 0),
        new Answer("for, forMap, foreach, while", 0)
    ]),

    new Question("Где верно указано имя переменной? ", [
        new Answer("var num-1;", 0),
        new Answer("var num_1;", 1),
        new Answer("var num", 0),
        new Answer("var 2num;", 0)
    ]),

    new Question("В чем отличие между локальной и глобальной переменной? ", [
        new Answer("Локальные видны повсюду, глобальные только в функциях", 0),
        new Answer("Глобальные можно переопределять, локальные нельзя", 0),
        new Answer("Глобальные видны повсюду, локальные только в функциях", 1),
        new Answer("Отличий нет", 0)
    ])
];

const quiz = new Quiz(1, questions, results);

Update();

function Update() {
    if (quiz.current < quiz.questions.length) {
        headElem.innerHTML = quiz.questions[quiz.current].text;

        buttonsElem.innerHTML = "";

        for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.appendChild(btn);
        }

        pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

        Init();
    } else {
        buttonsElem.innerHTML = "";
        headElem.innerHTML = quiz.results[quiz.result].text;
        pagesElem.innerHTML = "Очки: " + quiz.score;
    }
}

function Init() {
    let btns = document.getElementsByClassName("button");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index) {
    let correct = quiz.Click(index);

    let btns = document.getElementsByClassName("button");

    for (let i = 0; i < btns.length; i++) {
        btns[i].className = "button button_passive";
    }

    if (quiz.type == 1) {
        if (correct >= 0) {
            btns[correct].className = "button button_correct";
        }

        if (index != correct) {
            btns[index].className = "button button_wrong";
        }
    } else {
        btns[index].className = "button button_correct";
    }

    Update();
}