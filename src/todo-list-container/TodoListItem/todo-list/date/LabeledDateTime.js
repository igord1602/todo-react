import React from "react";
import FormattedDatePanel from "./FormattedDate";

const LabeledDateTimePanel = ({ label, dateTime }) =>
  dateTime === null ? null : (
    <React.Fragment>
      <dt>{label}</dt>
      <dd>
        <FormattedDatePanel dateTime={dateTime} />
      </dd>
    </React.Fragment>
  );

export default LabeledDateTimePanel;
