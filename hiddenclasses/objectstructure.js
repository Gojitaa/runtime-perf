const { perfomance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log('time: ', perfObserverList.getEntriesByType('measure'));
  observer.disconnect();
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('start')

const employees = [
  {name: 'Adam', s: 346 },
  {name: 'Clark', s: 236},
  {name: 'Sydney', s: 401},
  {name: 'Kendra', s: 176},
  {name: 'Tom', s: 168}
]
const NUMBER_OF_PAYMENTS = 1e5
let i = 0
let sum = 0
while(i < NUMBER_OF_PAYMENTS) {
  sum += employees[i & employees.length - 1].s
  i++;
}
console.log(sum)
performance.mark('end')
performance.measure('Duration', 'start', 'end')
