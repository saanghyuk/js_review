import { useState } from "react";
import FileInput from "./Fileinput";

function ReviewForm() {
  // const [title, setTitle] = useState("");
  // const [rating, setRating] = useState(0);
  // const [content, setContent] = useState("");
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null
  });

  // const handleTitleChange = e => {
  //   setTitle(e.target.value);
  // };

  // const handleRatingChange = e => {
  //   const nextRating = Number(e.target.value) || 0;
  //   setRating(nextRating);
  // };

  // const handleContentChange = e => {
  //   setContent(e.target.value);
  // };

  const handleChange = (name, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };
  const handleInputChange = e => {
    // 이걸 굳이 이렇게 하는 이유는, fileinput은 value에 직접 쓸 수가 없어서, prop을 활용했기 때문
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault(); // 이걸 안하면, 기본적으로 get을 실행해버림.
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input
        name="rating"
        type="number"
        value={values.rating}
        onChange={handleInputChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button>확인</button>
    </form>
  );
}

export default ReviewForm;
