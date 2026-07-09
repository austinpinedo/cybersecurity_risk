# cybersecurity_risk
Basic login form to mimic OWASP Juice Shop with client side and server side validation. Has an intentional XSS vulnerability.

## Files
- index.html - the login form with client side validation
- server.js - a Node server that serves the page and revalidates the input data on server side
- package.json - declares dependencies

## Features
#### Client side validation
- Prevent empty fields
- Check that email contains '@'
- Checks password length is at least 8 characters

#### Server side validation
- Repeats the same checks on the backend so it doesn't fully rely on the browser. Client side checks can be bypassed so the server should never trust client input.

## How to Run
1. Install Node.js
2. In the folder, run
   ```
   npm install
   node server.js
   ```
3. Open `http://localhost:3000` in your browser

## The Vulnerability
The login status message is written to the page using `innerHTML` instead of `textContent` so any HTML in the email field gets rendered and executed.

## How to Exploit
1. Email field `a@a <img src=x onerror=alert('XSS')>`
2. Password: any 8 characters
3. Click Login
4. JS alert box pops up, showing that it ran

## How to Fix
Replace `innerHTML` with `textContent` so input is shown as text instead of rendering as HTML.
