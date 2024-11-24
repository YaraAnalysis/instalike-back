import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão! A Torre Eiffel iluminada a noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris!");
});
