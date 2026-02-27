'use strict';

import logger from "../utils/logger.js";
import gamesStore from "../models/gamesPS3-store.js";

const gamesPS3 = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "PlayStation Trophy Tracker About",
      gamesInfo: gamesStore.getGamesInfo()
    };
    
    logger.info(viewData.gamesInfo);
    response.render('about', viewData);
  },
};

export default gamesPS3;