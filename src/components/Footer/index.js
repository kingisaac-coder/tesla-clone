import React from "react";

import { Wrapper, Content } from "./footer.syle";

const Footer = ({ bottom }) => {
  return (
    <Wrapper>
      <Content className={bottom}>
        <div>
          <a href="/" target="_blank">
            Tesla-Clone &copy; 2022
          </a>
        </div>
        <div>
          <a href="kingisaac958@gmail.com" target="_blank">
            Gmail
          </a>
          <a
            href="https://www.linkedin.com/in/king-isaac-9a0170247/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/kingisaac-coder" target="_blank">
            GitHub
          </a>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Footer;
