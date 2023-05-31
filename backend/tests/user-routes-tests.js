const chai = require('chai');
const http = require('chai-http');
chai.use(http);
const app = require('../index');
const expect = chai.expect;

describe('Testing the user routes', function() {

    it('Should complete post request with status 201', function(done) {
        chai.request(app)
            .post('/user/register')
            .send({
                "username": "MochaChaiTest", 
                "password": "Test"
            })
            .end(function(err, response) {
                expect(err).to.be.null;
                expect(response).to.have.status(201);
                done();
            });
    });

    it('Should complete post request with status 200', function(done) {
        chai.request(app)
            .post('/user/login')
            .send({
                "username": "MochaChaiTest", 
                "password": "Test"
            })
            .end(function(err, response) {
                expect(err).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    });

});