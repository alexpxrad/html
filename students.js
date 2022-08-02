import express from "express";
import cors from "cors";
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const students = ["damian","alex"]

app.get("/movies/:movietitle",  (req,res)=> {   // for http://localhost:4000/movie/matrix ... If i'm searching in the mongoDB database
  
  const movietitle = req.params.movietitle // get the actual movie title (everything to the right of "/movies/"
  console.log(`Looking for movie ${movietitle}`) // Show me (to prove the obvios) what the user passed to me.
  const query = {title: {'$regex': movietitle, '$options': 'i'}}; 


  let output = "<html><body> you asked for: " + movieTitle + "<br>";//starts
  
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
