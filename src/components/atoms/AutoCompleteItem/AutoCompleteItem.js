import React from "react";
import cx from 'classnames';
import PropTypes from "prop-types";

import { AiOutlineCheck } from "react-icons/ai";

import styles from './autoCompleteItem.module.scss';

const AutoCompleteItem = (data) => {
    const { label, image, id, handleClick, handleRemove, isSelected } = data

    const onClick = isSelected ? handleRemove : handleClick;

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

AutoCompleteItem.propTypes = {
    label: PropTypes.string,
    imag: PropTypes.string,
    id: PropTypes.string,
    handleClick: PropTypes.func,
    handleRemove: PropTypes.func,
    isSelected: PropTypes.bool
}

AutoCompleteItem.defaultProps = {
    label: '',
    imag: '',
    id: '',
    handleClick: () => { },
    handleRemove: () => { },
    isSelected: false
}