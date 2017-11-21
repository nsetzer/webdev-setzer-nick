
process.env.NODE_ENV = "test"

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _song = require('../server/project/song.data.server');
var _playlist = require('../server/project/playlist.data.server');

var expect = chai.expect;

chai.use(chaiHttp);

let uid1 = null
let uid2 = null

describe('Social', function() {

  describe('Reset Database + create 2 users', function() {
    it('should reset the database', function(done) {
      this.timeout(5000);
      var user1 = {
        'username' : 'test1',
        'password' : 'test',
        'firstName' : 'test',
        'lastName'  : 'test',
        'email' : 'test@example.com'
      };
      var user2 = {
        'username' : 'test2',
        'password' : 'test',
        'firstName' : 'test',
        'lastName'  : 'test',
        'email' : 'test@example.com'
      };
      chai.request(server)
        .delete('/api/reset')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          chai.request(server)
            .post('/api/user')
            .send(user1)
            .end(function(err, res) {
              uid1 = res.body._id
              chai.request(server)
                .post('/api/user')
                .send(user2)
                .end(function(err, res) {
                  uid2 = res.body._id
                  done();
                });
            });
        });
    });
  });

  describe('/api/social connect', function() {
    it('should create a single connection', function(done) {
      chai.request(server)
        .put('/api/user/'+uid1+'/social/'+uid2)
        .end(function(err, res) {
          chai.request(server)
            .get('/api/user/'+uid2+'/social')
            .end(function(err, res) {
              res.body.should.be.a('array');
              res.body.length.should.eql(1)
              done();
          });
        });
    });
  });



  describe('/api/social is connected', function() {
    it('should return true', function(done) {
      chai.request(server)
        .get('/api/user/'+uid1+'/social/'+uid2)
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.eql(true);
          done();
        });
    });
  });

  describe('/api/social notification', function() {
    it('should create a single connection', function(done) {
        chai.request(server)
          .post('/api/user/'+uid2+'/notifications')
          .send({message:"test"})
          .end(function(err, res) {
            res.should.have.status(200);
            chai.request(server)
              .get('/api/user/'+uid1+'/notifications')
              .end(function(err, res) {
                res.body.should.be.a('array');
                res.body.length.should.eql(1)
                expect(res.body[0])
                  .to.include({message:"test"});
                done();
              }); // end get
          }); // end post
    }); // end it
  }); // end describe


  describe('/api/social delete', function() {
    it('should delete the connection', function(done) {
      chai.request(server)
        .delete('/api/user/59f504f3316796469637c000/social/59f504f3316796469637c001')
        .end(function(err, res) {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/api/social is not connected', function() {
    it('should return false', function(done) {
      chai.request(server)
        .get('/api/user/59f504f3316796469637c000/social/59f504f3316796469637c001')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.eql(false);
          done();
        });
    });
  });


  describe('/api/social rate list', function() {
    it('should return true', function(done) {
      chai.request(server)
        .put('/api/user/59f504f3316796469637c000/rate/59f504f3316796469637c000')
        .send({value:5})
        .end(function(err, res) {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/api/social re-rate list', function() {
    it('should return true', function(done) {
      chai.request(server)
        .put('/api/user/59f504f3316796469637c000/rate/59f504f3316796469637c000')
        .send({value:0})
        .end(function(err, res) {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/api/social unrate list', function() {
    it('should return true', function(done) {
      chai.request(server)
        .delete('/api/user/59f504f3316796469637c000/rate/59f504f3316796469637c000')
        .end(function(err, res) {
          res.should.have.status(200);
          done();
        });
    });
  });


});
