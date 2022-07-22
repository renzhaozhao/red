import { createCipheriv, createDecipheriv } from 'crypto'

/**
 * * AES加密
 *
 * @param {string} target
 * @param {Uint8Array} aesKey
 * @param {Uint8Array} iv
 * @return {string} base64
 */
const encrypt = (
  target: string,
  aesKey: Uint8Array,
  iv: Uint8Array
): string => {
  const cipher = createCipheriv('aes-256-cbc', aesKey, iv)
  var crypted = cipher.update(target, 'utf8', 'base64')
  crypted += cipher.final('base64')
  return crypted
}

/**
 * * AES解密
 *
 * @param {string} target base64
 * @param {Uint8Array} aesKey
 * @param {Uint8Array} iv
 * @return {*}  {string}
 */
const decrypt = (
  target: string,
  aesKey: Uint8Array,
  iv: Uint8Array
): string => {
  const decipher = createDecipheriv('aes-256-cbc', aesKey, iv)
  let decrypted = decipher.update(Buffer.from(target, 'base64'))
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}

export default { encrypt, decrypt }
