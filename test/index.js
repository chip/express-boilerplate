const test = require('tape');
const request = require('supertest');
const app = require("../server");

test('GET /', function (t) {
  request(app)
    .get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (_, res) {
      t.equal(res.body.message, 'GET / success');
      t.end();
    });
});

test('POST /', function (t) {
  request(app)
    .post('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (_, res) {
      t.equal(res.body.message, 'POST / success');
      t.end();
    });
});
