import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";
import type { Technology } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load technology data");
        }

        return response.json() as Promise<Technology[]>;
      })
      .then((data) => {
        setTechnologies(data);
      })
      .catch((error: unknown) => {
        console.error(error);
        toast.error("Technology data could not be loaded.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addToStack = (technology: Technology): void => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );
      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack.`
    );
  };

  const removeFromStack = (id: string): void => {
    const removedItem = stack.find(
      (item) => item.id === id
    );

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (removedItem) {
      toast.info(
        `${removedItem.name} removed from your stack.`
      );
    }
  };

  const removeAll = (): void => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="app">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero />

        <section
          className="technology-section"
          id="technologies"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Explore</p>

                <h2>
                  Explore{" "}
                  <span className="gradient-text">
                    Technologies
                  </span>
                </h2>

                <p className="section-description">
                  Choose the tools you need and build a
                  development stack that fits your project.
                </p>
              </div>

              <span className="technology-count">
                {technologies.length} Technologies
              </span>
            </div>

            {loading ? (
              <div className="loading-state">
                <span className="spinner"></span>
                <p>Loading technologies...</p>
              </div>
            ) : (
              <div className="content-layout">
                <div className="technology-grid">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      isAdded={stack.some(
                        (item) => item.id === technology.id
                      )}
                      onAdd={addToStack}
                    />
                  ))}
                </div>

                <StackSidebar
                  stack={stack}
                  onRemove={removeFromStack}
                  onRemoveAll={removeAll}
                />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;