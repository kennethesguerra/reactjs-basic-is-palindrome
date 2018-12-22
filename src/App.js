import React, { Component } from 'react';
import './App.css';
import { Grid, Row, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';

class App extends Component {
    
    constructor (props, context) {
        super(props, context);
        //binding the function to parent 
        this.handleChange = this.handleChange.bind(this);
        this.submitName = this.submitName.bind(this);
        
        this.state = {
            result: '', 
            value : ''
        };
    }
    
    getValidationState () {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }
    
    handleChange (e) {
        this.setState({value: e.target.value}); 
    }
    
    submitName(e) {
        const name = this.state.value;
        const length = name.length;
        var last = length - 1;
        var result = true;
        for (var i = 0; i < length; i++) 
        {
            if (name.substr(i, 1) !== name.substr(last, 1))
            {
                result = false;
            }
            last--;
        }
        if (result) 
        {
            this.setState({result: "Name is Palindrome"});
        }
        else
        {
            this.setState({result: "Name is not Palindrome"});
        }

        e.preventDefault();
    }
    
    render() {
        return (
            <Grid>
                <Row>
                    <h3>Is Palindrome?</h3>
                </Row>
                <Row className="show-grid">
                    <form>
                        <FormGroup 
                            controlId="enterText" 
                            validationState = { this.getValidationState() }>
                            
                            <ControlLabel>Enter Name </ControlLabel>
                            <FormControl 
                                type="text" 
                                value={this.state.value} 
                                onChange={this.handleChange} 
                                />
                            <div className="center">    
                                <Button 
                                    bsStyle="success" 
                                    bsSize="large" 
                                    onClick={this.submitName}>Submit</Button>
                            </div>
                        </FormGroup>
                    </form>
                    <div className="result">
                        <h1 className="center">{this.state.result}</h1>
                    </div>
                </Row>
            </Grid>
        );
    }
}

export default App;
