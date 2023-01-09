import Permalink from "../Permalink";

export default function Logo() {
  return (
    <Permalink
      href={"/"}
      className="block rounded-sm py-1.5 text-lg text-black uppercase"
    >
      <span className="font-medium">Game</span>
      <span className="font-black">wod</span>
    </Permalink>
  );
}
