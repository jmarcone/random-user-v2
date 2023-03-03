# Random User
    Goal
    Understand how to use JSON, map(), and props.
    Bonus: refactor the app using useState and useEffect.

## To do
- Level 1
  - You are given a JSON file (users.json) containing mock data about some random users.
  - This file is already imported at the top of you App.js and contains data that is ready to be used. 
  - Your first task is to open this JSON file and see how the data is structured.
  - For each user contained inside this JSON file, create a component <User> (thanks to map()) and pass all the data from the user as props
  - Inside the <User> component, pass the rest of the data to the <Contact> component.
  - Hint: You can use the spread operator to pass the props.

## Level 2
- When you are finished with level 1 and everything works as expected; 
  - refactor your application so that you don't use mock data from the JSON file anymore, but "live" data coming from an API. For this, we are going to use the RandomUser API. 
  - Try to read up the documentation and understand how the API works
  - Using a React Hook (useState); build a state that will accomodate the users you are going to query
  - Using a React Hook (useEffect) + Fetch, query the correct endpoint (https://randomuser.me/documentation#multiple) that will return 10 random users.
  - Change the data you map upon from the mock data to the data you fetched from the API. Thanks for the fact that the data is shaped the same way; you should not see any difference and your app should work the same! Because fetch is an asynchronous operation, 
  - make sure you prevent the map() to run until after the data has been successfuly set in the state ( https://linguinecode.com/post/4-techniques-conditional-render-react-props-state) 

   
## Level 3 (optional)
- To play around with the API; 
  - create 3 buttons in the App.js file. 
  - One button should say "Show only Men", 
  - the other "Show only Women", 
  - and the third "Show both". 
  - Find a way to conditionaly pass a gender parameter to the endpoint you're calling.

## Level 4 (optional)
- Create a dropdown select menu (https://reactjs.org/docs/forms.html#the-select-tag) that will allow you to choose how many users are returned by the API
