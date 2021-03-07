import {connect} from "react-redux";
import {} from "../redux/actions"
import Button from 'react-bootstrap/Button';
import {Dropdown} from "react-bootstrap";
import {newStateSelector} from "../selectors/selectors";
import TableTypeDropdown from "./TableTypeDropdown";
import TableColorDropdown from "./TableColorDropdown";

const Controls = ({}) => (
  <div id="controls">
    <button className="btn btn-danger" id="reset">Reset</button>
    <div id="table-config">
      <TableTypeDropdown />
      <TableColorDropdown />
      <button className="btn btn-primary" id="addTable">add</button>
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
