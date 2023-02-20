import React from 'react';
import { debounce } from 'lodash';

function useWindowSize() {
   const [ windowWidth, setWindowWidth ] = React.useState(window.innerWidth);

   React.useEffect(() => {
      function listener() {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', debounce(listener, 300));
      listener();

      return () => window.removeEventListener('resize', listener);
   }, []);


   return windowWidth;
};


export default useWindowSize;