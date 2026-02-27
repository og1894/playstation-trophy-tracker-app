'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import gamesPS3 from './controllers/gamesPS3.js';
import gamesPS4 from './controllers/gamesPS4.js';
import gamesPS5 from './controllers/gamesPS5.js';

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);
router.get('/gamesPS3', gamesPS3.createView);
router.get('/gamesPS4', gamesPS4.createView);
router.get('/gamesPS5', gamesPS5.createView);
router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
