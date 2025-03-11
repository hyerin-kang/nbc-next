type Props = {
  params: {
    id: number;
  };
};
const PostDetailPage = ({ params }: Props) => {
  return <div>{params.id} page</div>;
};

export default PostDetailPage;
