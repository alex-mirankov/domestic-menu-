import './App.css';
import Header from './components/header/header';
import MenuList from './components/menu-list/menu-list';

function App() {
    return (
        <>
            <Header />
            <div className="app-content">
                <MenuList />
            </div>
        </>
    );
}

export default App;
