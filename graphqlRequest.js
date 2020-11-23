import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  'ERP-Request-Timestamp': new Date().getTime()
}

// create an axios instance
const service = axios.create({
  // baseURL: `${window.origin}${process.env.VUE_APP_BASE_API}/api/data-workflow-process-erp`,
  // baseURL: `http://bi.dev.nearbyexpress.com/api/data-workflow-process-erp`,
  timeout: 100000 // request timeout
})
service.defaults.headers = headers

export default service
