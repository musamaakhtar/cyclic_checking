const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://cyclic:1234@cluster0.0mgw5wp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Connected Successfully");
  });
const Scheeema = new mongoose.Schema({
  Name: String,
  Father_Name: String,
  Email: String,
  Password: String,
});
const Col = mongoose.model("hello", Scheeema);

// app.post("/post",async (req,res)=>{
//     const khuchkhuch=await Col.create(req.body)
//     res.json({
//         success:true,
//         message:"data posted form collection",
//         khuchkhuch
//     })

// })
// app.get("/get",async (req,res)=>{
//     const khuch=await Col.find()
//     res.json({
//         success:true,
//         message:"data posted form collection",
//         khuch
//     })

// })
// app.get("/get/:id",async (req,res)=>{
//     const khuchorr=await Col.findById(req.params.id)
//     res.json({
//         success:true,
//         message:"data posted form collection",
//         khuchorr
//     })
// })
// app.put("/update/:id",async (req,res)=>{
//     const updatee=await Col.findByIdAndUpdate(req.params.id,req.body)
//     res.json({
//         success:true,
//         message:"data posted form collection",
//         updatee
//     })
// })
// app.delete("/delete/:id",async (req,res)=>{
//     const deletee=await Col.findByIdAndDelete(req.params.id,req.body)
//     res.json({
//         success:true,
//         message:"Data delete successfully",
//         deletee
//     })
// })

 app.get("/",(req,res)=>{
     res.send("<h1>Congratulation.! Muhammad Usama<br/>You should be done to your server live on Cyclic..</h1>")
 })

// ++++++++++++++++++++++data store on database==
app.post("/post", (req, res) => {
  res.send("data post have been done by usama");
  console.log(req.body);
  const db = new Col(req.body);
  db.save();
});
// ++++++++++++++++++++++data store on database==
// ++++++++++++++++++++++Getdata from database==
app.get("/print", async (req, res) => {
  const printt = await Col.find();
  res.send(printt);
});
// ++++++++++++++++++++++Getdata from database==

app.delete("/delete/:id", async (req, res) => {
  const deleted = await Col.findByIdAndDelete({ _id: req.params.id }, req.body);
  res.json({
    success: true,
    message: "data delete successfully",
    deleted,
  });
});
app.put("/put/:id", async (req, res) => {
  const edit = await Col.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.json({
    success: true,
    message: "data edit Successfully",
    edit,
  });
});

app.listen(5000, () => {
  console.log("server is running");
});
