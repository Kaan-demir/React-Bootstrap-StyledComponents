import { Button, Dropdown, DropdownButton } from "react-bootstrap";



const Bootstrap = () => {
    return (
        <div>
            <h3 className="">React Bootstrap</h3>
            <Button>Onayla</Button>


            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </div>


    )

}

export default Bootstrap;