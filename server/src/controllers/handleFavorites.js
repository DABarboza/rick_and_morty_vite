let myFavorites = [];

function postFav(req, res) {
  const { body } = req;
  myFavorites.push(body);
  res.json(myFavorites);
}

function deleteFav(req, res) {
  const { params } = req;
  const { id } = params;
  myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));
  res.json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
};
