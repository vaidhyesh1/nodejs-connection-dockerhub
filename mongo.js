const {MongoClient} = require('mongodb');

async function getDatabases() {
	const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.DB_SERVER}:${process.env.MONGO_PORT}?retryWrites=true&w=majority`;
	const client = new MongoClient(uri);
	try {
    await client.connect();
    var dbList = await listDatabases(client);
	return dbList;
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
	var databases = []
    databasesList.databases.forEach(db => databases.push(db.name));
	return databases;
};
