# ⚙️ Server/Database Application

## 🌟Overview

The **Server/Database Application** serves as the backbone of the menu viewing system, handling all interactions between the menu viewer, the management app, and the database. It ensures smooth communication and data consistency across different components of the restaurant system by managing requests, storing menu data, timecards, sales reports, and logs.

## Features

- 🔄 API Gateway: Acts as a bridge between the frontend apps (Menu Viewer and Management) and the database.
- 🗃️ Data Management: Handles all CRUD operations for menu items, timecards, sales reports, and logs.
- 🔐 Secure Communication: Ensures all requests and responses are securely processed.
- 📦 Database Synchronization: Automatically updates the database with changes made via the management page.
- 🚦 Request Handling: Efficiently processes multiple requests simultaneously.
- 📝 Logging: Maintains a detailed record of staff actions and system interactions.

## API EndPoints
<details>
  <summary>
    <h3>Sign Up / Log In</h3>
  </summary>
  <ul>
    <li>GET /api/idExist : Check if ID is valid for use.</li>
    <li>GET /api/checkCred : Check if input ID or the password is valid.</li>
    <li>GET /api/getCred : Get name and tier from input user ID</li>
    <li>POST /api/createId : Create a record of ID, password and name.</li>
  </ul>
</details>

<details>
  <summary>
    <h3>Timecard</h3>
  </summary>
  <ul>
    <li>GET /api/getActivities : Get 30 latest records that is related to given user ID</li>
  </ul>
</details>

## Technologies Used

### Backend Framework
- Node.js
- express

### Database
- Postgres
