function getData(url) {
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", url, true);
    myRequest.onload = function() {
        var results = JSON.parse(myRequest.responseText);
        console.log(results.results);
        renderHtml();
    }
    myRequest.send();
}

function getAllData(){
    var check = 1;
    var url = "http://127.0.0.1:8000/api/v1/titles/?page=";
    var newUrl = ""
    while (check < 5) {
		var newUrl = url + (check + 1).toString();
        getData(newUrl);
	}
}

function renderHtml() {
    var testid = document.getElementById("test");
    var htmlString = "<p>This is a test</p><br><p>This is a test 2</p>";
    testid.insertAdjacentHTML("beforeend", htmlString);
}
getData("http://127.0.0.1:8000/api/v1/titles/");