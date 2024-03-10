import Card from "./components/Card";
import Button from "./components/Button";
import swPosterImg from "./assets/starwars_img.jpg";
import pesbPosterImg from "./assets/esbPosterImg.jpg";
import rotjPosterImg from "./assets/rotjPosterImg.jpg";

export default function App() {
  return (
    <>
      <h1>Star Wars Movies</h1>
      <Button text="Explore" />
      <Card title="Star Wars" posterImg={swPosterImg} />
      <Card title="Empire Strikes Back" posterImg={pesbPosterImg} />
      <Card title="Return of Jedi" posterImg={rotjPosterImg} />
    </>
  );
}