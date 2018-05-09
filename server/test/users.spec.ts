import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import Seller from '../models/seller';

const should = chai.use(chaiHttp).should();

describe('Sellers', () => {

  beforeEach(done => {
    Seller.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for sellers', () => {

    it('should get all the sellers', done => {
      chai.request(app)
        .get('/api/sellers')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get sellers count', done => {
      chai.request(app)
        .get('/api/sellers/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new seller', done => {
      const seller = new Seller({ sellername: 'Dave', email: 'dave@example.com', role: 'seller' });
      chai.request(app)
        .post('/api/seller')
        .send(seller)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('sellername');
          res.body.should.have.a.property('email');
          res.body.should.have.a.property('role');
          done();
        });
    });

    it('should get a seller by its id', done => {
      const seller = new Seller({ sellername: 'Seller', email: 'seller@example.com', role: 'seller' });
      seller.save((error, newseller) => {
        chai.request(app)
          .get(`/api/seller/${newseller.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('sellername');
            res.body.should.have.property('email');
            res.body.should.have.property('role');
            res.body.should.have.property('_id').eql(newseller.id);
            done();
          });
      });
    });

    it('should update a seller by its id', done => {
      const seller = new Seller({ sellername: 'Seller', email: 'seller@example.com', role: 'seller' });
      seller.save((error, newSeller) => {
        chai.request(app)
          .put(`/api/seller/${newSeller.id}`)
          .send({ sellername: 'Seller 2' })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('should delete a seller by its id', done => {
      const seller = new Seller({ sellername: 'Sellerr', email: 'seller@example.com', role: 'seller' });
      seller.save((error, newSeller) => {
        chai.request(app)
          .delete(`/api/seller/${newSeller.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

});


