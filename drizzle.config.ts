/** @type { import('drizzle-kit').Config} */


const drizzleConfig = {
    schema: "./utils/schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'url mateus',
    }
};


export default drizzleConfig;