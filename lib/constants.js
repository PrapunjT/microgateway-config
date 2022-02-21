var httpstatus = require('http2').constants

const CONST = {
    REDIS : {
        EXTAUTH : {
            PK : 'extauth_jwk_public_keys'
        },
        OAUTH : {
            PK : 'jwk_public_keys',
            JWTPK: 'jwt_public_key'
        },
        PRODUCTS : 'products',
        PROXIES : '',
        CONFIG : 'config',
        PORT_DEFAULT : '127.0.0.1',
        HOST_DEFAULT: 6379,
        DB_DEFUALT : 0
    },
    HTTPPROXYENVVARIABLE : ['HTTP_PROXY', 'HTTPS_PROXY', 'http_proxy', 'https_proxy'],
    FILEOPTIONS : ['cert', 'key', 'ca', 'pfx', 'crl'],
    HTTPSTATUS: httpstatus,
    LOGGING : {
        ERROR : 'error',
        DEBUG : 'debug',
        INFO : 'info',
        LOG : 'log',
        STATS : 'stats',
        TRACE : 'trace',
        WARN : 'warn'
    },
    STRING: 'string',
    NUMBER : 'number',
    BOOLEAN : 'boolean',
    OBJECT : 'object',
    UNDEFINED : 'undefined'
}
module.exports = CONST