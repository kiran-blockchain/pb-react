import { useState } from "react"

export const Textbox = (props) => {
    const [userEntry, changeUserEntry] = useState({
        userName: ""
    });

    const handleChange = (e) => {
        let userDetails = userEntry;
        userDetails[e.target.name] = e.target.value;
        changeUserEntry({ ...userDetails });
        props.userInfo(userDetails);
    }
    return (
        <div className="col-md-3 mt-4">
            <div className="row mt-4">
                <input type="text" className="form-control"
                    name="userName"
                    onChange={e => {
                        handleChange(e);
                    }} />
            </div>
            <div className="row mt-4">
                <input type="text" className="form-control"
                    name="password"
                    onChange={e => {
                        handleChange(e);
                    }} />
            </div>
            <h6 className="mt-4">{JSON.stringify(userEntry)}</h6>
        </div>
    )
}