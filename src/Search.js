import React from 'react';
import * as RB from "react-bootstrap";

const Search = () => {
    return(
        <form>
            <RB.FormGroup controlId="userId" validationState="success">
                <RB.FormControl type="text" placeholder="Enter Github Username ..."
                    style={{width: "100%", borderRadius: "50px"}}>
                </RB.FormControl>
                <RB.FormControl.Feedback />
            </RB.FormGroup>
        </form>
    );
}

export default Search;