
console.info('Starting server for >>> App...')
require('../src/index.js').listen(8000, () => {
  console.info('Server is running at http://localhost:8000/taxi-web-app')  
})

console.info('Starting server for >>> Rest_API...')
import './api/index.js';
