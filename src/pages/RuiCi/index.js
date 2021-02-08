import React, { useState, useEffect } from 'react';
import './index.less';

const EyeType = ({ title }) => (
  <div className="comp-eye-type">
    <div className="text">{title}</div>
    <div className="icon-group">
      <i className="circle" />
      <i className="circle active" />
    </div>
  </div>
);

const EyeItem = ({ title }) => (
  <div className="comp-eye-item">
    <div className="top">
      <div className="title">
        <EyeType title={title} />
      </div>
    </div>
    <div className="body">
      <img className="image-eye" src="./assets/images/eye.png" alt="" />
    </div>
  </div>
);

const ColumnSymptom = () => (
  <div className="column-symptom">
    <div className="symptom-eye-photo">
      <div className="photo-wrap">
        <div className="item-body">
          <span className="title fs-7">血管分割</span>
          <img className="image-eye" src="./assets/images/eye.png" alt="" />
        </div>
        <div className="item-body">
          <span className="title fs-7">视杯视盘分割</span>
          <img className="image-eye" src="./assets/images/eye.png" alt="" />
        </div>
      </div>
      <div className="photo-footer">
        <div className="comp-eye-type">
          <div className="text">右眼</div>
          <div className="icon-group">
            <i className="circle" />
            <i className="circle active" />
          </div>
        </div>
      </div>
    </div>
    <div className="table">
      <div className="table-title">
        <span className="text fs-7">血管分割参数</span>
      </div>
      <div className="table-body bg-blue">
        <div className="row">
          <div className="column w-85" />
          <div className="column w-47 align-c">
            <span className="c-black fs-9">25%</span>
          </div>
          <div className="column w-85 align-c">
            <span className="c-black fs-9">5%</span>
          </div>
          <div className="column w-47 align-c">
            <span className="c-black fs-9">45%</span>
          </div>
        </div>
        <div className="row">
          <div className="column w-85 align-r lh-12">
            <div className="c-black fs-9 to-r no-wrap">静脉血管主干宽度</div>
            <div className="c-black fs-9 to-r no-wrap">四分位数(mm)</div>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">0.12</span>
          </div>
          <div className="column w-85 align-c">
            <span className="c-blue fs-9">0.14</span>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">0.18</span>
          </div>
        </div>
        <div className="row">
          <div className="column w-85 align-r lh-12">
            <div className="c-black fs-9 to-r no-wrap">静脉血管主干宽度</div>
            <div className="c-black fs-9 to-r no-wrap">四分位数(mm)</div>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">0.12</span>
          </div>
          <div className="column w-85 align-c">
            <span className="c-blue fs-9">0.14</span>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">0.18</span>
          </div>
        </div>
      </div>
    </div>
    <div className="table" style={{ marginTop: '10px' }}>
      <div className="table-body bg-dark-blue">
        <div className="row">
          <div className="column w-85 align-r">
            <div className="c-black fs-9 fw-500 to-r no-wrap">动静脉管径比</div>
          </div>
          <div className="column w-47 align-c" />
          <div className="column w-85 align-c" />
          <div className="column w-47 align-c">
            <span className="c-blue fs-9 fw-500">1:1.69</span>
          </div>
        </div>
      </div>
    </div>
    <div className="table" style={{ marginTop: '10px' }}>
      <div className="table-title">
        <span className="text fs-7">视杯视盘分割参数</span>
      </div>
      <div className="table-body bg-blue">
        <div className="row">
          <div className="column w-85 align-r">
            <div className="c-black fs-9 to-r no-wrap">视盘偏心率</div>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">0.12</span>
          </div>
          <div className="column w-85 align-c">
            <span className="c-black fs-9 to-r no-wrap">竖径杯盘比</span>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">0.38</span>
          </div>
        </div>
        <div className="row">
          <div className="column w-85 align-r">
            <div className="c-black fs-9 to-r no-wrap">视杯偏心率</div>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">0.25</span>
          </div>
          <div className="column w-85 align-c">
            <span className="c-black fs-9 to-r no-wrap">横径杯盘比</span>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">0.68</span>
          </div>
        </div>
        <div className="row">
          <div className="column w-85 align-r">
            <div className="c-black fs-9 to-r no-wrap">视盘面积 (mm²)</div>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">1.37</span>
          </div>
          <div className="column w-85 align-c">
            <span className="c-black fs-9 to-r no-wrap">视杯面积 (mm²)</span>
          </div>
          <div className="column w-47 align-c">
            <span className="c-blue fs-9">0.39</span>
          </div>
        </div>
        <div className="row bg-dark-blue">
          <div className="column w-85 align-r">
            <div className="c-black fs-9 fw-500 to-r no-wrap">视杯视盘面积比</div>
          </div>
          <div className="column w-47 align-c" />
          <div className="column w-85 align-c" />
          <div className="column w-47 align-c">
            <span className="c-blue fs-9 fw-500">0.28</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Page3 = () => (
  <div className="page-3">
    <section className="section-version-photo">
      <EyeItem title="右眼" />
      <EyeItem title="左眼" />
    </section>
    <section className="section-page-title">
      <div className="content">
        <span className="index"> 03</span>
        <span className="title">眼底征象与病变分析</span>
      </div>
    </section>
    <section className="section-symptom">
      <div className="title-wrap">
        <div className="comp-sub-title">
          <img className="image-eye" src="./assets/images/Triangle.svg" alt="" />
          <span className="text">血管与视杯视盘分割</span>
        </div>
      </div>
      <div className="body">
        <ColumnSymptom />
        <ColumnSymptom />
      </div>
    </section>
    <section className="section-page-footer">
      <div className="comp-footer">
        <div className="footer-page-index">评估报告｜02</div>
        <div className="footer-page-title">VoxelCloud Retina 眼底健康检查评估报告</div>
      </div>
    </section>
  </div>
);

const PageIndex = () => {
  const [user, setUser] = useState({ name: '', age: 0 });
  useEffect(() => {
    setTimeout(() => {
      setUser({ name: '张三', age: 20 });
    }, 300);
  }, []);
  return (
    <div className="page-cover">
      <div className="title">假设这是首页</div>
      <ul>
        <li>姓名：{user.name}</li>
        <li>年龄：{user.age}</li>
      </ul>
    </div>
  );
};

const RuiciReport = () => (
  <div className="report-ruici">
    <PageIndex />
    <Page3 />
  </div>
);

export default RuiciReport;
