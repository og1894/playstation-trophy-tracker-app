'use strict';

import logger from "../utils/logger.js";
import gamesStore from "../models/gamesPS3-store.js";

const gamesPS3 = {
  createView(request, response) {
    logger.info("PS3 page loading!");
    
    const viewData = {
      title: "PlayStation Trophy Tracker PS3 Games",
      gamesInfo: gamesStore.getGamesInfo()
    };
    
    logger.info(viewData.gamesInfo);
    response.render('collectionsPS3', viewData);
  },
};

export default gamesPS3;