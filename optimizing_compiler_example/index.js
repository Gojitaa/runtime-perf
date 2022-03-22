const { perfomance, PerformanceObserver } = require('perf_hooks');

function calculateAdd(a,b){
  return a + b
}

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log('calculateAdd duration: ', perfObserverList.getEntriesByType('measure'));
  observer.disconnect();
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('start')

let i = 0;
%NeverOptimizeFunction(calculateAddOrConcatenate)
while(i < 1e9) {
  calculateAdd(6, 2)
  i++;
}

performance.mark('end')
performance.measure('Duration', 'start', 'end')
