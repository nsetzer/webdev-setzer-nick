
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

  describe('/api/playlist find', function() {
    it('return find the correct playlist given the id', function(done) {
      chai.request(server)
        .get('/api/_test/playlist')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let playlist = res.body;
          chai.request(server)
            .get('/api/playlist/'+playlist._id)
            .end(function(err, res) {
              res.should.have.status(200);
              expect(res.body)
                .to.include({"name":playlist.name,
                             "uid":playlist.uid});
              // update when this changes
              res.body.songs.length.should.eql(5)
              done();
            });
        }) // end get user
    }); // end it
  }); // end describe

  describe('/api/playlist find all', function() {
    it('find all playlists for a user', function(done) {
      chai.request(server)
        .get('/api/user')
        .query({'username':'alice'})
        .end(function(err, res) {
          let uid = res.body._id;
          chai.request(server)
            .get('/api/user/' + uid + '/playlist')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.eql(3)
              done();
            }); // end update user
        });
      }); // end get user
    });

  describe('/api/playlist find songs', function() {
    it('return find the correct playlist given the id', function(done) {
      chai.request(server)
        .get('/api/_test/playlist')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let playlist = res.body;
          chai.request(server)
            .get('/api/playlist/'+playlist._id + '/songs')
            .end(function(err, res) {
              res.should.have.status(200);
              res.body.length.should.eql(5)
              done();
            });
        }) // end get user
    }); // end it
  }); // end describe

  describe('/api/playlist search', function() {
    it('return find the correct playlist given the id', function(done) {
      chai.request(server)
        .get('/api/playlist?term=default')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          res.body.length.should.gt(1)
          res.body.length.should.eql(4)
          done();
        }) // end get lists
    }); // end it
  }); // end describe

  describe('/api/playlist create', function() {
    it('creates a new playlist', function(done) {
      chai.request(server)
        .get('/api/user')
        .query({'username':'alice'})
        .end(function(err, res) {
          let uid = res.body._id;
          var list = _playlist.Playlist('',uid,"Test")
          chai.request(server)
            .post('/api/user/' + uid + '/playlist')
            .send(list)
            .end(function(err, res) {
              expect(res).to.have.status(201);
              let new_list = res.body;
              chai.request(server)
                .get('/api/playlist/' + new_list._id)
                .end(function(err, res) {
                  expect(res).to.have.status(200);
                  expect(JSON.parse(res.text))
                    .to.include({"name":"Test",
                                 "uid":uid});
                  done();
              }); // end get user
          }); // end update user
      }); // end get user
    });
  });


  describe('/api/playlist delete', function() {
    it('delete the playlist', function(done) {
      chai.request(server)
        .get('/api/_test/playlist')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let playlist = res.body;
          chai.request(server)
            .delete('/api/playlist/'+playlist._id)
            .end(function(err, res) {
              res.should.have.status(200);
                  chai.request(server)
                    .get('/api/playlist/'+playlist._id)
                    .end(function(err, res) {
                      res.should.have.status(404);
                      done();
                    });
            });
        }) // end get user
    }); // end it
  }); // end describe

  describe('/api/playlist update', function() {
    it('update the playlist', function(done) {
      chai.request(server)
        .get('/api/_test/playlist')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let playlist = res.body;
          playlist.name = "changeme"
          playlist.songs = []
          chai.request(server)
            .put('/api/playlist/'+playlist._id)
            .send(playlist)
            .end(function(err, res) {
              res.should.have.status(200);
                  chai.request(server)
                    .get('/api/playlist/'+playlist._id)
                    .end(function(err, res) {
                      res.should.have.status(200);
                      expect(res.body)
                        .to.include({"name":"changeme",
                                     "uid":playlist.uid});
                      res.body.songs.should.be.a('array');
                      res.body.songs.length.should.eql(0)
                      done();
                    });
            });
        }) // end get user
    }); // end it
  }); // end describe

  describe('/api/playlist append song', function() {
    it('return find the correct playlist given the id', function(done) {
      chai.request(server)
        .get('/api/_test/playlist')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let playlist = res.body;
          let song = _song.getDefaultSongs()[0];
          chai.request(server)
            .put('/api/playlist/'+playlist._id+"/append")
            .send(song)
            .end(function(err, res) {
              res.should.have.status(200);
              chai.request(server)
                .get('/api/playlist/'+playlist._id)
                .end(function(err, res) {
                  res.should.have.status(200);
                  let playlist2 = res.body;
                  playlist2.songs.length
                    .should.eql(playlist.songs.length+1)
                  done();
                });
            });
        }) // end get user
    }); // end it
  }); // end describe



});