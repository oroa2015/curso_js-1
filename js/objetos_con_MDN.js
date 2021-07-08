/*
Creacion de Objetos con MDN
*/
class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            'first': first,
            'last': last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        for (let i = 0; i < interests.length; i++) {
            this.listaIntereses += interests[i] + ' ';
        }
    }
    bio() {
        if (this.gender === 'male') {
            console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.listaIntereses}.`)

        } else if (this.gender === 'female') {
            console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. She likes ${this.listaIntereses}.`)
        }
    };
}

/* class User extends Person {
    constructor(first, last, age, gender, listaIntereses) {
        super(first, last, age, gender, listaIntereses);
    }

    bio() {
        if (this.gender === 'male') {
            alert(`${this.name.first} ${this.name.last} 
            is ${this.age} years old. 
            He likes ${this.listaIntereses}.`);
        } else if (this.gender === 'female') {
            alert(`${this.name.first} ${this.name.last} 
            is ${this.age} years old. 
            She likes ${this.listaIntereses}.`);
        }
    };
} */

var user1 = new Person('Bob', 'Smith', 32, 'male', ['economics', 'statistics', 'calculus', 'speech']);

var user2 = new Person('Maria', 'Sharapova', 25, 'female', ['music', 'algebra', 'chemistry', 'world history']);

console.log(user1['age']);
console.log(user1.interests[1]);
user1.bio();

console.log(user2['age']);
console.log(user2.interests[1]);
user2.bio();