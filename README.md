 # :globe_with_meridians:<br>EmployeeConnect

EmployeeConnect  is a distributed live client-server based application that allows employees upload their personal information and view other employees personal data in real time.

## Prerequisites

- **Compatible OS**: This application will work on Windows, Linux, and Mac.
- **Stable Internet Connection**: To install and run the application we recommand having a stable internet connection.
- **Admin Permissions**: We recommend ensuring that you have admin permissions to install the application and it's prerequisites.
- **Node.js**: You must have Node.js installed to install and run the application. Node.js installation is [here](https://nodejs.org/en).
- **Yarn**: You must have Yarn installed to install and run the client-side application. Follow the instructions [here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) to install Yarn (the npm command will work after you install Node.js).

## Installation

### Install the server

In your terminal navigate into the `server` directory and run the following command:

```shell
npm i
```

### Install the client

In your terminal, navigate into the `client` directory and run the following command:

```shell
yarn install
```

## Usage

### Step 1 - Start the Server

In your terminal, from the `server` directory, run the following command to start the server:

```shell
node index.mjs
```

> **Note**: The file extension is `.mjs`

### Step 2 - Connect a client

In your terminal, from the `client` directory, run the following command to start the client website:

```shell
yarn start
```

This should automatically open a new browser tab to the applications front-end. If not, open a new browser tab and navigate to `http://localhost:3001/`.

> **Note**: Every new tab opened on this url will create a new independant client connection to the server. You should see that a new client is connected each time in the server logs!

### Step 3 - Input employee details

Enter the employee first name, last name, date of birth, and employment status, then submit.

> **Note**: The following form input validation is in place:
> - All fields are **required** and must be filled out or completed.
> - The age of an employee must be at least 12 years old, so you cannot enter a date later than 12 years ago.

You should be re-directed to the employee details page where you will see new emploee details submitted to the server by all connected clients in real time. If you are not re-directed, select the `Employee Details` tab or navigate to `http://localhost:3001/employee-details`.
