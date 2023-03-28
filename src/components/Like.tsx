import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <AiFillHeart color="ff6b81" onClick={toggle} />;
  return <AiOutlineHeart onClick={toggle} />;
};

export default Like;
