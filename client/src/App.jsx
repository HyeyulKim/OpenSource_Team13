import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Trending from "./page/Trending";
import Login from "./page/Login";
import DiaryWrite from "./page/DiaryWrite";
import MusicHistory from "./page/MusicHistory";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import DiaryHistory from "./page/DiaryHistory";
import DiaryDetail from "./page/DiaryDetail";
import MenuPage from "./page/MenuPage";
import MyPage from "./page/MyPage";
import Auth from "./hoc/Auth";
import PlayMusic from "./page/PlayMusic";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif !important;
  }
  html, body {
    width: 100vw;
    min-height: 100%;
  }
`;

function App() {
  React.useEffect(() => {});

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Auth(Trending)} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/write" exact component={Auth(DiaryWrite)} />
          <Route path="/history/music" exact>
            <MusicHistory />
          </Route>
          <Route path="/history/diary" exact>
            <DiaryHistory />
          </Route>
          <Route path="/history/diary/:id">
            <DiaryDetail />
          </Route>
          <Route path="/menu" exact>
            <MenuPage />
          </Route>
          <Route path="/mypage" component={Auth(MyPage)} exact />
          <Route path="/play" exact>
            <PlayMusic />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
