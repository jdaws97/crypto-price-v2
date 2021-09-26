import React, { useState, useEffect, useRef } from "react";
import { useHomeHook } from "./Hooks/useHomeHook";
import { Redirect, useHistory, Link } from "react-router-dom";
import { Wrapper, Content } from "./Nav.style";

const Nav = () => {
  //search hook for global use
  const history = useHistory();
  // temp search hook for this component
  const [search, setSearch] = useState("");
  const [bool, setBool] = useState(false);
  const initial = useRef(true);
  //setSearch state hook needs to be wrapped to
  //const wrappingSetSearch = () => {
  //return setSearch;
  // };
  const redirectToResults = (e) => {
    setBool(true);
    e.preventDefault();
    return;
  };

  const goToHome = (e) => {
    history.push(`/`);
    e.preventDefault();
  };

  const updateSearchResult = (e) => {
    const timer = setTimeout(() => {}, 400);

    if (timer)
      return setSearch(e.currentTarget.value), () => clearTimeout(timer);
  };

  useEffect(() => {
    if (bool === true) {
      history.push(`/results/${search}`);
    }
    setBool(false);
  });

  return (
    // console.log(search),
    <Wrapper>
      <Content>
        <Link className="link-name" to="/">
          Home
        </Link>
        <form onSubmit={redirectToResults}>
          <input
            type="text"
            value={search}
            onChange={updateSearchResult}
            placeholder="Search for..."
          />
        </form>
      </Content>
    </Wrapper>
  );
};

export default Nav;
