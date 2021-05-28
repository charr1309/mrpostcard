import express from "express";
import morgan from "morgan";
import apiRouter from "./routes";
import config from "./config";
import path from 'path';


const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(express.static("public"));

app.use("/api", apiRouter);

app.use("*", (req,res,next) =>{
  try{
    res.sendFile(path.join(__dirname, "../public/index.html"))
  }catch(error){
    next(error);
  }
})
app.use((req, res, next) => {
  try {
    res.status(404).json("Not Found");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ msg: "Something went wrong :(" });
});

app.post("/api/insert", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const signup = req.body.signup;
  
  const sqlInsert = "INSERT INTO customers (username,password, email, signup) VALUES (?,?,?,?)"
  db.query(sqlInsert, [username, password, email, signup], (err, result) => {

  })
})

app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}...`)
);
