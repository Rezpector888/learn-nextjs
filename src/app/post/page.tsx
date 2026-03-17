import {PostList} from '@belajar/components';
export default async function Post() {
  return (
    <>
      <div className="main-heading">
        <h1>Posts</h1>
      </div>
      <PostList/>
    </>
  );
}
