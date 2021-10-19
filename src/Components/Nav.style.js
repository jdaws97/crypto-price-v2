import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;

  padding: 2vh;
  font-family: "Source Sans Pro", sans-serif;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 46.2vh;
    padding: 2vh;
  }
`;

export const Content = styled.div`
  text-align: center;
  input {
    width: 70vh;
    padding-left: 2vh;
    height: 5vh;
    font-size: 2.5vh;
    border-radius: 5vh;
    border-style: none;

    :focus {
      outline: none;
    }
  }

  .link-name {
    display: flex;
    color: white;
    font-size: 3vh;
    float: left;
    margin-top: 0.5vh;
    text-decoration: none;
    font-weight: bold;
    border-style: solid;
    border-radius: 1vh;
    border-width: 0.3vh;
  }

  @media (min-width: 400px) and (max-width: 800px) {
    text-align: center;
    input {
      width: 40vh;
    }
    .link-name {
      font-size: 2.3vh;
      margin-top: 1.2vh;
    }
  }

  @media (min-width: 200px) and (max-width: 399px) {
    text-align: center;
    input {
      width: 30vh;
    }
    .link-name {
      margin-top: 1.2vh;
      font-size: 2.3vh;
    }
  }
`;
