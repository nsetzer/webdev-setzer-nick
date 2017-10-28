
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

/*
  describe('/api/widget find all', function() {
    it('should return the default set of 3 websites', function(done) {
      chai.request(server)
        .get('/api/page/121/widget')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          // if the default number of widgets changes
          // then this number needs to be updated
          res.body.length.should.eql(6)
          done();
        });
    });
  });


  describe('/api/widget create', function() {
    it('creates and returns the website', function(done) {
      var widget = _widget.newHeadingWidget('',"Test","123",'','')
      chai.request(server)
        .post('/api/page/121/widget')
        .send(widget)
        .end(function(err, res) {
          expect(res).to.have.status(201);
          var new_widget = JSON.parse(res.text);
          chai.request(server)
            .get('/api/widget/' + new_widget._id)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(res.body)
                .to.include({"name":"Test",
                             "widgetType": "HEADING",
                             "pageId":"121"});
              done();
          });
        });
    });
  });

  describe('/api/widget update', function() {
    it('update the widget', function(done) {
      var widget = _widget.newHeadingWidget('',"Test","123",'','')
      chai.request(server)
        .put('/api/widget/123')
        .send(widget)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/widget/123')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(JSON.parse(res.text))
                .to.include({"name":"Test"});
              done();
          });
        });
    });
  });

  describe('/api/widget delete', function() {
    it('deletes the widget', function(done) {
      chai.request(server)
        .delete('/api/widget/123')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          chai.request(server)
            .get('/api/widget/123')
            .end(function(err, res) {
              expect(res).to.have.status(404);
              done();
          });
        });
    });
  });
*/
});