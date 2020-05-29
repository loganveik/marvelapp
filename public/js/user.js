// this saves your new account info into the users table in the db
$("#registerbtn").on("click", function (event) {
    event.preventDefault();
    const firstnameinput = $("#firstnameinput").val().trim();
    const usernameinput = $("#usernameinput").val().trim();
    const passwordinput = $("#passwordinput").val().trim();
    if (passwordinput.length < 8) {
        $(".warning").empty();
        const passwarn = $("<p>Your password must be a least 8 characters</p>");
        $(".warning").append(passwarn);
    } else if (firstnameinput === "" || usernameinput === "" || passwordinput === "") {
        $(".warning").empty();
        const passwarn = $("<p>One or more of the fields are blank. Please fill it out.</p>");
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
        }).then(function () {
            window.location.href = "/";
        });
    }
});

$("#loginbtn").on("click", function (event) {
    event.preventDefault();
    const usernameinput = $("#usernameinputlogin").val().trim();
    const passwordinput = $("#passwordinputlogin").val().trim();

    if (usernameinput === "" || passwordinput === "") {
        $(".warninglogin").empty();
        const passwarn = $("<p>One or more of the fields are blank. Please fill it out.</p>");
        $(".warninglogin").append(passwarn);
    } else {
        const userData = {
            username: usernameinput,
            password: passwordinput
        };

        if (!userData.username || !userData.password) {
            return;
        }

        loginUser(userData.username, userData.password);

        function loginUser(username, password) {
            $.post("/api/login", {
                username: username,
                password: password
            }).then(function () {
                window.location.replace("/profile");
            })
        }
    }

});
