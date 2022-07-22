import { publicEncrypt, privateDecrypt, constants } from 'crypto'
import { formatPem } from '@/utils'
/**
 * * RSA加密
 *
 * @param {string} target
 * @param {string} pubkey
 * @return {string}
 */
function encrypt(target: string, pubkey: string): string {
  const res = publicEncrypt(
    {
      key: pubkey,
      padding: constants.RSA_PKCS1_PADDING,
    },
    Buffer.from(target)
  )
  return res.toString('base64')
}

/**
 * * RSA解密
 *
 * @param {string} target
 * @param {string} privateKey
 * @return {*}
 */
function decrypt(target: string, privateKey: string) {
  const res = privateDecrypt(
    {
      key: privateKey,
      padding: constants.RSA_PKCS1_PADDING,
    },
    Buffer.from(target, 'base64')
  )

  return res.toString()
}

export default {
  encrypt,
  decrypt,
}
