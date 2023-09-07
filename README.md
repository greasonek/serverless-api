# LAB 18 - Serverless API

## Author: Emily Greason

### Root URL

https://bn2k36i3gi.execute-api.us-west-2.amazonaws.com/getPeople

### UML

![UML](Screenshot%202023-08-31%20at%209.37.27%20PM.png)

### Routes

- /get (handleGetPeople / handleGetPeople/id)
  - requires input id, outputs JSON body
- /post (handlePostPeople)
  - requires JSON body input of id, name and age, outputes statusCode 200
- /put (handlePutPeople / handlePutPeople/id)
  - requires name and age input and outputs an updated object
- /delete (handleDeletePeople / handleDeletePeople/id)
  - requires id, name and age and outputs statusCode 200