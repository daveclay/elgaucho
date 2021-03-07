import {connect} from "react-redux";
import {
  onTableTypeSelected
} from "../redux/actions"
import {Dropdown} from "react-bootstrap";
import {newStateSelector} from "../selectors/selectors";
import TableIcon from "./TableIcon";
import {camelCaseToDisplay} from "../utils";

const buildTable = (tableType, tableColor) => ({
  name: tableType.name,
  tableType,
  tableColor,
})

const TableTypeDropdown = ({
  tableTypes,
  table,
  onTableTypeSelected
}) => (
  <Dropdown>
    <Dropdown.Toggle variant="secondary" className="table-config-dropdown-button">
      Table Types
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {
        tableTypes.map(tableType =>
          <Dropdown.Item onSelect={() => onTableTypeSelected(tableType)} key={tableType.name}>
            <div className="table-type-option">
              <TableIcon table={buildTable(tableType, table.tableColor)}/>
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
  table: state.tableForm.table
})

export default connect(
  mapStateToProps,
  {
    onTableTypeSelected
  }
)(TableTypeDropdown);
