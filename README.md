# USU BioinfoCore Website

## Dev Environment

After you `git clone` the repo, run `npm install` to install all relevant packages.

After you run the npm install, you can run `npm start` to run the site locally.

Anytime you edit a file, the correct process will do what it needs to do and then restart.

If the website isn't working, then you might not have created the .env file. You'll need to create a file called `.env` in the 
`src/views` folder, and then you'll want to copy `{% set baseUrl = "http://localhost:3000/" %}` into that file.
