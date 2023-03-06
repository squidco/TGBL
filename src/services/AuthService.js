import decode from "jwt-decode"

class AuthService {
    getProfile() {
        return decode(this.getToken())
    }

    loggedIn() {
        console.log("CHECKING FOR TOKEN")
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token)
    }

    isTokenExpired(token) {
        console.log("CHECKING TOKEN EXPIRATION")
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

    }
}

export default new AuthService()