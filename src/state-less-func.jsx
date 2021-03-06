class ComponentDemo extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAppOptionMethod = this.handleAppOptionMethod.bind(this);
        this.state = {
            options : props.options
        };
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options:[]
            }
        })
    
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }

    handleAppOptionMethod(option){
        if(!option){
            return 'Enter valid value to item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'this option alredy exists';
        }

        this.setState((prevState)=> {
            return {
                options: prevState.options.concat([option])
            }
        });
    }
    render(){
        const title = 'This is a React Demo';
        const subTitle = 'This is a sub title';
        //const options = ['Thing one','Thing two', 'Thing four'];
        return (
            <div>
               <Header subTitle={subTitle}/> 
               <Action handlePick={this.handlePick} hasOptions = {this.state.options.length > 0}/>
               <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
               <AddOption handleAppOption={this.handleAppOptionMethod}/>
            </div>
        );
    }
}

ComponentDemo.defaultProps = {
    options: ['karan','raghu']
}

const Header = (props) =>{
    return (
        <div>
            <h2>{props.title}</h2>
            {/* {props.subTitle ? <h3>{props.subTitle}</h3>: 'havent sub title'} */}
            {props.subTitle && <h3>{props.subTitle}</h3>}
        </div>
    );
}

// Default props
Header.defaultProps = {
    title:'This is title'
}

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h2>{this.props.title}</h2>
//                 <h3>{this.props.subTitle}</h3>
//             </div>
//         );
//     }
// }

const Action = (props) =>{
    return (
        <div>
            <button type="button" onClick={props.handlePick} disabled={!props.hasOptions}>What should i do?</button>
        </div>
    );
}

// class Action extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button type="button" onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should i do?</button>
//             </div>
//         );
//     }
// }

const Options = (props) =>{
    return (
        <div style={{marginTop:'10px'}}>
            <button type="button" onClick={props.handleDeleteOptions}>Remove All</button>
            <ul>
            {
                props.options.map((option) => <Option key={option} option={option} />) 
            }
            </ul>
        </div>
    );
}

// class Options extends React.Component {
//     render(){
//         return (
//             <div style={{marginTop:'10px'}}>
//                 <button type="button" onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <ul>
//                 {
//                     this.props.options.map((option) => <Option key={option} option={option} />) 
//                 }
//                 </ul>
//             </div>
//         );
//     }
// }

const Option = (props) =>{
    return (
        <div>
            <li>Option : {props.option}</li>
        </div>
    );
}

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 <li>Option : {this.props.option}</li>
//             </div>
//         );
//     }
// }

// const AddOption = () =>{
//     function constructor(props){
//         super(props);
//         this.handleAppOption = this.handleAppOption.bind(this);  
//         this.state = {
//             error:undefined
//         }  
//     }
//     function handleAppOption(e){
//         e.preventDefault();

//         const option = e.target.inputValue.value.trim();
//         const error = this.props.handleAppOption(option);
    
//         this.setState(()=>{
//             return {
//                 error
//             };
//         })
//         e.target.inputValue.value = "";
//     }
// }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAppOption = this.handleAppOption.bind(this);  
        this.state = {
            error:undefined
        }  
    }
    handleAppOption(e){
        e.preventDefault();

        const option = e.target.inputValue.value.trim();
        const error = this.props.handleAppOption(option);
    
        this.setState(()=>{
            return {
                error
            };
        })
        e.target.inputValue.value = "";
    }
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAppOption}>
                    <input type="text" name="inputValue" placeholder="Enter value"/> 
                    <button>ADD</button>
                </form>
            </div>
        );
    }
}

// const StateLessFunc = (props) =>{
//     return (
//         <div>
//             <p>Name: {props.userDetails.name}</p>
//             <p>Age: {props.userDetails.age}</p>
//         </div>
//     );
// };

// let body ={
//     name:'Hasmukh',age:27
// }

ReactDOM.render(<ComponentDemo  options={['hasmukh','karan']}/>,document.getElementById('app'));