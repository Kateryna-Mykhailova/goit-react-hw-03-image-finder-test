import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import { Form } from './components/Form/Form';
// import Phonebook from './components/Phonebook/Phonebook';
import Searchbar from './components/Searchbar/Searchbar';

class App extends React.Component {
 
  state = {
    searchName: "",
  }

  handleFormSubmit = searchName => {
    this.setState({searchName})
  }
// }
//   componentDidMount() {
//     this.setState({loading: true})
//     fetch('https://pixabay.com/api/?q=nature&page=&key=23204413-d213403835507960634485f04&image_type=photo&orientation=horizontal&per_page=12')
//       .then(res => res.json())
//       .then(picture => this.setState({picture})).finally(() => this.setState({loading: false}))
//   }


  render() {
  

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGalleryItem searchName={ this.state.searchName}/>
        <ToastContainer position="top-center" autoClose={2000}/>
      </div>
    );
  }
}

export default App;
  // componentDidMount() {
  //   const localContacts = localStorage.getItem('contacts');
  //   const parseLocalContacts = JSON.parse(localContacts);
  //   if (parseLocalContacts) {
  //     this.setState({ contacts: parseLocalContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addNewContact = newContact => {
  //   this.state.contacts.find(contact => contact.name === newContact.name)
  //     ? alert(`${newContact.name} already exists`)
  //     : this.setState(prevState => {
  //         return {
  //           contacts: [...prevState.contacts, newContact],
  //         };
  //       });
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.target.value });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;

  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter),
  //   );
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // findContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };