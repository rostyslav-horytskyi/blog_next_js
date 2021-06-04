import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const {
      mongodb_username,
      mongodb_password,
      mongodb_clustername,
      mongodb_database
    } = process.env;
    const connectionString = `mongodb+srv://${mongodb_username}:${mongodb_password}@${mongodb_clustername}.ot9mg.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();
    res.status(201).json({ message: 'Successfully stored message!', message: newMessage })
  }
};

export default handler;
