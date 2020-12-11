import React, {useContext} from 'react';
import Header from '../../components/Header';
import {GlobalContext} from "../../context/Provider";

const KategoriContainer = () => {

    const context = useContext(GlobalContext);

    console.log('context', context)
    return (
        <div>
            <Header/>
            <h1>Kategori</h1>
        </div>
    );
};

export default KategoriContainer;
