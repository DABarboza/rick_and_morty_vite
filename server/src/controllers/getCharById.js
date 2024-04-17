const axios = require("axios");

const URL = "https://rym2.up.railway.app/api/character/${id}?key=dabarboza";

module.exports = async function getCharById(req, res) {
  try {
    const response = await axios.get(URL.replace("${id}", req.params.id));

    if (response.status === 200 && response.data) {
      const character = response.data;
      res.status(200).json({
        id: character.id,
        status: character.status,
        name: character.name,
        species: character.species,
        origin: character.origin,
        image: character.image,
        gender: character.gender,
      });
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};
