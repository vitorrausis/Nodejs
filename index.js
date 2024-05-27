const express = require ("express");
const app = express();
app.use(express.json());


app.listen(3080,()=>{
    console.log("Servidor Rodando");
})

let games = [
    {title:"Elden Ring", studio: "FromSoftware", price:60},
    {title:"Persona 5 Royal", studio: "Atlus", price:300},
    {title:"Call of Duty: Modern Warfare 3", studio: "Infinity Ward", price:350},
    {title:"Disco Elysium", studio: "ZA/UM", price:50},
    {title:"Neon White", studio: "Angel Matrix", price:125},
    {title:"NORCO", studio: "Geography of Robot", price:30},
    {title:"Stray", studio: "BlueTwelve", price:150},
    {title:"God of War", studio: "Santa Monica Studios", price:250},
    {title:"Ghostwire Tokyo", studio: "Tango Gameworks", price:300},
    {title:"F1 23", studio: "Codemasters", price:350}


]

app.get("/",(req,res)=>{
    res.json(games);
})

app.post("/novogame",(req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title, studio, price }

    games.push(newGame);

    res.send("OK");

    app.put('/novogame/:index', (req, res)=>{
        const{ index } = req.params;
        let title = req.body.title;
        let studio = req.body.studio;
        let price = req.body.price;

        games[index] = {title,  studio, price};

        return res.json(games);
    })

});

app.delete("/:index",(req, res) => {
    const {index} = req.params;
    games.splice(index,1);
    return res.json({message: "O jogo foi deletado"});
})