'use strict'

let hours = ['6 am', '7 am', '8am', '9am', '10am', '11am', '12 pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']




function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    total: 0,
    customElementsEachHour: [],
    cookiesEachHour: [],
    total :0,

    msgCustomElementsEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customElementsEachHour.push(randomNumber(this.min, this.max));
        }
    },
    msgCookiesEachHour:function(){
        for(let i=0 ; i<hours.length ;i++){
            this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
            this.total+=this.cookiesEachHour[i];

        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        let nameElement = document.createElement('h2');
        parent.appendChild(nameElement);
        nameElement.textContent = this.name;
        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);
        for(let i=0 ; i < hours.length ; i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

        }
        
        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent= 'total :' + this.total + 'cookies'

}

}

    seattle.msgCustomElementsEachHour();
    
    seattle.msgCookiesEachHour();
    seattle.render();



    

    
    








// ////////////////// 
// //tokyo 




let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    total: 0,
    customElementsEachHour: [],
    cookiesEachHour: [],
    total :0,

    msgCustomElementsEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customElementsEachHour.push(randomNumber(this.min, this.max));
        }
    },
    msgCookiesEachHour:function(){
        for(let i=0 ; i<hours.length ;i++){
            this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
            this.total+=this.cookiesEachHour[i];

        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        let nameElement = document.createElement('h2');
        parent.appendChild(nameElement);
        nameElement.textContent = this.name;
        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);
        for(let i=0 ; i < hours.length ; i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

        }
        
        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent= 'total :' + this.total + 'cookies'

}

}

Tokyo.msgCustomElementsEachHour();
    
Tokyo.msgCookiesEachHour();
Tokyo.render();


////////////
////////Dubai/////////////////



let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    total: 0,
    customElementsEachHour: [],
    cookiesEachHour: [],
    total :0,

    msgCustomElementsEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customElementsEachHour.push(randomNumber(this.min, this.max));
        }
    },
    msgCookiesEachHour:function(){
        for(let i=0 ; i<hours.length ;i++){
            this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
            this.total+=this.cookiesEachHour[i];

        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        let nameElement = document.createElement('h2');
        parent.appendChild(nameElement);
        nameElement.textContent = this.name;
        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);
        for(let i=0 ; i < hours.length ; i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

        }
        
        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent= 'total :' + this.total + 'cookies'

}

}

Dubai.msgCustomElementsEachHour();
    
Dubai.msgCookiesEachHour();
Dubai.render();











////////////////////////////
/////////////////Paris//////////////




let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    total: 0,
    customElementsEachHour: [],
    cookiesEachHour: [],
    total :0,

    msgCustomElementsEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customElementsEachHour.push(randomNumber(this.min, this.max));
        }
    },
    msgCookiesEachHour:function(){
        for(let i=0 ; i<hours.length ;i++){
            this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
            this.total+=this.cookiesEachHour[i];

        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        let nameElement = document.createElement('h2');
        parent.appendChild(nameElement);
        nameElement.textContent = this.name;
        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);
        for(let i=0 ; i < hours.length ; i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

        }
        
        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent= 'total :' + this.total + 'cookies'

}

}

Paris.msgCustomElementsEachHour();
    
Paris.msgCookiesEachHour();
Paris.render();






/////////////////////
////////////////////Lima///////////

let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    total: 0,
    customElementsEachHour: [],
    cookiesEachHour: [],
    total :0,

    msgCustomElementsEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customElementsEachHour.push(randomNumber(this.min, this.max));
        }
    },
    msgCookiesEachHour:function(){
        for(let i=0 ; i<hours.length ;i++){
            this.cookiesEachHour.push(Math.ceil(this.customElementsEachHour[i]*this.avg));
            this.total+=this.cookiesEachHour[i];

        }
    },

    render: function () {
        let parent = document.getElementById('parent');
        let nameElement = document.createElement('h2');
        parent.appendChild(nameElement);
        nameElement.textContent = this.name;
        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);
        for(let i=0 ; i < hours.length ; i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent= hours[i] + '  :' +this.cookiesEachHour[i] + 'cookies'

        }
        
        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent= 'total :' + this.total + 'cookies'

}

}

Lima.msgCustomElementsEachHour();
    
Lima.msgCookiesEachHour();
Lima.render();



// let hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7]
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// let shops = [];

// function Shops(name, min, max, avg) {
//     this.name = name;
//     this.min = min;
//     this.max = max;
//     this.avg = avg;
//     this.randomNumber = [];

//     this.countArr = [];
//     shops.push(this);

// }


// Shops.prototype.gitRandomNumberOfShops = function () {
//     for (let i = 0; i < hours.length; i++) {
//         this.randomNumber.push(randomNumber(this.min, this.max));
//         console.log(randomNumber);

//     }
// };

// Shops.prototype.getcount = function () {
//     for (let i = 0; i = hours.length; i++) {
//         this.countArr.push(this.randomNumber[i] * this.avg);
//         console.log(this.getcount );

//     }

// };

// let seattle = new Shops('Seattle', 23, 65, 6.3);
// let tokyo = new Shops('Tokyo', 3, 24, 1.2);
// let dubai = new Shops('Dubai', 11, 38, 3.7);
// let paris = new Shops('Paris', 20, 38, 2.3);
// let lima = new Shops('Lima', 2, 16, 4.6);



// shops.prototype.render =function(){
//     let parent = document.getElementById('parent');
//     let table = document.createElement('table');
//     parent.appendChild(table);
//     let headingRow = document.createElement('tr');
//     table.appendChild(headingRow);
//     for (let i = 0; i < hours.length; i++) {
//         let thElement = document.createElement('th');
//         headingRow.appendChild(thElement);
//         thElement.textContent = hours[i];

//     }
// }


// shops[i].render();
// this.getcount();
// this.gitRandomNumberOfShops();
// // seattle.getcount();
// console.log(seattle);






