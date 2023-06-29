import InputContainer from "~/features/InputContainer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <InputContainer />
      <h1>Hi</h1>
    </div>
  );
}
