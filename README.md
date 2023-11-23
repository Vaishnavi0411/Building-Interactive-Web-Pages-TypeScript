## Model a user object and store the user details using fetch API

**Note:** Prior to developing solutions for the practice, ensure the environment is set up with the installations listed below.

### Implementation Environment

#### Install Node.js

Refer to the instructions given [here](./implementation-env-setup/nodejs-installation-guide.md) file for downloading and installing `Node.js`.

#### Install json-server

Refer to the instructions given [here](./implementation-env-setup/json-server-installation-guide.md) file for downloading and installing `json-server`.

#### Install TypeScript

Refer to the instructions given [here](./implementation-env-setup/typescript-installation-guide.md) file for downloading and installing `TypeScript`.

### Context

User registration systems are screens, forms, or profile pages that request information from a user to create a web-based account or profile. A user registration system generally asks a user to create a username, password, contact and other information.​

Most of the web applications have user registration form to record enough user information to facilitate user authentication.​ The user can change his profile information later at any time when it is required.​

As a developer, create a simple user registration form using TypeScript where the users can fill and submit their personal information. These details are stored in a database so that it can be later used for authentication.

### Problem Statement

Write a TypeScript program to create an interactive user registration page that accepts the details - username, password, contact number, email, address - and stores them in a database. ​

![Registration Page View](./Registration-Page.png)

### Tasks

This exercise can be performed by the following tasks:

#### Task 1: Call a function when the form is submitted

   - Step 1: Add onsubmit event to invoke the function with the form element available in the `index.html` of the boilerplate code to accept form field values.​
      ```html
      <form id="reg-form" onsubmit="return submitUser(this)">
      ```
   - Step 2: Give the path as `public/js/user.js` inside the script tag of the `index.html`.​​
      ```html
         <script src="public/js/user.js"></script>
      ```
  

#### Task 2:​ Model the User Class

   - ​Step 1: Model the class User inside `user.ts` file provided in the boilerplate code.​
   - Step 2: Declare variables for the attributes identified in the class​.
   - Step 3: Declare a constructor to initialise these variables.
   - Step 4: Declare getter and setter property methods in the user class.

   ```ts
   class User {​
   private _username: string;​
   //Write all other variables ​
   constructor(username: string, password: string, contact: number, email: string, address: string) {​
       this._username = username;​
      //initialise all other variables similarly​
   }​
   set username(value: string) {​
       this.email = value;​
   }​
   get username() {​
      return this._username;​
   }​
   //Define getter and setter for all variables​
   ``` 

#### Task 3: Accept Values From the Form Fields
   - Step 1: Edit the `submitUser()` function inside `user.ts` file to accept the form field values using the FormData object and construct the User object.​  
   ```ts
       let form = Object.fromEntries(new FormData(formData));​
       const user: User = new User(<string>form.username, <string>form.password, parseInt(<string>form.contact), <string>form.email, <string>form.address);​
   ```
   - Step 2: call `registerUser()` method with the constructed User object.

#### Task 4: Store the User Details

   - Step 1: Edit the `registerUser()` function inside `user.ts` file to save the user data in `users.json` file using fetch API. ​
   - Step 2: Display the text "You have successfully registered!" for the successful response within the form conatiner.​
   - Step 3: Display error message on failure.
   ```ts
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
   ```
### Execution Steps for the Practice​

Once the solution is completed, following steps must be performed to compile and execute the solution code.
- Open the terminal and give the command `npm run build` to compile `.ts` files and verify the converted files are located inside `solution/public/js` folder.
- Open another terminal and give the command `json-server solution/json/users.json` to start the json-server.
- Open the `index.html` file using Live Server and test the output.​
- Once the user details are saved, it should display the text "You have successfully registered!" on the page.​
   **Note: This text message will be used to evaluate test case and hence any mismatch between the actual and expected values will result into test case failure.​**
- Open the `users.json` file to ensure that the new user data is added.​

**Note: This is a test enabled practice. Hence, the solution will have to undergo an automated evaluation process. The steps to test locally and on hobbes are given in the upcoming slides.**

### Test the Soluiton locally
Steps to test the code locally:

    1. Ensure the solution code is provided in the specified files only.
    2. From the command line terminal, set the path to the folder containing cloned boilerplate code.
    3. Run the command `npm install` to install the dependencies.
    4. Run the command `npm run test` to test the solution locally.
    5. Ensure all the test cases are passing locally 
    6. Refactor the code if the test cases are failing and re-run to test again.​
    7. Finally, push the solution to git for automated testing on `hobbes`.

### Test the solution on Hobbes
Test the solution on hobbes after pushing the code to git.

    1. Open the submission page at `https://codereview.stackroute.niit.com/#/submission`.
    2. Submit the solution.
    3. For the failed test cases, refactor the code locally and submit it for re-evaluation.



 ​
