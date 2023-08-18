// const axios = require("axios");


// const getCharById = (res, id) => {
// 	axios(`https://rickandmortyapi.com/api/character/${id}`)
// 	.then(({data}) => {
// 		const char = {
// 			id: id,
// 			name: data.name,
// 			gender: data.gender,
// 			species: data.species,
// 			origin: data.origin,
// 			image: data.image,
// 			status: data.status,
// 		}
		
// 		res.writeHead(200, { 'Content-Type': 'application/json' });
// 		res.end(JSON.stringify(char));
// 	})
// 	.catch((err) => {
// 		res.writeHead(500, { 'Content-Type': 'text/plain' });
// 		res.end(error.message);
// 	});
// }


// module.exports = getCharById;

const axios = require("axios");
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) =>{
	try {
		const response = await axios.get(`${URL}${req.params.id}`)
		if(response.data){
			const { id, status, name, species, origin, image, gender } = response.data;
			res.json({ id, status, name, species, origin, image, gender });
		} else {
			res.status(404)
		}
	} catch (error) {
		res.status(500).send({message: error.message})
	}
}

module.exports = getCharById