
export const MongoClient = require('mongodb').MongoClient;
export const ObjectId = require('mongodb').ObjectID;

export async function connectToDatabase () {
    const mongoClient  = new MongoClient('mongodb://user:12345678901234567890@87.239.108.78/MongoDB-2565', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const client = await mongoClient.connect();
    return {'client': client, 'db': client.db("MongoDB-2565")};
}

export async function setActivity(activity) {
    const {db,client} = await connectToDatabase();
    try {
        let number = (activity.number !== undefined) ? activity.number : await db.collection('activities').countDocuments() + 100000000;
        let filter = {'number': number};
        let data = {...activity, 'number': number, 'userId': new ObjectId(activity.userId)};
        return await db.collection('activities').findOneAndReplace(filter, data, {
            'upsert': true,
            'returnOriginal': false
        });
    }
    catch (err) {
        console.log('DB set activity error');
        console.error(err);
        return {'error': 'Error on SetActivity'};
    }
    finally {
        client.close();
    }

}