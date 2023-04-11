import React from 'react';

const Blogs = () => {
    return (
      <div className="my-container">
        <div className="mt-5">
          <h2 className="font-medium text-2xl">
            1. When should you use context API?
          </h2>
          <p>
            ans: Context solves the props drilling problem: when you have to
            pass down props from parents to children.usually we use props to
            pass data from one component . But many times we need to pass data
            through nesting component. In that case if we use props that will be
            difficult to pass data . That's why we use context api .
          </p>
        </div>
        <div className="mt-5">
          <h2 className="font-medium text-2xl">2.What is a custom hook?</h2>
          <p>
            ans: Custom hooks are reusable function that we use to add special
            functionalities to react application.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="font-medium text-2xl">3. What is useRef?</h2>
          <p>
            ans: useRef is a one hook of react that that accepts one argument as
            the initial value and returns a reference. This reference has a
            special property.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="font-medium text-2xl">4. What is useMemo?</h2>
          <p>
            ans: useMemo is one of the hook of react that allows you to memoize
            expensive functions so that you can avoid calling them on every
            render.
          </p>
        </div>
      </div>
    );
};

export default Blogs;