const signup = (req, res, next) => {

    res.json({
        status: 'success',
        message: 'sign up!'
    });
}

module.exports = {signup}