class Person {
   constructor(fname, lname, age, address) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
      this.address = address;
   }

   get fullname() {
      return this.fname + "-" + this.lname;
   }
}
var a = new Person("Siya", "Kapoor", "15", "Mumbai");
var persondet = a.fullname;

