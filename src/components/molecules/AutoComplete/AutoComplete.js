import React, { useState } from "react";

import cx from "classnames";

import AutoCompleteItem from "@/components/atoms/AutoCompleteItem";

import { AiOutlineSearch } from "react-icons/ai";

import styles from './autoComplete.module.scss';

const AutoCompleteInput = ({
    label,
    pholder,
    data,
    onSelected,
    productsIds
}) => {
    const [suggestions, setSugesstions] = useState(data);
    const [showSuggestions, toggleSuggestions] = useState(false);
    const [selectedVal, setSelectedVal] = useState("");

    const handler = e => {

    };

    const handleChange = e => {
        const input = e.target.value;
        const value = input.toLowerCase();


        const filteredData = data.filter(({ label = '' }) => {

            const lowerCaseLabel = label.toLowerCase();
            return lowerCaseLabel.startsWith(value);
        });

        setSelectedVal(input);
        setSugesstions(filteredData);
        const shouldShowSuggestion = !!input && filteredData.length > 0
        toggleSuggestions(shouldShowSuggestion)


    };

    const handleClick = (id, value) => {
        onSelected(id, value);
    };





    return (
        <div className={styles.container} >
            <div className={styles.inputContainer}>
                <AiOutlineSearch className={styles.searchIcon} />
                <input
                    placeholder={"Search For Any Software"}
                    type="search"
                    value={selectedVal}
                    onChange={handleChange}
                    onKeyUp={handler}
                    className={styles.input}
                />
            </div>



            <div
                className={styles.suggestionContainer}
                style={{ display: showSuggestions ? "flex" : "none" }}>
                <div className={styles.suggestion}>
                    {suggestions.map(({ id, label, image }) => (
                        <AutoCompleteItem
                            key={id}
                            id={id}
                            onClick={handleClick}
                            label={label}
                            image={image}
                            isSelected={productsIds[id]}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
}

export default AutoCompleteInput;
