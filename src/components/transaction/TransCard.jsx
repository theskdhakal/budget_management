import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction, getTransaction } from "./TransAction";
import { useEffect } from "react";

export const TransCard = () => {
  const dispatch = useDispatch();
  const { trans } = useSelector((state) => state.trans);
  const { user } = useSelector((state) => state.user);
  const sortedTransaction = [...trans].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  useEffect(() => {
    dispatch(getTransaction(user.uid));
  }, [dispatch, user]);

  const handleOnDelete = (id) => {
    if (window.confirm("are you sure you want to delete this???")) {
      dispatch(deleteTransaction(id, user.uid));
    }
  };

  const total = trans.reduce((acc, item) => {
    return item.type === "income" ? acc + +item.amount : acc - +item.amount;
  }, 0);

  return (
    <div className="d-flex flex-wrap">
      {sortedTransaction.map((item, i) => (
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
                <Button
                  variant="danger"
                  onClick={() => {
                    handleOnDelete(item.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
      <Card
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: "skyblue",
          color: total > "0" ? "green" : "red",
        }}
        className="text-center m-5 p-2"
      >
        <h5>Your current budget is :{total}</h5>
      </Card>
    </div>
  );
};
