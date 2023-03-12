import { useState } from 'react';

import { ImageForm, ImageList } from './components';
import { Root } from './Root';
import ImageListContext from './context';

function App() {
  const [imageList, setImageList] = useState([]);

  return (
    <ImageListContext.Provider value={{ imageList, setImageList }}>
      <Root>
        <ImageForm />
        <ImageList />
      </Root>
    </ImageListContext.Provider>
  );
}

export default App;
