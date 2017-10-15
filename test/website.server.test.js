
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _website = require('../server/assignment/website.data.server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Website', function() {

  describe('/api/website find all', function() {
    it('should return the default set of 3 websites', function(done) {
      chai.request(server)
        .get('/api/user/123/website')
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
        .post('/api/user/2020/website')
        .send(site)
        .end(function(err, res) {
          expect(res).to.have.status(201);
          var new_site = JSON.parse(res.text);
          chai.request(server)
            .get('/api/website/' + new_site._id)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"name":"Test",
                             "developerId":"2020"});
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

});