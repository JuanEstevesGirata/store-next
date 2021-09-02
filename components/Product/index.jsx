import React, {useState} from 'react';
import styles from './styles.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import ProductDetail from '@components/ProductDetail';



const Product = () => {
   
    const [modal, setModal] = useState(true)
    

    const openModal =() => setModal(!modal)

    const closeModal =() => setModal(!modal)



    return (
        <div className={styles.container} >
            <AiOutlinePlusCircle onClick={openModal} className={styles.btn}/>
            <div  className={`img ${styles.img}`}  >IMG</div>
            <div className={styles.information}>
                <span className={styles.title}>Pizza Huawaiana</span>
                <span className={styles.description}>Big Box del Coronel 1 Sand Del Coronel2 Tiras de pechuga apanadas </span>
                <span className={styles.price}>$10.500</span>
               
            </div>
            <ProductDetail closeModal={closeModal} modal={modal}/>
             


        </div>
    )
}

export default Product
