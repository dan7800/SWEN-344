# P6 JavaScript Refactor Procedural To OO
 
##Learning Competencies 

* Implement clean and flexible interfaces between objects
* Decompose a problem in various dimensions including (but not limited to): separation of concerns, Law of Demeter, frequency of use, frequency of change, encapsulation, loose coupling, and the single-responsibility principle
* Write OO JavaScript

##Summary 

As a professional programmer, you'll wind up dealing with some very hairy
JavaScript. This challenge asks you to take some procedural code
and refactor it to object oriented JavaScript.

Start with this skeleton in the `source` directory and refactor it.

##Releases

###Release 0 : 

Refactor the pile-O Javascript using objects. Put as little as possible into the global scope!

1. Provide good names for all anonymous functions.
2. Move the anonymous functions to objects.
3. Each callback or event handler is only 1 or 2 lines
4. Create a clear separation of concerns. 

###Release 1 : MVC JavaScript

Now that you've decoupled and named your functions, you should organize your code into objects grouped by behavior. 

1. All your DOM-related behavior and state should be stored in a View object.
2. Your game-related state should be stored elsewhere, with no knowledge of the DOM.
3. A Controller object should handle communication between the various objects, as well as the binding of events. 

<!-- ##Optimize Your Learning  -->

##Resources
