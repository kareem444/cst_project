window.onload = function (e) {
    var allCookies = allCookieList();
    if (allCookies[userNameCookie] != null && allCookies[passwordCookie] != null) {
        window.location.replace(loginPage)
        return;
    }

    var userNameIput = document.getElementById("username")
    var passwordIput = document.getElementById("password")
    var confirmPasswordIput = document.getElementById("confirm_password")

    var Incorrect = document.getElementsByClassName("Incorrect")[0]

    var btn = document.getElementsByTagName("button")[0]

    btn.addEventListener('click', clickBtn)

    function clickBtn(e) {
        e.preventDefault()
        if (emptyField()) {
            Incorrect.innerHTML = "Please Check All Inputs !"
            return;
        }

        if (passwordIput.value !== confirmPasswordIput.value) {
            Incorrect.innerHTML = "Password and Confirm Password Dosn't Match !"
            return;
        }

        var date = new Date()
        date.setTime(date.getTime() + 60 * 60 * 24 * 1000)

        setCookie(userNameCookie, userNameIput.value, date)
        setCookie(passwordCookie, passwordIput.value, date)

        window.location.replace(mainPageUrl)
    }

    function emptyField() {
        return userNameIput.value == "" || passwordIput.value == "" || confirmPasswordIput.value == ""
    }
}