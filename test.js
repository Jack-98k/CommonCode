const { md5Crypto, sha1Crypto } = require('./password')
const salt = 'qqqwww'
const pwd = '111111'
console.log(md5Crypto(salt, pwd))
console.log(sha1Crypto(salt, pwd));
