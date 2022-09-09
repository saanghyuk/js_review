import { useState } from "react";
import Rating from "./Rating";
import "./RatingInput.css";

// onChange는 state바꿔주는 것 이였음.
function RatingInput({ name, value, onChange }) {
  const [rating, setRating] = useState(value);
  // 여기서 내려오는 value는 최상단 컴포넌트에서의 values.rating
  const handleSelect = nextValue => onChange(name, nextValue);
  const handleMouseOut = () => setRating(value);

  return (
    <Rating
      className="RatingInput"
      value={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseOut={handleMouseOut}
    />
  );
}

export default RatingInput;
