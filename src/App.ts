import 'dotenv/config';
import '@shared/infra/database';
import Server from '@shared/infra/http/Server';

const PORT = process.env.APP_PORT || 3001;

new Server().start(PORT);
