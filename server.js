let express = require("./src/express");
const app = express();

app.get("/", (req, res, next) => {
    console.log("First middleware called");
    res.write("I am a Response from the first matching route, Hello world!");
    next(); // Pass control to the next matching route
});

app.get("/", (req, res, next) => {
    console.log("Second middleware called");
    res.write("I am a Response from the second matching route, Hello world2!");
    res.end();
    // No need to call next() here, as we are ending the response
});

app.post("/post", (req, res) => {
    res.writeHead(200);
    res.write("Data from post request :)");
    res.end();
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
