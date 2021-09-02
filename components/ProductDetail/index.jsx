import React from 'react'
import styles from './style.module.css';

const ProductDetail = ({modal, closeModal}) => {
    return (
        <div className={modal ? `${styles.modal} ${styles.modalNV}`: `${styles.modal} ${styles.modalV}` }>
                <div className={styles.modalContainer}>
                    <header className={styles.headerModal}>Bienvenidos!</header>
                    <label className={styles.labelModal} onClick={closeModal}>X</label>
                    <div className={styles.contenido}>
                        <div  className={`img ${styles.img}`}  >IMG</div>
                        <div className={styles.information}>
                            <span className={styles.title}>Pizza Huawaiana</span>
                            <span className={styles.description}>Big Box del Coronel 1 Sand Del Coronel2 Tiras de pechuga apanadas </span>
                            <span className={styles.price}>$10.500</span>
                        
                        </div>
                    </div>
                </div>
             </div>
    )
}

export default ProductDetail
