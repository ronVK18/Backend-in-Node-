const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { log } = require("console");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("files", (err, files) => {
    res.render("index", { file: files });
  });
});
app.get("/file/:task", (req, res) => {
  fs.readFile(
    path.join(__dirname, "files", req.params.task),
    "utf-8",
    (err, data) => {
      if (err) return console.error(err);
      else
        res.render("show", {
          title: req.params.task,
          task: data,
        });
    }
  );
});
app.get("/edit/:task", (req, res) => {
  res.render("edit", { prev: req.params.task });
});
app.get("/delete/:task", (req, res) => {
  fs.unlink(path.join(__dirname, "files", req.params.task), (err) => {
    if (err) return console.error(err);
    else res.redirect("/");
  });
});
app.post("/edit", (req, res) => {
  console.log(req.body);
  fs.rename( path.join(__dirname, "files", req.body.prev), path.join(__dirname, "files", req.body.new),(err)=>{
    if(err) return console.error(err)
    else res.redirect("/")
  })
  
});
app.post("/create", (req, res) => {
  // console.log(req.body);
  fs.writeFile(
    `files/${req.body.title.split(" ").join("")}.txt`,
    req.body.task,
    (err) => {
      if (err) {
        console.log(err.message);
      }
      res.redirect("/");
    }
  );
});

app.listen(3000, (req, res) => {
  console.log("listening on 3000 port");
});
