import React from 'react'
import './App.css'
import Note from './Note'
import styled from 'styled-components';
export default class Board extends React.Component {
        constructor(props) {
            super(props);
            this.state = { notes: [] };
        }

        componentWillMount() {
            if (this.props.count) {
                for(var i = 1; i <= this.props.count; i++)
                {
                    this.add("Note " + i);
                }
            }
        }

        nextId() {
            this.uniqueId = this.uniqueId || 0
            return this.uniqueId++
        }

        add(text) {
            var n = this.state.notes;
            n.push(
                {
                    id: this.nextId(),
                    note: text
                }
            );

            this.setState({notes: n})
        }

        update(newText, id) {
            var notes = this.state.notes.map(
                note => (note.id !== id) ?
                   note :
                    {
                        ...note,
                        note: newText
                    }
                )
            this.setState({notes})
        }

        remove(id) {
            var notes = this.state.notes.filter(note => note.id !== id)
            this.setState({notes})
        }

        eachNote(note) {
            return (<Note key={note.id}
                          id={note.id}
                          onChange={this.update.bind(this)}
                          onRemove={this.remove.bind(this)}>
                      {note.note}
                    </Note>)
        }

        render() {
            return (<div className='board'>
                       {this.state.notes.map(this.eachNote.bind(this))}
                       <button onClick={() => this.add('New Note')}>+</button>
                    </div>)
        }
    }

    Board.propTypes = {
        count: function(props, propName) {
            if(typeof props[propName] !== "number") {
                return new Error("the count must be a number")
            }

            if(props[propName] > 100) {
                return new Error('Creating ' + props[propName] + ' notes is ridiculous')
            }
        }
    }
export const MainContainer = styled.div`
margin-top: 5rem;
background-color:#000;
height:500px;
`
