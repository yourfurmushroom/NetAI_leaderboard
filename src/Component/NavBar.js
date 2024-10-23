import React from "react"
import RequestLogin from "./RequestLoginOrRegister"
import { ws } from './webServer'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisconnect: false
        }
    }

    componentDidMount() {
        ws.onclose = (e) => {
            this.setState({
                isDisconnect: !this.state.isDisconnect
            })
        }
    }

    render() {
        if (this.props.userName === "")
            return (
                <div>
                    <nav class="navbar bg-body-tertiary" style={{height:'10vh'}}>
                        <div class="container-fluid" style={this.state.isDisconnect === false ? { backgroundColor: '' } : { backgroundColor: 'red' }}>
                            <span class="navbar-brand mb-0 h1">
                                {CheckUser(this.props.userName, this.state.isDisconnect)}
                            </span>
                            <RequestLogin setLogin={(e,v) => this.props.setLogin(e,v)}></RequestLogin>
                        </div>
                    </nav>
                </div>
            )
        else if (this.props.isCheckSelfBoard || this.props.isModifyProperty)
            return (
                <div>
                    <nav class="navbar bg-body-tertiary" style={{height:'10vh'}}>
                        <div class="container-fluid">
                            <span class="navbar-brand mb-0 h1">
                                {CheckUser(this.props.groupName)}
                            </span>
                            <div>
                                {/* <button style={{ margin: "0 30px" }} type="button" class="btn btn-warning" onClick={() => this.props.CheckSelfBoard()} disabled>個人儀表板</button>
                                <button style={{ margin: "0 30px" }} type="button" class="btn btn-warning" onClick={() => this.props.modifyProperty()} >修改帳號資料</button>
                                <button style={{ margin: "0 30px" }} type="button" class="btn btn-warning" onClick={() => this.props.logout()} disabled>登出</button> */}
                            </div>
                        </div>
                    </nav>
                </div>
            )
        else {
            return (
                <div>
                    <nav class="navbar bg-body-tertiary" style={{height:'10vh'}}>
                        <div class="container-fluid">
                            <span class="navbar-brand mb-0 h1">
                                {CheckUser(this.props.groupName)}
                            </span>
                            <div>
                                <button style={{ margin: "0 30px" }} type="button" class="btn btn-warning" onClick={() => this.props.CheckSelfBoard()} >個人儀表板</button>
                                <button style={{ margin: "0 30px" }} type="button" class="btn btn-warning" onClick={() => this.props.modifyProperty()} >修改帳號資料</button>
                                <button style={{ margin: "0 30px" }} type="button" class="btn btn-warning" onClick={() => this.props.logout()} >登出</button>
                            </div>
                        </div>
                    </nav>
                </div>
            )

        }
    }
}


function CheckUser(name, statue) {
    if (statue === true)
        return <strong style={{ color: 'white', fontWeight: '400' }}>已斷開連線</strong>
    else if (name === "")
        return "記得登入"
    else
        return "hello " + name;
}

