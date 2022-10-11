import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl text-orange-600'>What is the purpose of react router?</h1>
            <h1><p className='text-2xl font-bold underline'>Ans:</p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</h1>
            <h1 className='text-2xl text-orange-600 mt-5' >How does context API works?</h1>
            <h1><p className='text-2xl font-bold underline'>Ans:</p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</h1>
            <h1 className='text-2xl text-orange-600 mt-5'>What is useRef hook in react?</h1>
            <h1><p className='text-2xl font-bold underline'>Ans:</p>1. The useRef Hook allows you to persist values between renders. <br />

                2. It can be used to store a mutable value that does not cause a re-render when updated. <br />

                3. It can be used to access a DOM element directly.</h1>
        </div>
    );
};

export default Blog;