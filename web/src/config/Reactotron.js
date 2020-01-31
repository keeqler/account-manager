import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development')
  // eslint-disable-next-line no-console
  console.tron = Reactotron.configure()
    .connect()
    .clear();
