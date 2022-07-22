// 格式化pem文件
export const formatPem = (key: string, type: 'PUBLIC' | 'PRIVATE') => {
  if (key.startsWith('-----BEGIN')) {
    return key
  }

  return `
-----BEGIN ${type} KEY-----
${key.trim()}
-----END ${type} KEY-----
`
}
