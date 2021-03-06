const Table = ({type}) => (
    <div className="draggable table">
        <div className="table-content">
            <span className="table-id"></span>
            <div className="form-content">
                <form className="form-inline" role="form">
                    <div className="form-group">
                        <input className="tableId" type="text" placeholder="10"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
)