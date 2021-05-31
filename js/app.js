'use strict'

 let hours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7]
 let randomCustomersPerHour=[];


 let SalmonCookiesArrayseattle =[];

 let seattle= {
  
    min :3 ,
    max :24 ,
    avg :1.2,
    getRandomNumberOfCustomers :function(){
      for(let i =0 ; i< hours.length ; i++){
       randomCustomersPerHour.push(randomNumber(this.min , this.max));
       // console.log(randomCustomersPerHour);
       }
   },
   
   SalmonCookies :function(){
       
        for (let i =0 ; i < hours.length ; i++){
            SalmonCookiesArrayseattle.push(randomCustomersPerHour * Math.ceil(seattle.avg));
         //  console.log(SalmonCookiesArraySyattle[i]);
       }
    }
 
 };
 
 
 function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
 
 seattle.SalmonCookies();
 seattle.getRandomNumberOfCustomers(seattle.min,seattle.max);
 //  console.log(randomCustomersPerHour);
 for(let i =0 ; i < hours.length ; i++){
 console.log(hours[i] + '   ' + randomCustomersPerHour[i] +'  ' +  'seattle cookies');
 }
 

////////////////// 
//tokyo 

let SalmonCookiesArrayTokyo =[];

let Tokyo= {
  // /name : 'Tokyo',
   min :3 ,
   max :24 ,
   avg :1.2,
   getRandomNumberOfCustomers :function(){
     for(let i =0 ; i< hours.length ; i++){
      randomCustomersPerHour.push(randomNumber(this.min , this.max));
      // console.log(randomCustomersPerHour);
      }
  },
  
  SalmonCookies :function(){
      
       for (let i =0 ; i < hours.length ; i++){
           SalmonCookiesArrayTokyo.push(randomCustomersPerHour * Math.ceil(Tokyo.avg));
        //  console.log(SalmonCookiesArraySyattle[i]);
      }
   }

};


function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}

Tokyo.SalmonCookies();
Tokyo.getRandomNumberOfCustomers(seattle.min,seattle.max);
//  console.log(randomCustomersPerHour);
for(let i =0 ; i < hours.length ; i++){
console.log(hours[i] + '   ' + randomCustomersPerHour[i] +'  ' +  'Tokyo cookies');
}


// //////
// //Dubai


let SalmonCookiesArrayDubai =[];

let Dubai= {
  // storeName : 'seattle',
   min :11 ,
   max :38 ,
   avg :3.7,
   getRandomNumberOfCustomers :function(){
     for(let i =0 ; i< hours.length ; i++){
      randomCustomersPerHour.push(randomNumber(this.min , this.max));
      // console.log(randomCustomersPerHour);
      }
  },
  
  SalmonCookies :function(){
      
       for (let i =0 ; i < hours.length ; i++){
           SalmonCookiesArrayDubai.push(randomCustomersPerHour * Math.ceil(Dubai.avg));
        //  console.log(SalmonCookiesArraySyattle[i]);
      }
   }

};


function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}

Dubai.SalmonCookies();
Dubai.getRandomNumberOfCustomers(seattle.min,seattle.max);
//  console.log(randomCustomersPerHour);
for(let i =0 ; i < hours.length ; i++){
console.log(hours[i] + '   ' + randomCustomersPerHour[i] +'  ' +  'Dubai cookies');
}

// ////
// // Paris


let SalmonCookiesArrayParis =[];

let Paris= {
  
   min :20 ,
   max :38 ,
   avg :2.3,
   getRandomNumberOfCustomers :function(){
     for(let i =0 ; i< hours.length ; i++){
      randomCustomersPerHour.push(randomNumber(this.min , this.max));
      // console.log(randomCustomersPerHour);
      }
  },
  
  SalmonCookies :function(){
      
       for (let i =0 ; i < hours.length ; i++){
           SalmonCookiesArrayParis.push(randomCustomersPerHour * Math.ceil(Paris.avg));
        //  console.log(SalmonCookiesArrayParis[i]);
      }
   }

};


function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}

Paris.SalmonCookies();
Paris.getRandomNumberOfCustomers(seattle.min,seattle.max);
//  console.log(randomCustomersPerHour);
for(let i =0 ; i < hours.length ; i++){
console.log(hours[i] + '   ' + randomCustomersPerHour[i] +'  ' +  'Paris cookies');
}



// ///////////
// ///Lima



let SalmonCookiesArrayLima =[];

let Lima= {
  
   min :2 ,
   max :16 ,
   avg :4.6,
   getRandomNumberOfCustomers :function(){
     for(let i =0 ; i< hours.length ; i++){
      randomCustomersPerHour.push(randomNumber(this.min , this.max));
      // console.log(randomCustomersPerHour);
      }
  },
  
  SalmonCookies :function(){
      
       for (let i =0 ; i < hours.length ; i++){
           SalmonCookiesArrayLima.push(randomCustomersPerHour * Math.ceil(Lima.avg));
        //  console.log(SalmonCookiesArrayLima[i]);
      }
   }

};


function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}

Lima.SalmonCookies();
Lima.getRandomNumberOfCustomers(seattle.min,seattle.max);
//  console.log(randomCustomersPerHour);
for(let i =0 ; i < hours.length ; i++){
console.log(hours[i] + '   ' + randomCustomersPerHour[i] +'  ' +  'Lima cookies');
}
