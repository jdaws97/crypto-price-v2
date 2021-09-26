import styled from "styled-components";

export const Wrapper = styled.div`
  height: 1100px;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  text-align: center;
  .no-search {
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
      img {
        width: 40vh;
        height: 30vh;
        padding: 5vh 5vh;
      }
    }
  }
`;

export const Content = styled.div`
  background: white;
  margin: 0 10vh 10vh;
  border-radius: 3vh;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    margin: 0;
  }

  .coin-descr {
    display: flex;
    font-size: 3vh;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2vh;
    }

    h3 {
      margin: auto 0;
      font-size: 2vh;
      margin-left: 2vh;
      padding: 0.5vh;
    }
  }
  img {
    height: 10vh;
    margin: auto 1vh;

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
      height: 5vh;
    }
  }

  .coin-params {
    font-size: 2vh;
    max-width: 4000px;

    text-align: center;

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
      h2 {
        font-size: 2vh;
      }
    }

    h2 {
      border-style: solid;
      background: lightblue;
      border-radius: 3vh;
    }
  }

  .chart-graph {
    padding: 3vh;
  }
`;
