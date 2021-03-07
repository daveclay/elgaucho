import {connect} from "react-redux";
import {} from "../redux/actions"
import {Dropdown} from "react-bootstrap";
import {newStateSelector} from "../selectors/selectors";
import {camelCaseToDisplay} from "../utils";

const TableColorDropdown = ({
  tableColors
}) => (
  <Dropdown>
    <Dropdown.Toggle variant="secondary">
      Color
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {
        tableColors.map(tableColor=>
          <Dropdown.Item href="#/action-1" key={tableColor.name} style={tableColor.style}>
            <div className="name">
              {camelCaseToDisplay(tableColor.name)}
            </div>
          </Dropdown.Item>
        )
      }
    </Dropdown.Menu>
  </Dropdown>
)

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  tableColors: newStateSelector(state).getTableColors()
})

export default connect(
  mapStateToProps,
  {
  }
)(TableColorDropdown);
