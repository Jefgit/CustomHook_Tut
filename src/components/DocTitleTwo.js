import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment- {count}
      </button>
    </div>
  );
};

export default DocTitleTwo;
