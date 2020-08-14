const normalPerson = {
    firstName : "Saidul",
    lastName : "Islam",
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName + " " + this.lastName);  
    },
    chargeBill : function(amount){
        this.salary = this.salary - amount
        return this.salary
    }
}

// normalPerson.chargeBill(3000);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);


const heroPerson = {
    firstName : "Moni",
    lastName : "Islam",
    salary : 35000
}
const friendlyPerson = {
    firstName : "Shymoli",
    lastName : "Begum",
    salary : 52000
}
//apply bind method
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson)

heroChargeBill(5000)
heroChargeBill(4000)
console.log(heroPerson.salary);


//apply bind method
const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson)

friendlyChargeBill(2000)
console.log(friendlyPerson.salary);


