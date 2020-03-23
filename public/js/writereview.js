// $("#submitbtn").on("click", function (event) {
//     event.preventDefault();
//     $(".submittext").empty();
//     reviewinfoajax();
// });

// function reviewinfoajax() {
//     const characterInput = $("#characterinput").val().trim();
//     const reviewInput = $("#reviewinput").val().trim();
//     const queryURL = 'https://gateway.marvel.com/v1/public/characters?name=' + characterInput + '&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9';
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         if (response.data.results.length === 0) {
//             const undefinedCatch = $("<p class='text-center'>Sorry, " + '"' + characterInput + '"' + " isn't a Marvel character! Make sure to enter a character that exists.</p>");
//             $(".submittext").append(undefinedCatch);
//         } else {
//             const name = response.data.results[0].name;
//             const imageURL = response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension;
//             console.log(name);
//             console.log(imageURL);
//             console.log(reviewInput);
//             const success = $("<h5 class='text-center'>Your Review For " + '"' + name + '"' + " Has Been Created!</h5>");
//             $(".submittext").append(success);
//         };
//     });
// };

// module.exports = reviewinfoajax();

// location.reload();

// module exports character ajax and require on myreviews js and display and adppenf there.........also edit descripton text to notmal font