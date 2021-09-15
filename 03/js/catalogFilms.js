const htmlCatalogFimls = document.getElementById("catalogFilms");

/* Рендер списка всех фильмов */
class CatalogFilms {

    constructor() {
        this.labelAdd = 'Добавить в ваши фильмы';
        this.labelRemove = 'Удалить из ваших фильмов';
    }

    handleSetLocationStorage(element, id) {
        const { pushfilm, films } = localStorageClass.putFilms(id);

        if (pushfilm) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(films.length);
    }

    render() {
        const filmsstore = localStorageClass.getFilms();
        let htmlCatalog = '';

        for (let key in localStorage) {
            if (key.startsWith("id")) {
                let obj = JSON.parse(localStorage.getItem([key]));

                let activeclass = '';
                let activetext = '';

                if (filmsstore.indexOf(obj.id) === -1) {
                    activetext = this.labelAdd;
                } else {
                    activetext = this.labelRemove;
                    activeclass = ' ' + this.classNameActive;
                }

                htmlCatalog += `
                <div>
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
                        <td><button class="films-element__btn" id = "film-element__btn-showcomments_${obj.id}" onclick="commentShow('${obj.id}')">Посмотреть отзывы</button></td>
						<td><button onclick="deleteFilm(${obj.id});">Удалить</button></td>
					</tr>
                </table>
                <div class="comment-element" id="comment-element_${obj.id}">
						<div class="comments-container" id="comments-container${obj.id}">
						</div>
						<div class="comment-form" id="comment-form${obj.id}">
							<form>
							<h3>Напишите ваш отзыв:</h3>
							<div class="form-group">
								<label class="col-md-4 control-label" for="textinput">Ваше имя:</label>  
								<div class="col-md-4">
									<input id="commentinput_name_id${obj.id}" name="textinput" type="text" class="form-control input-md">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-4 control-label" for="textinput">Ваш род занятий:</label>  
								<div class="col-md-4">
									<input id="commentinput_occupation_id${obj.id}" name="textinput" type="text" class="form-control input-md">									
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-4 control-label" for="textarea">Ваш отзыв:</label>
								<div class="col-md-4">                     
									<textarea class="form-control_textarea" id="commentinput_text_id${obj.id}" name="textarea"></textarea>
								</div>
							</div>
							<span>Ваша оценка:</span>
							<div class="rating-area" id="commentinput_rating_id${obj.id}">
								<input type="radio" id="star-5_id${obj.id}" name="rating_id${obj.id}" value="5">
								<label for="star-5_id${obj.id}" title="Оценка «5»"></label>	
								<input type="radio" id="star-4_id${obj.id}" name="rating_id${obj.id}" value="4">
								<label for="star-4_id${obj.id}" title="Оценка «4»"></label>
								<input type="radio" id="star-3_id${obj.id}" name="rating_id${obj.id}" value="3">
								<label for="star-3_id${obj.id}" title="Оценка «3»"></label>
								<input type="radio" id="star-2_id${obj.id}" name="rating_id${obj.id}" value="2">
								<label for="star-2_id${obj.id}" title="Оценка «2»"></label>
								<input type="radio" id="star-1_id${obj.id}" name="rating_id${obj.id}" value="1">
								<label for="star-1_id${obj.id}" title="Оценка «1»"></label>
							</div>
							<button type="button" class="commentAddBtn" onclick="addComment(${obj.id})">Добавить отзыв</button>
							</form>
						</div>
					</div>
                <div>
				`;
            }
        }
        const html = `${htmlCatalog}`;
        htmlCatalogFimls.innerHTML = html;
    }
}

const filmsPage = new CatalogFilms();
filmsPage.render();