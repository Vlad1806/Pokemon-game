import Header from "./components/HeaderBlock";
import Layout from "./components/LayoutBlock";
import Footer from "./components/FooterBlock";

import bg from "./assets/img/bg1.jpg";

console.log(bg);
const App = () => {
  return (
    <>
      <Header title='This is new title' descr='This is new description' />
      <Layout
        title='This is new Layout1 title!'
        descr='This is new Layout1 description'
        id={1}
        urlBg={bg}
        colorBg={false}
      />
      <Layout
        title='This is new Layout2 title!'
        descr='This is new Layout2 description'
        id={2}
        urlBg={bg}
        colorBg={true}
      />
      <Layout
        title='This is new Layout3 title!'
        descr='This is new Layout3 description'
        id={3}
        urlBg={bg}
        colorBg={false}
      />
      <Footer />
    </>
  );
};

export default App;
