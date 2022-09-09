import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange, initialPreview }) {
  const [preview, setPreview] = useState(initialPreview);

  const inputRef = useRef();

  const handleChange = e => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onChange(name, null);
  };
  useEffect(
    () => {
      if (!value) return;

      const nextPreview = URL.createObjectURL(value);
      setPreview(nextPreview);

      // 여기서 return은 value값이 바뀌어서 재 렌더링이 일어날때 실행된다.
      return () => {
        setPreview(initialPreview);
        URL.revokeObjectURL(nextPreview);
      };
    },
    [value, initialPreview]
  );

  return (
    <div>
      <img src={preview} alt="Preview" accept="image/png image/jpeg" />
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
