import { AES } from '../src'
import { randomBytes } from 'crypto'
import { BigNumber, ethers } from 'ethers'

describe('AES加解密', () => {
  test('test', async () => {
    // const a = '1.555'
    // console.log(ethers.utils.parseUnits(a, 'gwei').toString())
    // console.log(ethers.utils.formatUnits(BigNumber.from()));
    console.log(ethers.utils.parseUnits('0.', 18))
  })

  test('normal', async () => {
    const target = 'hello'
    const AESKey = randomBytes(32)
    const IV = randomBytes(16)
    const encryptRes = AES.encrypt(target, AESKey, IV)

    const decryptRes = AES.decrypt(encryptRes, AESKey, IV)

    expect(decryptRes).toBe(target)
  })
})
