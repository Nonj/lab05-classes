# Classes in JavaScript

While JavaScript is primarily a _scripting_ and functional language, it does support a form of **Object Oriented Programming** like that used in the Java language. That is, we are able to define **classes** of data and methods that act on that data, and then **instantiate** those classes into **objects** that can be manipulated. And with the new [`class` syntax introduced in ES6](https://github.com/metagrover/ES6-for-Humans#13-classes-in-es6), creating classes in JavaScript even _looks_ like how you make classes in Java!

## Why Classes?
The whole point of using classes in programming---whether Java or JavaScript---is to perform **abstraction**: we want to be able to _encapsulate_ ("group") together parts of our code so we can talk about it at a higher level. So rather than needing to think about the program purely in terms of `Numbers`, `Strings`, and `Arrays`, we can think about it in terms of `Dogs`, `Cats` or `Persons`.

In particular, classes _encapsulate_ two things: 

1. The **data** (variables) that describe the thing. These are known as _fields_, _attributes_, or _instance variables_ (variables that below to a particular _instance_, or example, of the class). For example, we might talk about a `Person` object's `name` (a String), `age` (a Number), and Halloween haul (an Array of candy).

2. The **behaviors** (functions) that operate on, utilize, or change that data. These are known as _methods_ (technically _instance methods_, since they operate to a particular instance of the class). For example, a `Person` may be able to `sayHello()`, `trickOrTreat()`, or `eatCandy()`.

We've already talked about Objects in JavaScript: an Object is a set of key-value pairs. These can be seen as the _fields_ of the object. For example:

```javascript
var person = {
   name: 'Alice',
   age: 21,
   costume: 'Cheshire Cat'
}

//tell me about this person!
console.log(person.name + " is a " + person.costume);
```

can represent a thing with `name`, `age` and `costume` fields (but we haven't yet indicated that this Object has the _class_ification of "Person").

Similarly, since functions are values and so can be assigned to Objects, it's possible for an object to "have" a function:

```javascript
var person = {
   name: 'Alice',
   candy: [],
   trickOrTreat: function(newCandy){
      this.candy.push(newCandy);
   }
}

//person goes trickOrTreating and gets candy corn
person.trickOrTreat("candy corn");
```
JavaScript even uses the `this` keyword to refer to _which_ object's data that function being called on, just like Java!

## ES 6 Classes
Of course while the above syntax technically creates Objects that have _fields_ and _methods_, they don't really look like classes. In particular, it's not clear how to use those fields and methods as a _template/recipe/blueprint_ for creating more Objects---how we could **instantiate** a class to create lots of people, all of whom are in costume and can go trick or treating!

Luckily, [ES 6](https://github.com/metagrover/ES6-for-humans) (the version of JavaScript finalized in 2015) includes a set of syntax that makes it easy to define Classes and then instantiate them as Objects, just like we did in Java.

Note that ES 6 is supported on [many, but not all browsers](http://kangax.github.io/compat-table/es6/). In particular, ES 6 Classes are not supported on IE. We'll talk later about how to support these older browsers.

### Classes in Java
First, consider the following simple class defined in Java:

```java
//class declaration
public class Person {

  //fields (private)
  private String firstName;
  private int age;
  
  //a Constructor method
  //this is called when the class is instantiated (with `new`)
  //and has the job of initializing the fields
  public Person(String newName, int newAge){
    //assign parameters to the fields
    this.firstName = newName;
    this.age = newAge;
  }
    
  //return this Person's name
  public String getName() {
     return this.firstName; //return own field
  }
  
  //grow a year
  public void haveBirthday() {
    this.age++; //increase this person's age (accessing own field)
  }

  //a method that takes in a Person type as a parameter
  public void sayHello(Person otherPerson) {
    //call method on parameter object for printing
    System.out.println("Hello, " + otherPerson.getName());

    //access own field for printing
    System.out.println("I am " + this.age +  " years old");
  }
}
```

We can of course utilize this class (instantiate it and call its methods) as follows:

```java
public static void main(String[] args) {

  //instantiate two new People objects
  Person aliceObj = new Person("Alice", 21);
  Person bobObj = new Person("Bob", 42);

  //call method on Alice (changing her fields)
  aliceObj.haveBirthday(); 

  //call the method ON Alice, and PASS Bob as a param to it
  aliceObj.sayHello(bobObj);
}
```
A few things to note about this syntax:

1. We declare (announce) that we're defining a class by using the `class` keyword.
- Java fields are _declared_ at the top of the class block (but assigned in the constructor).
- Classes have **constructor** methods that are used to instantiate the fields.
- Class methods are declared _inside_ the class declaration (inside the block, indenting one step).
- Class methods can access (use) the object's field variables by referring to them as `this.fieldName`.
- We **instantiate** objects of the class's type by using the `new` keyword and then calling a method with the name of the class (e.g., `new Person()`).
- We call methods on objects by using **dot notation** (e.g., `object.methodName()`).
- Instantiated objects are just variables, and so can be passed into other methods.

### Classes in JavaScript (ES6)
Here is how we would create _the exact same class_ in JavaScript using ES 6 syntax:

```javascript
//class declaration
class Person {
  
  //a Constructor method
  //this is called when the class is instantiated (with `new`)
  //and has the job of initializing the fields
  constructor(newName, newAge) {
    //assign parameters to the fields
    this.firstName = newName;
    this.age = newAge;
  }
    
  //return this Person's name
  function getName() {
     return this.firstName; //return own field
  }
  
  //grow a year
  function haveBirthday() {
    this.age++; //increase this person's age (accessing own field)
  }

  //a method that takes in a Person type as a parameter
  function sayHello(otherPerson) {
    //call method on parameter object for printing
    console.log("Hello, " + otherPerson.getName());

    //access own field for printing
    console.log("I am " + this.age +  " years old");
  }
}
```

And here is how we would use it:

```javascript
//instantiate two new People objects
var aliceObj = new Person("Alice", 21);
var bobObj = new Person("Bob", 42);

//call method on Alice (changing her fields)
aliceObj.haveBirthday(); 

//call the method ON Alice, and PASS Bob as a param to it
aliceObj.sayHello(bobObj);
```


Hey, this syntax is _very, **very**_ similar to Java! Just like with JavaScript functions, most of our changes have involved getting rid of type declarations (and using `function` to declare functions). In fact, you can write a class in Java and then just delete a few words to make it a JavaScript class. That's what I just did...

Things to notice:

1. _Just like in Java_, JavaScript classes are declared using the `class` keyword (this is what ES 6 gives us).
- JavaScript classes **do not** declare fields ahead of time (at the top of the class). Unlike Java, JavaScript variables always "exist", they're just `undefined` until assigned, so we don't need to explicitly declare them.
    - In JavaScript, nothing is private; you effectively have `public` access to all fields and functions (though we'll learn some work-arounds).
- JavaScript classes always have only one **constructor** (if any), and the function is simply called `constructor()`. 
    - That's even clearer than Java, where you only know it's a constructor because it lacks a return type~
- _Just like in Java_, JavaScript class methods are declared _inside_ the class declaration (inside the block, indenting one step).
- _Just like in Java_, JavaScript class methods can access (use) the object's field variables by referring to them as `this.fieldName`.
- _Just like in Java_, we **instantiate** objects of the class's type by using the `new` keyword and then calling a method with the name of the class (e.g., `new Person()`).
- _Just like in Java_, we call methods on objects by using **dot notation** (e.g., `object.methodName()`).
- _Just like in Java_, instantiated objects are just variables, and so can be passed into other methods.

So really, it's just like Java---except that for the differences in how we declare functions (which you're already familiar with) and the fact that we use the word `constructor` to name the constructor methods.

The other difference is that while in Java we usually define each class inside it's own file, in JavaScript we often create multiple classes in a single file, at the same "level" as we declared other, non-class functions:

```javascript
//script.js
'use strict';

//declare a class
class Dog {
  function bark() { /*...*/ }
}

//declare another class
class Cat {
  function meow() { /*...*/ }
}

//declare a (non-class) function
function petAnimal(animal) { /*...*/ }

//at the "main" level, instantiate the classes and call the functions
var fido = new Dog();
petAnimal(fido); //pass this Dog object to the function
```


## Other Class Features
Just like in Java, it's possible to use **inheritance** and create classes that `extend` existing classes. However, JavaScript uses what is called [prototypical inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), which has a few quirks that differ from Java. Luckily, we won't need to inherit our own classes, and we'll be inheriting other classes in a very specific and side-effect free way (that we'll talk about later).

See [this article on MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) for more details.
