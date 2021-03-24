function getData(url) {
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", url, true);
    myRequest.onload = function() {
        console.log(JSON.parse(myRequest.responseText).results);
        console.log(typeof result);
    }
    myRequest.send();
}

function getAllData(){
    var check = 1;
    var moviesArray = [];
    var url = "http://127.0.0.1:8000/api/v1/titles/?imdb_score_min=9";
    var newUrl = ""
    while (check < 13) {
        if (check === 1) {
            getData(url);
        }
        else {
            var newUrl = url + "&page=" + (check ).toString();
            getData(newUrl);
        }
        check++;
	}
    console.log("End");
}

function renderHtml(content) {
    var testid = document.getElementById("test");
    var htmlString = "<p>" + content.toString() + "</p>";
    testid.insertAdjacentHTML("beforeend", htmlString);
}

function renderMovieHtml(content) {
    var testid = document.getElementById("action");
    for(movie in listmovies) {
        htmlString = "<p>" + content.toString() + "</p>";
    }
    var htmlString = "<p>" + content.toString() + "</p>";
    testid.insertAdjacentHTML("beforeend", htmlString);
}
// getData("http://127.0.0.1:8000/api/v1/titles/");

getAllData();

