const { Router } = require("express");
const { postUser } = require("../controllers/postUser");
const { postFav } = require("../controllers/postFav");
const getCharById = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { deleteFav } = require("../controllers/deleteFav");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = Router();

// router.post("/fav", postFav);

// router.delete("/fav/:id", deleteFav);

router.get("/character/:id", getCharById);
router.post("/login", postUser);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
