const values = [2,1,7,4,5,13,3,8,9,16,7,11,12,6,14,15,10,17];

const performOperations = (function (values) {
	const uniqueMap = new Map();
	const filtered = values.filter(value => {
		const isPresentInMap = uniqueMap.get(value)
		if(isPresentInMap) {
			return false
		}
		uniqueMap.set(value, true)
		return true
	})

	const sorted = filtered.sort((a,b) => a - b)
	sorted.forEach(value => console.log(`${value}\n`))
})

performOperations(values)
console.log('Initial values: ', values)

