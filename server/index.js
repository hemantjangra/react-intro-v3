import React from "react";
import express from 'express';
import { renderToNodeStream } from "react-dom/server";
import fs from 'fs';
import {StaticRouter} from "react-router-dom";

import App from "../src/App";

const PORT = process.env.port || 3000;

const html = fs.readFileSync('./dist/index.html').toString();
const splitHtml = html.split('not rendered');

const app = express();
app.use('/dist', express.static('dist'));
app.use((req, res)=>{
    res.write(splitHtml[0]);
    const staticContext = {};
    const reactContent = (<StaticRouter url={req.url} context={staticContext}>
        <App />
    </StaticRouter>);
    //const content = `${splitHtml[0]}${renderToString(reactContent)}${splitHtml[1]}`;
    const stream = renderToNodeStream(reactContent);
    stream.pipe(res, {end: false});
    stream.on('end', ()=>{
        res.status(staticContext.statusCode || 200);
        res.write(splitHtml[1]);
        res.end();
    })

});

console.log(`Application listening on port ${PORT}`);
app.listen(PORT);
