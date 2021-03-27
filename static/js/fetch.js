var genres = ["Action", "Comedy", "Drama"];
var index = 0;

function getAllData(){
    let url = "http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score";
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
            renderHtml(response[j].json(), j);
        }
    })
    .catch((error) => {
        console.log(error);
    });
}


let getmoviedata = (movieid) => {
    fetch(`http://127.0.0.1:8000/api/v1/titles/${movieid}`)
    .then(response => {
        return response.json();
    })
    .then( data => {
        console.log(data);
    });
}


let handledata = (result) => {
    var moviesbygenre = [];

    result.then(data => {
        console.log(data);
        for( let i = 0; i < data.length; i++){
            if ( i % 2 === 0){
                moviesbygenre = [];
            }
            moviesbygenre.push(data[i].json());
            if (i+1 % 2 === 0) {
                renderHtml(moviesbygenre, i);
            }
        }
        console.log(moviesbygenre);

    })
}

let  renderHtml =  (result, genreid) => {
    let htmlString = "";

    result.then(data => {
        if (genreid === 0 ){
            const bestmovie = document.getElementById("bestmovie");
            const topmovie = document.getElementById("top-movie-info");
            let movieInfo = `<h2>${data.results[0].title}</h2><br>
			<h2>Button and Infos</h2><br>
			<h3>${data.results[0].description}</h3><br>`;

            topmovie.insertAdjacentHTML('afterbegin', movieInfo);
            bestmovie.insertAdjacentHTML('afterbegin', `<img src="${data.results[0].image_url}" alt="Movie"/>`);
        }else{
            for (let k = 0; k < data.results.length; k++) {
                htmlString += `<div class="item"><img class="img-${index}" src="${data.results[k].image_url}" alt="Movie"/></div>`;
                index++;
            }
            if (genreid === 1 || genreid === 2) {
                const highrate = document.getElementById("highrate");
                
                highrate.insertAdjacentHTML('beforeend', htmlString);
            }else if (genreid === 3 || genreid === 4) {
                const action = document.getElementById("action");
        
                action.insertAdjacentHTML('beforeend', htmlString);
            }else if (genreid === 5 || genreid === 6) {
                const comedy = document.getElementById("comedy");
        
                comedy.insertAdjacentHTML('beforeend', htmlString);
            }else {
                const drama = document.getElementById("drama");
        
                drama.insertAdjacentHTML('beforeend', htmlString);
            }
        }
    })
}

getAllData();
getmoviedata(499549);


function sliderScrollLeftTop() {
  sliderstop.scrollTo({
    top: 0,
    left: (scrollAmountTop -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmountTop < 0) {
    scrollAmountTop = 0;
  }

  console.log("Scroll Amount: ", scrollAmountTop);
}

function sliderScrollRightTop() {
  if (scrollAmountTop <= sliderstop.scrollWidth - sliderstop.clientWidth) {
    sliderstop.scrollTo({
      top: 0,
      left: (scrollAmountTop += scrollPerClick),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmountTop);
}


function sliderScrollLeftAction() {
    slidersaction.scrollTo({
      top: 0,
      left: (scrollAmountAction -= scrollPerClick),
      behavior: "smooth",
    });
  
    if (scrollAmountAction < 0) {
      scrollAmountAction = 0;
    }
  
    console.log("Scroll Amount: ", scrollAmountAction);
}

function sliderScrollRightAction() {
    if (scrollAmountAction <= slidersaction.scrollWidth - slidersaction.clientWidth) {
      slidersaction.scrollTo({
        top: 0,
        left: (scrollAmountAction += scrollPerClick),
        behavior: "smooth",
      });
    }
    console.log("Scroll Amount: ", scrollAmountAction);
}


function sliderScrollLeftComedy() {
    sliderscomedy.scrollTo({
      top: 0,
      left: (scrollAmountComedy -= scrollPerClick),
      behavior: "smooth",
    });
  
    if (scrollAmountComedy < 0) {
      scrollAmountComedy = 0;
    }
  
    console.log("Scroll Amount: ", scrollAmountComedy);
}

function sliderScrollRightComedy() {
    if (scrollAmountComedy <= sliderscomedy.scrollWidth - sliderscomedy.clientWidth) {
      sliderscomedy.scrollTo({
        top: 0,
        left: (scrollAmountComedy += scrollPerClick),
        behavior: "smooth",
      });
    }
    console.log("Scroll Amount: ", scrollAmountComedy);
}


function sliderScrollLeftDrama() {
    slidersdrama.scrollTo({
      top: 0,
      left: (scrollAmountDrama -= scrollPerClick),
      behavior: "smooth",
    });
  
    if (scrollAmountDrama < 0) {
      scrollAmountDrama = 0;
    }
  
    console.log("Scroll Amount: ", scrollAmountDrama);
}

function sliderScrollRightDrama() {
    if (scrollAmountDrama <= slidersdrama.scrollWidth - slidersdrama.clientWidth) {
      slidersdrama.scrollTo({
        top: 0,
        left: (scrollAmountDrama += scrollPerClick),
        behavior: "smooth",
      });
    }
    console.log("Scroll Amount: ", scrollAmountDrama);
}


scrollPerClick = 100;
const sliderstop = document.querySelector(".box-top");
const slidersaction = document.querySelector(".box-action");
const sliderscomedy = document.querySelector(".box-comedy");
const slidersdrama = document.querySelector(".box-drama");
var scrollPerClick;
var ImagePadding = 20;

// Scroll Functionality
var scrollAmountTop = 0;
var scrollAmountAction = 0;
var scrollAmountComedy = 0;
var scrollAmountDrama = 0;