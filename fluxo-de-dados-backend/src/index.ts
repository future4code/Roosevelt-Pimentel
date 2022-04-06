import express, { Request, response, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/exercicio1", (req: Request, res: Response) => {
    // console.log("ok")
    res.status(200).send("Hello from express")
})

app.get("/user", (req: Request, res: Response) => {
    console.log("usuario encontrado")
    const yourUser = user.map((Base => Base))

    res.status(200).send(yourUser)
});

app.get("/post", (req: Request, res: Response) => {
    console.log("post encontrado")
    const yourPost = post.map((BasePost => BasePost))

    res.status(200).send(yourPost)
});

type Base = {
    id: number;
    name: string;
    phone: string | number;
    email: string | number;
    website: string | number;
};

type BasePost = {
    userID: number;
    id: number;
    title: string | number;
    body: string | number;
}

let post: BasePost[] = [
    {
        userID: 1,
        id: 1,
        title: "A morte",
        body: "Engraçado, né? Quando ela chega não há nada a fazer. A gente se choca, chora, grita, pergunta por quê? Mas no fundo sabemos, chegou o fim Não há idade para esse encontro, e egoísta que só eu e ela, eu querendo ficar e ela querendo que eu vá. Sinto que por mais que eu tenha onde me apegar, grudar e me jogar no chão e fazer birra, como era quando criança, não tem jeito, ela as vezes vence. Quando isso acontece o adeus aos nossos amores é inevitável!"
    },
    {
        userID: 1,
        id: 2,
        title: "Poeta",
        body: "Engraçado,Eu aqui com meu cigarro tentando bancar o poeta. Marcando esse papel com as cinzas da grafite,Buscando expressar todo meu prazer e desordem de minha vida.Confesso que sou um bom admirador e observador;Admiro a beleza da mulher e observo seu olhar disfarçando tantos mistérios.Óh mulheres, vocês são tão perfeitas, poder de sedução por natureza.Admiro quem ama e sabe amar. Observo os amantes apaixonados perdidos...Há tanto que admirar e observar por essa admiração e o que não falta nisso é o que sentimos.Sinto falta do abraço de um cachorro..."
    }
]

const user: Base[] = [
    {
        id: 1,
        name: "Fernando Araujo",
        phone: 1195769773,
        email: "fernandinho38@gmail.com",
        website: "fefe_dinodino"
    },
    {
        id: 1,
        name: "Roberto Oliveira",
        phone: 11989985764,
        email: "robertoVoaAlto@hotmail.com",
        website: "roberto@avi_ão"
    },
    {
        id: 1,
        name: "Roosevelt Andrade",
        phone: 11964982546,
        email: "rooseveltandrade14@gmail.com",
        website: "roozik18_Meu_Dia"
    }
]

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

