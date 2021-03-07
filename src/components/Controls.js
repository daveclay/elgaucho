import {connect} from "react-redux";
import {
  onOpenAddTableForm,
  onCloseAddTableForm,
} from "../redux/actions"
import TableTypeDropdown from "./TableTypeDropdown";
import TableColorDropdown from "./TableColorDropdown";
import {Button, Modal} from "react-bootstrap";
import TableIcon from "./TableIcon";

const Controls = ({
                    addTableForm,
                    onOpenAddTableForm,
                    onCloseAddTableForm,
}) => (
  <div id="controls">
    <button className="btn btn-danger" id="reset">Reset</button>
    <div id="table-config">
      <div className="config-option">
        <Button variant="primary" onClick={onOpenAddTableForm}>Add Table</Button>
      </div>
      <Modal show={addTableForm.visible} onHide={onCloseAddTableForm}>
        <Modal.Header closeButton>
          <Modal.Title>Add Table</Modal.Title>
        </Modal.Header>
        <Modal.Body className="add-table-form-modal">
          <div>
            <TableTypeDropdown />
            <TableColorDropdown />
          </div>
          <div>
            <TableIcon table={addTableForm.table}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseAddTableForm}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onCloseAddTableForm}>
            Add
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
