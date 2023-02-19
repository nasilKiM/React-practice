import styled from "styled-components";

function Comment({ user, content, onEditCom, handleDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //버튼
  const handleEdit = () => {
    setIsEdit(true);
    setInputValue(content);
  };

  //수정 클릭 후 완료버튼
  const handleEditCommentComplete = () => {
    if (content === inputValue) return setIsEdit(false);
    onEditCom(user.id, inputValue);
    setIsEdit(false);
  };

  console.log(user.User.nickname);
  return (
    <S.CommentItem>
      <p>
        작성자: <span>{user.User.nickname}</span>
      </p>
      <p>
        댓글 내용:{" "}
        <span>{isEdit ? <input value={inputValue} onChange={onEditCom} /> : user.content}</span>
      </p>
      {user.myComment && (
        <>
          <button onClick={isEdit ? handleEditCommentComplete : handleEdit}>수정</button>
          <button onClick={() => handleDelete(user.User.nickname)}>삭제</button>
        </>
      )}
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
