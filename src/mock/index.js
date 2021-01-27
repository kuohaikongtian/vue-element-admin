import Mock from 'mockjs'
import loginAPI from './login'
import tableAPI from './table'
// import articleAPI from './article'
// import remoteSearchAPI from './remoteSearch'
// import transactionAPI from './transaction'
// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/user\/login/, 'get', loginAPI.loginByUsername)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/user\/table\.*/, 'get', tableAPI.getTableData)

export default Mock
