'use strict';

module.exports = {
    verify: require('./verifyTokenController.js').run,
    sign: require('./signTokenController.js').run,
    preparePayload: require('./preparePayloadController.js').run,
};