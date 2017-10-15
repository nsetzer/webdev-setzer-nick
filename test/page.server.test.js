
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _page = require('../server/assignment/page.data.server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Page', function() {

  describe('/api/page find all', function() {
    it('should return the default set of 3 pages', function(done) {
      chai.request(server)
        .get('/api/website/123/page')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.eql(3)
          done();
        });
    });
  });



  describe('/api/page create', function() {
    it('creates and returns the page', function(done) {
      var site = _page.Page('',"Test","123",'page','lorem')
      chai.request(server)
        .post('/api/website/123/page')
        .send(site)
        .end(function(err, res) {
          expect(res).to.have.status(201);
          var new_site = res.body;
          chai.request(server)
            .get('/api/page/' + new_site._id)
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
    it('update the page', function(done) {
      var site = _page.Page('',"Test","123",'page','lorem')
      chai.request(server)
        .put('/api/page/100')
        .send(site)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/page/100')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"title":"page"});
              done();
          });
        });
    });
  });

  describe('/api/website delete', function() {
    it('deletes the page', function(done) {
      chai.request(server)
        .delete('/api/page/100')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/page/100')
            .end(function(err, res) {
              expect(res).to.have.status(404);
              done();
          });
        });
    });
  });
});