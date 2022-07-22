const { createCipheriv, randomBytes } = require('crypto')

const key = randomBytes(32)
const iv = randomBytes(16)
const res = createCipheriv('aes-256-cbc', key, iv)
console.log(res)
