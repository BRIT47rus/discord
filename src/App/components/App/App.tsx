import { Provider } from 'react-redux';
import { Server } from '../Server/Server';
import './App.css';
import { store } from '../../store';

export function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Server />
            </div>
        </Provider>
    );
}
