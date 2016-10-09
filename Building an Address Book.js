var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
	}
};

var add = function(firstName,lastName,email,phoneNumber) {
    var newFriend = new Object();
    newFriend.firstName = firstName;
    newFriend.lastName = lastName;
    newFriend.email = email;
    newFriend.phoneNumber = phoneNumber;
    contacts[contacts.length] = newFriend;
};

add("Gourav","Suri","gouravsuri@gmail.com","1234567890");
list();