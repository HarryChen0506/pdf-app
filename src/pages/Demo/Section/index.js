import React from 'react';
import './index.less';

const Section = ({ children }) => (
  <div className="comp-section">
    <div className="section-main">
      {children}
    </div>
    <footer className="section-footer">
      第n页
    </footer>
  </div>
);

export default Section;
