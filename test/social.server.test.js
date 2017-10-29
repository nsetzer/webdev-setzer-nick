
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

describe('Social', function() {

  describe('Reset Database', function() {
    it('should reset the database', function(done) {
      this.timeout(5000);
      chai.request(server)
        .delete('/api/reset')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          done();
        });
    });
  });

  // Note: none of these tests actually require the users to exist
  // the user ids and playlist ids are hardcoded to simplify the tests


  describe('/api/social connect', function() {
    it('should create a single connection', function(done) {
      chai.request(server)
        .put('/api/user/59f504f3316796469637c000/social/59f504f3316796469637c001')
        .end(function(err, res) {
          chai.request(server)
            .get('/api/user/59f504f3316796469637c001/social')
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
        .get('/api/user/59f504f3316796469637c000/social/59f504f3316796469637c001')
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
          .post('/api/user/59f504f3316796469637c001/notifications')
          .send({message:"test"})
          .end(function(err, res) {
            res.should.have.status(200);
            chai.request(server)
              .get('/api/user/59f504f3316796469637c000/notifications')
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