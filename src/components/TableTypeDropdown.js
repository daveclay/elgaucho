import {connect} from "react-redux";
import {
  onTableTypeSelected
} from "../redux/actions"
import {Dropdown} from "react-bootstrap";
import {newStateSelector} from "../selectors/selectors";
import TableIcon from "./TableIcon";
import { buildTableStyle } from "../tableUtils";
import {camelCaseToDisplay} from "../utils";

const buildTable = (tableType, defaultTableColor) => ({
  name: tableType.name,
  style: buildTableStyle(tableType, defaultTableColor)
})

const TableTypeDropdown = ({
  tableTypes,
  defaultTableColor,
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
              <TableIcon table={buildTable(tableType, defaultTableColor)}/>
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
