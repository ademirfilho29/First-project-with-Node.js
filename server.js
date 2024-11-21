import express from 'express';
//NUNCA ESQUECER DO .js NO FINAL//
import conectarAoBanco from './src/config/db_config.js';
const conexao = await conectarAoBanco(process.env.STRING_DE_CONEXAO);


const app = express();
app.use(express.json());


// Utiliza async/await para realizar a consulta de forma assíncrona, evitando bloquear a execução do código.
async function getTODOSPOSTS(){
// Essa função busca todos os documentos da coleção "dados_alura" no banco de dados "sample_mflix".
    const db = conexao.db("sample_mflix")
    const collection = db.collection("dados_alura")
    // Retorna um array com todos os documentos encontrado
    return collection.find().toArray()

}

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

app.get("/posts", async (req, res) => {
    const resultado = await getTODOSPOSTS()
    res.status(200).json(resultado);
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


