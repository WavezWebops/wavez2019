'use strict';

var app = require('../..');
import request from 'supertest';

var newKryptx;

describe('Kryptx API:', function() {

  describe('GET /api/kryptxs', function() {
    var kryptxs;

    beforeEach(function(done) {
      request(app)
        .get('/api/kryptxs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          kryptxs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(kryptxs).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/kryptxs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/kryptxs')
        .send({
          name: 'New Kryptx',
          info: 'This is the brand new kryptx!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newKryptx = res.body;
          done();
        });
    });

    it('should respond with the newly created kryptx', function() {
      expect(newKryptx.name).to.equal('New Kryptx');
      expect(newKryptx.info).to.equal('This is the brand new kryptx!!!');
    });

  });

  describe('GET /api/kryptxs/:id', function() {
    var kryptx;

    beforeEach(function(done) {
      request(app)
        .get('/api/kryptxs/' + newKryptx._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          kryptx = res.body;
          done();
        });
    });

    afterEach(function() {
      kryptx = {};
    });

    it('should respond with the requested kryptx', function() {
      expect(kryptx.name).to.equal('New Kryptx');
      expect(kryptx.info).to.equal('This is the brand new kryptx!!!');
    });

  });

  describe('PUT /api/kryptxs/:id', function() {
    var updatedKryptx;

    beforeEach(function(done) {
      request(app)
        .put('/api/kryptxs/' + newKryptx._id)
        .send({
          name: 'Updated Kryptx',
          info: 'This is the updated kryptx!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedKryptx = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedKryptx = {};
    });

    it('should respond with the updated kryptx', function() {
      expect(updatedKryptx.name).to.equal('Updated Kryptx');
      expect(updatedKryptx.info).to.equal('This is the updated kryptx!!!');
    });

  });

  describe('DELETE /api/kryptxs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/kryptxs/' + newKryptx._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when kryptx does not exist', function(done) {
      request(app)
        .delete('/api/kryptxs/' + newKryptx._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
