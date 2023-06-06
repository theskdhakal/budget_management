import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

export const TransCard = () => {
  const { trans } = useSelector((state) => state.trans);

  console.log(trans);
  return (
    <div className="d-flex flex-wrap">
      {trans.map((item, i) => (
        <div key={i} className="flex-fill">
          <Card
            style={{
              width: "18rem",
              backgroundColor:
                item.type === "expenses" ? "yellow" : "lightgreen",
            }}
            className="transCard mb-2"
          >
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                <h3 style={{ fontWeight: "bold" }}>{item.type}</h3>
                <p>{item.amount}</p>
                <p>{item.date}</p>
              </Card.Text>
              <div className="d-grid">
                <Button variant="danger">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};
