$("#registerbtn").on("click", function (event) {
    event.preventDefault();
    const firstnameinput = $("#firstnameinput").val().trim();
    const usernameinput = $("#usernameinput").val().trim();
    const passwordinput = $("#passwordinput").val().trim();
    if (passwordinput.length < 8) {
        $(".warning").empty();
        const passwarn = $("<p>Your password must be a least 8 characters</p>");
        $(".warning").append(passwarn);
    } else {
        const userInfo = {
            firstname: firstnameinput,
            username: usernameinput,
            password: passwordinput
        };
        $.ajax({
            url: "/api/register",
            method: "POST",
            data: userInfo
        }).then(function (data) {
            window.location.href = "/";
        });
    }
});