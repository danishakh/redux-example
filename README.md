# Redux Example

This is a front-end React application built with React and Redux. The main purpose of this project was to learn and implement Redux with React.

The code in this project is fairly well commented out to help understand what is happening, but I wanted to provide a higher level overview here for learning purposes. 


For information on Redux please check out the [React-Redux Documentation](https://react-redux.js.org/introduction/quick-start)


## Why Redux?
In React we have components which have their own state. Our data is typically stored in state (from an API for example). If we have a form, the values of each user input is also stored in state. 

The problem is that if we have a large application with a lot of different components, managing individual component state becomes messy and difficult. This is where Redux comes into play - instead of component level state we have an application level state as a one way data flow. The application level state is immutable and comes into our components in a top-down approach. We don't really change the state, we just constantly keep re-creating it. 

## Redux Data Flow
![Redux Data Flow](https://image.slidesharecdn.com/reduxdataflowwithangular-170623072558/95/redux-data-flow-with-angular-24-638.jpg?cb=1498202795)

- **View:** These are basically our React components
- **Store:** This is where our state lives, which is passed down to our components
- **Action Creators:** Dispatches an action to the store when the user fires an action/action creator by clicking a button/submitting a form/etc in the View. 
- **Reducers:** Pure functions that specify how the application state should change based in response to that action. Reducers respond with the new state. (Remember state is immutable, it is not modified but instead re-created)
 