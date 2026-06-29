function lifeleft(age){
    var yearleft = 90 - age;
    var weekleft = yearleft * 52;
    var daleft = yearleft * 365;

    console.log("The years left: " + yearleft + " The weeks left: " + weekleft + " The days left: " + daleft);
}

var chalifeleft = lifeleft(80);
console.log(chalifeleft);