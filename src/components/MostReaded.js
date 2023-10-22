import React from 'react';
import '../css/MostReaded.css'
import 'react-bootstrap-icons';
import { Dash, PlusLg } from 'react-bootstrap-icons';
import image5 from '../images/image5.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const articles = [];
for (let i = 0; i < 3; i++) {
    articles.push(
        <div className='input-group mb-3 bg-light'>
            <span className=' input-group-text '><PlusLg className='bg-success icon' > </PlusLg></span>
            <p className='text-center text-success m-2'>ما بينما وباءت الأحمر, الشرقي الطرفين الأوربيين كل يتم</p>

        </div>
    )
}
function MostReaded() {
    return (
        <div className='row '>
            <div className='col-6 mt-5 mx-2 p-4 mt-3 arabic'>
                <h2 className='bg-light text-success mb-3 mt-1'>الاكثر قراءة</h2>

                <div>

                    <div className='input-group mb-3  bg-secondary'>
                        <span className=' input-group-text'> <Dash className='bg-danger icon' ></Dash></span>
                        <p className='text-center text-white m-2'> الكلمات العشوائية</p>

                    </div>
                    <p className=' bg-light p-4 m-1 '> مما بينما وباءت الأحمر, الشرقي الطرفين الأوربيين كل يتم
                        ما بينما وباءت الأحمر, الشرقي الطرفين الأوربيين كل يتم
                    </p>

                </div>

                <br />
                {articles}



            </div>
            <div className='col-5 mt-5 '>
                <img src={image5} alt='advertisment'/>
            </div>
        </div>
    );
}

export default MostReaded;
