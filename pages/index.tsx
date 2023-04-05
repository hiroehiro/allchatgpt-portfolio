// pages/index.tsx
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Career from "../components/Career";
import Header from "../components/Header";

const IndexPage: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Introduction />
        <Skills />
        <Career />
      </div>
    </>
  );
};

export default IndexPage;
