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

```