// genres name and order
var genres = ["Action", "Comedy", "Drama"];
var genreorder = {
  0: "highrate",
  1: "highrate",
  2: "action",
  3: "action",
  4: "comedy",
  5: "comedy",
  6: "drama",
  7: "drama"
}

// Scroll Functionality
var scrollPerClick = 250;
var scrollAmount = {
  ".box-top" : 0,
  ".box-action" : 0,
  ".box-comedy" : 0,
  ".box-drama" : 0
};


// fonction qui requete tous les données nécessaires pour notre site
const getAllData = (url) => {
  let genreUrl= "";
  let finalUrl = "";
  let promises = [];
  promises.push(fetch(url));
  for (let j = 0; j <= genres.length; j++) {
    let check = 1;
    j === 0 ? genreUrl = url : genreUrl = url + "&genre=" + genres[j-1];

    while (check < 3) {
        if (check === 1) {
            finalUrl = genreUrl;
        }
        else {
            finalUrl = genreUrl + "&page=" + (check).toString();
        }
        promises.push(fetch(finalUrl));
        check++;
    }
  }
  Promise.all(promises)
  .then( (response) => {
    for(let j = 0; j < response.length; j++){
      if (j === 0) {
        handletopmovie(response[j].json(), true);
      } else {
        renderHtml(response[j].json(), j-1);
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });
}


// fonction qui requete toutes les informations sur un film depuis son id
const getmoviedata = (movieid, istopmovie) => {
  fetch(`http://127.0.0.1:8000/api/v1/titles/${movieid}`)
  .then(response => {
      return response.json();
  })
  .then( data => {
    if (istopmovie){
      rendertopmovie(data);
    } else {
      console.log(data);
    }
  });
}


// fonction qui sélectionne le film le plus coté
const handletopmovie = (result) => {
  result.then(data => {
    getmoviedata(data.results[0].id, true);
  })
}


// fonction qui affiche le film le plus coté
const rendertopmovie = (result) => {
  const bestmovie = document.getElementById("bestmovie");
  const topmovie = document.getElementById("top-movie-info");
  let movieInfo = `<h2>${result.title}</h2>
  <p>${result.description}</p><br>
  <button>More info</button>`;

  topmovie.insertAdjacentHTML('afterbegin', movieInfo);
  bestmovie.insertAdjacentHTML('afterbegin', `<img src="${result.image_url}" alt="Movie"/>`);
}


// fonction qui affiche tous les films des différentes catégories
const renderHtml =  (result, genreid) => {
  let htmlString = "";
  result.then(data => {
    if (genreid % 2 != 0) {
      data.results = data.results.slice(0, 2);
    }
    for (let k = 0; k < data.results.length; k++) {
        htmlString += `<div class="item"><img id=${data.results[k].id} src="${data.results[k].image_url}" alt="Movie"/></div>`;
    }
    const element = document.getElementById(genreorder[genreid]);
    element.insertAdjacentHTML('beforeend', htmlString);
  })
}


// lancer le script
getAllData("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score");


// fonction pour défiler les images des films par genre à gauche
const sliderScrollLeft = (genre) => {
  let sliders = document.querySelector(genre);
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount[genre] -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount[genre] = 0;
  }
}


// fonction pour défiler les images des films oar genre à droite
const sliderScrollRight = (genre) => {
  let sliders = document.querySelector(genre);
  if (scrollAmount[genre] <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount[genre] += scrollPerClick),
      behavior: "smooth"
    });
  }
}
