import React from 'react';
import Dad from './Dad';
import Uncle from './uncle';
import Aunt from './Aunt';

const Grandpa = () => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;