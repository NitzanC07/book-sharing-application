# Sharing Books Application

## Vission
Enable every person in the world access to education for free, and encourage actively reading and creativity writing on a regular basis.

## Overview
In the first step I plan to build a web application with focus on two mainly fields. First is to create a sharing books library in that the users are contribute from their own bookshelves. Second is to create platform to encourge people to create their own through games of creative writing, writing alone and together, and give them the first step to write what they want. 

Beside all of this, I make this enterprise as my technical project as a Full Stack web development. I responsible for all the plans of it, and implement it with every technology tools that I learned (and keep learning every time). 

## Technology 
For this project I build both server side and client side, and I use variety of tools:

### Server side (Back end)
* Node.js
* Express.js - As the main framework to build the server.
* MongoDB atlas - To create a database for the users, books and other content of the web application. 
* REST API - To navigate between the routes on the server side.
* I create an Authentication make a personal acount for each user. 

### Client side (Front end)
* React - The main framework to build the user interface, user experiance and the functionality.
* Redux toolkit
* React-router-dom - To navigate between the pages and sections of the web application on the client side.

## Run Locally
1. Clone the repository to your local machine.
```bash
git clone https://github.com/NitzanC07/book-sharing-application.git
```
2. Go to the project directory.
```bash
cd .\book-sharing-application
```
3. Install dependencies NPM
```bash
npm install
```
4. Start run server and client. The server is running on port 5000, and the client running on port 3000.
```bash
npm run dev
```

## API References
### User routes
#### Create new user.
```http
@route  POST /api/users/register
@access Public
```
| Parameters  | Type   | Description                    |
| :-----------|:-------|:-------------------------------|
| `name`      |`string`| **Required**. user's name      |
| `email`     |`string`| **Required** and **unique**.   |
| `password`  |`string`| **Required**. Hashing with JWT |

#### Authenticate existing user.
```http
@route  POST /api/users/login
@access Public
```
| Parameters  | Type   | Description                  |
| :-----------|:-------|:-----------------------------|
| `email`     |`string`| **Required** and **unique**. |
| `password`  |`string`| **Required**. Hashing as JWT |

#### Get current user's details
```http
@route  GET /api/users/me
@access Private
```
This route doesn't need any parameter, but it must have an authenticate user with token.

#### Update current user's details
```http
@route  PUT /api/users/me
@access Private
```
| Parameters | Type   | Description                      |
| :----------|:-------|:---------------------------------|
| `name`     |`string`| User can update him name or email|
| `email`    |`string`| User can update him name or email| 

### Book routes
#### Add new book
```http
@route  POST /api/books/create-book
@access Private
```
|Parameters|Type|Default|Description|
|:--------------|:--------|:--------|:----------|
|`owner id`|`string` ||**Required**. reference to current user|
|`title`|`string` ||**Required**. book's title| 
|`author`|`string` ||**Required**. book's author| 
|`language`|`string` |Hebrew|Book's language|
|`year`|`number` |1900|Book's release year|
|`description`|`string` |Please tell...|Short book's summary| 
|`numberOfPages`|`number` |0|Amount of pages in the book| 
|`imageUrl`|`string` |No image|URL address of book's cover|
|`availibilty`|`boolean`|true|Tell status of the book|
|`genre`|`string` |Book's genre|Book's literature genre|
|`lendPeriod`|`number` |30|The time period of lending the book|
|`timestamps`|`string` ||Tell when the user added or update book|

#### Get all books
```http
@route  GET /api/books/all-books
@access Private
```
This route doesn't get any parameter. It response all the books of all the users which include in the database.

#### Get user's books
```http
@route  GET /api/books/my-books
@access Private
```
| Parameters | Type   | Description                  |
| :----------|:-------|:-----------------------------|
| `owner id` |`string`| Response all the user's books|

#### Delete user's book
```http
@route  DELETE /api/books/:id
@access Private
```
|Parameters | Type   | Description                         |
|:----------|:-------|:------------------------------------|
|`owner id` |`string`|Check if the user is the book's owner|
|`book id`  |`string`|Find the specific book and delete    |

#### Update user's book
```http
@route  PUT /api/books/:id
@access Private
```
|Parameters | Type   | Description                         |
|:----------|:-------|:------------------------------------|
|`owner id` |`string`|Check if the user is the book's owner|
|`book id`  |`string`|Find the specific book and update    |
