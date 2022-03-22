const { performance, PerformanceObserver } = require('perf_hooks');
const meteorits = require('./data.json')

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log('Time: ', perfObserverList.getEntriesByType('measure'))
});
obs.observe({ entryTypes: ['measure'] })


function filterDuplicates(meteorits) {
	performance.mark('start')
	const filtered = meteorits.filter((meteorit, index, self) => 
		index === self.findIndex(x => x.mass === meteorit.mass)
	)
	performance.mark('end')
	performance.measure('Time: O(N^2)', 'start', 'end')
	return filtered
}

function filterDuplicatesImproved(meteorits, duplicates = new Map()) {
	performance.mark('start')
	const filtered = meteorits.filter(meteorit => {
	const duplicate = duplicates.get(meteorit.mass);

		if(duplicate) {
			return false
		}
		duplicates.set(meteorit.mass, meteorit)
		return true
	})
	performance.mark('end')
	performance.measure('Time: O(N)', 'start', 'end')
	return filtered
}

filterDuplicates(meteorits)
filterDuplicatesImproved(meteorits)
obs.disconnect()