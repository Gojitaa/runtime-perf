class Movie {
	constructor(name){
		this.name = name
	}
}

class User {
	constructor(username, favMovies) {
		this.username = username
		this.favorites = favMovies
	}

	getFavorites() {
		return this.favorites
	}
}

const movies = [
	new Movie('Avengers 1'),
	new Movie('Avengers 2'),
	new Movie('Avengers 3'),
	new Movie('Spider Man'),
	new Movie('Wonder Woman')
]
const userFavorites = [];
for(let i=0; i<1e7; i++) {
	userFavorites.push(new User(`username${i}`, movies).getFavorites())
}