import {connect} from "react-redux";
import {
  onTableTypeSelected
} from "../redux/actions"
import {Dropdown} from "react-bootstrap";
import {newStateSelector} from "../selectors/selectors";
import TableIcon from "./TableIcon";
import {buildTable} from "../tableUtils";
import {camelCaseToDisplay} from "../utils";

const TableTypeDropdown = ({
  tableTypes,
  defaultTableColor,
  onTableTypeSelected
}) => (
  <Dropdown>
    <Dropdown.Toggle variant="secondary">
      Table Types
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {
        tableTypes.map(tableType =>
          <Dropdown.Item onSelect={() => onTableTypeSelected(tableType)} key={tableType.name}>
            <div className="table-type-option">
              <TableIcon table={buildTable({name: tableType.name}, tableType, defaultTableColor)}/>
              <div className="name">
                {camelCaseToDisplay(tableType.name)}
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
    onTableTypeSelected
  }
)(TableTypeDropdown);
