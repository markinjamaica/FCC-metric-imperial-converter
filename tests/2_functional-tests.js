const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
    // 1. convert a valid input such as 10L: GET request to /api/convert
    test('convert a valid input', (done) => {
        chai.request(server)
            .get('/api/convert?input=10l')
            .end((err, res) => {
                assert.equal(
                    res.text,
                    '{"initNum":10,"initUnit":"l","returnNum":2.64172,"returnUnit":"gal","string":"10 liters converts to 2.64172 gallons"}'
                );
                assert.equal(res.status, 200);
                done();
            });
    });

    // 2. convert an invalid input such as 32g: GET request to /api/convert
    // test('convert an invalid input', done);

    // 3. convert an invalid number such as 3/7.2/4kg: GET request to /api/convert
    // 4. convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert
    // 5. convert with no number such as kg: GET request to /api/convert
});
