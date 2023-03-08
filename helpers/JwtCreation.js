const jwt = require("jsonwebtoken");


module.exports = {
    async createJwt(payload) {
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload,
                'secret',
                (err, token) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(token);
                }
            );
        });
    },
};
