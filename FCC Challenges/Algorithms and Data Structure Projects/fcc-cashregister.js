const CURRENCYTABLE = {
  "ONE HUNDRED": 10000,
  "TWENTY": 2000,
  "TEN": 1000,
  "FIVE": 500,
  "ONE": 100,
  "QUARTER": 25,
  "DIME": 10,
  "NICKEL": 5,
  "PENNY": 1
}

function findIndex(array, coin) {
  let index = -1;
  for (let i = 0; i < array.length; ++i) {
    if(array[i][0] === coin) {
      index = i;
      break;
    }
  }
  return index;
}

// Worst n but it could be 1
function updateChange(array, coin, newVal) {
  let index = findIndex(array,coin);
  if (index < 0) array.push([coin,newVal]);
  else array[index][1] += newVal;
}

function checkCashRegister(price, cash, cid) {
  let change = [];
  let cidSorted = cid.slice().map(elem=>[elem[0], parseInt(100*elem[1])]).sort((a,b)=>CURRENCYTABLE[a[0]] < CURRENCYTABLE[b[0]]);
  
  let num = (cash - price)*100;
  let valChange = num;
  // there's change
  if(num > 0) {
    let index = 0;
    while(num >= 0 && index < cidSorted.length) {
      let coinQuantity = cidSorted[index][1];
      let coinName = cidSorted[index][0];
      let coinValue = CURRENCYTABLE[coinName];
      
      //console.log('coin quantity',coinQuantity,'coin name',coinName, 'coin value',coinValue);
      if (coinQuantity > 0) {
          if (num - coinValue >= 0) {
            
            num -= coinValue;
            coinQuantity -= coinValue;
            //update cashier state
            cidSorted[index][1] = coinQuantity;
            //update change state
            updateChange(change,coinName,coinValue);
          } else { //coin is too big, pick next
            index++;
          }
        } else {  //no more of this coin left pick next
          index++;
        }
      }
    }
  //console.log(change);
  // Here is your change, ma'am.
  let sum = 0;
  if (change.length === 1)
    sum = change[0][1];
  else if (change.length > 1)
    for (let obj of change)
      sum += obj[1];

  let status;
  if (sum === valChange) {
    status = 'OPEN';
    if (cidSorted.every(elem=> elem[1] === 0)) {
      status = "CLOSED";
      let _change = change[0];
      change = cidSorted.reverse();
      change[0] = _change;
      change[0][1] /= 100;
    } else {
      change = change.map(elem=>[elem[0],elem[1]/100]);
    }
  }
  else if (sum === 0) {
    status = 'CLOSED';
  }
  else {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  }
  let retObject = {
    status: status,
    change: change
  }
  return retObject;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

