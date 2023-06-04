import React, { useState } from "react";
import Select from "react-select";
import "../css/categorypicker.css";

function CategoryPicker({ onCategoryChange }) {
    const options = [
        { value: "Whey", label: "Protein" },
        { value: "Creatine", label: "Creatine" },
        { value: "Preworkout", label: "Pre-Workout" },
        { value: "Mass", label: "Gainers" },
        { value: "Aminoacids", label: "Aminoacids" },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onCategoryChange(selectedOption?.value); // Przekazanie wybranej kategorii do komponentu nadrzędnego
    };

    return (
        <Select
            className="categoryPicker"
            options={options}
            value={selectedOption}
            onChange={handleChange}
        />
    );
}

export default CategoryPicker;
