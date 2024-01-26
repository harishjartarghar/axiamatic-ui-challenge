import React from "react";

import { LABELS } from "@/base/constants/label.constants";

import styles from './stepCounter.module.scss';

const StepCounter = () => {
    return (
        <span className={styles.container}>
            {LABELS.STEP}
        </span>)
}

export default StepCounter