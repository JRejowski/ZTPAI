import Select from "react-select";
import "../css/categorypicker.css"

function CategoryPicker(){

    const options = [
        {value: "protein", label:"Protein"},
        {value: "creatine", label:"Creatine"},
        {value: "preworkout", label:"Pre-Workout"},
        {value: "mass", label:"Gainers"},
        {value: "aminoacids", label:"Aminoacids"}
    ];
    const handleChange =(selectedOption) => {
        console.log("hangleChange", selectedOption);
    }

    return (
        <Select className="categoryPicker" options={options} onChange={handleChange}/>
    );
}

export default CategoryPicker;