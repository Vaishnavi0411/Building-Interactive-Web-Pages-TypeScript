//Define User class
class User {
    //Field declartions
    private _username: string
    private _password: string
    private _contactno: string
    private _email: string
    private _address: string

    //constuctor 
    constructor(username: string, password: string, contactno: string, email: string, address: string) {
        this._username = username;
        this._password = password;
        this._contactno = contactno;
        this._email = email;
        this._address = address;
    }

    //getter and setter methods
    get username() {
        return this._username
    }
    get password() {
        return this._password
    }
    get contactno() {
        return this._contactno
    }
    get email() {
        return this._email
    }
    get address() {
        return this._address
    }
}

const submitUser = (formData: any) => {
    //Fetch form values using Object.fromentries()
    let form = Object.fromEntries(new FormData(formData));
    //call registerUser method with the constructed User object
    const user: User = new User(<string>form.username, <string>form.password,<string>form.contact, <string>form.email, <string>form.address);
    //Do not modify or delete;return false will stop the page reload to happen after form submission
    registerUser("http://localhost:3000/users",user);
    return false;
}

//POST data using fetch() api
function registerUser(url: string, user: User) {
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
}

// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    registerUser
}