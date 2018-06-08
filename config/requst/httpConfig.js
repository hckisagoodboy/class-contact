import grace from '../entry/index.js'

grace.http.config.baseURL = 'http://www.dtworkroom.com/doris/1/2.0.0/'
grace.http.config.timeout = 8000

grace.http.interceptors.request.use(req => {
  console.log("request is:", req)
  req.body = JSON.stringify(req.body)
  return req
})
  
grace.http.interceptors.response.use(response => {
  console.log("response is:", response)
  return response
})

export default grace;