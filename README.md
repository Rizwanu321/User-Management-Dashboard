# User Management Dashboard

## Objective

This web application allows users to view, add, edit, and delete user details. It interacts with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate real backend functionality.

---

## Features

- **View Users**: Fetch and display a list of users with details like ID, First Name, Last Name, Email, and Department.
- **Add User**: Allows the user to add a new user by sending a POST request to the mock API.
- **Edit User**: Allows editing an existing user’s details and updating the information via PUT request.
- **Delete User**: Enables the deletion of a user by sending a DELETE request.
- **Error Handling**: Displays error messages when an API request fails.
- **Pagination** : Adds pagination to navigate between the list of users.
- **Form Validation** : Ensures the user inputs are valid before submission.
- **Responsive UI** : The application is responsive and works well across devices.
- **Toast Notifications**: Provides user feedback for actions such as adding, editing, or deleting users with toast notifications.
- **Modals**: Used for editing user details in a clean and user-friendly way.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing between different views or pages.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Loader Spinner**: To display loading spinners when data is being fetched.
- **React Paginate**: For paginating the user list and handling large data sets.
- **Bootstrap**: For responsive design and user interface components.
- **React Toastify**: For showing toast notifications for success or error feedback.
- **Font Awesome**: For icons used in buttons and actions.

---

### Description of Key Directories and Files:

- **`App.js`**: The main application component that acts as the entry point for the app.
- **`App.css`**: Contains global styles for the application.
- **`components/`**: A directory containing reusable components.
  - **`AddUser/`**: Responsible for the user creation form.
    - `index.jsx`: The main functional component for adding a user.
    - `index.css`: Styles for the add user component.
  - **`GetUser/`**: Displays a list of users fetched from the API.
    - `index.jsx`: The main functional component for displaying user data.
    - `index.css`: Styles for the get user component.
  - **`UpdateUserModal/`**: Modal component to update user details.
    - `index.jsx`: The main functional component for the modal.
    - `index.css`: Styles for the modal component.
  - **`Loader/`**: Handles loading spinner visuals.
    - `index.js`: The spinner component logic.
    - `index.css`: Spinner styles.
  - **`Validation/`**: Utility functions for form validation.
    - `index.js`: Validation logic.
  - **`api.js`**: Handles API configurations and requests.

---

## Component Details

1. **App.js**
   - Main application component
   - Handles routing and state management
   - Implements the initial user data fetch

2. **AddUser**
   - Form component for adding new users
   - Implements form validation
   - Handles POST requests to the API

3. **GetUser**
   - Displays user list with pagination
   - Implements delete functionality
   - Manages the update modal state

4. **UpdateUserModal**
   - Modal component for editing user details
   - Implements form validation
   - Handles PUT requests to the API

5. **Loader**
   - Reusable loading spinner component
   - Used during API requests

6. **Validation**
   - Contains form validation logic
   - Validates user input fields

---

## Setup Instructions

Follow the steps below to set up and run the project locally:

### Prerequisites
Ensure that you have [Node.js](https://nodejs.org/) installed on your system. To check if Node.js and npm are installed, you can run the following commands:

```bash
node -v
npm -v
```

If these are not installed, you can download and install Node.js from the official site.

## Steps to Set Up the Project

### 1. **Clone the repository:** Clone this repository to your local machine using Git:

```bash
git clone https://github.com/Rizwanu321/User-Management-Dashboard.git
```

### 2. **Navigate to the project directory:**
```bash
cd User-Management-Dashboard
```

### 3. **Install dependencies:** Install the required dependencies using npm or yarn:
```bash
npm install
```

### 4. **Run the development server:** Start the development server using npm:
```bash
npm start
```

The application will open in your default browser at http://localhost:3000.


## Challenges Faced

### 1. API Limitations
The project uses the JSONPlaceholder API, which is a mock API for testing and prototyping. However, this API has the following limitations:
- **Non-persistent Data**: Any changes made using POST, PUT, or DELETE requests are not persisted on the server.
- **Mock Responses**: The API simulates successful responses, but the data is not actually updated.

### 2. Handling Mock Responses
Since the JSONPlaceholder API doesn't store data:
- Developed logic to handle POST, PUT, and DELETE operations as though they were successful.
- Ensured the frontend's state management simulates the intended behavior without real backend support.

---

## Potential Improvements

- **Implement proper state management**: Use Redux or Context API to manage global state more effectively, especially as the application grows in complexity.
- **Add unit tests and integration tests**: Enhance the codebase's reliability by testing components, API calls, and user interactions.
- **Implement proper authentication and authorization**: Secure the application by integrating user authentication and role-based access control.
- **Add search and filtering capabilities**: Allow users to quickly find specific records or filter the user list by criteria such as department or name.
- **Implement sorting functionality for table columns**: Enable users to sort the table by ID, name, email, or department for better usability.

---

## Mobile Interface

<br/>

<a href="https://res.cloudinary.com/dngzbeidb/image/upload/v1732042566/dawxfnqfyooxxvcmyeme.jpg" target="_blank">
  <div style="text-align: center;">
    <img src="https://res.cloudinary.com/dngzbeidb/image/upload/v1732042566/dawxfnqfyooxxvcmyeme.jpg" alt="Mobile Interface" style="max-width:40%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
  </div>
</a>

<br/>

## Web Interface

<a href="https://res.cloudinary.com/dngzbeidb/image/upload/v1732041216/hds3iegwjjvdcbiknaev.png" target="_blank">
  <div style="text-align: center;">
    <img src="https://res.cloudinary.com/dngzbeidb/image/upload/v1732041216/hds3iegwjjvdcbiknaev.png" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)" />
  </div>
</a>

<br/>

## Website Link

Visit the live website: [User Management Dashboard](https://user-management-dashboard-app.netlify.app/)
