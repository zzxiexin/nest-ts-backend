###
```markdown
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=test -d mysql:latest  

mysql -u root -p   

show databases;   

use databases;   

show tables;   

select * from table_name;   
```
```markdown
curl -H "Content-Type: application/json" -X POST -d '{"name": "123", "id":100 }' "http://localhost:3000/users"

```bash
$ # GET /profile
$ curl http://localhost:3000/profile
$ # result -> {"statusCode":401,"error":"Unauthorized"}

$ # POST /auth/login
$ curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm... }

$ # GET /profile using access_token returned from previous step as bearer code
$ curl http://localhost:3000/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
$ # result -> {"userId":1,"username":"john"}
```


```