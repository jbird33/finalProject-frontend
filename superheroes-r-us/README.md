# SUPERHEROES-R-US  App | Jeremiah Miller

### Link to App
http://localhost:3000/

### Description
If you ever loved or still love comic books, superheroes, or supervillains, then this is the app for you. There are those out there that try and stay true to just one universe that holds their beloved characters. However,there are those like me, that love the Capcom game that used a cross platform list of characters. Who wouldn't want to see how the Justice League would do in a fair battle against the Avengers? But, why stop there? What if you could throw Luke Skywalker into the mix with a Godzilla counterpart? Doesn't that just sound coooool? Well, here at Superheroes-R-Us that is exactly what you can do! Sign up and Login to your account to start building a Team 1 versus Team 2 matchup. Compare the powerstats from over 700 heroes or villains to answer that nagging question all of us comic lovers have: What If...?

### Example
![image](https://user-images.githubusercontent.com/83088409/125825689-395f4096-d250-4513-bd08-09c71427b8aa.png)




### Technologies Used
* Express
* Node JS
* Sequelize
* React
* Google Chrome
* PostgreSQL
* HTML, CSS, JS

### Installation Instructions
1. Fork and clone both front end and back end repositories
2. Install dependencies
    * Front End: Install & Import
        - Axios
        - React-Router-DOM
        - D3
    * Back End
        - Express
        - Body-Parser
        - Sequelize-CLI
        - Sequelize
        - PG
3. In config.json file of back end change username and password to correct account
4. Set up database for superhero_dev in PostgreSQL
5. Start up server on both files: node server.js / npm start

### Existing Features
* Users can sign up for an account or log into their existing account
* Users can update account information or delete account altogher
* The 'Edit Profile' option is just that, an option and not a forced to component
* Users choose random numbers between 1-731 to check out the individual and over-all stats for the favorite hero/villain
* Not only can they view the 'Power Stats' in written form but, they are visible in a bar graph
* Also, each found character displays their image and the "First Appearance" into the comic book realm
* Users can add each found character to one of two teams to compete against the other, and see their array of members

### Planned Features
* Application will change from a 'front-end' array of Team members and over-all stats to a Model/Database in Express
* The data will still be pulled from the API and pushed to the Model for more efficent data manipulation
* User will have ability to see the individual overall stats, and the team's overall stats, to see who should be 'kicked'/(Deleted) from the team to create a better overall score
* User will have the option to search by name for their favorite hero/villain as well as, by random choice
* Finally, the user will have a compete button with a self built algorithm that decides which team would win. Declaring that winner with some sort of animation would be ideal

### Resources
* GA Instructors (David Magbee, Casey Harding, & Leo Rodriguez) Special Thanks!
* GA Lesson Repositories
* GA Teammates (David Lewis, Andrea Clark, Margie Ball, Patti Huancaya)
* SuperHero API: https://superheroapi.com/index.html
* D3 React Charts Tutorial: https://medium.com/@varvara.munday/d3-in-react-a-step-by-step-tutorial-cba33ce000ce
* D3 Using D3 w/ React: https://blog.logrocket.com/data-visualization-in-react-using-react-d3-c35835af16d0/#settingupabarchartwithd3andreact
* CORS Install/Issues: https://www.npmjs.com/package/cors
* CORS Anywhere/Herokuapp: https://cors-anywhere.herokuapp.com/corsdemo
* Color Palette: https://coolors.co/0666b0-fef887-6f251e-7dc94f-e0082f
* CSS Animations: https://www.w3schools.com/css/css3_animations.asp 
* Refresh Page in React: https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react
* Superhero GIFs: https://giphy.com/explore/superhero
* CSS 3D Buttons: https://freefrontend.com/css-3d-buttons/
* CSS Border and Outline Generator: https://html-css-js.com/css/generator/border-outline/

### Issues or Unsolved Problems
* Some powerstat data came back from the API as null and didn't work well with my D3 React Chart
* Adjusting my enire application to fit the browser window and or mobile devices
* Both could be fixed with future adjustments or planned features

### User Stories
![image](https://user-images.githubusercontent.com/83088409/125844275-2008bd83-05f4-4535-8691-58da82ad8283.png)

![image](https://user-images.githubusercontent.com/83088409/125844342-5858c90b-0a1f-4f4a-86aa-c21ffdf2043d.png)


### Entity Relationship Diagrams
![image](https://user-images.githubusercontent.com/83088409/125844439-ff05559b-2508-42f3-9eee-19069678b89b.png)


### Wireframes 
![image](https://user-images.githubusercontent.com/83088409/125844571-f6ab376e-ed27-454d-98e2-56ae443ebd44.png)

![image](https://user-images.githubusercontent.com/83088409/125851296-6a2a074a-36ce-48ae-877c-b3ddfbbe2326.png)

![image](https://user-images.githubusercontent.com/83088409/125851376-f1c849d8-27e8-4c7f-8e78-4edb71542c1b.png)



