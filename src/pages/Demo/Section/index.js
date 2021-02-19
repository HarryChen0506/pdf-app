import React from 'react';
import './index.less';

const Section = ({ children, index = 0 }) => (
  <div className="comp-section">
    <div className="section-main">
      {children}
    </div>
    <footer className="section-footer">
      第{index + 1}页
    </footer>
  </div>
);

export default Section;
