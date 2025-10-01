<!--(1) - What is JSX, and why is it used? --> 
<!-- ans: -->JSX is JavaScript XML.It is a syntax extension fro JavaScript which is used to make react UI.

 <!--(2) - What is the difference between State and Props? -->
 <!-- ans: -->The difference between State and Props are - 
    *props is a way to send data from parent component to child component. state is internal data of component which component can update data itself.
    *props used to make component reusable and dynamic. 
    *if we change state component render again.

 <!--(3) - What is the useState hook, and how does it work? -->
 <!-- ans: -->useState is a hook which we used to use state for functional component.state is a variable which track react.useState make a state variable and returns an array.As an example: const [count,setCount] = useState(0); Here useState(0) creates a state variable,count is present value,setCount is a function of changing value.When react calls setCount it saves new value,render component again and new count is showed in UI.That's how useSate works. 

 <!--(4) - How can you share state between components in React? -->
 <!-- ans: -->By using props from parent component to child component , using state inside common component for siblings component and using context i can share state between components in react.

 <!--(5) - How is event handling done in React? -->
 <!-- ans: -->Event handling means users action.such as: button click,input type,mouse hover etc.when we do such as thing function works and give us some output which make UI more interactive.Inside javascript we use addeventListener() but in react use camelCase onClick={}.Inside curly bracket we runs our function to make user experience more easy and interactive.