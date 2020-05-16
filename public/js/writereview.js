// THIS IS A FRONTEND POST THAT THAKES THE THE NAME, RUNS IT THRU THE MARVEL API, RETURNS THE OFFICIAL NAME AND IMG, AS WELL ASTHE REVIEW AND SEND THOSE 3 KEYS TO DATABASE IN AN OBJECT CALLED "newCharacterReview"
$("#submitbtn").on("click", function (event) {
    event.preventDefault();
    const characterName = $("#characterinput").val().trim();
    const queryURL = 'https://gateway.marvel.com/v1/public/characters?name=' + characterName + '&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        const newCharacterReview = {
            name: response.data.results[0].name,
            imgurl: response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension,
            review: $("#reviewinput").val().trim(),
        };
        console.log(newCharacterReview);
        $.ajax({
            url: "/api/create",
            method: "POST",
            data: newCharacterReview
        })
            .then(function (data) {
                console.log(data);
                window.location.href = "/all";
            });

        $("#characterinput").val("");
        $("#reviewinput").val("");
    })
});