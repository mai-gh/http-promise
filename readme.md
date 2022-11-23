# HTTP-Promise

## Bare Bones Promise Wrapper for https.request() from nodejs

### Install
```
npm install mai-gh/http-promise
```

### Usage

```JavaScript
const req = require('http-promise');

const main = async () => {
  const resp = await req({
    method: 'GET',
    protocol: 'https:',
    host: 'raw.githubusercontent.com',
    path: '/mai-gh/http-promise/main/http-promise.js'
  })
  console.log(resp.data)
}

main();
```
