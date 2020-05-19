$("#logoutbtn").on("click", function (event) {
    $.ajax({
        url: "/logout",
        method: "GET"
    }).then(function () {
        window.location.href = "/"
            // If there's an error, log the error
        })
});
        