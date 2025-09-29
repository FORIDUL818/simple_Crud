const app=require("./app");

// server listen
const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})

// server listen



