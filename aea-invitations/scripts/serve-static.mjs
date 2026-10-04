import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist/client');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2','.ico':'image/x-icon'};
http.createServer(async(req,res)=>{try{let route=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let path=resolve(root,'.'+route);if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403).end();return;}let paths=[path,path+'.html',resolve(path,'index.html')];for(const item of paths){try{if((await stat(item)).isFile()){res.writeHead(200,{'Content-Type':mime[extname(item)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(await readFile(item));return;}}catch{}}res.writeHead(404,{'Content-Type':'text/html'});res.end('<h1>Page not found</h1><a href="/">AlwaysEverafter home</a>');}catch{res.writeHead(400).end('Bad request');}}).listen(4173,'127.0.0.1',()=>console.log('AlwaysEverafter production preview: http://127.0.0.1:4173'));
