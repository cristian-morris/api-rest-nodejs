import express from "express";
import db from "./config/db.js";
import indexRouter from "./routes/index.js";
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use("/", indexRouter);
app.use("*", (req, res) => {
    res.send("error")
})

app.listen(app.get("port"), ()=>{
    console.log("funcionando en :", app.get("port"));
});

db.connect().then(() => {
    console.log("conectado ala base de datos");
}).catch((err) => {
    console.log("el error es: ", err);
})