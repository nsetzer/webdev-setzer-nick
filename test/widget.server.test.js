
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _widget = require('../server/assignment/widget.data.server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Website', function() {

/*
  describe('/api/website find all', function() {
    it('should return the default set of 3 websites', function(done) {
      var site = _website.Website('',"Test","123",'')
      chai.request(server)
        .get('/api/user/123/website')
        .send(site)
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.eql(3)
          done();
        });
    });
  });


  describe('/api/website create', function() {
    it('creates and returns the website', function(done) {
      var site = _website.Website('',"Test","123",'')
      chai.request(server)
        .post('/api/user/123/website')
        .send(site)
        .end(function(err, res) {
          expect(res).to.have.status(201);
          var new_site = JSON.parse(res.text);
          chai.request(server)
            .get('/api/website/' + new_site._id)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"name":"Test"});
              done();
          });
        });
    });
  });

  describe('/api/website update', function() {
    it('update the website', function(done) {
      var site = _website.Website('',"Test","123",'')
      chai.request(server)
        .put('/api/website/123')
        .send(site)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/website/123')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"name":"Test"});
              done();
          });
        });
    });
  });

  describe('/api/website delete', function() {
    it('deletes the website', function(done) {
      chai.request(server)
        .delete('/api/website/123')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/website/123')
            .end(function(err, res) {
              expect(res).to.have.status(404);
              done();
          });
        });
    });
  });

  /*
  describe('/api/user by username and password', function() {
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

  describe('/api/user find by id', function() {
    it('responds with status 200', function(done) {
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
    it('responds with status 200', function(done) {
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
                .to.include({"lastName":"TEST"});
              done();
          });
        });
    });
  });


    describe('/api/user delete', function() {
    it('responds with status 200', function(done) {
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

  */
});