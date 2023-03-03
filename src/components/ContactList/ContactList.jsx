import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
    render() {
        return (
            <>
                <h2 className={css.contacts_h}>Contacts</h2>
                <ul className={css.filter_list}>
                    {this.props.filteredContacts.map(contact => {
                        return (
                            <li key={contact.id} className={css.filter_item}>
                                <p className={css.filter_p}>{contact.name}: {contact.number}</p>
                                <button
                                    onClick={() => this.props.deleteContact(contact.id)}
                                    className={css.deleteContactBtn}
                                >Delete
                                </button>
                            </li>
                        )
                    })}
                </ul>

            </>

        )

    }
}





ContactList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;