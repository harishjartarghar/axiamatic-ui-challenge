import React from "react";
import cx from 'classnames';

import { AiOutlineCheck } from "react-icons/ai";

import styles from './autoCompleteItem.module.scss';

const AutoCompleteItem = (data) => {
    const { label, image, id, onClick, isSelected } = data


    return (
        <div
            key={id}
            onClick={() => {
                onClick(id, data);
            }}
            className={cx(styles.container, { [styles.selected]: isSelected })}
            role="presentation"
        >
            <div className={styles.imageAndLabel}>
                <img src={image} width={15} height={15} />
                <span>{label}</span>
            </div>
            {isSelected && <AiOutlineCheck />}
        </div>)
}

export default AutoCompleteItem