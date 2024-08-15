import { Header } from "../components/Header";

export function Home() {
  return (
    <div className="mx-auto max-w-7xl max-lg:max-w-xl max-md:max-w-md transition-all px-6">
      <Header />

      <main>
        <section
          id="home"
          className="w-full h-screen flex justify-center items-center"
        ></section>
      </main>
    </div>
  );
}
