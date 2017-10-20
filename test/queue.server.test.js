
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _song = require('../server/project/song.data.server');
var _playlist = require('../server/project/playlist.data.server');
//var _queue = require('../server/project/queue.data.server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('SongQueue', function() {

  describe('/api/queue set/get', function() {
    it('creates and returns the playlist', function(done) {
      var list = _playlist.Playlist('123',"123","Test")
      list.songs = _song.getDefaultSongs()

      chai.request(server)
        .put('/api/user/123/queue')
        .send(list)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          var new_list = JSON.parse(res.text);
          chai.request(server)
            .get('/api/user/123/queue')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"name":"Test",
                             "uid":"123"});
              done();
          });
        });
    });
  });

  describe('/api/queue get head', function() {
    it('should delete head from queue', function(done) {
      var list = _playlist.Playlist('123',"123","Test")
      list.songs = _song.getDefaultSongs()

      chai.request(server)
        .put('/api/user/123/queue')
        .send(list)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          var new_list = JSON.parse(res.text);
          chai.request(server)
            .get('/api/user/123/queue/head')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
              // the id of the second default song
                .to.include({"_id":"100"});
              done();
          });
        });
    });
  });

  describe('/api/queue delete head', function() {
    it('should delete head from queue', function(done) {
      var list = _playlist.Playlist('123',"123","Test")
      list.songs = _song.getDefaultSongs()

      chai.request(server)
        .put('/api/user/123/queue')
        .send(list)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          var new_list = JSON.parse(res.text);
          chai.request(server)
            .delete('/api/user/123/queue/head')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
              // the id of the second default song
                .to.include({"_id":"101"});
              done();
          });
        });
    });
  });


});