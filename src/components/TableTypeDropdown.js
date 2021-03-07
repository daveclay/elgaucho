import {connect} from "react-redux";
import {} from "../redux/actions"
import {Dropdown} from "react-bootstrap";
import {newStateSelector} from "../selectors/selectors";
import TableIcon from "./TableIcon";
import {buildTable} from "../tableUtils";

const Controls = ({
  tableTypes,
  defaultTableColor
}) => (
  <Dropdown>
    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      Table Types
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {
        tableTypes.map(tableType =>
          <Dropdown.Item href="#/action-1">
            <div className="table-type-option">
              <TableIcon table={buildTable({name: tableType.name}, tableType, defaultTableColor)}/>
              <div className="table-content">
                {tableType.name}
              </div>
            </div>
          </Dropdown.Item>
        )
      }
    </Dropdown.Menu>
  </Dropdown>
)

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  tableTypes: newStateSelector(state).getTableTypes(),
  defaultTableColor: state.tableColors[0]
})

export default connect(
  mapStateToProps,
  {
  }
)(Controls);
