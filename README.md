# Admin Dashboard
This Admin Dashboard is built using Node.js, Express, MongoDB, TypeScript, Vite, and React. The project provides a comprehensive interface for managing various aspects of an application, making use of modern web technologies and a RESTful API architecture.

## Tech Stack
**Backend**: Node.js, Express, TypeScript

**Database**: MongoDB 

**Frontend**: Vite, React, TypeScript, Material UI


## Features
Data visualization and management

Real-time updates

Responsive design + Dark/Light Theme

## Mockups

![dashboard](https://github.com/user-attachments/assets/6e2ae09d-1f9a-4515-8ef2-da7178b3d2c4)
![Products](https://github.com/user-attachments/assets/17a87ff4-c40e-4cee-a323-300e743bb9c2)
![customers](https://github.com/user-attachments/assets/752f0d59-f747-4058-a180-2fdb2f2f476a)
![Geography](https://github.com/user-attachments/assets/9ef45a6f-0ff0-430d-b8e2-85bfe98e1595)
![overview](https://github.com/user-attachments/assets/a1be2661-3a59-46b4-bc77-74e844b323c5)



## Installation and Setup
###  Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)

npm or yarn

MongoDB


#### Clone the Repository
```
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard
```
### Backend Setup

##### Navigate to the backend directory:

##### Install the required packages:
```
npm install
```


##### Create a .env file in the server directory and add the following environment variables:
```
MONGO_URI=<your_mongo_database_uri>
PORT=5001
```
##### Start the backend server:
```
npm run dev
```

### Frontend Setup
Navigate to the frontend directory:
```
cd frontend
```
##### Install the required packages:

```
npm install
```

##### Create a .env.local file in the client directory and add the following environment variable:
```
VITE_APP_BASE_URL=http://localhost:5001
```

##### Start the frontend development server:
```
npm run dev
```
##### Once both the backend and frontend servers are running, you can access the admin dashboard by navigating to:
```
http://localhost:5173/dashboard
```
### Database Connectivity
This project uses MongoDB as its database. Ensure you have a running MongoDB instance and provide the correct connection URI in the .env file.
If you haven't already, set up a MongoDB instance locally or use MongoDB Atlas for a cloud solution.

#### Copy the MongoDB URI and paste it into the MONGO_URI variable in the .env file in the server directory.
#### Run the server and ensure it's connected to your MongoDB instance. If connected successfully, you should see a confirmation message in your terminal.
