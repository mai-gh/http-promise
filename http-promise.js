module.exports = (o) => {
  const opt = {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0' },
    ...o,
  }
  let http;
  opt.protocol === 'http:' ? http = require('http') : http = require('https');
  return new Promise((resolve, reject) => {
    const req = http.request(opt, (resp) => {
      resp.data = '';
      resp.on('data', chunk => {resp.data += chunk})
      resp.on('end', () => {resolve(resp)})
    }).end();
  });
}
