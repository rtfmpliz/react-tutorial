import React, { Component } from 'react'
import Table from './Table'

class App extends React.Component {

    
    render() {
        const characters = [
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
        ]
        return (
            <div className="container">
                <Table characterData={characters}/>
            </div>
        )
    }
}

export default App