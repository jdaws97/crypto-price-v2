import React, { useState, useEffect, useRef } from "react";
//style import
import { Wrapper, Content } from "./Home.style";
// import hooks
import { useHomeHook } from "./Hooks/useHomeHook";

const Home = () => {
  //Set States

  const { data } = useHomeHook();

  return (
    // console.log(data),
    <Wrapper>
      <Content>
        {data.map((e) => {
          return (
            <div className="coins-list">
              <div className="logo-and-name">
                <img src={e.image} alt="" />
                <h1>{e.name}</h1>
              </div>
              <h3>24Hr High: ${e.high_24h.toLocaleString()}</h3>
              <h3>24Hr Low: ${e.low_24h.toLocaleString()}</h3>
              <h2>
                $
                {e.current_price.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </h2>
            </div>
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default Home;
