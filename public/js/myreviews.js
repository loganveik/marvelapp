$.get("/api/all", function (data) {
    if (data.length === 0) {
        const col1 = $("<div class='col-lg-2'></div>");
        const col2 = $("<div class='col-lg-8 viewmessage mt-5 text-center'>Write a review to view it here</div>");
        const col3 = $("<div class='col-lg-2'></div>");
        $("#myreviewsrow").append(col1, col2, col3);
    }
    else {
        for (let i = 0; i < data.length; i++) {
            const col = $("<div class='col-lg-6'></div>");
            const card = $("<div class='card mb-3' id='charcard'></div>");
            const row = $("<div class='row no-gutters'></div>");
            const col4 = $("<div class='col-lg-4'></div>");
            const charImg = $("<img src='" + data[i].imgurl + "' class='card-img' id='charimg' alt='" + data[i].name + "'>");
            const col8 = $("<div class='col-lg-8'></div>");
            const cardBody = $("<div class='card-body'></div>");
            const namedeleterow = $("<div class='row'></div>");
            const namedeletecol1 = $("<div class='col-lg-10'></div>");
            const namedeletecol2 = $("<div class='col-lg-2'></div>");
            const charName = $("<h4 class='card-title'>" + data[i].name + "</h4>");
            const deleteBtn = $("<i id='delete' class='fas fa-trash-alt' style='color: red;' data-id='" + data[i].id + "'></i>");
            const charReview = $("<p class='card-text text-center'>" + data[i].review + "</p>");
            namedeletecol1.append(charName);
            namedeletecol2.append(deleteBtn);
            namedeleterow.append(namedeletecol1, namedeletecol2);
            cardBody.append(namedeleterow, charReview);
            col8.append(cardBody);
            col4.append(charImg);
            row.append(col4, col8);
            card.append(row);
            col.append(card);
            $("#myreviewsrow").prepend(col);
        }
    }
})

$(document).on("click", "#delete", function () {
    $.ajax({
        method: "DELETE",
        url: "/api/delete/" + $(this).attr("data-id")
    }).then(function (data) {
        window.location.pathname = '/view/review'
    });
})

$(document).on("click", "#deleteall", function () {
    $.ajax({
        method: "DELETE",
        dataType: "json",
        url: "/api/deleteall"
    }).then(function () {
        window.location.pathname = '/view/review'
    })
});
