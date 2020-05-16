// function getPostData(id) {
//     $.get("/api/posts/" + id, function (data) {
//         if (data) {
//             // If this post exists, prefill our cms forms with its data
//             titleInput.val(data.title);
//             bodyInput.val(data.body);
//             $("#reviewinput").val(data.review);
//             // If we have a post with this id, set a flag for us to know to update the post
//             // when we hit submit
//             updating = true;
//         }
//     });
// }

// $("#updatebtn").on("click", function (event) {
//     event.preventDefault();
//     const characterName = $("#characterinput").val().trim();
//     const queryURL = 'https://gateway.marvel.com/v1/public/characters?name=' + characterName + '&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9';
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         const newCharacterReview = {
//             name: response.data.results[0].name,
//             imgurl: response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension,
//             review: $("#reviewinput").val().trim(),
//         };
//         console.log(newCharacterReview);
//         $.ajax({
//             url: "/api/update",
//             method: "PUT",
//             data: newCharacterReview
//         })
//             .then(function (data) {
//                 console.log(data);
//                 window.location.href = "/all";
//             });

//         $("#characterinput").val("");
//         $("#reviewinput").val("");
//     })
// });
