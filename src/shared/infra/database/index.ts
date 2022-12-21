import { createConnection } from 'typeorm';

export default createConnection().then(() =>
  console.log('Database is connected'),
);
