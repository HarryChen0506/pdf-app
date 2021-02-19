import React, { useRef, useLayoutEffect } from 'react';
import './index.less';

const Row = ({
  children, id, index, onComplete,
}) => {
  const nodeRef = useRef();
  useLayoutEffect(() => {
    // console.log('nodeRef', id, nodeRef);
    if (nodeRef) {
      const parentRect = nodeRef.current.parentElement.getBoundingClientRect();
      const rect = nodeRef.current.getBoundingClientRect();
      const offsetTop = rect.top - parentRect.top;
      // console.log('offsetTop', offsetTop);
      typeof onComplete === 'function' && onComplete(id, index, offsetTop);
    }
  }, [id, index, onComplete]);
  return (
    <div className="comp-row" ref={nodeRef}>
      {children}
    </div>
  );
};

export default Row;
