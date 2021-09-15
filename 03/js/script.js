/* Класс для работы с localStorage */
class LocalStorageClass {
    constructor() {
        this.keyname = 'films';
    }

    getFilms() {
        const filmsLocalStorage = localStorage.getItem(this.keyname);
        if (filmsLocalStorage != null) {
            return JSON.parse(filmsLocalStorage);
        }
        return [];
    }

    putFilms(id) {
        let films = this.getFilms();
        let pushfilm = false;
        const index = films.indexOf(id);

        if (index == -1) {
            films.push(id);
            pushfilm = true;
        } else {
            films.splice(index, 1);
        }
        localStorage.setItem(this.keyname, JSON.stringify(films));

        return { pushfilm, films }
    }
}

const localStorageClass = new LocalStorageClass();