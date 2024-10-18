import React from "react";
import UploadButton from "./UploadButton";

export default class UploadArea extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={

        }

    }
    render()
    {
        return(
            <div>
                <UploadButton userName={this.props.userName}></UploadButton>
            </div>
        )
    }
}