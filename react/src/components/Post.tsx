class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: " Xem them ",
            desc: " Mo ta chi tiet",
        }
    }
    changeState(){
        this.setState({
         title: " Bai viet day du",
        })
    }
}