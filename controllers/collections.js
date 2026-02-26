'use strict';
import logger from "../utils/logger.js";
import gameStore from "../models/games-store.js";

const collections = {
  createView(request, response) {
    logger.info("Collections page loading!");
   
      const viewData = {
      title: "PlayStation Trophy Tracker Collections",
      games: gameStore.getGamesInfo()
    };
    logger.info(viewData.gameStore)
    response.render('collections', viewData); 
  },
};

export default collections;