const clog = (req, res, next) => {
    console.log('\x1b[36m%s\x1b[0m', `${req.method} request sent to ${req.url}`)

    next()
}

exports.clog = clog