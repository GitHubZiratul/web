const htmlHeader = document.getElementById("header");

class Header {

    /* Окно с вашими фильмами yourFilms.js */
    handlerOpenYourFilms() {
        yourFilms.render();
    }

    /* Форма добавления фильма addFilm.js*/
    handlerOpenAdderPage() {
        if (htmlAdder.style.display == "none") {
            htmlAdder.style.display = "block";
        } else {
            htmlAdder.style.display = "none";
        }
    }

    /* Фильтр filter.js*/
    handlerOpenFilter() {
        if (htmlFilter.style.display == "none") {
            htmlFilter.style.display = "inline-block";
        } else {
            htmlFilter.style.display = "none";
        }
    }

    /* Навигация */
    render(count) {
        const html = `
                <div class="header-container">
                    <div class="header-block" onclick="filmsPage.render();">Фильмотека</div>
                    <div class="header-block" onclick="headerPage.handlerOpenAdderPage();">Добавить фильм</div>
                    <div class="header-block" onclick="headerPage.handlerOpenFilter();" id="dropbtn">Фильтр</div>
                </div> 
                `;
        htmlHeader.innerHTML = html;
    }
}

const headerPage = new Header();

/* Работа с localStorage script.js */
const filmsstore = localStorageClass.getFilms();
headerPage.render(filmsstore.length);