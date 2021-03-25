var genres = ["Action", "Comedy", "Drama"];

function getAllData(){
    let url = "http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score";
    let genreUrl= "";
    let finalUrl = "";
    let promises = [];
    for (let j = 0; j <= genres.length; j++) {
        console.log(`Testing ${j}`);
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
        for (let k = 0; k < data.results.length; k++) {
            htmlString += `<div class="item"><img src="${data.results[k].image_url}" alt="Movie"/></div>`
        }
        if (genreid === 0 || genreid === 1) {
            const bestmovie = document.getElementById("bestomvie");
            const highrate = document.getElementById("highrate");
            
            highrate.insertAdjacentHTML('beforeend', htmlString);
        }else if (genreid === 2 || genreid === 3) {
            const action = document.getElementById("action");
    
            action.insertAdjacentHTML('beforeend', htmlString);
        }else if (genreid === 4 || genreid === 5) {
            const comedy = document.getElementById("comedy");
    
            comedy.insertAdjacentHTML('beforeend', htmlString);
        }else {
            const drama = document.getElementById("drama");
    
            drama.insertAdjacentHTML('beforeend', htmlString);
        }
    })
}

getAllData();