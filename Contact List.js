var friends = new Object();
friends.bill = {
    firstName: "Bill",
    lastName: "Gomez",
    number: "1234567890",
    address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
    firstName: "Steve",
    lastName: "Henrie",
    number: "0987654321",
    address: ['C-18','Delhi','New Delhi','1100']
};

var list = function(friends) {
    for(var key in friends) {
        console.log(key);
    }
};

var search = function(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};
