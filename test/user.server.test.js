
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

  describe('/api/user reset', function() {
    it('should clear the database', function(done) {
      chai.request(server)
        .delete('/api/user')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          done();
        });
    });
  });

  // create a user and check to see that the
  // username exists when done
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

  // create a user and check to see that the
  // user id exists when done
  describe('/api/user create', function() {
    it('should create a new user', function(done) {
      var data = {
        'username' : 'alice',
        'password' : 'alice',
        'firstName' : 'Alice',
        'lastName'  : 'Wonderland',
        'email' : 'alice@example.com'
      };
      chai.request(server)
        .post('/api/user')
        .send(data)
        .end(function(err, res) {
          expect(res).to.have.status(201);
          chai.request(server)
            .get('/api/user/' + res.body._id)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"username":"alice"});
              done();
          });
        });
    });
  });

  describe('/api/user create exists', function() {
    it('should fail', function(done) {
      var data = {
        'username' : 'alice',
        'password' : 'alice',
        'firstName' : 'Alice',
        'lastName'  : 'Alice',
        'email' : 'alice@example.com'
      };
      chai.request(server)
        .post('/api/user')
        .send(data)
        .end(function(err, res) {
          expect(res).to.have.status(400);
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
        .get('/api/user')
        .query({'username':'alice'})
        .end(function(err, res) {
          chai.request(server)
            .put('/api/user/' + res.body._id)
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
              }); // end get user
          }); // end update user
      }); // end get user
    });
  });

  describe('/api/user delete', function() {
    it('deletes the correct user', function(done) {
      var data = {
        'username' : 'alice',
        'password' : 'alice',
        'firstName' : 'Alice',
        'lastName'  : 'TEST',
        'email' : 'alice@example.com'
      };
      chai.request(server)
        .get('/api/user')
        .query({'username':'alice'})
        .end(function(err, res) {
          chai.request(server)
            .delete('/api/user/' + res.body._id)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              chai.request(server)
                .get('/api/user')
                .query({'username':'alice'})
                .end(function(err, res) {
                  expect(res).to.have.status(404);
                  done();
              }); // end get user
          }); // end update user
      }); // end get user
    });
  });

});