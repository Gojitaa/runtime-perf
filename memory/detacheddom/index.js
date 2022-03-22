const movieList = ['Avengers', 'Spider Man', 'Wonder Woman', 'Mr. Robot', 'Supernatural', 'Life']
document.querySelector('#show').addEventListener('click', show)
document.querySelector('#hide').addEventListener('click', hide)
const root = document.querySelector('#root')

const cache = new Map();

function show(){
	const cachedList = cache.get('list')
	if(cachedList) {
		root.appendChild(cachedList)
		return;
	}

	const list = document.createElement("ul")
	list.id = 'movieList'
	movieList.forEach(movie => {
		const lisItem = document.createElement('li')
		lisItem.innerHTML = movie
		list.appendChild(lisItem)
	})

	root.appendChild(list)
	cache.set('list', list)
}

function hide(){
	const list = document.querySelector('#movieList')
	root.removeChild(list)
}
