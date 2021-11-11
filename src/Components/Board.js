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
             <Head>Webinars Available</Head>
            <Content>
              <Info>Topic name : Webdevelopment</Info>
              <Info> Host Name : Nikhil Sir</Info>
              <Info> Date : 14/12/2021</Info>
              <Info> Time : 10 am</Info>
              <Info> Hosted By : Ycce College</Info>

            </Content>
            <Content1>
              <Info>Topic name : Artificial Intelligence</Info>
              <Info> Host Name : ABC Sir</Info>
              <Info> Date : 14/12/2021</Info>
              <Info> Time : 10 am</Info>
              <Info> Hosted By : Ycce College</Info>

            </Content1>
            <Content2>
              <Info>Topic name : Game dev</Info>
              <Info> Host Name : XYZ Sir</Info>
              <Info> Date : 14/12/2021</Info>
              <Info> Time : 10 am</Info>
              <Info> Hosted By : Ycce College</Info>

            </Content2>
				{this.state.notes.map(note => {
          return <Note key={note.id} id={note.id} content={note.content} removeNote={this.removeNote} saveNote={this.saveNote} />
        })}

				<button onClick={this.addNew} id="add">+</button>
			</div>
            
            </MainContainer>
            
		)
	}
}
export const Head =styled.div`

color:lightcyan;
font-weight:bold;
margin-left: 45%;
font-size: 25px;


`
export const MainContainer =styled.div`
margin-top: 5rem;
height:500px;
background-image: url(./images/dark.jpg);
`
export const Content =styled.div`
    height: 200px;
    width: 400px;
    background-color: #191D2B;
    border-left: 1px solid #2e344e;
    border-top: 8px solid #2e344e;
    border-right: 1px solid #2e344e;
    border-bottom: 1px solid #2e344e;
    margin: 2px 0;
    position: absolute;
    border-radius: 4px;
    cursor: -webkit-grab;
    -webkit-box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    justify-content: center;
    right:70%;
    top:30%;
    &:hover{
        border-top: 8px solid chocolate;
        transform: translateY(3px);
    }
`
export const Content1 =styled.div`
height: 200px;
    width: 400px;
    background-color: #191D2B;
    border-left: 1px solid #2e344e;
    border-top: 8px solid #2e344e;
    border-right: 1px solid #2e344e;
    border-bottom: 1px solid #2e344e;
    margin: 2px 0;
    position: absolute;
    border-radius: 4px;
    cursor: -webkit-grab;
    -webkit-box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    justify-content: center;
    right:10%;
    top:30%;
    &:hover{
        border-top: 8px solid chocolate;
        transform: translateY(3px);
    }

`
export const Content2 =styled.div`
height: 200px;
    width: 400px;
    background-color: #191D2B;
    border-left: 1px solid #2e344e;
    border-top: 8px solid #2e344e;
    border-right: 1px solid #2e344e;
    border-bottom: 1px solid #2e344e;
    margin: 2px 0;
    position: absolute;
    border-radius: 4px;
    cursor: -webkit-grab;
    -webkit-box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    justify-content: center;
    right:40%;
    top:30%;
    &:hover{
        border-top: 8px solid chocolate;
        transform: translateY(3px);
    }


`
export const Info =styled.div`
color: powderblue;
            font-size: 20px;
            padding: 5px;
            position: relative;
            &::after{
                content: "";
                width: 8rem;
                background-color: chocolate;
                height: 6px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
`
export default Board;