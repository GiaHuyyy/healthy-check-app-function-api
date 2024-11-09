import { Client, Databases } from 'node-appwrite';

// This Appwrite function will be executed every time your function is triggered
  const endpoint = process.env.endpoint;
  const projectId = process.env.projectId;
  const databaseId = process.env.databaseId;
  const userCollectionId = process.env.userCollectionId;
export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    // .setKey(req.headers['x-appwrite-key'] ?? '');
  const users = new Databases(client);

  if(req.method === 'GET') {
    try {
      const response = await users.listDocuments(databaseId, userCollectionId);
      log(`Total users: ${response.total}`);
      return res.json(response.documents);
      // return res.json(response);
    } catch(err) {
      return res.json(err);
    }
  }

  return res.json({
    motto: "Build like a team of hundreds_",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};
