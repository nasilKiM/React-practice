import Movie from "./components/Movie";
import { dummy } from "./movieDummy";
import styled from "styled-components";

//라우팅설정 + provider 종류들 모아두고

function App() {
  return (
    <div>
      <Header>
        <div>HEADER</div>
      </Header>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  padding: 20px;
`;
