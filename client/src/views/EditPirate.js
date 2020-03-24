import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Form from "../components/Form";

const EditPirate = ({ id }) => {
  const [pirate, setPirate] = React.useState({});
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
      axios.get("http://localhost:8000/api/pirates/" + id)
        .then(result => {
            console.log(result);
            setPirate(result.data);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err)
        });
    }, []);

  const onSubmitHandler = (e, data) => {
      console.log(data);
      e.preventDefault();
      axios.put("http://localhost:8000/api/pirates/" + id, data)
        .then(response => {
            console.log(response);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
      });
  };
  return (
    <div>
      <h1 className="edit-header">Edit {pirate.pirateName}</h1>
      {loaded && <Form onSubmitHandler = {onSubmitHandler} initialData = {pirate} />}
    </div>
  );
};

export default EditPirate;
