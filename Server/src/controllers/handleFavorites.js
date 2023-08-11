let myFavorites = [];

const postFav = (req, res) => {
	let newFavorite = req.body;
	myFavorites.push(newFavorite);
	res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
	let id = parseInt(req.params.id);
    myFavorites = myFavorites.filter(character => character.id !== id);
    res.status(200).json(myFavorites);
}

module.exports = {
	postFav,
	deleteFav
}