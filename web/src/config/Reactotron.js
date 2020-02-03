import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  console.tron = Reactotron.configure();
  console.tron.connect().clear();
}
