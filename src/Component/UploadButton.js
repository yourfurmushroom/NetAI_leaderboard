import React from "react";

export default class UploadButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <div>
                <div class="mb-3">
                    <h1 for="formFileMultiple" class="form-label">asdasd</h1>
                    <input class="form-control" type="file" id="formFileMultiple" multiple/>
                </div>
            </div>
        )
    }
}