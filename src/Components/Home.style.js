import styled from "styled-components";

export const Wrapper = styled.div`
  color: black;
  margin: auto;
  max-width: 1910px;
  background: white;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;

export const Content = styled.div`
  flex-direction: column;
  padding: 5px 5px;

  .coins-list {
    display: flex;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    margin: 15px;
    justify-content: space-between;
    border-radius: 10vh;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
      margin: 10px;
      h3 {
        font-size: 1vh;
      }
    }

    h2,
    h3 {
      font-size: 2.5vh;
      padding-right: 2vh;
      margin: auto 0;
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 1.7vh;
      }
    }

    h3 {
      font-size: 1.8vh;
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 1.1vh;
      }
    }
    .logo-and-name {
      display: flex;
      font-size: 2vh;
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 1.2vh;
        padding-right: 1vh;
      }

      img {
        margin: auto;
        height: 5vh;
        padding-left: 2vh;
        padding-right: 2vh;
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
          height: 3vh;
          padding: 0;
          padding-left: 1vh;
          padding-right: 1vh;
        }
      }
    }
  }
`;
