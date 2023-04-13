export const Content =(props)=>{
   
    return (
        <div>
            <button class="btn btn-primary" name="btnChange" onClick={e=>{
                    props.changename("I am changed");
            }}>Change Company Name</button>
        </div>
    )
}