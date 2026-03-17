import { PostDetail as PostDetailComponent} from '@belajar/components'

export default async function PostDetail({ params }: { params: Promise<{id: string}>}) {
  const id = (await params).id
  return (
    <PostDetailComponent id={id}/>
  );
}
