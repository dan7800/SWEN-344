# Behavior Drill Add Comments

## Learning Competencies

* Write custom event handlers in JavaScript and jQuery
* Change the DOM based on events
* Create new DOM elements and bind them to the existing DOM

## Summary

In this challenge, we're going to build a common feature of the web: the
comment area.

Normally, when you are building a comment form you want to send the data to the
server so that the comment can be persisted in a database somewhere.  Since we
don't have access to a server in this case, we're just going to bypass that
feature.  Instead, we will build a form that uses JavaScript and jQuery to
create a new DOM element from the form data and append it to a list of
comments.

This is one of the more complex of the behavior drills.  There are a few
different moving parts, and you have to make sure they all play nice.

* [Basics of jQuery Events][] and
* [Event Handling][], specifically the `submit` event
* Creating DOM elements with the [jQuery() method][]
* [The jQuery val() method][]

If you bind to the `submit` event, you should consider using the
[event.preventDefault() method][] provided by jQuery.

All of the HTML and CSS has been written and is in `./source`.  You only need
to add your own jQuery-flavored JavaScript.

You will probably be writing more JavaScript code for this challenge than you
have previously, so make sure to test it frequently and make small iterations.

Make sure to read the HTML (and CSS) closely so that you understand the
structure of the page.

## Releases

### Release 0 : Write your Script for Adding Comments

The desired behavior is shown in the following screencast: [Add
Comments](http://www.youtube.com/embed/wVQ8DQzxceQ)

Not very exciting, but this is such a common pattern (adding new elements to
the DOM via a form) that it is important to understand how to make it work.

Here is a list of the specifications for this feature:

* When the user clicks on the `New Comment` button, the new comment form should
  appear.
* When the user enters text into the two fields and presses the `Create
  Comment` button, a new comment should be created and added to the end of the
  comment list.
* A new comment should not be empty, i.e. if the user submits the form without
  entering anything into the text area, an empty comment element should not be
  created.

Make sure to follow the specifications, and remember to take it slow.  Be
conscious of a tendency to write procedural code and try to make your
JavaScript elegant and object-oriented.

<!-- ##Optimize Your Learning  -->

## Resources

* [Basics of jQuery Events][]
* [Event Handling][]
* [jQuery() method][]
* [The jQuery val() method][]
* [event.preventDefault() method][]

[Basics of jQuery Events]: http://learn.jquery.com/events/event-basics/
[Event Handling]: http://learn.jquery.com/events/handling-events/
[jQuery() method]: http://api.jquery.com/jQuery/#jQuery2
[The jQuery val() method]: http://api.jquery.com/val/
[event.preventDefault() method]: http://api.jquery.com/event.preventDefault/

