const chai = require('chai');
const http = require('chai-http');
chai.use(http);
const app = require('../index');
const expect = chai.expect;

describe('Testing the review routes', function() {

    it('Should complete post request with status 201', function(done) {
        chai.request(app)
            .post('/review/create')
            .send({
                "book_title": "MochaChaiTest", 
                "body": "MochaChaiTest",
                "author": "MochaChaiTest",
                "user": "MochaChaiTest",
                "date": new Date()
            })
            .end(function(err, response) {
                expect(err).to.be.null;
                expect(response).to.have.status(201);
                result = response.body;
                done();
            });
    });

});