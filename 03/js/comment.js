/* Показать скрыть комментарии */
function commentShow(id) {
    let commentblock = document.getElementById(`comment-element_${id}`);
    let commentshowbutton = document.getElementById(`film-element__btn-showcomments_${id}`);
    let commentform = document.getElementById(`comment-form${id}`);

    if (commentshowbutton.innerHTML == "Посмотреть отзывы") {

        commentblock.style.display = "block";
        commentform.style.display = "block";
        commentshowbutton.innerHTML = "Закрыть отзывы";

        setTimeout(function() {
            commentblock.style.height = "auto";
        }, 30);
        setTimeout(function() {
            commentblock.style.opacity = "1";
            commentform.style.opacity = "1";
        }, 500);
    } else if (commentshowbutton.innerHTML == "Закрыть отзывы") {
        commentshowbutton.innerHTML = "Посмотреть отзывы";
        commentblock.style.opacity = "0";
        commentform.style.opacity = "0";
        commentblock.style.height = "0px";
    }

    let commentcatalog = '';

    /* Вывод всех комментариев */
    for (let key in localStorage) {
        if (key.startsWith(`commentid${id}`)) {
            let obj = JSON.parse(localStorage.getItem(key));
            let stars = '';
            for (let i = 0; i < obj.rating; i++) {
                stars += "<span class=activestar></span>";
            }
            for (let i = 0; i < 5 - obj.rating; i++) {
                stars += "<span class=nonactivestar></span>";
            }

            commentcatalog += `
            <div class="comment-unit">
                <span class="namevalue">${obj.name}</span>
                <span class="occupationvalue">${obj.occupation}</span>
                <span class="textvalue">${obj.text}</span>
                <span class="ratingvalue">Оценка:${obj.rating}</span>
            </div>
            `;
        }
    }

    document.getElementById(`comments-container${id}`).innerHTML = commentcatalog;
}

/* Добавление комментария */
function addComment(id) {
    let nametext = document.getElementById(`commentinput_name_id${id}`).value;
    let occupationtext = document.getElementById(`commentinput_occupation_id${id}`).value;
    let commenttext = document.getElementById(`commentinput_text_id${id}`).value;
    let rating = null;

    let rateradios = document.querySelectorAll(`input[name="rating_id${id}"]`);
    for (let i = 0; i < rateradios.length; i++) {
        if (rateradios[i].checked) {
            rating = rateradios[i].value;
        }
    }

    /* Проверка на null */
    if (nametext == null || nametext == "") { alert("Введите ваше имя"); return; }
    if (occupationtext == null || occupationtext == "") { alert("Введите ваш род деятельности"); return; }
    if (commenttext == null || commenttext == "") { alert("Введите ваш отзыв"); return; }
    if (rating == null) { alert("Выберите оценку фильма"); return; }

    let count = 0;

    for (key in localStorage) {
        if (key.startsWith(`commentid${id}`)) count++;
    }

    let comment = new CommentClass(nametext, occupationtext, commenttext, rating);
    localStorage.setItem(`commentid${id}_${count}`, JSON.stringify(comment));

    let stars = '';

    for (let i = 0; i < rating; i++) {
        stars += "<span class=activestar></span>";
    }
    for (let i = 0; i < 5 - rating; i++) {
        stars += "<span class=nonactivestar></span>";
    }

    /* Вывод нового комментария */
    let newcomment = `
    <div class="comment-unit">
        <span class="namevalue">${nametext}<br></span>
        <span class="occupationvalue">${occupationtext}<br></span>
        <span class="textvalue">${commenttext}<br></span>
        <span class="ratingvalue">Оценка:${rating}<br></span>
    </div>
    `;
    document.getElementById(`comments-container${id}`).innerHTML += newcomment;
}

class CommentClass {
    name;
    occupation;
    text;
    rating;

    constructor(name, occupation, text, rating) {
        this.name = name;
        this.occupation = occupation;
        this.text = text;
        this.rating = rating;
    }
}