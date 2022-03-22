const cache = {}
const handler = () => {
	for(let i=0; i<1e4;i++) {
		cache[i] = `cache${i}`
	}
}
const button = document.querySelector('#show')
button.addEventListener('click', handler)
// leiratkozas
button.removeEventListener('click', handler)