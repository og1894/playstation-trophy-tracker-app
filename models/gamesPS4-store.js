'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const gameStore = {

  store: new JsonStore('./models/gamesPS4.json', { games4: {} }),
  collection: 'games4',


  getGamesInfo() {
    return this.store.findAll(this.collection);
  },

};

export default gameStore;