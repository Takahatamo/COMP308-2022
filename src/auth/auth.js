const auth = {
    isLoggedIn : false,
    studentEmail: '',

    onAuthentication(loginEmail) {
        this.isLoggedIn = true;
        this.studentEmail = loginEmail; 
    },

    getLogInStatus(){
        return this.isLoggedIn;
    },

    getStudentEmail() {
        return this.studentEmail;
    },

    saveToken(userToken) {
        console.log('user email -> ', userToken);
        localStorage.setItem('token', JSON.stringify(userToken));
    },

    getToken() {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
     
        return userToken;
    }
}
 
export default auth;