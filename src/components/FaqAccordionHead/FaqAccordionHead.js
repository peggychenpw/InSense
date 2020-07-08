import React from 'react'
import './FaqAccordionHead.scss'

const FaqAccordionHead = ({ classImgDir, classImg, title, content, content2 }) => {
  return (
    <>
      <div className="class-head flex-wrap align-items-center">
        <div className="headLeft">
          <img className="object-fit-cover" src={`images/faq/aaa.png`} />
        </div>
        <div className="headRight">
          <p className="headTitle">InSense FAQ</p>
          <p className="headContent">週一至週日</p>
          <p className="headContent">上午9:00 ~ 下午6:00</p>
        </div>
      </div>
      <div className="serch">
      </div>

      <div className="faq-header">
      <p >
      常見問題
      </p>
      </div>
    </>
  );
};

export default FaqAccordionHead;
