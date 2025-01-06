import { useCallback, useState } from "react";

const useButtonClick = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback((message : string = "boutton cliked") => {
    setClicked(true);
    console.log(message);
  }, []);

  return {
    clicked,
    handleClick,
  };
};

export default useButtonClick;
