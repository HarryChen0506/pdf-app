import React from 'react';
import './index.less';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="main-layout">
      main layout
      <div className="main-container">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
