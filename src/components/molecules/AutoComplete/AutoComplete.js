import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";


import AutoCompleteItem from "@/components/atoms/AutoCompleteItem";

import { AiOutlineSearch } from "react-icons/ai";

import styles from './autoComplete.module.scss';

const AutoCompleteInput = ({
    data,
    handleClick,
    handleRemove,
    productsIds
}) => {
    const [suggestions, setSugesstions] = useState(data);
    const [showSuggestions, toggleSuggestions] = useState(false);
    const [selectedVal, setSelectedVal] = useState("");

    const inputRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                toggleSuggestions(false)
            }
        }
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])




    const handleChange = e => {
        const input = e.target.value;
        const value = input.toLowerCase();

        const filteredData = data.filter(({ label = '' }) => {
            const lowerCaseLabel = label.toLowerCase();
            return lowerCaseLabel.startsWith(value);
        });

        setSelectedVal(input);
        setSugesstions(filteredData);
        toggleSuggestions(!!input && filteredData.length > 0)
    };

    const handleFocus = () => {
        toggleSuggestions(!!selectedVal)
    }

    return (
        <div className={styles.container} ref={containerRef}>
            <div ref={inputRef}>
                <div className={styles.inputContainer}>
                    <AiOutlineSearch className={styles.searchIcon} />
                    <input
                        placeholder={"Search For Any Software"}
                        type="search"
                        value={selectedVal}
                        onChange={handleChange}
                        onFocus={handleFocus}
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
                                handleClick={handleClick}
                                handleRemove={handleRemove}
                                label={label}
                                image={image}
                                isSelected={productsIds[id]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AutoCompleteInput;

AutoCompleteInput.propTypes = {
    data: PropTypes.array,
    handleClick: PropTypes.func,
    handleRemove: PropTypes.func,
    productsIds: PropTypes.object
}

AutoCompleteInput.defaultProps = {
    data: [],
    handleClick: () => { },
    handleRemove: () => { },
    productsIds: {}
}
