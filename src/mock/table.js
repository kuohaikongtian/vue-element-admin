import { param2Obj } from '@/utils'

const tableList = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    code: 20000
  }
}

export default {
  getTableData: config => {
    const { username } = param2Obj(config.url)
    const result = userMap[username]
    return tableList
  }
}
