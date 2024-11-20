import express from 'express';

const app = express();
app.use(express.json());

const port = 3000
const posts = [
    {
        id : 1,
        descricao : 'imagem de gatinho',
        imagem : "https://placekitten.com/200/300"
    },
    {
        id : 2,
        descricao: 'Gatinho curioso',
        imagem: 'https://placekitten.com/200/300' // Gatinho mais alto
    },
    {
        id : 3,
        descricao: 'Gatinho sonolento',
        imagem: 'https://placekitten.com/200/300' // Gatinho quadrado
    },
    {
        id : 4,
        descricao: 'Gatinho brincalhão',
        imagem: 'https://placekitten.com/200/300' // Gatinho fofo
    },
    {
        id : 5,
        descricao: 'Gatinho em preto e branco',
        imagem: 'https://placekitten.com/200/300' // Gatinho em preto e branco
    }
];

app.listen(port,() => {
    console.log("Servidor escutando...");
});

//Criação de rota
app.get("/api", (req, res) => {
    // status code 200 significa que esta OK // 
    res.status(200).send("rota inicial");
});

//Criação de rota => req = requisicao, res = resposta do servidor
app.get("/games",(req, res) => {

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

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

//função para percorrer cada id dos objetos, buscando pelo index de cada objeto 
function buscar_post_por_ID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
    
}
app.get("/posts/:id", (req, res) => {
    const index = buscar_post_por_ID(req.params.id)
    res.status(200).json(posts[index]);

});


