import chai from "chai";
import chaiHttp from "chai-http";
import Sinonchai from "sinon-chai";
import sinon from "sinon";
import app from "../index";
import handleTransaction from '../controllers/transaction.controller'

chai.should();
chai.use(Sinonchai);
chai.use(chaiHttp);

const token = 'inbillo'
const dummyRequestData = {
    accountNumber:2011513330,
    reportCategory:'daily',
    reportDate1:'2022-01-01'
}
const incompleteDummyRequestData = {
    accountNumber:2011513330,
    reportCategory:'daily',
    reportDate1:'2022-01-01'
}


describe("No Matching Endpoint", () => {
    describe("* Unknown ", () => {
        it("should throw 404 error when endpoint is not found", (done) => {
            chai
                .request(app)
                .post("/api/v1/auth/none")
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});

describe("POST /api/v1/transaction/", () => {     
    it("should balance the account if complete data is passed as request", (done) => {
        chai
            .request(app)
            .post("/api/v1/transaction/")
            .send(dummyRequestData)
            .end((err, res) => {
                res.body.should.be.an("object");
                res.body.should.have.property("status").eql("success");
                res.body.should.have.property("data");
                done();
            });
    });

    it("should return validation error if incomplete data is passed as request", (done) => {
        chai
            .request(app)
            .post("/api/v1/transaction/")
            .send(incompleteDummyRequestData)
            .end((err, res) => {
                res.body.should.be.an("object");
                res.body.should.have.property("status").eql("error");
                res.body.should.have.property("message");
                done();
            });
    });
    
    it("Should fake server error for while balancing account", (done) => {
        const req = { body: {} };
        const res = {
            status() { },
            send() { },
        };
        sinon.stub(res, "status").returnsThis();
        handleTransaction(req, res);
        res.status.should.have.callCount(0);
        done();
    });
});