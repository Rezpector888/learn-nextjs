import { GetListPost } from "@belajar/services";
import Link from "next/link";

export default async function PostList() {
  const posts = await GetListPost();

  return (
    <div className="post-list">
      {posts.map((post) => {
        return (
          <div className="post-item" key={post.id}>
            <h2>
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
