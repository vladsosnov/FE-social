import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { UserAvatar } from "components/shared";
import { API } from "hooks/useApi";
import { PhotoIcon, VideoIcon, EventIcon, ArticleIcon } from "assets/icons";
import "./share.css";

export const Share = () => {
  const { user } = useSelector((store: any) => store.auth);
  const desc: any = useRef();
  const [file, setFile] = useState<any>(null);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const newPost: any = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.image = fileName;

      try {
        await API.post("/upload", data);
      } catch (err) {
        console.log("err", err);
      }
    }
    try {
      await API.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="share">
      <div className="shareTop">
        <UserAvatar
          picture={user.profilePicture}
          username={user.username}
          size="medium"
        />
        <input placeholder="Start a post" className="shareInput" ref={desc} />
      </div>
      {file && (
        <div className="shareImgContainer">
          <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
          <button onClick={() => setFile(null)}>Cancel</button>
        </div>
      )}
      <form className="shareBottom" onSubmit={submitHandler}>
        <div className="shareActionBar">
          <label htmlFor="file" className="shareActionsButton">
            <PhotoIcon customClassName="shareActionsIcon" width={21} />
            Photo
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e: any) => setFile(e.target.files[0])}
            />
          </label>
          <button className="shareActionsButton">
            <VideoIcon customClassName="shareActionsIcon" width={21} />
            Video
          </button>
          <button className="shareActionsButton">
            <EventIcon customClassName="shareActionsIcon" width={21} />
            Event
          </button>
          <button className="shareActionsButton">
            <ArticleIcon customClassName="shareActionsIcon" width={21} />
            Write article
          </button>
        </div>
        <button className="shareButton" type="submit">
          Share
        </button>
      </form>
    </div>
  );
};
