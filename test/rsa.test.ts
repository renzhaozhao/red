import { RSA } from '@/index'

import { privateKey, publicKey } from './config'

console.log(privateKey, publicKey)

describe('RSA加解密', () => {
  test('normal', async () => {
    const target = 'hello'
    const encryptRes = RSA.encrypt(target, publicKey)
    console.log(encryptRes)

    const decryptRes = RSA.decrypt(encryptRes, privateKey)
    expect(decryptRes).toBe(target)
  })
})
