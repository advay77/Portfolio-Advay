import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={() => props.video && setIsVideo(true)}
        onMouseLeave={() => setIsVideo(false)}
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.image} alt={props.alt} />
        {isVideo && props.video && (
          <video src={props.video} autoPlay muted playsInline loop></video>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
