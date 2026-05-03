// import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import CustomErrorBoundary from "./components/ErrorBoundary";

// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div role="alert" className="container mx-auto flex flex-col">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }

function App() {
  return (
    <CustomErrorBoundary>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </CustomErrorBoundary>
  );
}

export default App;
