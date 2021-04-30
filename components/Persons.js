import React, { useState } from 'react';

const Persons = (props) => {
    let Persons = [
        {
            id: 1,
            name: 'امیرحسین',
            family: 'فضلی',
            age: 16
        },
        {
            id: 2,
            name: 'میلاد',
            family: 'محمدی',
            age: 17
        },
        {
            id: 3,
            name: 'امیررضا',
            family: 'نصیری',
            age: 16
        },
        {
            id: 4,
            name: 'احمد',
            family: 'تیموری',
            age: 27
        },
    ];
    const [persons, setPersons] = useState(Persons);

    const getPersons = () => {
        setPersons(Persons);
    };

    const Delete = (id) => {
        setPersons(persons.filter((user) => {
            if (user.id === id) {
                return false;
            }
            return true;
        }));
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                {
                    persons.map((user) => {
                        return (
                            <div className="col-lg-3" key={user.id}>
                                <div className="card">
                                    <div className="card-header text-center bold">{ user.name }</div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">فامیلی : { user.family }</li>
                                        <li className="list-group-item">سن : { user.age }</li>
                                        <li className="list-group-item">نام کامل : { user.name + " " + user.family }</li>
                                        <li className="list-group-item"><button onClick={ () => { Delete(user.id) } } className="btn btn-sm btn-danger">حذف</button></li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })
                }
                <button onClick={getPersons} className="btn btn-primary mt-4">دریافت اشخاص</button>
            </div>
        </div>
    );
};


export default Persons;