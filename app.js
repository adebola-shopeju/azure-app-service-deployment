const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from Azure App Service!</h1><p>Deployed successfully by Pelumi.</p>');
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
