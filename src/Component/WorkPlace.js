import React from "react"
import LeaderBoardArea from "./LeaderBoardArea"
import SelectFileField from "./SelectFileField"
import SelfRecordBoard from "./SelfRecordBoard"
import ModifyProperty from "./ModifyProperty"

export default class WorkPlace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        if (this.props.isModifyProperty)
            return (
                <div>
                    <ModifyProperty group={this.props.groupName} userName={this.props.userName} modifyProperty={() => this.props.modifyProperty()} isModifyProperty={this.props.isModifyProperty}></ModifyProperty>
                </div>
            )
        else if (this.props.isCheckSelfBoard)
            return (<div><SelfRecordBoard groupName={this.props.groupName} CheckSelfBoard={() => this.props.CheckSelfBoard()} isCheckSelfBoard={this.props.isCheckSelfBoard} name={this.props.username} ></SelfRecordBoard></div>)
        else if (this.props.isLogin) {
            return (
                <div class="workField" style={{ display: "flex" }}>
                    <SelectFileField groupName={this.props.groupName} userName={this.props.userName} setLogin={(e,v) => this.props.setLogin(e,v)}></SelectFileField>
                    <LeaderBoardArea></LeaderBoardArea>

                </div>
            )
        }
        else
            return (
                <div class="workField" style={{ display: "flex" }}>
                    {/* <RequestLogin setLogin={(e)=>this.props.setLogin(e)}></RequestLogin> */}
                    <LeaderBoardArea></LeaderBoardArea>

                </div>
            )
    }


}