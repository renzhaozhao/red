import { randomBytes } from 'crypto'
import { AES } from './index'

const target = 'hello'
const AESKey = randomBytes(32)
const IV = randomBytes(16)
const encryptRes = AES.encrypt(target, AESKey, IV)
console.log(encryptRes)
