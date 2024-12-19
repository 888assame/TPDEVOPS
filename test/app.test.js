const request = require('supertest');
const app = require('../app'); // Assuming your Node.js app is in app.js

describe('GET /', () => {
  it('should return "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
  });
});
