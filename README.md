# Campus-Management-App
Group Members: 
Nafew Mustafa & Mohammad Amin

As a user, I:

1.  [X] will land on a visually pleasing home page by default, which allows navigation to view all campuses and all students

2.  [X] can navigate to all-campuses view, and

-   [X] see a list of all campuses in the database

-   [X] see an informative message if no campuses exist

-   [X] add a new campus

- [X] with a validated form displaying real-time error messages

4. [X] can navigate to a single-campus view, and

-  [X] see details about a single campus, including enrolled students (if any)

-  [X] see an informative message if no students are enrolled at that campus

-  [X] navigate to any student's single-student view 

-  [X] delete the campus 

-  [X] edit campus information, including adding students to and deleting student from the campus

-  [X] with a validated form displaying real-time error messages

6. [X] can navigate to all-students view, and

-   [X] see a list of all students in the database

-   [X] see an informative message if no students exist

-   [X] add a new student

-   [X] with a validated form displaying real-time error messages

8.  [X] can navigate to a single-student view, and

-   [X] see details about a single student, including the campus at which the student is enrolled (if exists)

-   [X] see an informative message if the student is not enrolled at a campus

-   [X] navigate to single-campus view of the student's enrolled campus

-   [X] delete the student

-   [X] edit the student's information, including the campus at which the student is enrolled

-   [X] with a validated form displaying real-time error messages

Technical Requirements
----------------------

### All Campuses and All Students 

#### Database (Sequelize)

1.  [X] Write a "campus" model with the following information:  

-   [X] name - not empty or null

-   [X] imageUrl - with a default value

-   [X] address - not empty or null 

-   [X] description - extremely large text

3.  [X] Write a "student" model with the following information: 

-   [X] firstName - not empty or null

-   [X] lastName - not empty or null

-   [X] email - not empty or null

-   [X] imageUrl - with a default value

-   [X] gpa - decimal between 0.0 and 4.0

1.  [X] Student may be associated with at most one campus

2.  [X] Campus may be associated with many students

#### API (Express, Sequelize)

1.  [X]Write a route to serve up all students

2.  [X] Write a route to serve up all campuses

#### State Management (Redux)

1.  [X] Write a "campuses" sub-reducer to manage campuses in the Redux Store

2.  [X] Write a "students" sub-reducer to manage students in the Redux Store

#### UI (React)

1.  [X] Write a component to display a list of all campuses, with at least the following information: campus names and images

2.  [X] Write a component to display a list of all students, with at least the following information: student names

#### Client-Side Routing (React Router)

1.  [X] Display the all-campuses view component when the URL matches "/campuses"

2.  [X] Display the all-students view component when the URL matches "/students"

3.  [X] Add links to the navigation bar that can be used to navigate to the all-campuses view and all-students view

### Single Campus and Single Student

#### API (Express, Sequelize)

1.  [X] Write a route to serve up a single campus (based on the campus id), including that campus's students

2.  [X] Write a route to serve up a single student (based on the student id), including that student's campus

#### UI (React)

1.  [X] Write a component to display a single campus with the following information:

-   [X] The campus's name, image, address, and description  

-   [X] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)

3.  [X] Write a component to display a single student with the following information:

-   [X] The student's full name (first and last names), email, image, and GPA

-   [X] The name of the student's campus (or a helpful message if the student doesn't have one)

#### Client-Side Routing (React Router)

1.  [X] Display the appropriate campus's information when the URL matches "/campuses/:campusId"

2.  [X] Display the appropriate student's information when the URL matches "/students/:studentId"

3.  [X] Clicking on the name of a campus from the all-campuses view should navigate to show that campus in the single-campus view

4.  [X] Clicking on the name of a student from the all-students view should navigate to show that student in the single-student view

5.  [X] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view

6.  [X] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

### Editing a Campus and Editing a Student 

#### API (Express, Sequelize)

1.  [X] Write a route to edit a campus (based on the campus id)

2.  [X] Write a route to edit a student (based on the student id)

#### UI (React)

1.  [X] Write a component to display a form for editing a campus 

2.  [X] Display this component (the form) EITHER as part of the all-campuses view, or as its own single-campus view

3.  [X] Submitting the form with valid inputs should: 

-   [X] Make a request that causes the campus to be updated in the database 

-   [X] Display the updated campus information without needing to refresh the web page

1.  [X] Write a component to display a form for editing a student

2.  [X] Display this component (the form) EITHER as part of the all-students view, or as its own single-student view

3.  [X] Submitting the form with valid inputs should:

-   [X] Make a request that causes the student to be updated in the database

-   [X] Display the updated student information without needing to refresh the web page

### Adding a Campus and Adding a Student

#### API (Express, Sequelize)

1.  [X] Write a route to add a new campus

2.  [X] Write a route to add a new student

#### UI (React)

1.  [X] Write a component to display a form for adding a new campus, which contains input fields for at least the following campus information: name, address, and description

2.  [X] Display this component (the form) EITHER as part of the all-campuses view, or as its own single-campus view

3.  [X] Submitting the form with valid inputs should: 

-   [X] Make a request that causes the new campus to be persisted in the database

-   [X] Add the new campus to the list of campuses without needing to refresh the web page

1.  [X] Write a component to display a form for adding a new student, which contains input fields for at least the following student information: first name, last name, and email

2.  [X] Display this component (the form) EITHER as part of the all-students view, or as its own single-student view

3.  [X] Submitting the form with valid inputs should: 

-   [X] Make a request that causes the new student to be persisted in the database  

-   [X] Add the new student to the list of students without needing to refresh the web page

### Deleting a Campus and Deleting a Student

#### API (Express, Sequelize)

1.  [X] Write a route to delete a campus (based on the campus id)

2.  [X] Write a route to delete a student (based on the student id)

#### UI (React)

1.  [X] In the all-campuses view, include a "Delete" button next to each campus

2.  [X] Clicking the "Delete" button should:  

-   [X] Make a request that causes that campus to be deleted from the database 

-   [X] Delete the campus from the list of campuses without needing to refresh the web page

1.  [X] In the all-students view, include a "Delete" button next to each student

2.  [X] Clicking the "Delete" button should:

-   [X] Make a request that causes that student to be deleted from the database 

-   [X] Delete the student from the list of students without needing to refresh the web page
