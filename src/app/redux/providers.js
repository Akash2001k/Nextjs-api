'use client';
import { Provider } from 'react-redux';
import { store } from './store';

console.log('Providers component loaded'); // Log to check if file is loaded

export function Providers({ children }) {
    console.log('Providers component rendering'); // Log to check if component is rendering
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
