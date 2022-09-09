import { useState } from "react";
import FileInput from "./Fileinput";
import RatingInput from "./RatingInput";


const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null
};

function ReviewForm({ 
      initialValues=INITIAL_VALUES,
      onSubmitSuccess,
      onSubmit,
      onCancel,
      initialPreview }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(initialValues);

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

  const handleSubmit = async e => {
    e.preventDefault(); // 이걸 안하면, 기본적으로 get을 실행해버림.
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);

    let result; 

    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await onSubmit(formData);
    }   catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    // review에는 새로 입력한 리뷰가 저장되어 있음. 
    const { review } = result;
    setValues(INITIAL_VALUES);
    // 새로 생성한 리뷰 정보 여기다가 넘겨주는 것. 
    onSubmitSuccess(review);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
        initialPreview={initialPreview}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      {onCancel && <button onClick={onCancel}>취소</button>}
      <button disabled={isSubmitting}>확인</button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
