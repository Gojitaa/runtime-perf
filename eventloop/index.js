/*function renderItems(){
	const MAX_NUM = 1e3
	const itemsToRender = []

	for(let i=0; i<MAX_NUM; i++) {
		// blocking
		itemsToRender.push({ id: i })
	}

	return itemsToRender
}*/

// console.log('UNOPT: ', renderItems())

const MAX_NUM = 1e7;
let renderedAmount = 0;
const itemsToRender = []
function renderItemsImproved(pageSize = 1000){
	for(let i=0; i<pageSize; i++) {
		itemsToRender.push({ id: renderedAmount + i })
	}
	renderedAmount += pageSize
	if(renderedAmount < MAX_NUM) {
		queueMicrotask(renderItemsImproved)
	}
}
renderItemsImproved()

