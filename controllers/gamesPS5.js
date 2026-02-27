'use strict';

import logger from "../utils/logger.js";
import gamesStore from "../models/gamesPS5-store.js";

const gamesPS5 = {
  createView(request, response) {
    logger.info("PS5 page loading!");
    
    const viewData = {
      title: "PlayStation Trophy Tracker PS5 Games",
      gamesInfo: gamesStore.getGamesInfo()
    };
    
    logger.info(viewData.gamesInfo);
    response.render('collectionsPS5', viewData);
  },
};

export default gamesPS5;