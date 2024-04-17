import GameSavingLoader from "../js/gameSavingLoader";

test('checking the operation of GameSavingLoader', () => {
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
       id: 1,
       name: 'Hitman',
       level: 10,
       points: 2000,
    },
  };
  return expect(GameSavingLoader.load()).resolves.toEqual(result)
})