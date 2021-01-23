// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {connectToDatabase} from './../../utils/mongodb';


export async function getActivityByNumber(activityNumber, userId) {
  const {db, client} = await connectToDatabase();
  try {
    return  await db.collection('activities').findOne(
          {'number': activityNumber, 'userId':userId},
        );
  }
  catch (err) {
    console.error(err);
  }
  finally {
    client.close();
  }
}

