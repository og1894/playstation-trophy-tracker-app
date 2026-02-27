'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const gameStore = {

  store: new JsonStore('./models/gamesPS5.json', { games5: {} }),
  collection: 'games5',


  getGamesInfo() {
    return this.store.findAll(this.collection);
  },

};

export default gameStore;