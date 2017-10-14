
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var expect = chai.expect;

chai.use(chaiHttp);

describe('App', function() {

  describe('/api/user error', function() {
    it('responds with status 200', function(done) {
      chai.request(server)
        .get('/api/user')
        .end(function(err, res) {
          expect(res).to.have.status(400)
          done();
        });
    });
  });

  describe('/api/user username', function() {
    it('responds with status 200', function(done) {
      chai.request(server)
        .get('/api/user')
        .query({"username":"alice"})
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(JSON.parse(res.text))
            .to.include({"username":"alice"});
          done();
        });
    });
  });

  describe('/api/user username + password', function() {
    it('responds with status 200', function(done) {
      chai.request(server)
        .get('/api/user')
        .query({"username":"alice", "password":"alice"})
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(JSON.parse(res.text))
            .to.include({"username":"alice"});
          done();
        });
    });
  });

  describe('/api/user create', function() {
    it('responds with status 200', function(done) {
      var data = {
        'username' : 'david',
        'password' : 'david',
        'firstName' : 'David',
        'lastName'  : 'Jones',
        'email' : 'david@example.com'
      };
      chai.request(server)
        .post('/api/user')
        .send(data)
        .end(function(err, res) {
          expect(res).to.have.status(201);
          chai.request(server)
            .get('/api/user')
            .query({'username':'david'})
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"username":"david"});
              done();
          });
        });
    });
  });
});