import Featured from './components/Featured';
import Heroshot from './components/Heroshot';
import Offer from './components/Offer';

export default function Home() {
    return (
        <main>
            <Heroshot />
            <Featured />
            <Offer />
        </main>
    );
}
