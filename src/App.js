import './styles/option4.css';

import ProfilePicture from './components/ProfilePicture';
import MainComponent from './components/MainComponent';


export default function App() {
    return (
        <div className='business-card'>
            <ProfilePicture />
            <MainComponent />
        </div>
    )
}