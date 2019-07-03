class User {
    constructor(firstName, middlename, lastName, credit) {
        this.firstName = firstName;
        this.middlename = middlename;
        this.lastName = lastName;
        this.credit = credit;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} is my full name`

        //do this in just 1 line
    }
    getmiddlename() {
        return `${this.middlename} is my middle name`
    }
    editname(newname) {
        const myname = newname.split(" ")
        this.firstName = myname[0]
        this.middlename = myname[1]
        this.lastName = myname[2]
        //take a middle name too
    }

}
class Teacher extends User {
    constructor(firstName, middlename, lastName, credit, subject) {
        super(firstName, middlename, lastName, credit)
        this.subject = subject
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} is my full name and i teach ${this.subject}`
    }
    favDrink(name) {
        console.log(`i like ${name}`);

    }
}


const john = new Teacher("john", "mickel", "doe", 3000, "python")
// console.log(john);
console.log(john.getFullName());
john.editname("johnny mickel doe")
console.log(john.getmiddlename());
john.favDrink("jus")

