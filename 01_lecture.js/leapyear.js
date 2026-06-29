function leapyear(year){
    if(year %4===0 && year % 100 !==0 || year % 400 ===0){
        console.log("The year"+leapyear+"is leap year");
    }
    else{
        console.log("The year"+ leapyear +"is not a leap year");
    }
}