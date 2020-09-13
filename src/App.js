import React, { Component } from 'react'
import Table from './Table'

class App extends React.Component {

    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'MAc',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspiring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            }
        ],
    }

    render() {
        const {characters} = this.state
        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )

    }
    removeCharacter = (index) => {
        const { characters } = this.state
    
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
}

export default App