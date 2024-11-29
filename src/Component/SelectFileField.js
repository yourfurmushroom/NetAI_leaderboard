import React from "react";
import UploadButton from "./UploadButton";
import UploadArea from "./UploadArea";

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
                    width:'70%',
                    height:'400px',
                    textAlign:'center',
                    margin:'auto'
                    }}>
                <UploadArea competition={this.props.competition} groupName={this.props.groupName} userName={this.props.userName}></UploadArea>
            </div>
        )
    }
}