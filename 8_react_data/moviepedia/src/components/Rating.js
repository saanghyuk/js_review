import "./Rating.css";

const RATINGS = [1, 2, 3, 4, 5];

// 별 하나 만드는 컴포넌트
function Star({ Selected = false, rating, onSelect, onHover }) {
  // selected가 true이면, selected라는 class 이름을 추가한다.
  const className = `Rating-star ${Selected ? "selected" : ""}`;

  const handleClick = onSelect ? () => onSelect(rating) : undefined;

  const handleMouseOver = onHover ? () => onHover(rating) : undefined;

  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      ★
    </span>
  );
}

function Rating({ value = 0, className, onSelect, onHover, onMouseOut }) {
  console.log(value >= 1);
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {RATINGS.map(rating =>
        <Star
          key={rating}
          Selected={value >= rating}
          rating={rating}
          onSelect={onSelect}
          onHover={onHover}
        />
      )}
    </div>
  );
}

export default Rating;
