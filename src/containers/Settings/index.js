import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from '../../сomponents/CardList/Checkbox';
import { onReadOnly } from '../../store/actions';

class Settings extends Component {
    readOnlyHandler = (event) => {
        const mode = event != null && event.target.checked;
        this.props.onReadOnly(mode);
    };

    render() {
        const checkboxTitle = 'Readonle mode';
        return (
            <div>
                <div>
                    <label>
                        <Checkbox
                            defaultChecked={this.props.rdOnly}
                            onClick={this.readOnlyHandler}
                        />
                        <b> {checkboxTitle} </b>
                    </label>
                </div>
                <div>
                    <b>a lot of other settings</b>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { rdOnly: state.readOnly };
};

const mapDispatchToProps = {
    onReadOnly,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
