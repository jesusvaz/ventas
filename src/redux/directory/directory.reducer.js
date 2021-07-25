const INITIAL_STATE = {
    sections: [
      {
        title: 'macrame',
        imageUrl: 'https://images.pexels.com/photos/4792066/pexels-photo-4792066.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'dresses',
        imageUrl: 'https://images.pexels.com/photos/5163923/pexels-photo-5163923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'winter',
        imageUrl: 'https://images.pexels.com/photos/7358870/pexels-photo-7358870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'relax',
        imageUrl: 'https://images.pexels.com/photos/5521029/pexels-photo-5521029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'miscelaneous',
        imageUrl: 'https://images.pexels.com/photos/7190406/pexels-photo-7190406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;