import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import StackPanel from './components/StackPanel';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/data/technologies.json');
        if (!response.ok) throw new Error('Could not load technology data.');
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        toast.error('Unable to load technology data.');
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack((current) => current.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (!stack.length) {
      toast.warning('Your stack is already empty.');
      return;
    }

    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        <section id="technologies" className="section technologies-section">
          <div className="section-heading">
            <h2>Explore the <span>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          <div className="technology-layout">
            <div className="technology-grid">
              {loading ? (
                <div className="loading-state">
                  <span className="spinner" aria-hidden="true"></span>
                  <p>Loading technologies...</p>
                </div>
              ) : technologies.length ? (
                technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={stack.some((item) => item.id === technology.id)}
                    onAdd={addToStack}
                  />
                ))
              ) : (
                <div className="loading-state">
                  <p>No technologies found.</p>
                </div>
              )}
            </div>

            <StackPanel
              stack={stack}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}
            />
          </div>
        </section>

        <section id="projects" className="info-section section">
          <div className="info-card">
            <div>
              <span className="eyebrow">PROJECTS</span>
              <h2>Build a stack that fits the project.</h2>
              <p>Compare popular frontend, backend, database, language, styling, and DevOps technologies before you start building.</p>
            </div>
            <a href="#technologies" className="outline-button">Choose Technologies</a>
          </div>
        </section>

        <section id="about" className="about-section section">
          <div className="about-copy">
            <span className="eyebrow">ABOUT DEV STACK</span>
            <h2>A simple way to plan your next development stack.</h2>
            <p>Dev Stack is a lightweight React experience for exploring technologies and collecting the tools you want to use together.</p>
          </div>
          <div id="contact" className="contact-card">
            <span className="eyebrow">CONTACT</span>
            <h3>Have an idea?</h3>
            <p>Use the stack builder to explore your options, then start building with confidence.</p>
            <a href="mailto:hello@devstack.example" className="gradient-button">Get in touch</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
