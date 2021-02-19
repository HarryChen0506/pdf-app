import React, { useState } from 'react';
import Measure from './Measure';
import Section from './Section';
import Row from './Row';
import { randomString } from './helper';
import './index.less';

const mockData = new Array(15).fill(null).map((v, i) => ({ id: i, content: randomString(500) }));
// console.log('mockData', mockData);

const Demo = () => {
  const [data, setData] = useState([]);
  const onMeasureComplete = (data, elements) => {
    // console.log('data', data, elements);
    setData(elements);
  };
  return (
    <div className="page-demo">
      <Measure onMeasureComplete={onMeasureComplete} pageHeight={842 - 30}>
        <Row id="header">
          <h1>
            自动分页DEMO
          </h1>
        </Row>
        {mockData.map(v => (
          <Row key={v.id} id={`list${v.id}`}>
            <div className="text-wrap">{v.id}-{v.content}</div>
          </Row>
        ))}
      </Measure>
      {
        data.map((v, i) => (
          <Section key={i} index={i}>
            {v}
          </Section>
        ))
      }
    </div>
  );
};

export default Demo;
