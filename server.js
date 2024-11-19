import express from 'express';

const app = express();
const port = 3000
app.listen(port,() => {
    console.log("Servidor escutando...");
});

//Criação de rota
app.get("/api", (rec, res) => {
    // status code 200 significa que esta OK // 
    res.status(200).send("rota inicial");
});

//Criação de rota => rec = requisicao, res = resposta do servidor
app.get("/games",(rec, res) => {

    //o status code tem que ser igual a 200, se for envie oq foi solicitado//
    res.status(200).send(
        {
            "nome_do_jogo": "Valorant",
            "empresa_desenvolvedora": "Riot Games",
            "ano": 2020,
            "genero": "FPS"
          }
    );
});

