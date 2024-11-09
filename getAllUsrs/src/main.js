import { Client, Users } from 'node-appwrite';

// This Appwrite function will be executed every time your function is triggered
  const endpoint = process.env.endpoint;
  const projectId = process.env.projectId;
  const databaseId = process.env.databaseId;
  const userCollectionId = process.env.userCollectionId;
export default async ({ req, res, log, error }) => {
  // You can use the Appwrite SDK to interact with other services
  // For this example, we're using the Users service
  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    // .setKey(req.headers['x-appwrite-key'] ?? '');
  const users = new Users(client);

  if(req.method === 'GET') {
    try {
      const response = await users.listDocuments(databaseId, userCollectionId);
      return res.json(response.documents);
    } catch(err) {
      return res.json(err);
    }
  }
  // try {
  //   const response = await users.list();
    // Log messages and errors to the Appwrite Console
    // These logs won't be seen by your end users
  //   log(`Total users: ${response.total}`);
  // } catch(err) {
  //   error("Could not list users: " + err.message);
  // }

  // The req object contains the request data
  // if (req.path === "/ping") {
    // Use res object to respond with text(), json(), or binary()
    // Don't forget to return a response!
    // return res.text("Pong");
  // }

  return res.json({
    motto: "Build like a team of hundreds_",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};
