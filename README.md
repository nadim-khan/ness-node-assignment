## Implementing the Feature Store Service with Express and MongoDB

### Setup and Configurations

---
Typescript
Express
Node
Mongoose (for database connectivity)
DB - featuresDB


### Commands

 npm run dev --- To run on development mode 

npm run start  ----  Build and start the app on port 7000

npm run build --- Build the app


#### Design a REST API

---



| Http Verb | Api - Url                                              | Description              |
| --------- | ------------------------------------------------------ | ------------------------ |
| POST      | http://localhost:7000/api/features/feature             | Create a new feature     |
| GET       | http://localhost:7000/api/features                     | Get all Features         |
| PUT       | http://localhost:7000/api/features/{feature_id}        | Update  Existing Feature |
| DELETE    | http://localhost:7000/api/features/{feature_id}        | Remove Feature           |
| GET       | http://localhost:7000/api/features/search/{feature_id} | Get Feature By id        |