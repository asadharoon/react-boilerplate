import React from "react";

import { useParams } from "react-router-dom";

const EditSurvey = () => {
  let { id } = useParams();
  return <p>Edit Survey {id}</p>;
};

export default EditSurvey;
