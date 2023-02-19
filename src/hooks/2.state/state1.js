import PlayListMock from "../../__mock__/playList.json";
import { useState } from "react";

/* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

console.log(PlayListMock.playlist);
/* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

function State1() {
  const [playList, setPlayList] = useState(PlayListMock.playlist);
  const [songTitle, setSongTitle] = useState("");
  const [singerInput, setSingerInput] = useState("");

  // 추가 (노래)
  const handleSongTitle = (e) => {
    setSongTitle(e.target.value);
  };

  // 추가 (가수)
  const handleSingerInput = (e) => {
    setSingerInput(e.target.value);
  };

  const handleAddBtn = () => {
    const title = songTitle;
    const singer = singerInput;
    if (!title || !singer) return;
    const newList = {
      title,
      singer,
    };
    setPlayList([...playList, newList]); // 깊은복사 + 새로운리스트
  };

  // 삭제
  const handleDeleteBtn = () => {
    const list = playList.findIndex((list) => list.title === songTitle);
    playList.splice(list, 1);
    setPlayList([...playList]);
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        {/* summer 위로 올림 */}
        <li>
          <h3>Summer</h3>
          <p>Joe Hisaishi</p>
        </li>
        {playList.map((list) => {
          return (
            <li>
              <h3>{list.title}</h3>
              <p>{list.singer}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <p>
          곡명 : <input value={songTitle} onChange={handleSongTitle} />
        </p>
        <p>
          가수/작곡 : <input value={singerInput} onChange={handleSingerInput} />
        </p>
        <p>
          <button onClick={handleAddBtn}>추가</button>
          <button onClick={handleDeleteBtn}>삭제</button>
        </p>
      </div>
    </>
  );
}
export default State1;
