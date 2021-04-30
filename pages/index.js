import Countdown from '../components/Countdown';
import Counter from '../components/Counter';
import Input from '../components/Input';
import Persons from '../components/Persons';

const App = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">سلام دنیا</a>
                    <Countdown />
                </div>
            </nav>

            <h2 className="mt-5 text-center">شمارنده</h2>
            <div className="mt-4 card col-lg-6 mx-auto p-4">
                <Counter />
            </div>

            <h2 className="mt-5 text-center">اعتبارسنجی</h2>
            <div className="mt-4 card col-lg-6 mx-auto p-4">
                <Input type="email" placeholder="ایمیل خود را وارد کنید ..." message="ایمیل نامعتبر است !!" />
                <Input className="mt-4" type="phone" placeholder="شماره تلفن خود را وارد کنید ..." message="شماره تلفن نامعتبر است !!" />
            </div>
            <Persons />

        </div>
    );
}

export default App;