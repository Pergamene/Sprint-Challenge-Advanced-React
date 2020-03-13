- [ ] Why would you use class component over function components (removing hooks from the question)?

```
I wouldn’t.  React documentation explains that class components encourage bad practices and function components with
hooks are how new things should be written.  There will be old components that were written with classes, so they 
aren’t going away, but they shouldn’t be written anymore.
```

- [ ] Name three lifecycle methods and their purposes.

```
componentDidMount - runs after the component output has been rendered.
componentDidUpdate - run immediately after an update occurs, so the component can re-render with the new state.
componentWillUnmount - runs when the component DOM is removed, so we can stop running code and watching for events.
```

- [ ] What is the purpose of a custom hook?

```
Custom hooks allow for stateful logic to be reused by multiple components.
```

- [ ] Why is it important to test our apps?

```
Testing helps us find bugs, so that we can have confidence in the code we have written.  It’s much better for use to 
break our code so we have a chance to fix it, than it is to ship buggy code and have to fix bugs that users are 
finding.  Automated testing also lets us quickly have confidence every time we update the code.
```
