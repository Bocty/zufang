import request from '@/utils/request'

export const Login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user',
    data: {
      username,
      password
    }
  })
}
export const getUserInfo = () => {
  return request({
    url: '/user'
  })
}
