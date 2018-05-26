function DeleteCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}