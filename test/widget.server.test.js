
process.env.NODE_ENV = "test"

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _widget = require('../server/assignment/widget.data.server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Widget', function() {

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

  describe('/api/widget find', function() {
    it('return the default set of websites', function(done) {
      chai.request(server)
        .get('/api/_test/page')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let page = res.body;
          chai.request(server)
            .get('/api/page/'+page._id+'/widget')
            .end(function(err, res) {
              res.should.have.status(200);
              res.body.should.be.a('array');
              // update when this changes
              res.body.length.should.eql(6)
              done();
            });
        }) // end get user
    }); // end it
  }); // end describe

  describe('/api/widget create', function() {
    it('create a new widget', function(done) {
      chai.request(server)
        .get('/api/_test/page')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let page = res.body;
          var widget = _widget.newHeadingWidget('',"Test",page._id,'','')
          chai.request(server)
            .post('/api/page/'+page._id+'/widget')
            .send(widget)
            .end(function(err, res) {
              res.should.have.status(201);
              done();
            });
        }) // end get user
    }); // end it
  }); // end describe

  describe('/api/widget update', function() {
    it('create and update a widget', function(done) {
      chai.request(server)
        .get('/api/_test/page')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let page = res.body;
          var widget = _widget.newHeadingWidget('',"Test",page._id,'','')
          chai.request(server)
            .post('/api/page/'+page._id+'/widget')
            .send(widget)
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

  describe('/api/widget delete', function() {
    it('create and delete a widget', function(done) {
      chai.request(server)
        .get('/api/_test/page')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          let page = res.body;
          var widget = _widget.newHeadingWidget('',"Test",page._id,'','')
          chai.request(server)
            .post('/api/page/'+page._id+'/widget')
            .send(widget)
            .end(function(err, res) {
              res.should.have.status(201);
              let new_widget = res.body;
              chai.request(server)
                .delete('/api/widget/'+new_widget._id)
                .end(function(err, res) {
                  res.should.have.status(200);
                  done();
                });
            });
        }) // end get user
    }); // end it
  }); // end describe



});