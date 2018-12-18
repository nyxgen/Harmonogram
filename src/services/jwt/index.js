'use strict';

module.exports = {
    verify: require('./verifyTokenController').run,
    sign: require('./signTokenController.js').run,
    preparePayload: require('./preparePayloadController.js').run,
};