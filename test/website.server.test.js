
process.env.NODE_ENV = "test"

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _website = require('../server/assignment/website.data.server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Website', function() {

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

  describe('/api/website find', function() {
    it('return the default set of websites', function(done) {
      chai.request(server)
        .get('/api/user')
        .query({'username':'alice'})
        .end(function(err, res) {
          let uid = res.body._id;
          chai.request(server)
            .get('/api/user/' + uid + '/website')
            .end(function(err, res) {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.eql(3)
              done();
          }); // end update user
      }); // end get user
    });
  });

  describe('/api/website create', function() {
    it('creates a new website', function(done) {

      chai.request(server)
        .get('/api/user')
        .query({'username':'alice'})
        .end(function(err, res) {
          let uid = res.body._id;
          var site = _website.Website('',"Test",uid,'')
          chai.request(server)
            .post('/api/user/' + uid + '/website')
            .send(site)
            .end(function(err, res) {
              expect(res).to.have.status(201);
              let new_site = res.body;
              chai.request(server)
                .get('/api/website/' + new_site._id)
                .end(function(err, res) {
                  expect(res).to.have.status(200);
                  expect(JSON.parse(res.text))
                    .to.include({"name":"Test",
                                 "developerId":uid});
                  done();
              }); // end get user
          }); // end update user
      }); // end get user
    });
  });

  describe('/api/website update', function() {
    it('updates the correct website', function(done) {

      chai.request(server)
        .get('/api/user')
        .query({'username':'alice'})
        .end(function(err, res) {
          let uid = res.body._id;
          var site = _website.Website('',"Test",uid,'')
          chai.request(server)
            .post('/api/user/' + uid + '/website')
            .send(site)
            .end(function(err, res) {
              expect(res).to.have.status(201);
              let new_site = res.body;
              chai.request(server)
                .put('/api/website/' + new_site._id)
                .send(new_site)
                .end(function(err, res) {
                  expect(res).to.have.status(200);
                  done();
              }); // end get user
          }); // end update user
      }); // end get user
    });
  });

  describe('/api/website delete', function() {
    it('deletes the correct website', function(done) {

      chai.request(server)
        .get('/api/user')
        .query({'username':'alice'})
        .end(function(err, res) {
          let uid = res.body._id;
          var site = _website.Website('',"Test",uid,'')
          chai.request(server)
            .post('/api/user/' + uid + '/website')
            .send(site)
            .end(function(err, res) {
              expect(res).to.have.status(201);
              let new_site = res.body;
              chai.request(server)
                .delete('/api/website/' + new_site._id)
                .end(function(err, res) {
                  expect(res).to.have.status(200);
                  done();
              }); // end get user
          }); // end update user
      }); // end get user
    });
  });
});