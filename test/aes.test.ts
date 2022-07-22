import { AES } from '@/index'
import { randomBytes } from 'crypto'

describe('AES加解密', () => {
  test('normal', async () => {
    const target = 'hello'
    const AESKey = randomBytes(32)
    const IV = randomBytes(16)
    const encryptRes = AES.encrypt(target, AESKey, IV)

    const decryptRes = AES.decrypt(encryptRes, AESKey, IV)

    expect(decryptRes).toBe(target)
  })
})
