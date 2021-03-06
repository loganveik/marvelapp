$("#searchbtn").on("click", function (event) {
    event.preventDefault();
    comicajax();
    $(".comicdisplay").empty();
});

function comicajax() {
    event.preventDefault();
    const comicName = $("#searchedComic").val();
    const queryURL = 'https://gateway.marvel.com/v1/public/comics?title=' + comicName + '&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.data.results.length === 0) {
            const undefinedCatch = $("<h3>Sorry, couldn't find " + '"' + comicName + '"' + "! Check your spelling, or search another comic!</h3>");
            $(".comicdisplay").append(undefinedCatch);
        } else {
            const showingResultsFor = $("<h3 class='showingresultsfor'>Showing results for " + '"' + comicName + '"' + "</h3>");
            $(".comicdisplay").append(showingResultsFor);
            const comicLoop = response.data.results;
            for (let i = 0; i < comicLoop.length; i++) {
                const cardBody = $("<div class='mb-3 w-auto h-auto p-3 rounded' style='background-color: #f7e75d; border-style: solid; border-color: black;''></div>");
                const cardBodyNew = $("<div class='row no-gutters'></div>");
                cardBody.append(cardBodyNew);
                const picCol = $("<div class='col-md-4'></div>");
                cardBodyNew.append(picCol);
                const imageURL = response.data.results[i].thumbnail.path + '.' + response.data.results[i].thumbnail.extension;
                const image = $("<img class='image'>").attr("src", imageURL);
                picCol.append(image);
                const textCol = $("<div class='col-md-8'></div>");
                cardBodyNew.append(textCol);
                const textColDiv = $("<div class='card-body'></div>");
                textCol.append(textColDiv);
                const searchedComicTitle = $("<h3 class='title'>" + response.data.results[i].title + "</h3>");
                const searchedComicDesc = $("<p class='description'>" + response.data.results[i].description + "</p>");
                const searchedComicUrl = $("<a class='price' href=" + '"' + response.data.results[i].urls[0].url + '"' + ">Click Here to Learn More!</a>");
                textColDiv.append(searchedComicTitle, searchedComicDesc, searchedComicUrl);
                $(".comicdisplay").append(cardBody);
            };
        };
    });

};

$("#profilebtn").click(() => window.location.pathname = '/profile');

$("#logoutbtn").on("click", function (event) {
    $.ajax({
        url: "/logout",
        method: "GET"
    }).then(function () {
        window.location.href = "/"
    })
});