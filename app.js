const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get("/students", async (req, res) => {
  let students;
  try {
    students = await Student.find();
    return res.status(200).json({ students });
  } catch (err) {
    return res.status(404).json({ message: "No students Found" });
  }
});

app.post("/students", async (req, res) => {
  const { name, email, phone } = req.body;
  let students;
  try {
    students = new Student({
      name,
      email,
      phone,
    });
    await students.save();
    console.log(res, "response");
    res.status(201).json({ students, message: "Add student success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ students, message: " can not add student " });
  }
});

app.delete("/students/:id", async (req, res) => {
  const id = req.params.id;
  let students;
  try {
    students = await Student.findByIdAndRemove(id);
    return res
      .status(200)
      .json({ result: students, message: "Student Successfully Deleted" });
  } catch (error) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
});

app.get("/students/:id", async (req, res) => {
  const id = req.params.id;
  try {
    Studentdata = await Student.findById(id);
    return res.status(200).json({ Studentdata });
  } catch (error) {
    return res.status(404).json({ Studentdata, message: "not found" });
  }
});

app.put("/students/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;

  try {
    Studentdata = await Student.findByIdAndUpdate(id, {
      name,
      email,
      phone,
    });
    Studentdata = await Studentdata.save();
    return res.status(200).json({ Studentdata });
  } catch (error) {
    return res.status(404).json({ message: "not found" });
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
