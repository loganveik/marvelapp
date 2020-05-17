// this is for the update routes i couldnt get too work 100%, heres a dump of code so i dont forget them. think of it as a secret graveyard 

// FROM "myreviews.js"--------------------------------------------
// $(document).on("click", "#update", function () {
//     $.ajax({
//         method: "GET",
//         url: "/api/character/" + $(this).attr("data-id")
//     }).then(function (data) {
//         console.log(data);
//         $("#myreviewsrow").empty();
//         const form = $("<form>");
//         const updatetext = $("<h2 class='text-center' style='font-family: 'Bangers', cursive;'>Update your review</h2>");
//         const formgroup1 = $("<div class='form-group'></div>");
//         const name = $("<label for='firstnameinput'>Character Name:</label>");
//         const nameinput = $("<input type='text' class='form-control' id='characterinput'>");
//         const formgroup2 = $("<div class='form-group'></div>");
//         const review = $("<label for='reviewinput'>Review:</label>");
//         const reviewinput = $("<textarea class='form-control' id='reviewinput' rows='3'></textarea>");
//         const updatecancel = $("<div class='text-center' id='updatecanceldiv'></div>");
//         const update = $("<a type='submit' class='btn my-2 mx-2' id='updatebtn' data-id='" + data.id + "'>Update</a>");
//         const cancel = $("<a type='submit' class='btn my-2 ml-2' id='cancelbtn' href='/view/review'>Cancel</a>");
//         updatecancel.append(update, cancel);
//         formgroup2.append(review, reviewinput);
//         formgroup1.append(name, nameinput);
//         form.append(updatetext, formgroup1, formgroup2, updatecancel);
//         $("#myreviewsrow").append(form);
//         $("#characterinput").val(data.name);
//         $("#reviewinput").val(data.review);
//     });
// });

// $(document).on("click", "#updatebtn", function () {
//     $.ajax({
//         method: "PUT",
//         dataType: "json",
//         url: "/api/update"
//     }).then(function (response) {
//         const updataedCharacterReview = {
//             // name: response.data.name,
//             // imgurl: response.data.imgurl,
//             review: $("#reviewinput").val().trim()
//         };
//         console.log(updataedCharacterReview)
//         window.location.pathname = '/view/review'
//     })
// });

// FROM "api-routes.js"-------------------------------------------------------
 // app.get("/api/character/:id", function (req, res) {
  //   db.Character.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function (response) {
  //       res.json(response);
  //     });
  // });

  // app.put("/api/update", function (req, res) {
  //   db.Character.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function (response) {
  //       res.json(response);
  //     });
  // });