import { Header } from "./Header";
import { Hero } from "./Hero";
import { Plan } from "./Plan";
import { Preferences } from "./Preferences";
import { Footer } from "./Footer";

function App() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Plan/>
      <Preferences/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
