const { perfomance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log('time: ', perfObserverList.getEntriesByType('measure'));
  observer.disconnect();
});
obs.observe({ entryTypes: ['measure'] });

class Employee {
  constructor(name, age, salary){
    this.name = name
    this.age = age
    this.salary = salary
  }
}

performance.mark('start')

let i = 0;
while(i < 1e5) {
  const e = new Employee(`Employee${i}`,23,5000+i)
  delete e.name
  i++;
}

performance.mark('end')
performance.measure('Duration', 'start', 'end')
