https://github.com/udacity/reactnd-project-would-you-rather-starter

template for Building React/ Redux Projects
Planning Stage 📐
Step 1 - Draw All of the Views of the App
We need to determine the look and functionality of each view in your app. One of the best approaches is to draw each view of the app on paper so that you'll have a good idea of what information and data you're planning to have on each page.

Instead of paper and pencil, you can be a bit more digital and use software for creating mockups. If you were given project specifications, check your mock against them to make sure that you have all of the required features.

Step 2 - Break Each View Into a Hierarchy of Components
For this step,

draw boxes around every component; and
arrange the components into a hierarchy
Step 3 - Determine What Events Happen in the App
We need to take a look at what is happening in each component. Let's determine what actions the app or the user is performing on the data. Is the data being set, modified, or deleted?...then we'll need an action to keep track of that event!

Step 4 - Determine What Data Lives in the Store
Remember that the main problems that Redux (and the react-redux bindings!) was meant to solve were:

Propagation of props through the entire component tree.
Ensuring consistency and predictability of the state across the app.
According to Dan Abramov, the creator of Redux, we should follow the following principle for determining whether to store a piece of data in the store or in a React component:

"Use Redux for state that matters globally or is mutated in complex ways… The rule of thumb is: do whatever is less awkward."

Take a look at Organizing State and How to choose between Redux's store and React's state? for further information about this.

Coding Stage🔨
Step 1 - Design the shape of the state and create reducers.

Step 2 - Create a Redux store. Connect logger middleware (optional) and Redux Thunk middleware (alternatively, you can use Redux Saga, etc.).

Step 3 - For each view that needs access to the store, create the component and connect it to the store.

Step 4 - For the component you created in the last step, create actions and action creators. Check that everything works correctly.

Step 5 - Repeat Step 3 & Step 4 for each component that needs access to the store.

Step 6 - Create presentational components and confirm that everything works correctly.

Step 7 - Add React Router.

Step 8 - Add finishing touches and make sure the project meets the rubric.

Remember, this is just a template. As you build more projects, you'll modify this template to suit your needs. You may also find it more intuitive to use a different approach. Regardless of the approach you take, however, planning out your app is imperative to success.


CRITERIA
MEETS SPECIFICATIONS
Is the application easy to install and start?

The application requires only npm install and npm start to install and launch.

Does the application include README with clear installation and launch instructions?

A README is included with the project. The README includes a description and clear instructions for installing and launching the project.

Login Flow

CRITERIA
MEETS SPECIFICATIONS
Does the application have a way to log in and log out?

Does the application work correctly regardless of which person the user impersonates?

There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)
The application works correctly regardless of which user is selected.
The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
Once the user logs in, the home page is shown.
Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.
Application Functionality

CRITERIA
MEETS SPECIFICATIONS
Does the home page have the desired functionality?

The answered and unanswered polls are both available at the root.
The user can alternate between viewing answered and unanswered polls.
The unanswered questions are shown by default.
The name of the logged in user is visible on the page.
The user can navigate to the leaderboard.
The user can navigate to the form that allows the user to create a new poll.
Are the polling questions listed in the correct category (Unanswered vs Answered), and do they have the desired functionality on the home page?

Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.

A polling question links to details of that poll.

The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

Are the details of each poll displayed with all of the relevant information?

The details of the poll are available at questions/:question_id.
When a poll is clicked on the home page, the following is shown:
the text “Would You Rather”;
the picture of the user who posted the polling question; and
the two options.
For answered polls, each of the two options contains the following:
the text of the option;
the number of people who voted for that option;
the percentage of people who voted for that option.
The option selected by the logged in user should be clearly marked.
When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)
Does the voting mechanism work correctly?

Upon voting in a poll, all of the information of the answered poll is displayed.
The user’s response is recorded and is clearly visible on the poll details page.
When the user comes back to the home page, the polling question appears in the “Answered” column.
The voting mechanism works correctly, and the data on the leaderboard changes appropriately.
Can users add new polls?

The form is available at/add.
The application shows the text “Would You Rather” and has a form for creating two options.
Upon submitting the form, a new poll is created and the user is taken to the home page.
The new polling question appears in the correct category on the home page.
Does the leaderboard work correctly and have the desired functionality?

The Leaderboard is available at/leaderboard.
Each entry on the leaderboard contains the following:
the user’s name;
the user’s picture;
the number of questions the user asked; and
the number of questions the user answered.
Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
Is the application navigable?

The app contains a navigation bar that is visible on all of the pages.

The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.

Does the application interact with the backend correctly?

The data that’s initially displayed is populated correctly from the backend.

Each user’s answer and each new poll is correctly recorded on the backend.

Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using key for list items? Is the code formatted properly?

The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

Architecture

CRITERIA
MEETS SPECIFICATIONS
Does the store serve as the application’s single source of truth?

The store is the application’s source of truth.

Components read the necessary state from the store; they do not have their own versions of the same state.

There are no direct API calls in the components' lifecycle methods.

Is application state managed by Redux?

Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.

Form inputs and controlled components may have some state handled by the component.

Does application state update correctly?

Updates are triggered by dispatching action creators to reducers.

Reducers and actions are written properly and correctly return updated state to the store.

Does the architecture of the application make sense?

The code is structured and organized in a logical way.

Components are modular and reusable.
