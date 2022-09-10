import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle, { Row, Section, Text } from "./globalStyles";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Row
        gap="2rem"
        justify="center"
        align="center"
        height="80px"
        background="green"
      >
        <Link to="/">
          <Text size="2rem">HOME</Text>
        </Link>
        <Link to="/signup">
          <Text size="2rem">SIGNUP</Text>
        </Link>
      </Row>
      <Routes>
        <Route path="/" element={<Section>HOME</Section>} />
        <Route path="/signup" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
