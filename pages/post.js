import { useState } from "react";
import Tabshui from "../components/Tabshui";
import PopoverOne from "../components/popover"
import RadixTabs from "components/RadixTabs";

const Post = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        title: title,
        post: post,
      };

      const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      alert(data.message);
    });
  }

  return (
<>
    <Tabshui />
    <>
    <PopoverOne />
    </>
    <><RadixTabs /></>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="post">Post</label>
        <input
          id="post"
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Post;