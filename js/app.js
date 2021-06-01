'use strict'

// let hours = ['6 am', '7 am', '8am', '9am', '10am', '11am', '12 pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']




// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// let seattle = {
//     name: 'seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     total: 0,
//     customElementsEachHour: [],
//     cookiesEachHour: [],
//     total :0,

//     msgCustomElementsEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customElementsEachHour.push(randomNumber(this.min, this.max));
//         }
//     },
//     msgCookiesEachHour:function(){
//         for(let i=0 ; i<hours.length ;i++){
//             this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
//             this.total+=this.cookiesEachHour[i];

//         }
//     },

//     render: function () {
//         let parent = document.getElementById('parent');
//         let nameElement = document.createElement('h2');
//         parent.appendChild(nameElement);
//         nameElement.textContent = this.name;
//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);
//         for(let i=0 ; i < hours.length ; i++){
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent= 'total :' + this.total + 'cookies'

// }

// }

//     seattle.msgCustomElementsEachHour();

//     seattle.msgCookiesEachHour();
//     seattle.render();















// // ////////////////// 
// // //tokyo 




// let Tokyo = {
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     total: 0,
//     customElementsEachHour: [],
//     cookiesEachHour: [],
//     total :0,

//     msgCustomElementsEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customElementsEachHour.push(randomNumber(this.min, this.max));
//         }
//     },
//     msgCookiesEachHour:function(){
//         for(let i=0 ; i<hours.length ;i++){
//             this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
//             this.total+=this.cookiesEachHour[i];

//         }
//     },

//     render: function () {
//         let parent = document.getElementById('parent');
//         let nameElement = document.createElement('h2');
//         parent.appendChild(nameElement);
//         nameElement.textContent = this.name;
//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);
//         for(let i=0 ; i < hours.length ; i++){
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent= 'total :' + this.total + 'cookies'

// }

// }

// Tokyo.msgCustomElementsEachHour();

// Tokyo.msgCookiesEachHour();
// Tokyo.render();


// ////////////
// ////////Dubai/////////////////



// let Dubai = {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     total: 0,
//     customElementsEachHour: [],
//     cookiesEachHour: [],
//     total :0,

//     msgCustomElementsEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customElementsEachHour.push(randomNumber(this.min, this.max));
//         }
//     },
//     msgCookiesEachHour:function(){
//         for(let i=0 ; i<hours.length ;i++){
//             this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
//             this.total+=this.cookiesEachHour[i];

//         }
//     },

//     render: function () {
//         let parent = document.getElementById('parent');
//         let nameElement = document.createElement('h2');
//         parent.appendChild(nameElement);
//         nameElement.textContent = this.name;
//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);
//         for(let i=0 ; i < hours.length ; i++){
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent= 'total :' + this.total + 'cookies'

// }

// }

// Dubai.msgCustomElementsEachHour();

// Dubai.msgCookiesEachHour();
// Dubai.render();











// ////////////////////////////
// /////////////////Paris//////////////




// let Paris = {
//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     total: 0,
//     customElementsEachHour: [],
//     cookiesEachHour: [],
//     total :0,

//     msgCustomElementsEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customElementsEachHour.push(randomNumber(this.min, this.max));
//         }
//     },
//     msgCookiesEachHour:function(){
//         for(let i=0 ; i<hours.length ;i++){
//             this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
//             this.total+=this.cookiesEachHour[i];

//         }
//     },

//     render: function () {
//         let parent = document.getElementById('parent');
//         let nameElement = document.createElement('h2');
//         parent.appendChild(nameElement);
//         nameElement.textContent = this.name;
//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);
//         for(let i=0 ; i < hours.length ; i++){
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent= 'total :' + this.total + 'cookies'

// }

// }

// Paris.msgCustomElementsEachHour();

// Paris.msgCookiesEachHour();
// Paris.render();






// /////////////////////
// ////////////////////Lima///////////

// let Lima = {
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     total: 0,
//     customElementsEachHour: [],
//     cookiesEachHour: [],
//     total :0,

//     msgCustomElementsEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customElementsEachHour.push(randomNumber(this.min, this.max));
//         }
//     },
//     msgCookiesEachHour:function(){
//         for(let i=0 ; i<hours.length ;i++){
//             this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
//             this.total+=this.cookiesEachHour[i];

//         }
//     },

//     render: function () {
//         let parent = document.getElementById('parent');
//         let nameElement = document.createElement('h2');
//         parent.appendChild(nameElement);
//         nameElement.textContent = this.name;
//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);
//         for(let i=0 ; i < hours.length ; i++){
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent= 'total :' + this.total + 'cookies'

// }

// }

// Lima.msgCustomElementsEachHour();

// Lima.msgCookiesEachHour();
// Lima.render();





let parent = document.getElementById('parent');
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let hours = [`6am`, `7am`, `8am`, '9am', `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];
let shops=[];


function Shop(shop, min, max, avg) {
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.shopName = shop;
    this.customersEachHour = [];
    this.countArrPerHour = [];
    this.total = 0;
    console.log(this);
    shops.push(this);
}

let megaTotal=0;

Shop.prototype.getCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(getRandomNum(this.min, this.max));

    }
}

Shop.prototype.getCountArrPerHour= function () {
    for (let i = 0; i < hours.length; i++) {
        this.countArrPerHour.push(Math.floor(this.customersEachHour[i] * this.avg));

        this.total+=this.countArrPerHour[i];
        megaTotal+=this.countArrPerHour[i];

    }
    
}


let tableElement = document.createElement('table');


parent.appendChild(tableElement);




function headHoursRow() {

 
    let trFirstRow = document.createElement('tr');


    tableElement.appendChild(trFirstRow);

 
    let thName = document.createElement('th');

    trFirstRow.appendChild(thName);


    thName.textContent = 'Name';

    for (let i = 0; i < hours.length; i++) {
     
        let thHourRow = document.createElement('th');

        
        trFirstRow.appendChild(thHourRow);

      
        thHourRow.textContent = hours[i];
    }
 
    let thDailyshopTotal = document.createElement('th');
    
    trFirstRow.appendChild(thDailyshopTotal);
   
    thDailyshopTotal.textContent = 'DailyshopTotal';
}


Shop.prototype.render=function(){

 
    let dataRow=document.createElement('tr');

   
    tableElement.appendChild(dataRow);

  
    let nameTd=document.createElement('td');

   
    dataRow.appendChild(nameTd);

   
    nameTd.textContent=this.shopName;


    for (let i = 0; i < hours.length; i++) {
        
        let cookiesTd=document.createElement('td');

        
        dataRow.appendChild(cookiesTd);

       
        cookiesTd.textContent=this.countArrPerHour[i];

       
        
    }

    let totalTd=document.createElement('td');

   
    dataRow.appendChild(totalTd);

    
    totalTd.textContent=this.total;

}

function makingFooterRow() {
 
    let footerRow=document.createElement('tr');

    
    tableElement.appendChild(footerRow);

  let firstTh=document.createElement('th');

    footerRow.appendChild(firstTh);
  
    firstTh.textContent='Totals';

    for (let i = 0; i < hours.length; i++) {
       
       let totalForEachHour=0;
       
        for (let j = 0; j < shops.length; j++) {
            

            totalForEachHour+=shops[j].countArrPerHour[i];           
        }
        console.log(totalForEachHour);
       
        let dataTh=document.createElement('th');

       
        footerRow.appendChild(dataTh);

        dataTh.textContent=totalForEachHour;
        
    }

    console.log(megaTotal);
    
    let finalTh=document.createElement('th');

    
    footerRow.appendChild(finalTh);

    
    finalTh.textContent= megaTotal;

}

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

console.log(shops);


headHoursRow();

for (let i = 0; i < shops.length; i++) {
    shops[i].getCustomersEachHour();
    shops[i].getCountArrPerHour();
    shops[i].render();
}
makingFooterRow();



