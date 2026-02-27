'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const gameStore = {

  store: new JsonStore('./models/gamesPS3.json', { games: {} }),
  collection: 'games',


  getGamesInfo() {
    return this.store.findAll(this.collection);
  },

};

export default gameStore;