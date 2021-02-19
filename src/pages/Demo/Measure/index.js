import React, { useRef } from 'react';
import './index.less';

const group = (pageHeight, origin = []) => {
  // console.log('group', origin);
  let startIndex = 0;
  const result = [[]];
  for (let i = 0; i < origin.length; i++) {
    if ((origin[i].offsetTop - origin[startIndex].offsetTop) < pageHeight) {
      result[result.length - 1].push(origin[i]);
    } else {
      const last = result[result.length - 1].pop();
      result.push([]);
      result[result.length - 1].push(last);
      startIndex = i - 1;
      if ((origin[i].offsetTop - origin[startIndex].offsetTop) < pageHeight) {
        result[result.length - 1].push(origin[i]);
      }
      // console.log('startIndex', startIndex);
    }
  }
  console.log('result', result);
  return result;
};

const Measure = ({ children, onMeasureComplete, pageHeight = 842 }) => {
  const childrenData = useRef([]);
  let elements = [];
  const onComplete = (id, index, offsetTop) => {
    // console.log(id, index, offsetTop);
    childrenData.current.push({ id, index, offsetTop });
    // console.log('childrenData', childrenData);
    if (childrenData.current.length === elements.length) {
      const res = group(pageHeight, childrenData.current);
      const newElements = res.map(v => v.map(k => elements[k.index]));
      typeof onMeasureComplete === 'function' && onMeasureComplete(res, newElements);
    }
  };
  elements = React.Children.map(children, (v, i) => React.cloneElement(v, { onComplete, index: i }));
  return (
    <div className="comp-measure">
      {elements}
    </div>
  );
};

export default Measure;
