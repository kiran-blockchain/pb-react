import { useRef } from "react"

export const Highlight = ()=>{
    const focusOn = useRef(null);
    const handleClick =()=>{
        focusOn.current.focus();
        focusOn.current.cssClass="form-control"
    }
    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
            <label>
                Click the button so the the focus will be moved into the textbox
            </label>
            <input type="text" ref={focusOn}/>
        </div>
    )
}