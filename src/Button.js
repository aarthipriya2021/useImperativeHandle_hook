import React, { useRef, useImperativeHandle, forwardRef } from 'react';

function Button(props, ref) {
   const btn = useRef();
   useImperativeHandle(ref, () => ({
      blur: () => {
         console.log('Custom Blur property is called');
      },
   }));
   return (
      <button ref={btn} {...props}>
         Click Here
      </button>
   );
}
export default forwardRef(Button);