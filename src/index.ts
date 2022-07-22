import { getTestData } from '@/apis'

const getList = async () => {
  const res = await getTestData()
  console.log('====', res)
  return res
}

export { getList }
