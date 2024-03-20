import trlface from "../imgs/troll-face-png-1.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trlface} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">Personal Project 3</h4>
    </header>
  );
}
