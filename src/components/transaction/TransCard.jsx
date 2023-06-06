import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

export const TransCard = () => {
  const { trans } = useSelector((state) => state.trans);
  return (
    <Card style={{ width: "18rem" }} className="transCard">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <p>Abcd</p>
          <p>k xa bhai</p>
          <p>hey bro</p>
        </Card.Text>
        <div className="d-grid">
          <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
