$.get("/api/all", function (data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const col = $("<div class='col-lg-3'>");
        const card = $("<div class='card my-3' id='charcard'>");
        const charImg = $("<img src='" + data[i].imgurl + "' class='card-img-top' id='charimg' alt='" + data[i].name + "'>");
        const cardBody = $("<div class='card-body'>");
        const charName = $("<h4 class='card-title'>" + data[i].name + "</h4>");
        const charReview = $("<p class='card-text'>" + data[i].review + "</p>");
        const deleteBtn = $("<button type='submit' class='btn btn-danger mx-1' data-id='" + data[i].id + "' id='delete'>Delete</button>");
        const updateBtn = $("<a type='submit' class='btn mx-1' data-id='" + data[i].id + "' id='update' href='update.html'>Update</a>");
        cardBody.append(charName, deleteBtn, updateBtn);
        card.append(charImg, cardBody);
        col.append(card);
        $("#myreviewsrow").prepend(col);
    }
})



// $("#delete").click(function () {
//     $.ajax({
//         method: "DELETE",
//         url: "/api/delete/" + $(this).attr("data-id")
//     }).then(function () {
//         window.location.href = "/all";
//     });
// });
// function deletePost(id) {
//     $.ajax({
//         method: "DELETE",
//         url: "/api/posts/" + id
//     })
//         .then(function () {
//             getPosts(postCategorySelect.val());
//         });
// }
// $("#update").click(function () {
//     //  window.location.href = "/update";
//   return  console.log("feriof")
//     // $.ajax({
//     //     method: "DELETE",
//     //     url: "/api/delete/" + $(this).attr("data-id")
//     // }).then(function () {
//     //     window.location.href = "/all";
//     // });
// });