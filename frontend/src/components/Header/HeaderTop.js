import React from 'react'
import { Container,NavDropdown } from 'react-bootstrap'

const HeaderTop = () => {
  return (
        <div className='contHeaderTop'>
            <Container >
                <div className=' headerTop'>
                    <div>
                        <p>Welcome to Martfury Online Shopping Store!</p>
                    </div>
                    <div>
                        <NavDropdown
                        title="US Dollar"
                        menuVariant="light"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div>
                        <p>Track Your Order</p>
                    </div>
                    <div>
                        <p>Store Location</p>
                    </div>
                    <div>
                        <NavDropdown
                        title="Country"
                        menuVariant="light"
                        >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderTop