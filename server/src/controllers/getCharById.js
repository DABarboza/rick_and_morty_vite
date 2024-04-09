const axios = require("axios");
exports.getCharById = (res, id) => {
  axios(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`)
    .then((resp) => {
      let { name, gender, species, origin, image, status } = resp.data;
      return {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
    })
    .then((resp) => {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(resp));
    })
    .catch((reason) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end(JSON.stringify(reason.message));
    });
};
