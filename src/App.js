import React, { useRef } from 'react';
import Button from './Button';

const App = () => {
   const btn = useRef(null);
   return (
      <div>
         <Button onClick={() => btn.current.blur()} ref={btn} />
      </div>
   );
};
export default App;