import { Component } from "react";
import { InputForm } from "./InputForm/InputForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";


export class App extends Component {
state = {
  contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
}
  addContact = newContact => {
    if (this.state.contacts.some(
      contact => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase())) { alert(newContact.name + "is already to contact") }
    else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }   
  };
  
  filterHandler = e => {
    this.setState({ filter: e.target.value });
  }

   deleteContact = id => {
         this.setState(prevState => ({
             contacts: prevState.contacts.filter(
                 contact => contact.id !== id)
         }))
     };
  
  showFilteredContacts = () => {
    return this.state.contacts.filter(contact => 
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
      
    
    
  }
  
  
  render() {
    //const inputValue = this.state.name;
   return (
      <div
       style={{
         height: '100vh',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'flex-start',
         alignItems: 'center',
         fontSize: 40,
         color: '#010101'
       }}
      >
       <InputForm onSubmit={this.addContact} />
       {this.state.contacts === 0 ? (
         <p>There are no contacts</p>
       ) : (
           <>
             <Filter onInputHandler={this.filterHandler}></Filter>
             <ContactList deleteContact={this.deleteContact}
               filteredContacts={this.showFilteredContacts()}
             ></ContactList>
           </>
       )
         
       }
       
       
      </div>
  );
}
  
}