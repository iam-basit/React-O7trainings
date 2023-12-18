### React Components:

In React, components are the building blocks of user interfaces. They are reusable and encapsulate the structure, behavior, and styling of a part of the UI. Components can be either functional or class-based. Here are the main types of components in React:

1. Functional Components:

Also known as stateless components.
Written as JavaScript functions.
Used for simple UI components that don't need to maintain state.
Typically used for presentational components.

    Example: 

        function MyFunctionalComponent(props) {
        return <div>{props.message}</div>;
        }

2. Class Components:

Also known as stateful components.
Written as ES6 classes and extend from React.Component.
Used for components that need to maintain and manage their own state.
Can have lifecycle methods.

**_NOTE:_**:

complete the above part⏫
 ___



## What is props?

In JavaScript, "props" is short for "properties," and it refers to the way data is passed from one component to another in a React application. 

### JSX rules:


JSX (JavaScript XML) is a syntax extension for JavaScript often used with React to describe what the UI should look like. JSX allows you to write HTML elements and components in a syntax that looks similar to XML or HTML. Here are some key rules to keep in mind when working with JSX:

1. Wrap in Parentheses:

JSX expressions must be wrapped in parentheses when used in a block or return statement.

 For example:

    const element = (
    <div>
        <h1>Hello, JSX!</h1>
    </div>
    );


2. Single Root Element:

JSX expressions must have a single root element. This means that you can't return or render multiple adjacent elements without wrapping them in a single parent element. 

For example:


    // This is valid
    const element = (
    <div>
        <h1>Title</h1>
        <p>Paragraph</p>
    </div>
    );

    // This is not valid
    const element = (
    <h1>Title</h1>
    <p>Paragraph</p>
    );


3. JavaScript Expressions in Curly Braces:
You can embed JavaScript expressions within JSX using curly braces {}. This allows you to include dynamic content or variables.

 For example:

    const name = "John";
    const element = <p>Hello, {name}!</p>;

4. Attributes and HTML-Like Syntax:
JSX uses HTML-like syntax for elements and attributes. Attributes can be added using standard HTML syntax.

 For example:

    const element = <img src="image.jpg" alt="A sample image" />;

5. Class vs. ClassName:
In JSX, you use className instead of class to define CSS classes. This is because class is a reserved keyword in JavaScript. 

For example:

    className="myClass">Hello, JSX!</div>;
    
6. Self-Closing Tags:
JSX allows self-closing tags for elements that do not have children.

 For example:

    const element = <img src="logo.png" alt="Logo" />;

### What are Maps():

Map Object
A Map in JavaScript is a collection of key-value pairs where each key and value can be of any data type. It provides methods to manipulate, iterate, and retrieve elements based on their keys.

1. Creating a Map

You can create a Map using the Map constructor:
    
    let myMap = new Map();

2. Adding Key-Value Pairs

You can add key-value pairs to a Map using the set method:

    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');

3. Getting Values
You can retrieve values based on their keys using the get method:


    console.log(myMap.get('key1')); // Output: 'value1'

4. Iterating Over a Map
You can iterate over the keys, values, or entries (both keys and values) using methods like keys, values, and entries:

    for (let key of myMap.keys()) {
      console.log(key);
    }

    for (let value of myMap.values()) {
  console.log(value);
    }

    for (let [key, value] of myMap.entries()) {
      console.log(key, value);
    }

5. Map Size
You can get the size of a Map using the size property:


    console.log(myMap.size); // Output: 2
    Removing Key-Value Pairs

6. You can delete a key-value pair using the delete method:


        myMap.delete('key1');

7. Clearing a Map
You can remove all key-value pairs from a Map using the clear method:


    myMap.clear();
8. Parameters
The Map constructor can take an iterable (like an array) containing key-value pairs as its parameter. Each element of the iterable should be an array where the first element is the key and the second element is the value.

    
    let myMap = new Map([
      ['key1', 'value1'],
      ['key2', 'value2']
    ]);
store 


### What are Forms in react:
### What are Hooks in react: 

Hooks are functions that enable functional components to manage state and perform side effects
 
### What is useState(): 
are used to stor date init 

The useState hook is used to declare state variables in functional components. It takes an initial state as an argument and returns an array with two elements: the current state value and a function that allows you to update the state. 

Example: 

    import React, { useState } from 'react';

    function ExampleComponent() {
    // Declare a state variable named "count" with an initial value of 0
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        </div>
    );
    }

### What is useNavigate():

The useNavigate hook is not a standard React hook; rather, it is typically associated with the React Router library, which is a popular library for handling navigation in React applications. The useNavigate hook is used to programmatically navigate between different pages or routes within a React application.

Here's a brief explanation of how it works with React Router:

    import { useNavigate } from 'react-router-dom';

    function MyComponent() {
    const navigate = useNavigate();

    const handleClick = () => {
        // Use the navigate function to navigate to a specific route
        navigate('/another-page');
    };

    return (
        <div>
        <p>This is my component</p>
        <button onClick={handleClick}>Go to Another Page</button>
        </div>
    );
    }

In the example above, when the button is clicked, the handleClick function is called, and it uses the navigate function from the useNavigate hook to navigate to the "/another-page" route. This is a way to trigger navigation in response to user interactions or other events within your React application.

__**Note:**__ The usage might vary slightly based on the version of React Router you are using, so it's always a good idea to refer to the documentation for the specific version you have installed.

### What is preventDefault():

### input types controlled an uncontrolled inputs:

1. Controlled Inputs:

- In a controlled input, the value of the input field is controlled by the React component state (or the state of the framework being used).
- Changes to the input value are handled by the component's state, and the input field reflects the current state.
- Controlled inputs are often used in React applications, where the state is used to manage the values of form elements.

Example: 

    import React, { useState } from 'react';

    function ControlledInputExample() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        />
    );
    }



2. Uncontrolled Inputs:

- In an uncontrolled input, the input field's value is not directly controlled by the React component state.
- Instead of managing the input value through state, the value is allowed to be directly manipulated by the DOM.
- Uncontrolled inputs are often used when integrating with non-React code or when you want to rely more on the browser's native handling of form elements.

Example (React with Uncontrolled Input):

    function UncontrolledInputExample() {
    const inputRef = React.useRef();

    const handleClick = () => {
        alert(`Input value: ${inputRef.current.value}`);
    };

    return (
        <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Get Input Value</button>
        </div>
    );
    }


In this example, the input value is obtained directly from the DOM using the inputRef.current.value property.

In summary, the distinction between controlled and uncontrolled inputs is mainly about how the input values are managed and updated in the application, particularly in the context of state management in frameworks like React. Controlled inputs are managed by the state, while uncontrolled inputs are not directly tied to the state and rely more on direct DOM interaction.


    


## Ways where we can import css in react:

1. Inline Styles:

You can apply styles directly to React elements using the style attribute. This approach involves writing styles as JavaScript objects.

Example: 

    const MyComponent = () => {
    const myStyle = {
        color: 'blue',
        fontSize: '16px',
    };

    return <div style={myStyle}>Hello, World!</div>;
    };

2. External Stylesheets:

You can create separate CSS files and import them into your React components. This method is common and helps keep your styles organized.

Example: 

    // In your component file
    import './MyComponent.css';

    const MyComponent = () => {
    return <div className="my-component">Hello, World!</div>;
    }


    /* MyComponent.css */
    .my-component {
    color: blue;
    font-size: 16px;
    }


3. CSS-in-JS Libraries:

There are libraries like Styled Components, Emotion, and JSS that allow you to write CSS directly in your JavaScript/JSX files. This approach often involves creating styled components with tagged template literals.

Example: 

    import styled from 'styled-components';

    const StyledDiv = styled.div`
    color: blue;
    font-size: 16px;
    `;

    const MyComponent = () => {
    return <StyledDiv>Hello, World!</StyledDiv>;
    };


4. CSS Modules:

CSS Modules enable local scoping of styles by automatically generating unique class names for each style file. This helps avoid naming conflicts.

    // MyComponent.module.css
    .myComponent {
    color: blue;
    font-size: 16px;
    }

    // In your component file
    import styles from './MyComponent.module.css';

    const MyComponent = () => {
    return <div className={styles.myComponent}>Hello, World!</div>;
    };


5. CSS-in-JS with Framework Integrations:

Some frameworks, like Material-UI or Ant Design, have their own styling systems or provide integrations with popular CSS-in-JS libraries.


## How to convert HTML,CSS,JavaScript to React app:

- Step 1: Set Up a React App

1. Install Node.js and npm:

Make sure you have Node.js and npm installed on your machine. You can download them from https://nodejs.org/.

2. Create a new React App:

Open your terminal and run the following commands to create a new React app using Create React App:

    npx create-react-app my-react-app
    cd my-react-app

 - Step 2: Organize Your Files

 1. Move HTML content to src/app/ inside return:

Cut the contents of your existing HTML file and paste them into the src/app inside return() or create your own component and and call it back in app.js. 

2. Move CSS to public/assets/style.css:

create assets folder and then add your style.css file.

3. Create React Components:

Break down your JavaScript functionality into React components. Create new components in the src folder and use them to encapsulate different parts of your application.

- Step 3: Integrate JavaScript Logic

1. Update public/index.js:

Import your main JavaScript file and render the root component. For example:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import './index.css';

    ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
    );


2. Update src/App.js:

Replace the content of src/App.js with your React component structure. Use JSX to create your UI components.

- Step 4: Run Your React App

1. Start the Development Server:

Run the following command in your terminal to start the development server:

    npm start

2. View Your App:

Open your browser and navigate to http://localhost:3000 to see your React app.

- Step 5: Refactor and Optimize

1. Refactor and Optimize Code:

Refactor your code as needed. Take advantage of React features like state and props to manage data and pass information between components.

2. Install Additional Dependencies:

If your existing code relies on external libraries, make sure to install them using npm:

    npm install <package-name>
