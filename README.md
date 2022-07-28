# Red

Renzhao Encryption and decryption

# Runtime

```sh
npm start
```

# API

## AES

对称加密

```ts
import { AES } from 'red'

const target = 'hello'
const AESKey = randomBytes(32)
const IV = randomBytes(16)
const encryptRes = AES.encrypt(target, AESKey, IV)
console.log(encryptRes)
```

## RSA

非对称加密,签名验证

## Gzip

压缩

## PBKDF2

单方向加密密钥
