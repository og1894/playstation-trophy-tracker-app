'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const consoleStore = {

  store: new JsonStore('./models/consoles.json', { console: {} }),
  collection: 'console',


  getConsolesInfo() {
    return this.store.findAll(this.collection);
  },

};

export default consoleStore;