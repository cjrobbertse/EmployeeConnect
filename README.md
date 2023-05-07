 # :globe_with_meridians:<br>EmployeeConnect

EmployeeConnect  is a distributed live client-server based application that allows employees upload their personal information and view other employees personal data in real time.

## Step 1 - Start the Server

Start the server by running the following command in the project root directory:

```shell
node server/index.mjs
```

> **Note**: The file extension is `.mjs`

## Step 2 - Connect a client

Connect a client by opening the `client/index.html` file in a browser.

> This should log the connection of a new client in the server logs

## Step 3 - Input employee details

Enter the employee first name, last name, date of birth, and employment status, then submit.

> **Note**: The following form input validation is in place:
> - All fields are **required** and must be filled out or completed.
> - The age of an employee must be at least 12 years old, so you cannot enter a date later than 12 years ago.

You should see the employee information displayed below in the logs. If you do not, please check the server is running.

> **Note**: The date of birth is converted into `Age` and the first and last name are merged into `Name`.

## Developer Comments

1. This application takes the form data inputted by the client and converts it into JSON.
2. The age is calculated from the date of birth and the employment status is converted to boolean form. 
3. The JSON object is sent to the server as a string and then broadcast to all connected clients. 
4. All clients parse and format the JSON to display the employee details in realtime.
