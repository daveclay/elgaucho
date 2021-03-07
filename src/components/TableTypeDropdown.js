import {connect} from "react-redux";
import {
  onOpenTableTypeForm,
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

const buildDropdownMenu = (tableTypes,
                           table,
                           onCreateNewTableTypeSelected,
                           onTableTypeSelected) => {
  const options = tableTypes.map(tableType =>
    <Dropdown.Item onSelect={() => onTableTypeSelected(tableType)} key={tableType.name}>
      <div className="table-type-option">
        <TableIcon table={buildTable(tableType, table.tableColor)}/>
        <div className="name">
          {camelCaseToDisplay(tableType.name)}
        </div>
      </div>
    </Dropdown.Item>
  )

  options.push(
    <Dropdown.Item onSelect={() => onCreateNewTableTypeSelected()} key="__new">
      Create New Table Type
    </Dropdown.Item>
  )

  return options
};

const TableTypeDropdown = ({
                             tableTypes,
                             table,
                             onCreateNewTableTypeSelected,
                             onTableTypeSelected
                           }) => (
  <Dropdown>
    <Dropdown.Toggle variant="secondary" className="table-config-dropdown-button">
      Table Types
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {
        buildDropdownMenu(
          tableTypes,
          table,
          onCreateNewTableTypeSelected,
          onTableTypeSelected)
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
    onCreateNewTableTypeSelected: onOpenTableTypeForm,
    onTableTypeSelected
  }
)(TableTypeDropdown);
