
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _song = require('../server/project/song.data.server');
var _playlist = require('../server/project/playlist.data.server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Playlist', function() {

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

/*
  describe('/api/playlist find all', function() {
    it('should return the default set of 3 playlists', function(done) {
      chai.request(server)
        .get('/api/user/123/playlist')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.eql(1)
          done();
        });
    });
  });

  describe('/api/playlist create', function() {
    it('creates and returns the playlist', function(done) {
      var list = _playlist.Playlist('',"123","Test")
      chai.request(server)
        .post('/api/user/2020/playlist')
        .send(list)
        .end(function(err, res) {
          expect(res).to.have.status(201);
          var new_list = JSON.parse(res.text);
          chai.request(server)
            .get('/api/playlist/' + new_list._id)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"name":"Test",
                             "uid":"2020"});
              done();
          });
        });
    });
  });

  describe('/api/playlist update', function() {
    it('update the playlist', function(done) {
      var list = _playlist.Playlist('',"123","Test")
      chai.request(server)
        .put('/api/playlist/123')
        .send(list)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/playlist/123')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"name":"Test"});
              done();
          });
        });
    });
  });

  describe('/api/playlist delete', function() {
    it('deletes the playlist', function(done) {
      chai.request(server)
        .delete('/api/playlist/123')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/playlist/123')
            .end(function(err, res) {
              expect(res).to.have.status(404);
              done();
          });
        });
    });
  });

  describe('/api/playlist add song', function() {
    it('should add a song to the playlist', function(done) {
      var song = _song.getDefaultSongs()[0];
      chai.request(server)
        .put('/api/playlist/456/append')
        .send(song)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('/api/playlist search', function() {
    it('should return default playlists', function(done) {
      chai.request(server)
        .get('/api/playlist?term=default')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          // this should equal the number of default users
          // with a maximum of 10 users
          res.body.length.should.gt(1)
          res.body[0].relevance.should.eql(1)
          done();
        });
    });
  });
*/

});