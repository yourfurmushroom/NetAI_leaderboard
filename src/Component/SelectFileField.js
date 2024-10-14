import React from "react";
import UploadButton from "./UploadButton";

export default class SelectFileField extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {

        }

    }
    render()
    {
        return(
            <div style={{
                    width:'100%',
                    height:'400px',
                    textAlign:'center',
                    margin:'auto'
                    }}>
                <UploadButton></UploadButton>
            </div>
        )
    }
}