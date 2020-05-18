// THIS IS A FRONTEND POST THAT THAKES THE THE NAME, RUNS IT THRU THE MARVEL API, RETURNS THE OFFICIAL NAME AND IMG, AS WELL ASTHE REVIEW AND SEND THOSE 3 KEYS TO DATABASE IN AN OBJECT CALLED "newCharacterReview"
$("#submitbtn").on("click", function (event) {
    event.preventDefault();
    const characterName = $("#characterinput").val().trim();
    const characterReview = $("#reviewinput").val().trim();
    const queryURL = 'https://gateway.marvel.com/v1/public/characters?name=' + characterName + '&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.data.results.length === 0) {
            $("#warningdiv").empty();
            const warning = $("<h3>Sorry, " + "'" + characterName + "'" + " doesn't exist or was spelt wrong. Please try again!</h3>");
            $("#warningdiv").append(warning);
        } else if (characterReview.length > 140) {
            $("#warningdiv").empty();
            const warning = $("<h3>Sorry, a review must be under 140 characters! You're currently at " + characterReview.length + " characters.</h3>");
            $("#warningdiv").append(warning);
        } else {
            const newCharacterReview = {
                name: response.data.results[0].name,
                imgurl: response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension,
                review: characterReview,
            };
            console.log(newCharacterReview)
            $.ajax({
                url: "/api/create",
                method: "POST",
                data: newCharacterReview
            }).then(function () {
                window.location.href = "/view/review";
            });
        }
    })
});


$("#profilebtn").click(() => window.location.pathname = '/profile');
