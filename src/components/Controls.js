import {connect} from "react-redux";
import {
  onOpenAddTableForm,
  onCloseAddTableForm,
} from "../redux/actions"
import TableTypeDropdown from "./TableTypeDropdown";
import TableColorDropdown from "./TableColorDropdown";
import {Button, Modal} from "react-bootstrap";

const Controls = ({
                    addTableForm,
                    onOpenAddTableForm,
                    onCloseAddTableForm,
}) => (
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
        <Button variant="primary" onClick={onOpenAddTableForm}>Add Table</Button>
      </div>
      <Modal show={addTableForm.visible} onHide={onCloseAddTableForm}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseAddTableForm}>
            Close
          </Button>
          <Button variant="primary" onClick={onCloseAddTableForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

    <input type="text" id="coords" readOnly width="8"/>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  addTableForm: state.addTableForm
})

export default connect(
  mapStateToProps,
  {
    onOpenAddTableForm,
    onCloseAddTableForm
  }
)(Controls);
