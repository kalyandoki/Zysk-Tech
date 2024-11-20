import FeatureSection from "./components/FeatureSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPart from "./components/BlogPage";
import QuestionPart from "./components/FaQuestionPage";

function App() {
  return (
    <>
      <Navbar />
      <FeatureSection />
      <QuestionPart />
      <BlogPart />
      <Footer />
    </>
  );
}

export default App;
