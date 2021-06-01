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



let hours = ['6 am', '7 am', '8am', '9am', '10am', '11am', '12 pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let shops = [];

function Shop(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.randomNumber = [];

    this.countArr = [];
    this.total = 0;
    shops.push(this);


}


Shop.prototype.gitRandomNumber = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomNumber.push(random(this.min, this.max));
        console.log(this.randomNumber);

    }
};

Shop.prototype.getcount = function () {
    for (let i = 0; i < hours.length; i++) {
        this.countArr.push(Math.floor(this.randomNumber[i] * this.avg));
        this.total += this.countArr[i];

        // console.log(this.countArr);

    }

};



function msgHeader() {
    let parent = document.getElementById('parent');
    let table = document.createElement('table');
    parent.appendChild(table);
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let thElement1 = document.createElement('th');
    headingRow.appendChild(thElement1);
    thElement1.textContent = "Shops Name";
    for (let i = 0; i < hours.length; i++) {
        let thElement = document.createElement('th');
        headingRow.appendChild(thElement);
        thElement.textContent = hours[i];

    }
    let thElement2 = document.createElement('th');
    headingRow.appendChild(thElement2);
    thElement2.textContent = 'Total';
}

msgHeader();

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);








Shop.prototype.render = function () {
    let parent = document.getElementById('parent');
    let table = document.createElement('table');
    parent.appendChild(table);
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let td = document.createElement('td');
    dataRow.appendChild(td);
    td.textContent = this.name;
    for (let i = 0; i < hours.length; i++) {
        let td1 = document.createElement('td');
        dataRow.appendChild(td1);
        td1.textContent = this.countArr[i];


    }
    for (let i =0 ; i < shops.length ; i++){
        let totalTd = document.createElement('td');
    dataRow.appendChild(totalTd);
    totalTd.textContent = this.total

}
    }

    


for (let i = 0; i < shops.length; i++) {
    shops[i].render();
    shops[i].getcount();
    shops[i].gitRandomNumber();

}

seattle.getcount();
console.log(seattle);










