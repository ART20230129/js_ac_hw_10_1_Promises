import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => {
        console.log(saving);
        // saving объект класса GameSaving
      }, (error) => {
        throw new Error(error); 
      }
);