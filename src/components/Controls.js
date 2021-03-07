import {connect} from "react-redux";
import {} from "../redux/actions"
import TableTypeDropdown from "./TableTypeDropdown";
import TableColorDropdown from "./TableColorDropdown";
import {Button} from "react-bootstrap";

const Controls = ({}) => (
  <div id="controls">
    <button className="btn btn-danger" id="reset">Reset</button>
    <div id="table-config">
      <div className="config-option">
        <TableTypeDropdown />
      </div>
      <div className="config-option">
        <TableColorDropdown />
      </div>
      <div className="config-option">
        <Button variant="primary">Add Table</Button>
      </div>
    </div>

    <input type="text" id="coords" readOnly width="8"/>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  ownProps,
})

export default connect(
  mapStateToProps,
  {
  }
)(Controls);
