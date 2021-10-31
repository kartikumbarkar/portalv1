import React, {Component} from 'react'
import './App.css'
import Note from './Note'
import styled from 'styled-components'

class Board extends Component {
	state = {
    notes : []
  }

	addNew = () => {
    var id = Math.random()
    var content = "New note"
		this.setState({
			notes: [...this.state.notes, {id: id ,content: content}]
		})
	}

	saveNote = (id,content) => {
    var notes = this.state.notes.map(note => {
      return (note.id !== id) ? note : {...note, content: content}
    })
		this.setState({
      notes : notes
		})
	}

	removeNote = (id) => {
    var notes = this.state.notes.filter(note => note.id !== id)
		this.setState({
			notes: notes
		})
	}


	render() {
		return (
            <MainContainer>
			<div className="board">
            <Content>
              Hello
            </Content>
				{this.state.notes.map(note => {
          return <Note key={note.id} id={note.id} content={note.content} removeNote={this.removeNote} saveNote={this.saveNote} />
        })}

				<button onClick={this.addNew} id="add">+</button>
			</div>
            
            </MainContainer>
            
		)
	}
}
export const MainContainer =styled.div`
margin-top: 5rem;
height:500px;

`
export const Content =styled.div`
 height: 150px;
    width: 150px;
    background-color: #f5da59;
    margin: 2px 0;
    position: absolute;
    border-radius: 4px;
    cursor: -webkit-grab;
    -webkit-box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    justify-content: center;
    right:50%;
    top:20%;
`
export default Board;