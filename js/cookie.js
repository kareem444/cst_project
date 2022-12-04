function getCookie(cookieName) {
    var cookies = allCookieList()
    return cookies[cookieName]
}

function setCookie(cookieName, cookieValue, expiryDate) {
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiryDate
}

function deleteCookie(cookieName) {
    var date = new Date()
    date.setTime(date.getTime() - 60 * 60 * 24 * 1000)

    setCookie(cookieName , "a" , "Thu, 01 Jan 1970 00:00:01 GM")
}

function allCookieList() {
    var cookiesList = document.cookie.split(";")

    var cookies = {}

    for (let index = 0; index < cookiesList.length; index++) {
        const element = cookiesList[index];
        cookies[element.split("=")[0].trim()] = element.split("=")[1];
    }

    console.log(cookies);
    return cookies;
}

function hasCookie(cookieName) {
    var cookies = allCookieList()
    return cookies.hasOwnProperty(cookieName)
}
