import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function MapSidebar(props) {
  const [show, setShow] = useState(false);

  return(
    <div className="sidebar-whole">

      <Button  variant="primary" onClick={() => setShow(true)}>
          Details
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="sidebar"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}} dialogClassName="sidebar">
          <div className="sidebar-banner">
            <img src="https://i.imgur.com/7Bxx12L.png" title="source: imgur.com" />
          </div>
          <div className="sidebar-body">
            <img src="https://i.imgur.com/OAZfivo.png" title="source: imgur.com" />
          </div>
          <div className="sidebar-banner">
            <img src="https://i.imgur.com/GXGamQK.png" title="source: imgur.com" />
          </div>
          <div className="sidebar-body">
            <img src="https://i.imgur.com/ajnLacq.png" title="source: imgur.com" />
          </div>
          <div className="sidebar-banner">
            <img src="https://i.imgur.com/4Za7EDy.png" title="source: imgur.com" />
          </div>
          <div className="sidebar-body">
            <img src="https://i.imgur.com/PhVvw22.png" title="source: imgur.com" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}