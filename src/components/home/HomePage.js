import React from 'react'
import Card from '../card/Card'
import styles from './home.module.css'
import { connect } from 'react-redux'
import { removeCharacterAction } from '../../redux/charsDuck'

const Home = ({chars, removeCharacterAction}) => {

    const renderCharacter = () => {
        let char = chars[0]
        return (
            <Card leftClick={nextCharacter} rightClick={nextCharacter} {...char}/>
        )
    }
    
    const nextCharacter = () =>{
        removeCharacterAction()
    }

    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chars: state.characters.array
    }
}

export default connect(mapStateToProps, {removeCharacterAction})(Home)