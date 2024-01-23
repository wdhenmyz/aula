var limit = 50;
var count;
var index = 1;
var primesfound = 0;

while(primesfound < limit){
    count = 0;
    for (var dividend = 1; dividend <=index ; dividend++){
        if (index % dividend == 0){
            count++;
        }
    }
    if (count == 2){
        console.log(index);
    }



}