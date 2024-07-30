import  {Component} from "react";
import { DNA } from 'react-loader-spinner'
import Info from "./info";
import getInfo from "./getInfo";

export default class IpInfo extends Component {

    constructor(props){
        super(props);

        this.state = {
            info: null,
            isLoading: true
        }
    }

    componentDidMount(){
        getInfo().then(data => {
            this.setState({
                info: data,
                isLoading: false
            })
        })
    }

    render () {

        const isLoading = this.state.isLoading;
        return(
            <>
            {isLoading ? <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            /> : <Info data={this.state.info}/>}

            </>
        )
    }
}
