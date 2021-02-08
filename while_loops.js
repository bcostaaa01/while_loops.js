// this is a practical example of how a while and a do while loop work in JavaScript

let totalUpdates = 10; // if you change this value to one that is under 10 (8, for example), the log will be: '9, 10, No longer tracking the user.'
do {
    totalUpdates++; // this increments totalUpdates by 1
    
    console.log(totalUpdates);
}
while(totalUpdates < 10); 

console.log('No longer tracking the user.');

// log: 'No longer tracking the user.' 
