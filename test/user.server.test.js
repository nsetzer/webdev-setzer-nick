
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var expect = chai.expect;

chai.use(chaiHttp);

describe('User', function() {

  describe('/api/user api error', function() {
    it('should fail when an invalid enpoint is reached', function(done) {
      chai.request(server)
        .get('/api/user')
        .end(function(err, res) {
          expect(res).to.have.status(400)
          done();
        });
    });
  });

  describe('/api/user by username', function() {
    it('should return the named user', function(done) {
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

  describe('/api/user by username and password', function() {
    it('should return the named user if the password is correct', function(done) {
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
    it('should create a new user', function(done) {
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

  describe('/api/user find by id', function() {
    it('returns the correct user', function(done) {
      chai.request(server)
        .get('/api/user/123')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(JSON.parse(res.text))
            .to.include({"username":"alice"});
          done();
        });
    });
  });

  describe('/api/user update', function() {
    it('updates the correct user', function(done) {
      var data = {
        'username' : 'alice',
        'password' : 'alice',
        'firstName' : 'Alice',
        'lastName'  : 'TEST',
        'email' : 'alice@example.com'
      };
      chai.request(server)
        .put('/api/user/123')
        .send(data)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/user')
            .query({'username':'alice'})
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"username":"alice",
                             "lastName":"TEST"});
              done();
          });
        });
    });
  });


    describe('/api/user delete', function() {
    it('deletes the given user', function(done) {
      chai.request(server)
        .delete('/api/user/123')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/user')
            .query({'username':'alice'})
            .end(function(err, res) {
              expect(res).to.have.status(400);
              done();
          });
        });
    });
  });
});