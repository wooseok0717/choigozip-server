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
    <li>GET /api/getCred : Get name and tier from input user ID.</li>
    <li>POST /api/createId : Create a record of ID, password and name.</li>
  </ul>
</details>

<details>
  <summary>
    <h3>Timecard</h3>
  </summary>
  <ul>
    <li>GET /api/getActivities : Get 30 latest records that is related to given user ID.</li>
    <li>GET /api/timeData : Get all the timecard record within the date input.</li>
    <li>POST /api/createTimeStamp : Create timestamp for user.</li>
    <li>DELETE /api/deleteTimestamp : Deletes the record in the database.</li>
  </ul>
</details>

<details>
  <summary>
    <h3>Menu</h3>
  </summary>
  <ul>
    <li>GET /api/getCategories : Get all categories that exists in the database.</li>
    <li>GET /api/menuList : Get all menu related to given category ID.</li>
    <li>POST /api/createCategory : Create a category with given name and description.</li>
    <li>POST /api/menu : Create a menu with given details about the menu.</li>
    <li>PUT /api/changeOrder/Category : Change order of category in between 2 of the given categories ID.</li>
    <li>PUT /api/category : Update category information with input data.</li>
    <li>PUT /api/changeOrder/menu : Update menu information with input data.</li>
    <li>PUT /api/menu : Update menu information with input data.</li>
    <li>DELETE /api/category : Delete a category related with input category ID.</li>
    <li>DELETE /api/menu : Delete a menu associated with input menu ID.</li>
  </ul>
</details>

<details>
  <summary>
    <h3>User</h3>
  </summary>
  <ul>
    <li>GET /api/users : Get all users in the database.</li>
    <li>PUT /api/updateTier : Change tier of the user with user ID input with tier input.</li>
  </ul>
</details>

<details>
  <summary>
    <h3>Promo</h3>
  </summary>
  <ul>
    <li>GET /api/promos : Get all promos in the database.</li>
    <li>GET /api/activePromos : Get all active promos in the database.</li>
    <li>POST /api/promo : Create a promo with given data.</li>
    <li>PUT /api/promo : Updates promo info with input data.</li>
    <li>PUT /api/activatePromo : Activates/deactivates promos with promo ID.</li>
    <li>DELETE /api/promo : Delete a promo.</li>
  </ul>
</details>

<details>
  <summary>
    <h3>Sales</h3>
  </summary>
  <ul>
    <li>GET /api/salesReport : Loads sales report by given offset and page input.</li>
    <li>GET /api/salesReport/maxPage : Returns max page for sales report.</li>
    <li>GET /api/stats : Gives statistics for sales report.</li>
    <li>GET /api/salesDate : Get sales record for selected dates.</li>
    <li>POST /api/salesReport : Creates a report for the selected date.</li>
  </ul>
</details>

<details>
  <summary>
    <h3>Record</h3>
  </summary>
  <ul>
    <li>GET /api/history : Gets all user history by given page and offset input.</li>
    <li>POST /api/record : Creates a user record into the database.</li>
  </ul>
</details>

## Technologies Used

### Backend Framework
- Node.js
- express

### Database
- Postgres
