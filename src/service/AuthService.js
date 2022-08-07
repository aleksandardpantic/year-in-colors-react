


export default class AuthService{
    ROOT_URL = ""
    headers = { 'Content-Type': 'application/json' }
    isLoggedIn = () => {
        return true;
    }

    logIn = (username, password) => {
        const requestOptions = {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({ username: username, password: password})
        };
        fetch(this.ROOT_URL, requestOptions).then(response => response.json());
    }
}
