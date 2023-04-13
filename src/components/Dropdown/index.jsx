import { useState } from "react";

export const Dropdown = (props) => {

    const [selectedValue, changeSelectedValue] = useState(props.selectedValue ? props.selectedValue : "");
    const handleChange = (e) => {
        changeSelectedValue(e.target.value);
        props.change({[e.target.name]:e.target.value});
    }
    const bindData = () => {
        return props.data.map((item, index) => {
            return <option key={index} value={item.value}>{item.name}</option>

        })
    }
    return (
        <div className="col-md-3 mt-4">
            <select className="form-control"
                value={selectedValue}
                name={props.name} onChange={e => {
                    handleChange(e);
                }}>
                {bindData()}
            </select>

        </div>
    )
}