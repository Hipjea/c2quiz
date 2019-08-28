import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TSettingsData } from '../common/types';
import * as settingsActions from '../actions/settings';

interface IProps {
    settings: TSettingsData;
    toggleSound: any;
}

interface IState {}

interface IRecipeState {
    settings: {
        sound: boolean;
        perPage: number;
    }
}

class Settings extends Component<IProps, IState> {
    toggleSound = () => {
        this.props.toggleSound();
    }

    render() {
        const sound = this.props.settings.sound;
        return(
            <div className="settings">
                <img src={sound ? `images/speaker.svg` : `images/speaker-off.svg`}
                    className="speaker-svg"
                    alt=""
                    onClick={() => this.toggleSound()} />
            </div>
        );
    }
}

const mapStateToProps = (state: IRecipeState) => ({
    settings: state.settings
});

const mapDispatchToProps = (dispatch: any) => ({
    toggleSound: () => dispatch(settingsActions.toggleSound())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);