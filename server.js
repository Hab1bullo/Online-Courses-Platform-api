import { app } from "./src/app.js";


const PORT = process.env.PORT

app.listen(PORT, (err) => {
    if(err){
        console.log(err)
    }
    console.log("Server working on port", PORT);
});
