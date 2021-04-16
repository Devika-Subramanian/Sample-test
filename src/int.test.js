const app = require('./app')
const supertest = require('supertest')

describe('Integration tests', () => {
  let request;

  beforeAll(async () => {
    
    request = supertest(app);
  })

  describe('/ping', () => {
    it('returns a 200 response', async done => {
      console.log("========",process.env.NODE_ENV) 

      const res = await request.get('/liveness')
      expect(res.status).toBe(200)
      //const parsedResponse = JSON.parse(res.text)
      //expect(parsedResponse).toEqual({ status: 'OK' })
      done()
    })
  });

  
});