import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollarSign, faBolt, faDumbbell, faHeartBroken } from "@fortawesome/free-solid-svg-icons"
import goldDigger from "../assests/kanye-west-gold-digger-ft-jamie-foxx.mp3"
import power from "../assests/kanye-west-power.mp3"
import stronger from "../assests/kanye-west-stronger.mp3"
import heartless from "../assests/kanye-west-heartless.mp3"

export default class PickSong extends Component {
    state = {
        currentSong: ''
    }
    render() {
        return (
            <div className="iconContainer">
                <button onClick={this.handleClick}>
                    <FontAwesomeIcon
                        icon={faDollarSign}
                        size="lg"
                        color="black"
                        value={'../assests/kanye-west-gold-digger-ft-jamie-foxx.mp3'}
                    />
                </button>
                <FontAwesomeIcon
                    icon={faBolt}
                    size="lg"
                    color="white"
                    value={power}
                    onClick={this.handleClick}
                />
                <FontAwesomeIcon
                    icon={faDumbbell}
                    size="lg"
                    color="white"
                    value={stronger} />
                <FontAwesomeIcon
                    icon={faHeartBroken}
                    size="lg"
                    color="white"
                    value={heartless} />
                <div className="musicControls">
                    <audio controls>
                        <source src={this.state.currentSong} type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        )
    }

    handleClick = (props) => {
        this.setState({ currentSong: this.props.value })
    }
}

/* <a href="yourmusicfile.mp3">Play music</a>  */