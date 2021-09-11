/* Деструктуризация объекта */
function function1() {
    let film = {
        name: "Resivior Dogs",
        genre: "Crime / Detective film",
        counrty: "USA"
    };

    let { name: title, genre, counrty } = film;

    console.log(title);
    console.log(genre);
    console.log(counrty);
}

/* Стрелочная функция */
function function2() {
    let film = [
        "Full metal jacket",
        "Military / Drama",
        "USA"
    ];

    film.map((film) => {
        return console.log(film);
    });
}

/* Оператор Spread */
function function3() {
    let originalfilm = {
        name: "Justice league",
        director: "Joseph Whedon",
        counrty: "USA"
    };

    let directorsCut = {...originalfilm, director: "Zachary Snyder" }

    console.log(directorsCut);
}

/* Класс */
function function4() {
    class Film {
        name;
        genre;
        counrty;

        constructor(name, genre, counrty) {
            this.name = name;
            this.genre = genre;
            this.counrty = counrty;
        }
    }

    let list = {
        name: prompt("name"),
        genre: prompt("genre"),
        country: prompt("country")
    }

    film = new Film(
        list.name,
        list.genre,
        list.country
    );

    console.log(film);
}