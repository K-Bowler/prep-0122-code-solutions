const person = {
  firstname: 'Kevin',
  lastname: 'Bowler',
  hobby: 'Videogames',
  job: 'None',
  perviousJob: 'Amazon'
};

console.log('person:', person);

var fullname = person.firstname + ' ' + person.lastname;
console.log('The persons name is:', fullname);

var job = person.job;
console.log('The persons current job is:', job);

var perviousJob = person.perviousJob;
console.log('The persons pervious job is:', perviousJob);

console.log('The complete person object', person);
