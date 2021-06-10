mongo <<EOF
    var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
    var db = connect('mongodb://'+rootUser+':'+rootPassword+'@localhost:27017/admin');
    db = db.getSiblingDB('$MONGO_DB_NAME')
    var user = '$MONGO_USER';
    var passwd = '$MONGO_PASSWORD';
    db.createUser({user: user, pwd: passwd, roles: [{"role":"readWrite", db: '$MONGO_DB_NAME'}]});
EOF