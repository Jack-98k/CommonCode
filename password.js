const crypto = require('crypto')
const hash = (type, str) => crypto.createHash(type).update(str).digest('hex')
const md5 = str => hash('md5', str)
const sha1 = str => hash('sha1', str)
const md5Crypto = (salt, password) => md5('!@#$%^&*' + password + salt)
const sha1Crypto = (salt, password) => sha1('!@#$%^&*' + password + salt)
module.exports = {
	md5Crypto,
	sha1Crypto
}
