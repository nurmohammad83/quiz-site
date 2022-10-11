import React from "react";

const Blog = () => {
  return (
    <>
      <section className="m-5 p-8">
        <h1 className="text-2xl">1. What is the purpose of react router?</h1>
        <p className="p-3">
          React Router, and dynamic, client-side routing, allows us to build a
          single-page web application with navigation without the page
          refreshing as the user navigates. React Router uses component
          structure to call components, which display the appropriate
          information. React router main three works is Subscribing and
          manipulating the history stack matching the URL to your routes,
          rendering a nested UI from the route matches.
        </p>
      </section>
      <section className="m-5 p-8">
        <h1 className="text-2xl">2. How does work Context API?</h1>
        <p className="p-3">
        Context API provides a way to pass data through the component tree without having to pass props down manually at every level. Context API solves one major problem–prop drilling. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components.  Context API allows you to have a central store where your data lives . The store can be inserted into any component directly. You can cut out the middleman.
        </p>
      </section>
      <section className="m-5 p-8">
        <h1 className="text-2xl">3. What is the purpose of react router?</h1>
        <p className="p-3">
        The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component. There are two main uses of useRef  Accessing the DOM nodes or React elements and keeping a mutable variable. The variable will persist for the full lifetime of the component. Changes in an instance variable won’t generate a re-render. Refs are useful when getting user input, DOM element properties and storing constantly updating values.
        </p>
      </section>
    </>
  );
};

export default Blog;
