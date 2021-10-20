import React from "react";
//style import
import { Wrapper, Content } from "./Home.style";
// import hooks
import { useHomeHook } from "./Hooks/useHomeHook";
import { Link } from "react-router-dom";

const Home = () => {
  //Set States

  const { data } = useHomeHook();

  return (
    <Wrapper>
      <Content>
        {data.map((e) => {
          while (e.market_cap_rank <= 100) {
            return (
              <div className="coins-list">
                <div className="logo-and-name">
                  {e.market_cap_rank}.
                  <img src={e.image} alt="" />
                  <Link
                    to={`/results/${e.name}`}
                    style={{ textDecoration: "none" }}
                    key={e.id}
                  >
                    {e.name}
                  </Link>
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
          }
          return;
        })}
      </Content>
    </Wrapper>
  );
};

export default Home;
