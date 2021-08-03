# MtnLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Angular CLI

Run `npm install -g @angular/cli@9.1.12` to install Angular CLI. If node is not installed in machine, download it from `https://nodejs.org/en/download/` and install.

## Node modules

Run `npm install` to install all the packages. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests and see the code coverage via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Login Detail

email-priya@ibm.com
pwd-ibm@1234

## What to improve?
<details>
<summary>Forgot password implementation</summary>
Sending link to mail id to change the password. Or use OTP to allow the user to change the password.
</details>
<details>
<summary>User Registration / Sign-Up</summary>

 1. Password complexity - that means it contains at least three different character sets (e.g., uppercase characters, lowercase characters, numbers, or symbols). Not to allow the user to give their Name. Donot allow user to paste the password. 
 2. Give 10 security question that can be used while login as part of multi factor authentication. 
 3. Sending account activation link to mail id given while registration. 
 4. Verify email while registration.
 5. Integrate a password meter to know the strength of password in registration form and password change form.

</details>
<details>
<summary>Password Maintainence</summary>

 1. Maintain Password history and restrict the user to give the last 5 passwords.
 2. Password rotation-Passwords must be changed every 90 days or less
 3. Use of account lockouts for bad passwords, with a limit of 5 or fewer bad attempts.
 4. Multi factor authentication - recaptcha, answering security question, OTP, something similar to gmail number matching.
 5. Notification anything related to password change or bad attempts.
 6. Notification 15 days before when password is about to expire.
 
</details>

