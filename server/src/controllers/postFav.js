const { Favorite } = require("../DB_connection");

exports.postFav = async (req, res) => {
  const { id, name, status, species, gender, origin, image } = req.body;

  try {
    if (!id || !name || !status || !species || !gender || !origin || !image)
      return res.status(401).json({ message: "Faltan datos" });

    const [charFav, created] = await Favorite.findOrCreate({
      where: { id },
      defaults: {
        name,
        status,
        species,
        gender,
        origin,
        image,
      },
    });

    if (!created) {
      return res.status(409).json({ message: "Ya existe" });
    }
    const allFavs = await Favorite.findAll();
    return res.status(200).json(allFavs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
