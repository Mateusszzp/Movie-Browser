import { Navigate, Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import {
  NavWrapperInput,
  NavIconInput,
  NavBoxLine,
  NavLinks,
  NavH1,
  NavigationBoxStyled,
  NavigationWrapper,
  NavLi,
  StyledNavLink,
  NavBoxFrame,
  Stroke,
} from "./styled"

import { ReactComponent as Elipse } from "../../common/img/elipse.svg";
import Movies from "../../Features/Movies/PopularMovies";
import People from "../../Features/People/PopularPeople"
import SingleMovie from "../../Features/Movies/SingleMovie";
import Profile from "../../Features/People/Profile";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { fetchSearchPending } from "./Input/Search/searchSlice";
import PeopleInput from "./PeopleInput";
import { fetchSearchPeoplePending } from "./PeopleInput/Search/searchPeopleSlice";

const Navigation = () => {
  const [query, setQuery] = useSearchParams("");
  const dispatch = useDispatch();
  const location = useLocation();

  const cleaningHandler = () => {
    dispatch(fetchSearchPending({ page: 1, query: "" }));
    dispatch(fetchSearchPeoplePending({ page: 1, query: "" }));
    setQuery("");
  };

  return (
    <>
      <NavigationBoxStyled>
        <NavBoxFrame>
          <NavigationWrapper>
            <NavBoxLine>
              <Stroke />
              <NavH1>movies browser</NavH1>
              <NavLinks           >
                <NavLi>
                  <StyledNavLink
                    to="/movies"
                    onClick={cleaningHandler}
                  >
                    movies
                  </StyledNavLink>
                </NavLi>
                <NavLi>
                  <StyledNavLink
                    to="/people"
                    onClick={cleaningHandler}
                  >
                    people
                  </StyledNavLink>
                </NavLi>
              </NavLinks>
            </NavBoxLine>
            <NavWrapperInput>
              <NavIconInput>
                <Elipse />
              </NavIconInput>
              {
                location.pathname.startsWith("/people") ?
                  <PeopleInput query={query} setQuery={setQuery} /> :
                  <Input query={query} setQuery={setQuery} />
              }
            </NavWrapperInput>
          </NavigationWrapper>
        </NavBoxFrame>
      </NavigationBoxStyled>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/movies/:id" element={<SingleMovie cleaningHandler={cleaningHandler} />} />
        <Route path="/people/:id" element={<Profile cleaningHandler={cleaningHandler} />} />
        <Route path="*" element={<Navigate replace to="/movies" />} />
      </Routes>
    </>
  )
};

export default Navigation;