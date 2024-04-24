const express = require("express");
const app = express();
app.use((req, res, next) => {
    console.log("Middleware chala ")
    next();
})
app.get("/", (req, res) => {
  res.end("Hello World");
});
app.get("/profile",(req,res,next)=>{
    return next(new Error("Page is not available"))
})
// custom error handler
app.use((req, res, next) => {
  res.status(404).send("Oops! Page not found");
}); // when page not fiund 
app.use((err,req,res,next)=>{
  console.error( err.stack)
  res.status(500).send("Something Went Wrong")
})
app.listen(3000);
