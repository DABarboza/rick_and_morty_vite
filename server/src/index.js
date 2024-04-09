const http = require("http");
const PORT = 3001;
const { getCharById } = require("./controllers/getCharById");
// const characters = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    //   if (url.includes("/rickandmorty/character")) {
    //     const id = Number(url.split("/").pop());
    //     const character = characters.find((char) => char.id === id);
    //     res.writeHead(200, { "Content-type": "application/json" });
    //     res.end(JSON.stringify(character));
    //   }
    if (url.includes("/rickandmorty/character")) {
      const urlArray = url.split("/");
      const id = Number(urlArray.pop());

      try {
        getCharById(res, id);
      } catch (error) {
        console.log(error);
      }
    }
  })
  .listen(PORT, "localhost");
