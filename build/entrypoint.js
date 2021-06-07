//var db = connect("mongodb://root:password@localhost:27017/admin");

//db = db.getSiblingDB('testing'); // we can not use "use" statement here to switch db

db.createUser(
    {
        user: "mongoUser",
        pwd: "mongoPassword",
        roles: [ { role: "readWrite", db: "testing"} ],
        passwordDigestor: "server",
    }
)