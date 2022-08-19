//Person class to handle details of Person

class Person   {

     constructor(name,age,gender,_address){

       this.setName=name;
        this.setAge=age;
        this.setGender=gender;   
        this._address=_address;      

    } 

    //Getter and Setter to initialize tha value 

     set setAge (age) {

        this.age=age;
    }

     set setName (name) {

        this.name=name;
    }
    
    set  setGender (gender) {

        this.gender=gender;
    }
    
    set  setAddress (_address) {

        this._address=_address;
    }
///Getter methods to retrive values
    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    get getGender() {
        return this.gender;
    }

    get getAddress(){
        return this._address;
    }


}

//Object creation for the class

let person1 = new Person("shiva",27,"male",{"doorno":237,"street":"1st street","city":"chennai"});

let person2 = new Person("mani",27,"male",{"doorno":2,"street":"1st street","city":"chennai"});

console.log(`Name:${person1.getName} lives in city:${person1
.getAddress.city}`);




