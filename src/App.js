import logo from './logo.svg';
import './App.css';
import Table from './Components/_01_Authors';
import store from './Components/Redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Table />
    </div>
    </Provider>
  );
}

export default App;
