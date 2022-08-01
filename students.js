import express from "express";
import cors from "cors";
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const students = ["damian","alex"]

app.get("/", (req, res) => {
  let output = "<html><body><ul>";//starts
  
  //output = output + "hello there html" //middle
  for(let i = 0; i < students.length; i++) {
      output = output + 
      '<li><input type="checkbox">' + 
      students[i] + '</li>'

  }

  output = output + "</ul></body></html>"; //end

  res.send(output);
});

app.listen(port, () => {
  console.log("I was needed");
});
