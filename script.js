//Sample

class People {

    constructor(name,age,gender){

        setName (name);
        setAge (age);
        setGender(gender);

    }

     function setAge (age) {

        this.age=age;
    }

    setName (name) {

        this.name=name;
    }

    setGender (gender) {

        this.gender=gender;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

}

let p1 = new People("shiva",27,"male");

console.log(p1.getName());






