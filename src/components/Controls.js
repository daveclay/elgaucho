import {connect} from "react-redux";
import {} from "../redux/actions"
import Button from 'react-bootstrap/Button';
import {Dropdown} from "react-bootstrap";
import {newStateSelector} from "../selectors/selectors";
import TableTypeDropdown from "./TableTypeDropdown";

const Controls = ({}) => (
  <div id="controls">
    <button className="btn btn-danger" id="reset">Reset</button>
    <div id="table-config">
      <TableTypeDropdown />

      <div className="add-table-color dropdown">
        <button className="btn btn-secondary dropdown-toggle"
                type="button"
                id="table-color-dropdown-button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
          Color
        </button>
        <div className="dropdown-menu"
             id="table-color-dropdown"
             aria-labelledby="table-color-dropdown-button">
        </div>
      </div>
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
