/**
 * Responsible for exposing our web server configs
 */
import { env } from './env';
import { app } from './app';

app.listen({
    host: '0.0.0.0',
    port: env.PORT
}).then(() => {
    console.log(`Server running on http://localhost:3000`)
});


