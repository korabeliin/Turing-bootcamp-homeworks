import './App.css';
import Image from './Image';
import Button from './Button';
import Header from './Header';
import Link from './Link';
import UnorderedList from './UnorderedList';
import SmartButton from './SmartButton';

function App() {

  const check = (prop) => {
    return prop ? <Button type='text' onClick={() => alert('It Works!')} /> : <Link text='Google' href='https://www.google.com/' isUnderlined={true} />
  }

  return (
    <div className="App">
      <Image src='unsplash.jpg' alt='image' width={255} height={255} />
      <Button type='text' onClick={() => alert('It Works!')}/>
      <Header color ='cadetblue' text='Title'/>
      <Link text='Google' href='https://www.google.com/' isUnderlined={true} />
      <UnorderedList listItems={['One', 'Two', 'Three', 'Four', 'Five']}/>
      <SmartButton isButton={check(true)}/>
    </div>
  );
}

export default App;
