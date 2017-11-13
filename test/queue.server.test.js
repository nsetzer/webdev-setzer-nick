
process.env.NODE_ENV = "test"

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

  describe('/api/queue set/get', function() {
    it('creates and returns the playlist', function(done) {
      chai.request(server)
        .get('/api/_test/playlist')
        .end(function(err, res) {
          let uid = res.body.uid;
          let list = res.body;
          chai.request(server)
            .put('/api/user/'+uid+'/queue')
            .send(list)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              var new_list = JSON.parse(res.text);
              chai.request(server)
                .get('/api/user/'+uid+'/queue')
                .end(function(err, res) {
                  expect(res).to.have.status(200);
                  res.body.songs.should.be.a('array');
                  res.body.songs.length.should.eql(5)

                  done();
              });
            });

        });

    });
  });

  describe('/api/queue get head', function() {
    it('creates and returns the playlist', function(done) {
      chai.request(server)
        .get('/api/_test/playlist')
        .end(function(err, res) {
          let uid = res.body.uid;
          let list = res.body;
          chai.request(server)
            .put('/api/user/'+uid+'/queue')
            .send(list)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              var new_list = JSON.parse(res.text);
              chai.request(server)
                .get('/api/user/'+uid+'/queue/head')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    res.body._id.should.eql(list.songs[0])
                    done();
                });
            });
        });

    });
  });

  describe('/api/queue delete head', function() {
    it('creates and returns the playlist', function(done) {
      chai.request(server)
        .get('/api/_test/playlist')
        .end(function(err, res) {
          let uid = res.body.uid;
          let list = res.body;
          chai.request(server)
            .put('/api/user/'+uid+'/queue')
            .send(list)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              var new_list = JSON.parse(res.text);
              chai.request(server)
                .delete('/api/user/'+uid+'/queue/head')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    res.body._id.should.eql(list.songs[1])
                    done();
                });
            });
        });

    });
  });

});