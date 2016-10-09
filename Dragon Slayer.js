var slaying = true;
var youHit = Math.floor(Math.random()*2); // value will be ) or 1
var damageThisRound = Math.floor(Math.random()*5 + 1);  //value will be from 1 to 5
var totalDamage = 0; 

while(slaying)
{
    if(youHit) {
        console.log("Congrats, You hit the dragon!");
        totalDamage += damageThisRound;
        if(totalDamage >=4 ) {
            console.log("You slew the dragon");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random()*2);
        }
    }else {
        console.log("Dragon defeated you!");
        slaying = false;
    }
}
