'use strict';

module.exports =
    {
                expressControllers: require("./services/index.js").express,
                bcryptControllers: require("./services/index.js").bcrypt,
                firebaseControllers: require("./services/index.js").firebase,
                jwtControllers: require("./services/index.js").jwt
    }