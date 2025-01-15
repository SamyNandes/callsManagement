# callsManagement
An application for management of calls which contains two entities, admin and user. The user creates an account and makes the calls and the admin also has the possibility to create a call and his main role is to management the calls, having the possibility to delete and change the status of them.



# Getting started
--
**1.** **Node.js**

Check if Node.js is already installed. Run the following command in the terminal:

`node -v`

If it displays the Node version, it's installed. Otherwise, you will need to install it from the official website: [Node.js](https://nodejs.org/en).

**2.** **Clone the Repository**

Clone the repository with the following command in the terminal:  
~~~  
git clone https://gitlab.com/samyrafernandes19/api.git  
~~~

**3.** **Backend Setup**

**3.1** Navigate to the "app-main/Backend" directory.  
**3.2** In the terminal, type the following command to install all dependencies:  

    `npm install`

**3.3** Configure the `.env` file

    Locate and edit the `.env` file in the backend directory.  
    - Change the **DB_USER** and **DB_PASSWORD** variables to your MongoDB login and password.  
    - This information can be found in **Database Access** in the MongoDB dashboard.  
    - Make sure to create the database named `service_requests` in the **Cluster0** cluster.

**3.4** Configure MongoDB User

Ensure your MongoDB user has the `readWriteAnyDatabase@admin` role for full access.

**3.5** Create the JWT Key  

In the `.env` file, define a JWT key for authentication:  

Example:  
`JWT_SECRET=YourJWTKey`

**3.6** Start the Backend  

Run the following command to start the backend server:  

`npm run start`  

Your application will be running at: [http://localhost:3000](http://localhost:3000)

**4.** **Frontend Setup**

**4.1** Install dependencies  

In the terminal, type the following command to install the dependencies:  

`npm install`

**4.2** Start the Frontend  

In the terminal, type the following command to start the application:  

`npm run start`

Your application will be running at: [http://localhost:5173](http://localhost:5173)

**5. Admin User Creation**

In the `user.controllers.js` file in the controllers folder in the backend, on line 22, change `req.body.admin` to true and create your user. Then, change this state back to false. Setting it to true allows you to modify, delete, and view calls on the route [http://localhost:5173/info](http://localhost:5173)
