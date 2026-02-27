'use strict';

import logger from "../utils/logger.js";
import gamesStore from "../models/gamesPS4-store.js";

const gamesPS4 = {
  createView(request, response) {
    logger.info("PS4 page loading!");
    
    const viewData = {
      title: "PlayStation Trophy Tracker PS4 Games",
      gamesInfo: gamesStore.getGamesInfo()
    };
    
    logger.info(viewData.gamesInfo);
    response.render('collectionsPS4', viewData);
  },
};

export default gamesPS4;