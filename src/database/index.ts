import lowdb from "lowdb";
import FileSync from 'lowdb/adapters/FileSync'



type Taco = {
  id: string;
  name: string;
  description: string;
};

type Schema = {
  tacos: Taco[];
};

let db: lowdb.LowSync<Schema>

export const createConnection = async () => {
  const adapter = new FileSync('db.json')
  lowdb(adapter)
  db.defaults({ tacos: [] }).write();
};

export const getConnection = () => db;
