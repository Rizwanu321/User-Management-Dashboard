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
