"use strict";
//Define User class
class User {
    //constuctor 
    constructor(username, password, contactno, email, address) {
        this._username = username;
        this._password = password;
        this._contactno = contactno;
        this._email = email;
        this._address = address;
    }
    //getter and setter methods
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    get contactno() {
        return this._contactno;
    }
    get email() {
        return this._email;
    }
    get address() {
        return this._address;
    }
}
const submitUser = (formData) => {
    //Fetch form values using Object.fromentries()
    let form = Object.fromEntries(new FormData(formData));
    //call registerUser method with the constructed User object
    const user = new User(form.username, form.password, form.contact, form.email, form.address);
    //Do not modify or delete;return false will stop the page reload to happen after form submission
    registerUser("http://localhost:3000/users", user);
    return false;
};
//POST data using fetch() api
function registerUser(url, user) {
    // return the promise returned by the fetch() method
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
        document.getElementsByTagName("form")[0].innerHTML += "You have successfully registered!";
    });
    /*
    Post successful submission to server,
    the function should display the text `You have successfully registered!` on the page
    */
}
// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    registerUser
};
