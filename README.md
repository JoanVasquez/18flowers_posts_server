# PRODUCTION DEMO

To check it out, follow the next link
https://practical-ride-59af26.netlify.app/

---

# INSTALLATIONS

Run the next command in the function directory to install all of the dependencies

    * npm i
    * npm install -g firebase-tools

---

# HOW TO RUN THE API

To run the application, go to the function directory and run

    * npm run serve => start the api
    * npm run test => start the unit test
    * npm run deploy => will deploy the server to a firebase project

---

# STRUCTURE

    * src
        * constants
            * BASE_URL
        * errors
            * errors.json
        * integrations
            * services
                * post.service.spec.ts
            * utils
                * response.spec.ts
        * models
            * Error.ts
            * Post.ts
        * routes
            * posts
                * index.ts
                * list.ts
                * update.ts
        * services
            * PostService.ts
        * utils
            * errorHandler.ts
            * response.ts
        * index.ts => main file to run our app
