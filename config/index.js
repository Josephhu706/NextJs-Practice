//check if we are in development mode in process.env
const dev = process.env.NODE_ENV !== 'production'

//if we are in development mode, the server will run on localhost:3000, else our deployed website
export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'


