import { Component } from "react"
import { nanoid } from "nanoid";
 



export class InputForm extends Component {
   state = {
  contacts: [],
  name: '',
  number: ''
}
    hendleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        
    }
    submitForm = e => {
        e.preventDefault();  
         const newContact = {
        name: this.state.name,
        id: nanoid(),
        number: this.state.number,
        }; 
        this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
        //this.state.contacts.push(newContact)
        //this.setState({contacts: [newContact]});
        // this.props.onSubmit(newContact);
        // this.state.contacts.push(this.state.name)
        // this.state.contacts.push(this.state.number)
        console.log(this.state)
       
        this.restart();
    }
    restart = () => {
        setTimeout(() => {
            this.setState({ name: "", number:"" })
        }, 500);       
      } 
   loginInputId = nanoid();
        render() {
        

            return (
                <form onSubmit={this.submitForm}>
                    <label htmlFor={this.loginInputId}>Name</label>
                    <input
                        onChange={this.hendleInputChange}
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <input
                        onChange={this.hendleInputChange}
                        type="tel"
                        name="number"
                        value={this.state.number}
                    />
                    <button type="submit">Add contact</button>
                    <label >
                        <span>Find contacts by name:</span>
                        <input
                        />
                    </label>
                    <ul>
                        {this.state.contacts.map(contact => {
                            return (
                                <li><p>{contact.name}:{contact.number}</p></li>
                            )
                        })}
                    </ul>
            
                </form>
            
            )
        }
   
    }
    




    

     
    

     


















