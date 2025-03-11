// import { Metadata } from "next";
import Link from "next/link";
// export const metadata: Metadata = {
//   title: "어바웃",
//   description: "dd",
// };

type Props = {
  params: {
    id: string;
  };
};
export const generateMetadata = ({ params }: Props) => {
  return {
    title: "ff",
  };
};
const AboutPage = () => {
  return (
    <div>
      AboutPage
      <br />
      <Link href={"/about2"}>about2로 가!</Link>
    </div>
  );
};

export default AboutPage;
