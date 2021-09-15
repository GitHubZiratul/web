const htmlAdder = document.getElementById("film-adder");

/* Рендер формы добавления фильмов */
class AddFilm {
    render() {
        let htmlAdderFilm = `
    <div class="input-wrapper">
            <form class="form-adder">
                <label for="id">Номер:</label>
                <input type="text" id="id" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="name">Название:</label>
                <input type="text" id="name" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="country">Страна</label>
                <select id="country" class="input-adder">
                    <option>Не указано</option>
                    <option>Россия</option>
                    <option>США</option>
                    <option>Великобритания</option>
                    <option>Италия</option>
                    <option>Япония</option>
                </select>
            </form>
            <form class="form-adder">
                <label for="genre">Жанр</label>
                <select id="genre" class="input-adder">
                    <option>Не указано</option>
                    <option>Драма</option>
                    <option>Комедия</option>
                    <option>Боевик</option>
                    <option>Фэнтези</option>
                    <option>Мультфильм</option>
                    <option>Документальный</option>
                </select>
            </form>
            <form class="form-adder">
                <label for="producer">Режиссер:</label>
                <input type="text" id="producer" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="scenario">Сценарист:</label>
                <input type="text" id="scenario" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="director">Продюсер:</label>
                <input type="test" id="director" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="operator">Оператор:</label>
                <input type="text" id="operator" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="compositor">Композитор:</label>
                <input type="text" id="compositor" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="budget">Бюджет:</label>
                <input type="text" id="budget" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="fees">Сборы:</label>
                <input type="text" id="fees" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="age_rating">Ограничение по возрасту:</label>
                <input type="text" id="age_rating" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="duration">Длительность:</label>
                <input type="text" id="duration" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="date">Дата выхода:</label>
                <input type="text" id="date" class="input-adder" />
            </form>
            <form class="form-adder">
                <label for="poster">Постер:</label>
                <input type="text" id="poster" class="input-adder" />
            </form>
            <div class="form-adder">
                <input class="button" type="button" onclick="addFilm()" value="Добавить фильм">
                <input class="button" type="button" onclick="clearForm()" value="Очистить">
                <input class="button" type="button" onclick="closeForm()" value="Закрыть">
            </div>
        </div>
    `;
        htmlAdder.innerHTML = htmlAdderFilm;
    }
}
const adderForm = new AddFilm();
adderForm.render();

/* Очистка формы */
function clearForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("country").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("producer").value = "";
    document.getElementById("scenario").value = "";
    document.getElementById("director").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("compositor").value = "";
    document.getElementById("budget").value = "";
    document.getElementById("fees").value = "";
    document.getElementById("age_rating").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("date").value = "";
    document.getElementById("poster").value = "";
}

/* Закрытие формы */
function closeForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("country").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("producer").value = "";
    document.getElementById("scenario").value = "";
    document.getElementById("director").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("compositor").value = "";
    document.getElementById("budget").value = "";
    document.getElementById("fees").value = "";
    document.getElementById("age_rating").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("date").value = "";
    document.getElementById("poster").value = "";
    htmlAdder.style.display = "none";
}

/* Добавление фильма */
function addFilm() {
    let list = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        country: document.getElementById("country").value,
        genre: document.getElementById("genre").value,
        producer: document.getElementById("producer").value,
        scenario: document.getElementById("scenario").value,
        director: document.getElementById("director").value,
        operator: document.getElementById("operator").value,
        compositor: document.getElementById("compositor").value,
        budget: document.getElementById("budget").value,
        fees: document.getElementById("fees").value,
        age_rating: document.getElementById("age_rating").value,
        duration: document.getElementById("duration").value,
        date: document.getElementById("date").value,
        poster: document.getElementById("poster").value
    }

    for (var key in list) {
        if (list[key] == null || list[key] == "") {
            return alert("Вы не заполнили все поля");
        }
    }

    film = new Film(
        list.id,
        list.name,
        list.country,
        list.genre,
        list.producer,
        list.scenario,
        list.director,
        list.operator,
        list.compositor,
        list.budget,
        list.fees,
        list.age_rating,
        list.duration,
        list.date,
        list.poster);

    localStorage.setItem(`id${list.id}`, JSON.stringify(film));

    filmsPage.render();
    closeForm();
}

function deleteFilm(id) {
    localStorage.removeItem(`id${id}`);

    filmsPage.render();
}

class Film {
    id;
    name;
    country;
    genre;
    producer;
    scenario;
    director;
    operator;
    compositor;
    budget;
    fees;
    age_rating;
    duration;
    date;
    poster;

    constructor(
        id, name, country, genre, producer, scenario, director, operator,
        compositor, budget, fees, age_rating, duration, date, poster) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.genre = genre;
        this.producer = producer;
        this.scenario = scenario;
        this.director = director;
        this.operator = operator;
        this.compositor = compositor;
        this.budget = budget;
        this.fees = fees;
        this.age_rating = age_rating;
        this.duration = duration;
        this.date = date;
        this.poster = poster;
    }
}