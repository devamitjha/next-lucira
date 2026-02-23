import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full border-b">
      <TopBar />
      <MainHeader />
      <Navbar />
    </header>
  );
}