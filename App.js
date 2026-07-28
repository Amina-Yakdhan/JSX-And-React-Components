import { Navbar, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import products from "./Product";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Amina";



function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>👕 silk</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          {products.map((product) => (
            <Col md={3} className="mb-4" key={product.id}>
              <Card className="h-100 shadow">
                <Image image={product.image} name={product.name} />

                <Card.Body>
                  <Name name={product.name} />
                  <Price price={product.price} />
                  <Description description={product.description} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <h3>Hello, {firstName ? firstName : "there!"}</h3>

          {firstName && (
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              width="120"
            />
          )}
        </div>
      </Container>
    </>
  );
}

export default App;