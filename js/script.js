'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          bg = document.querySelector('.promo__bg'),
          genre = bg.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type = "checkbox"]');

    addForm.addEventListener('submit', function (event) {
            event.preventDefault();

            let newMovie = addInput.value;
            const fav = checkbox.checked;

            if (newMovie){

            if (newMovie.length > 21){
                newMovie = `${newMovie.substring(0, 22)}...`;
            }

            if (fav) {
                console.log('You have added your favourite movie');
            }

            movieDB.movies.push(newMovie);
            sortList(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            }

            event.target.reset();
        
        });

    const deleteAdv = (arr) => {

        arr.forEach(iteam => {
            iteam.remove();

        });
    };    

    const makeChanges = () => {
        genre.textContent = 'драма';
    
        bg.style.backgroundImage = "url(img/bg.jpg)";
    };

    const sortList = (arr) => {
        movieDB.movies.sort();
    };

    function createMovieList(movies, parent){
        parent.innerHTML = "";
        sortList(movies);

        movies.forEach((item , i) => {
            parent.innerHTML +=
              `
                <li class="promo__interactive-item"> ${i + 1} ${item}
                    <div class="delete"></div>
                </li> 
             `;
        });

        document.querySelectorAll('.delete').forEach((bin, i) => {
            bin.addEventListener('click', () => {
                bin.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieDB.movies, movieList);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});

