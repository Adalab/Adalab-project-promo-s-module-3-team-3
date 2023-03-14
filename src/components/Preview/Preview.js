import Image from "./Image";
import Card from "./Card";

const Preview = ({ data }) => {
  return (
    <section className="preview">
      <Image></Image>
      <Card data={data}></Card>
    </section>
  );
};

export default Preview;
