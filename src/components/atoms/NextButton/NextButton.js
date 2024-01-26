import React from "react"
import cx from 'classnames';
import PropTypes from "prop-types";

import { LABELS } from "@/base/constants/label.constants";

import styles from './nextButton.module.scss'

const NextButton = ({ disabled }) => {
    return (
        <button className={cx(styles.container, { [styles.disabled]: disabled })}>
            {LABELS.NEXT}
        </button>)
}

export default NextButton

NextButton.propTypes = {
    disabled: PropTypes.bool
}

NextButton.defaultProps = {
    disabled: false
}