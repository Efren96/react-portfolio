
import Nav from "./src/components/Nav";
import About from './src/components/About';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Projects from './src/components/Projects';
import Resume from './src/components/Resume';

export default function App() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
  

// function App() {
//     const [currentTab, handleTabChange] = useState('about');

//     const renderTab = () => {
//         if (currentTab === 'About'){
//             return <About />
//         }
//         if (currentTab === 'Contact'){
//             return <Contact />
//         }
//         if (currentTab === 'Projects'){
//             return <Projects />
//         }
//         if (currentTab === 'Resume'){
//             return <Resume />
//         }
//     };

// }

// export default App;