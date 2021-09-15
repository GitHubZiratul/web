const htmlFilter = document.getElementById("dropdown-filter");

/* Рендер фильтра */
class Filter {
    render() {
        let htmlFilterPage = `
        <div id="dropdown" class="dropdown-content">
            <div class="filterBtn-container">
                <div class="test">
                    <button onclick="filterGenre()" id="FilterBtn_Genre">Жанр</button>
                    <div id="dropdown-genre" class="dropdown-choice">
                        <form>
                            <p><input name="radio-genre" type="radio" value="drama">Драма</p>
                            <p><input name="radio-genre" type="radio" value="comedy">Комедия</p>
                            <p><input name="radio-genre" type="radio" value="thriller">Боевик</p>
                            <p><input name="radio-genre" type="radio" value="fantasy">Фэнтези</p>
                            <p><input name="radio-genre" type="radio" value="cartoon">Мультфильм</p>
                            <p><input name="radio-genre" type="radio" value="documentary">Документальный</p>
                        </form>
                    </div>
                </div>
                <div>
                    <button onclick="filterCountry()" id="FilterBtn_Country">Страна</button>
                    <div id="dropdown-country" class="dropdown-choice">
                        <form>
                            <p><input name="radio-country" type="radio" value="russia">Россия</p>
                            <p><input name="radio-country" type="radio" value="usa">США</p>
                            <p><input name="radio-country" type="radio" value="uk">Великобритания</p>
                            <p><input name="radio-country" type="radio" value="italy">Италия</p>
                            <p><input name="radio-country" type="radio" value="japan">Япония</p>
                        </form>
                    </div>
                </div>
                <button onclick="confirmFilters()" id="confirmdropbtn">Применить</button>
                <button onclick="cancelFilters()" id="canceldropbtn">Отменить</button>
            </div>
        </div>
        `;
        htmlFilter.innerHTML = htmlFilterPage;
    }
}
const filterPage = new Filter();
filterPage.render();

/* Выподающий список жанра */
function filterGenre() {
    if (document.getElementById("dropdown-genre").style.display == "block") {
        document.getElementById("dropdown-genre").style.display = "none";
    } else {
        document.getElementById("dropdown-genre").style.display = "block";
        document.getElementById("dropdown-country").style.display = "none";
    }
}

/* Выподающий список страны */
function filterCountry() {
    if (document.getElementById("dropdown-country").style.display == "block") {
        document.getElementById("dropdown-country").style.display = "none";
    } else {
        document.getElementById("dropdown-country").style.display = "block";
        document.getElementById("dropdown-genre").style.display = "none";
    }
}

/* Кнопка применить */
function confirmFilters() {
    let filmsmassiv = [];

    let radiosgenre = document.querySelectorAll('input[name="radio-genre"]');
    let radioscountry = document.querySelectorAll('input[name="radio-country"]');

    let genre = null;
    let country = null;

    function checkradios() {

        for (element of radiosgenre) {
            if (element.checked) {
                if (element.value == "drama") genre = "Драма";
                if (element.value == "comedy") genre = "Комедия";
                if (element.value == "thriller") genre = "Боевик";
                if (element.value == "fantasy") genre = "Фэнтези";
                if (element.value == "cartoon") genre = "Мультфильм";
                if (element.value == "documentary") genre = "Документальный";
            }
        }

        for (element of radioscountry) {
            if (element.checked) {
                if (element.value == "russia") country = "Россия";
                if (element.value == "usa") country = "США";
                if (element.value == "uk") country = "Великобритания";
                if (element.value == "italy") country = "Италия";
                if (element.value == "japan") country = "Япония";
            }
        }

        if (date == null && genre == null && country == null) {
            return false;
        } else return true;
    }

    for (let key in localStorage) {
        if (key.startsWith("id")) {
            let obj = JSON.parse(localStorage.getItem([key]));
            filmsmassiv.push(obj);
        }
    }

    if (checkradios()) {

        classNameActive = 'films-element__btn_active';
        labelAdd = 'Добавить в каталог';
        labelRemove = 'Удалить из каталога';
        let htmlCatalog = '';
        let activetext = '';

        if (genre != null) {
            for (let i = 0; i < filmsmassiv.length;) {
                if (filmsmassiv[i].genre != genre) {
                    filmsmassiv.splice(i, 1);
                } else i++;
            }
        }

        if (country != null) {
            for (let i = 0; i < filmsmassiv.length;) {
                if (filmsmassiv[i].country != country) {
                    filmsmassiv.splice(i, 1);
                } else i++;
            }
        }

        for (obj of filmsmassiv) {

            if (localStorageClass.getFilms().indexOf(obj.id) === -1) {
                activetext = this.labelAdd;
            } else {
                activetext = this.labelRemove;
                activeclass = ' ' + this.classNameActive;
            }

            htmlCatalog += `
			<table>
                    <tr>
                        <th>Постер</th>
                        <th>Название</th>
                        <th>Страна</th>
                        <th>Жанр</th>
                        <th>Продюсер</th>
                        <th>Сценарист</th>
                        <th>Режисер</th>
                        <th>Оператор</th>
                        <th>Композитор</th>
                        <th>Бюджет</th>
                        <th>Сборы</th>
                        <th>Возраст</th>
                        <th>Длительность</th>
                        <th>Дата</th>
                    </tr>
                    <tr>
                        <td><img class="imgBlock" src="${obj.poster}"></td>
                        <td>${obj.name}</td>
                        <td>${obj.country}</td>
                        <td>${obj.genre}</td>
                        <td>${obj.producer}</td>
                        <td>${obj.scenario}</td>
                        <td>${obj.director}</td>
                        <td>${obj.operator}</td>
                        <td>${obj.compositor}</td>
                        <td>${obj.budget}</td>
                        <td>${obj.fees}</td>
                        <td>${obj.age_rating}</td>
                        <td>${obj.duration}</td>
                        <td>${obj.date}</td>
					</tr>
					<tr>
					    <td><button onclick="filmsPage.handleSetLocationStorage(this, '${obj.id}')">${activetext}</button></td>
						<td><button onclick="deleteFilm(${obj.id});">Удалить</button></td>
					</tr>
                </table>
			`;
        }
        const html = `${htmlCatalog}`;
        htmlCatalogFimls.innerHTML = html;
    } else alert("Вы не выбрали ни один фильтр");
}

/* Кнопка отменить */
function cancelFilters() {

    document.getElementById("dropdown-genre").style.display = "none";
    var ele = document.getElementsByName("radio-genre");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;

    document.getElementById("dropdown-country").style.display = "none";
    var ele = document.getElementsByName("radio-country");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;

    document.getElementById("dropdown").style.display = "none";
    document.getElementById("dropbtn").style.display = "block";

    filmsPage.render()
}