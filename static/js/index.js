function getData(url) {
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", url, true);
    myRequest.onload = function() {
        var results = JSON.parse(myRequest.responseText);
        console.log(results.content);
        renderHtml(results);
        console.log(typeof result);
    }
    myRequest.send();
}

function getAllData(){
    var check = 1;
    var moviesArray = [];
    var url = "http://127.0.0.1:8000/api/v1/titles/";
    var newUrl = ""
    while (check < 5) {
        var tempArray = [];
        if (check === 1) {
            tempArray = getData(url);
        }
        else {
            var newUrl = url + "?page=" + (check ).toString();
            tempArray = getData(newUrl);
        }
        for (movie in tempArray) {
            moviesArray.push(movie);
        }
        check++;
        console.log(moviesArray.length);
        console.log(moviesArray);
	}
    console.log("End");
}

function renderHtml(content) {
    var testid = document.getElementById("test");
    var htmlString = "<p>" + content.toString() + "</p>";
    testid.insertAdjacentHTML("beforeend", htmlString);
}
// getData("http://127.0.0.1:8000/api/v1/titles/");

getAllData();

