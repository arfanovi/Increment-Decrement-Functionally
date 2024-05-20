

// console.log(index)
/*
const countEl = document.getElementById('count-el');

let count = 0;
function increment() {
    count++;
    countEl.textContent = count;
}

document.getElementById('increment-btn').addEventListener('click' , increment)


function decrement() {
    if(count > 0){
        count --;
        countEl.textContent = count;
    }
}

document.getElementById('decrement-btn').addEventListener('click' , decrement);

*/


const countEl  = document.getElementById('count-el');
let count = 0;


 const updateCount = (action) => {
    if(action === 'increment'){
        count++;
    }
    else if (action === 'decrement' && count > 0){
        count--;
    }
    countEl.textContent = count
 }

 document.getElementById('increment-btn').addEventListener('click', () => updateCount('increment'))
 document.getElementById('decrement-btn').addEventListener('click', () => updateCount('decrement'))