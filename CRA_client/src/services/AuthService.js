import decode from "jwt-decode"

class AuthService {
    getProfile() {
        return decode(this.getToken())
    }

    loggedIn() {
        const token = this.getToken()
        // the double !! operator turns the token into a boolean value
        // one ! turns this boolean into the value opposite of what the 
        // original value was. two ! operators will change it back to what it was originally
        return !!token && !this.isTokenExpired(token)
    }

    isTokenExpired(token) {
        //Checks if the users token has expired
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        // Retrieves token from cookies
        return document.cookie
            .split('; ').find((row) => row.startsWith("token="))
            ?.split("=")[1];
    }

    login(token) {
        // sets token cookie
        document.cookie = `token=${token}; Secure;`
    }

    logout() {
        // Cookies are weird. By setting the expiration date to a time in the past
        // The cookie will get rid of itself
        // Since I don't store multiple cookies here I haven't written a create cookie/delete cookie function
        document.cookie = `token="";expires=Thu, 01 Jan 1970 00:00:01 GMT";`
        window.location.replace(window.location.origin)
    }
}

export default new AuthService()