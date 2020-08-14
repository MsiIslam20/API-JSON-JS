const normalPerson = {
    firstName : "Saidul",
    lastName : "Islam",
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName + " " + this.lastName);  
    },
    chargeBill : function(amount , tips , tax){
        this.salary = this.salary - amount - tips - tax
        return this.salary
    }
}

// normalPerson.chargeBill(3000);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);

const friendlyPerson = {
    firstName : "Shymoli",
    lastName : "Begum",
    salary : 52000
}


//Apply Call Method

normalPerson.chargeBill.call(friendlyPerson , 5000 , 200 , 50);

console.log(friendlyPerson.salary);


normalPerson.chargeBill.apply(friendlyPerson , [5000 , 200 , 50]);

console.log(friendlyPerson.salary);



