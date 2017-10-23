
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

  describe('/api/social connect', function() {
    it('should create a single connection', function(done) {
      chai.request(server)
        .put('/api/user/123/social/234')
        .end(function(err, res) {
          chai.request(server)
            .get('/api/user/234/social')
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
        .get('/api/user/123/social/234')
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
          .post('/api/user/234/notifications')
          .send({message:"test"})
          .end(function(err, res) {
            res.should.have.status(200);
            chai.request(server)
              .get('/api/user/123/notifications')
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
        .delete('/api/user/123/social/234')
        .end(function(err, res) {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/api/social is not connected', function() {
    it('should return false', function(done) {
      chai.request(server)
        .get('/api/user/123/social/234')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.eql(false);
          done();
        });
    });
  });


});