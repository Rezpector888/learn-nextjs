import { FindOnePost } from "@belajar/services";
import Link from "next/link";

export default async function PostDetail({id}: { id: string}) {
  const post = await FindOnePost(id);

  return (
    <div className="post-detail">
        <h2>{post.title}</h2>
      <div className="content">
          {post.body}
      </div>
    </div>
  );
}
