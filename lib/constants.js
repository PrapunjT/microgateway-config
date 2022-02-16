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
        CONFIG : 'config'
    },
    HTTPPROXYENVVARIABLE : ['HTTP_PROXY', 'HTTPS_PROXY', 'http_proxy', 'https_proxy'],
    FILEOPTIONS : ['cert', 'key', 'ca', 'pfx', 'crl']
}
module.exports = CONST