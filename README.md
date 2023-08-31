# LAB 18 - Serverless API

## Author: Emily Greason

### Root URL

https://us-west-2.console.aws.amazon.com/apigateway/home?region=us-west-2#/apis/bn2k36i3gi/resources/4feynw

### Routes

- /get (handleGetPeople / handleGetPeople/id)
  - requires input id, outputs JSON body
- /post (handlePostPeople)
  - requires JSON body input of id, name and age, outputes statusCode 200
- /put (handlePutPeople / handlePutPeople/id)
  - requires name and age input and outputs an updated object
- /delete (handleDeletePeople / handleDeletePeople/id)
  - requires id, name and age and outputs statusCode 200``