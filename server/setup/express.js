'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import rateLimit from 'express-rate-limit';

import { RATE_LIMITER_WINDOWMS, RATE_LIMITER_MAX_REQUEST, RATE_LIMITER_MESSAGE } from '../config';

export const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use(morgan('combined'));
const limiter = rateLimit({
	windowMs: RATE_LIMITER_WINDOWMS || 900000,
	max: RATE_LIMITER_MAX_REQUEST || 100,
	message: RATE_LIMITER_MESSAGE
});
app.use(limiter);
const port = process.env.PORT || 3000;
export const _server = app.listen(port);
console.log('Express Server started and listening on port ', port, 'mode (' + process.env.NODE_ENV + ')');

export function teardown() {
	_server.close();
}
