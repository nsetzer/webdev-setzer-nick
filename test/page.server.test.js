

process.env.NODE_ENV = "test"

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _page = require('../server/assignment/page.data.server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Page', function() {

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

  describe('/api/page find', function() {
    it('return the default set of websites', function(done) {
      chai.request(server)
        .get('/api/_test/website')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let site = res.body;
          chai.request(server)
            .get('/api/website/'+site._id+'/page')
            .end(function(err, res) {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.eql(3)
              done();
            });
        }) // end get user
    }); // end it
  }); // end describe

  describe('/api/page create', function() {
    it('create a new page', function(done) {
      chai.request(server)
        .get('/api/_test/website')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let site = res.body;
          var page = _page.Page('',"Test",site._id,'page','lorem')
          chai.request(server)
            .post('/api/website/'+site._id+'/page')
            .send(page)
            .end(function(err, res) {
              res.should.have.status(201);
              done();
            });
        }) // end get user
    }); // end it
  }); // end describe

  describe('/api/page update', function() {
    it('create and update a page', function(done) {
      chai.request(server)
        .get('/api/_test/website')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let site = res.body;
          var page = _page.Page('',"Test",site._id,'page','lorem')
          chai.request(server)
            .post('/api/website/'+site._id+'/page')
            .send(page)
            .end(function(err, res) {
              res.should.have.status(201);
              let new_page = res.body;
              chai.request(server)
                .put('/api/page/'+new_page._id)
                .send(new_page)
                .end(function(err, res) {
                  res.should.have.status(200);
                  done();
                });
            });
        }) // end get user
    }); // end it
  }); // end describe

  describe('/api/page delete', function() {
    it('create and delete a page', function(done) {
      chai.request(server)
        .get('/api/_test/website')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let site = res.body;
          var page = _page.Page('',"Test",site._id,'page','lorem')
          chai.request(server)
            .post('/api/website/'+site._id+'/page')
            .send(page)
            .end(function(err, res) {
              res.should.have.status(201);
              let new_page = res.body;
              chai.request(server)
                .delete('/api/page/'+new_page._id)
                .end(function(err, res) {
                  res.should.have.status(200);
                  chai.request(server)
                    .get("/api/page/"+new_page._id)
                    .end(function(err, res){
                      res.should.have.status(404);
                      done();
                    });
                });
            });
        }) // end get user
    }); // end it
  }); // end describe

});