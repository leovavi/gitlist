import React from 'react';
import PropTypes from 'prop-types';
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

const Search = ({ onSubmitUsername }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        if(onSubmitUsername && username){
            onSubmitUsername(username);
        }
    };

    return(
        <div>
            <Header title="Github Projects List"/>
            <div className="container">
                <section className="search six offset-by-three columns"> 
                    <form onSubmit={handleSubmit}>
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

Search.propTypes = {
    onSubmitUsername: PropTypes.func
}

export default Search;