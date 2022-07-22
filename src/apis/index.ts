export const getTestData = async (): Promise<{
  success: boolean
  data: string
}> => {
  return Promise.resolve({
    success: true,
    data: 'asdsad',
  })
}
