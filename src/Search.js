import React from 'react';
import Header from './Header.js';
/*import * as RB from "react-bootstrap";

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
}*/

const Search = () => {
    return(
        <div>
            <Header/>
            <div className="container">
                <section className="search six offset-by-three columns"> 
                    <form>
                        <button type="submit">
                            <span className="fa fa-check-circle fa-2x"/>
                        </button>
                        <input
                            className="u-full-width"
                            type="text"
                            name="username"
                            placeholder="Enter Github Username..."
                        />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Search;