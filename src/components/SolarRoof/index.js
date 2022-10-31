import React from "react";
import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const index = () => {
  document.title = "Solar Roof | Tesla";
  return (
    <Wrap>
      <Header />
      <Itemtext>
        <h1>Solar Roof</h1>
        <h4>Transform your roof and produce clean energy</h4>
      </Itemtext>

      <Content>
        <h1>
          <SolarPowerIcon className="solar" /> <br />
          Beautiful <br /> Solar
        </h1>
        <h1>
          <h2>
            25-Year <br />
          </h2>

          <h4>
            Tile <br />
            Warranty
          </h4>
        </h1>

        <h1>
          <h2>
            24/7 <br />
          </h2>
          <h4>
            Outage <br />
            Protection
          </h4>
        </h1>

        <button>Order Now</button>
      </Content>

      <ChatBubbleOutlineIcon className="chat" />

      <Footertext>
        <Footer />
      </Footertext>
    </Wrap>
  );
};

export default index;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/cfcf3747-c7d7-488d-896d-7c9462e50ca5/bvlatuR/std/2880x1800/Solar-Roof-Hero-Desktop-Global?quality=auto-medium&format=auto");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  color: white;
  position: fixed;

  .chat {
    position: fixed;
    right: 0;
    background-color: white;
    margin-right: 2rem;
    /* font-size: 2rem; */
    height: 2.9rem;
    width: 4rem;
    border-radius: 50px;
  }
`;

const Itemtext = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 6rem;
  color: white;

  h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: 500;
  }

  h4 {
    font-size: 1rem;
    color: white;
    font-weight: 400;
  }
`;

const Footertext = styled.div`
  text-align: center;
  margin-top: 10pc;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20pc;
  gap: 6rem;
  text-align: center;
  h2 {
    font-size: 2rem;
    color: white;
    font-weight: 400;
  }
  h4 {
    color: white;
    font-weight: 400;
    font-size: 1rem;
    margin-left: 10px;
  }
  button {
    padding: 15px 30px;
    height: 50px;
    align-items: center;
    width: 200px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    color: #111;
    margin-top: 0.5rem;
  }
  h1 {
    color: white;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 400;
  }
  .solar {
    background-color: white;
    color: white;
    font-size: 1rem;
  }
`;
