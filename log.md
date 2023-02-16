# What is this?

This is a log of my progress as I manage this project. External project managment platforms exsist, but since this is a smaller project and a solo project, it will be easier for me to manage (and actually use) if the log exsists in the project.

## The Plan

Inspired by the [Thinking in React](https://beta.reactjs.org/learn/thinking-in-react) page in the documentation, my plan is:

> 1. ✔︎ Break Down the UI into Component Hierarchy (This was done in class in group).
>    ![Diagram of Component Hierarchy](./assets/component%20tree-2.jpg "Component Hierarchy")
>
> 1. ✔︎ Create static version
>
>    1. ✔︎ Create card component
>    1. ✔︎ Create Cart component
>    1. ✔︎ Create Checkout component
>    1. ✔︎ Style page layout
>
> 1. ✔︎ Find the minimal but complete representation of UI state
> 1. ✔︎ Identify where your state should live
> 1. ✔︎ Add inverse data flow

I also need to keep track of which components/User stories I've built/fulfilled and which I haven't:

> ### User Stories:
>
> 1. ✔︎ I can see sections with birds, that have a name, image, amount and adopt button.
> 1. ✔︎ I can add birds to the shopping cart.
> 1. ✔︎ I can see a total cost of the birds in my cart.
> 1. ✔︎ I can get a 10% discount if I have 3 or more birds in my cart
> 1. ✔︎ I can get a series of bonus items for increasing cart totals
> 1. ✔︎ I can use a form to checkout my cart, upon checkout, it resets my cart
> 1. ✔︎ I can delete a bird from my cart

## Reflection

I am offically finished, Friday Feb 10th at 12pm . I'm really proud of how quickly I completed this assignment (since we started Thursday at around 12pm) and that, aside from in the very beginning, I didn't feel tremendously overwhelmed.

I think tracking my thinking and progress helped a lot. Having the component tree diagram helped a lot as well because I didn't have to figure out what i was building while I was building it.

My greatest take away is to plan the component tree when working in a component based framework. I have a log in my personal project and have been keeping track of which components I want to build but actually having a component tree drawn would help me know which components should be a priority and when.

# Log Part 2: The Log Continues

After completing this challenged I was challenged to add dark mode by using useContext. Since I was already interested in reducer functions and since context and reducers can be used in conjunction, I figured why not start by adding a reducer function and then adding context.

The reducer function took me a little time I can't deny but I can see how, in conjunction with context especially, its can make your code much more efficient. Its much easier to isolate/abstract the program using a reducer function, exporting it and then importing just the function name. Context also makes proves efficient for similar reasons. They also makes debugging much more efficient.

I took a look at Clean Code. The principles are simple enough I think. Write code that is easy to read not easy to write/takes up the least amount of lines. I've been trying to apply that principle when going back to refractor functions. I wont really know the efficiency of the technique until I come back to work on this later (maybe when we add backend 👀).
