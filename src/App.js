import './App.css';
import Address from './components/profile/Address';
import FullName from './components/profile/FullName';
import ProfilePhoto from './components/profile/ProfilePhoto';

const App = () => {
  return (
    <div className="App">
      <div className="bg"></div>
      <ProfilePhoto />
      <div>
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
