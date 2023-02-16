import { useEffect, useState } from "react";
import styled from "styled-components";

function Q1() {
  /* 
    문제1
    useState 및 styled-components에 관련한 문제입니다.
    아래 문제를 통해 어떠한 경우 state를 사용해야하는지 고민하여 풀어보세요

    1-1 )
        문제1-1은 input의 value가 placeholder의 값과 같아졌다면
        초록색 글씨로 올바르게 입력하셨습니다가 노출됩니다.

        만약 입력하지 않았다면 올바르게 글을 작성해주세요라는 문구가
        붉은색 글씨로 노출됩니다

    1-2 )
        문제1-2는 보이기 버튼을 누른다면

        button 내부의 텍스트는 숨기기로 바뀌고
        아래 보이는 p태그가 보여야합니다.

        반대로 숨기기 텍스트로 바뀐 button을 누르면
        p태그는 보이지 않아야합니다

  */
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleInputValue = (e) => {
    setName(e.target.value);
    console.log(name);
    if (e.target.value === "김성용") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (name) {
      setInputVisible(true);
    }
    if (name === "") {
      setInputVisible(false); //
    }
  };

  const handleView = () => {
    setIsVisible(true);
  };

  const [inputVisible, setInputVisible] = useState(false);
  // const handleInputVisible = () => {
  //   setInputVisible(true);
  // };

  return (
    <>
      <h1>문제1</h1>
      <div>
        <h2>문제1-1.</h2>
        <input
          onChange={handleInputValue}
          value={name}
          type="text"
          // placeholder={"김성용"}
          style={{ textAlign: "center" }}
        />
        <div>
          {inputVisible &&
            (isActive === true ? (
              <S.Message> 올바르게 입력하셨습니다 </S.Message>
            ) : (
              <S.errMessage>올바르게 글을 작성해주세요.</S.errMessage>
            ))}
        </div>
      </div>

      <div>
        <h2>문제1-2. </h2>
        {isVisible === true ? (
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            보이기
          </button>
        ) : (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            감추기
          </button>
        )}
        {isVisible && (
          <p onChange={handleView} visible={setIsVisible}>
            이 문구는 보이기 상태일 때만 볼 수 있습니다
          </p>
        )}
      </div>
    </>
  );
}
export default Q1;

const Message = styled.p`
  color: green;
`;

const errMessage = styled.p`
  color: red;
`;

const S = {
  Message,
  errMessage,
};
