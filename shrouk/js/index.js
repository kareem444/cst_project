function logout(){
    deleteCookie(isLoginCookie)
    window.location.replace("../../login.html")
}