const initialState = {
  list: [
    {
      title: 'Primeira nota',

      body: 'Testando... 1 2 3',
    },
  ],
};

export default (state = initialState, action) => {
  let newList = [...state.list];

  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        titlle: action.payload.titlle,
        body: action.payload.body,
      });
      break;
    case 'EDIT_NOTE':
      if (newList[action.payload.key]) {
        newList[action.payload.key] = {
          titlle: action.payload.titlle,
          body: action.payload.body,
        };
      }
      break;
  }
  return { ...state, list: newList };
};
