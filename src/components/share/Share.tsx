import { useRef, useState } from "react";
import { UserAvatar } from "components/shared";
import { PhotoIcon, VideoIcon, EventIcon, ArticleIcon } from "assets/icons";
import { useTypedSelector } from "hooks/useSelector";
import { PostService } from "services/post";
import { ImageService } from "services/image";
import type React from "react";
import type { FC } from "react";
import type { NewPost } from "types/Post";
import styles from "./share.module.css";

export const Share: FC = () => {
  const { user } = useTypedSelector((store) => store.user);
  const desc = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState(desc.current?.value || "");

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (file && description) {
      const newPost: NewPost = {
        userId: user._id,
        desc: description,
      };

      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.image = fileName;

      try {
        await ImageService.uploadPostImage(data);
        await PostService.createPost(newPost);
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const descChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className={styles.share}>
      <div className={styles.shareTop}>
        <UserAvatar
          picture={user.profilePicture}
          username={user.username}
          size="m"
        />
        <input
          placeholder="Start a post"
          className={styles.shareInput}
          ref={desc}
          onChange={descChangeHandler}
        />
      </div>
      {file && (
        <div className={styles.shareImgContainer}>
          <img
            className={styles.shareImg}
            src={URL.createObjectURL(file)}
            alt="for sharing"
          />
          <button
            className={styles.shareCancelBtn}
            onClick={() => setFile(null)}
          >
            Cancel
          </button>
        </div>
      )}
      <form className={styles.shareBottom} onSubmit={submitHandler}>
        <div className={styles.shareActionBar}>
          <label htmlFor="file" className={styles.shareActionsBtn}>
            <PhotoIcon customClassName={styles.shareActionsIcon} width={21} />
            Photo
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={fileChangeHandler}
            />
          </label>
          <button className={styles.shareActionsBtn}>
            <VideoIcon customClassName={styles.shareActionsIcon} width={21} />
            Video
          </button>
          <button className={styles.shareActionsBtn}>
            <EventIcon customClassName={styles.shareActionsIcon} width={21} />
            Event
          </button>
          <button className={styles.shareActionsBtn}>
            <ArticleIcon customClassName={styles.shareActionsIcon} width={21} />
            Write article
          </button>
        </div>
        <button
          disabled={!file || !description}
          className={styles.shareBtn}
          type="submit"
        >
          Share
        </button>
      </form>
    </div>
  );
};
