// ******  Array's of Players  ***** //

var PLAYERS = [
    {
        name: "Seth Boudsady",
        score: 31,
        id: 1,
    },
    {
        name: "Fanny Yan",
        score: 33,
        id: 2,
    },
    {
        name: "Jeanna Villaneuva",
        score: 42,
        id: 3,
    },
];


// ******  Header  ***** //
function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};


// ******  Counter  ***** //

class Counter extends React.Component {
    static propTypes = {
        initialScore: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = { score: this.props.initialScore }
    }

    incrementScore = () => {
        this.setState({
            score: (this.state.score + 1)
        });
    }

    decrementScore = () => {
        this.setState({
            score: (this.state.score - 1)
        });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <div className="counter-score"> {this.state.score} </div>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
};



// ******  Player  ***** //

function Player(props) {
    return (
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <div className="player-score">
                <Counter initialScore={props.score} />
            </div>
        </div>
    );
}

Player.propsTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
}


// ******  APP  ***** //

function Application(props) {
    return (
        <div className="scoreboard">
            <Header title={props.title} />

            <div className="players">
                {props.players.map(function(player){
                    return <Player name={player.name} score={player.score} key={player.id} />
                })}
            </div>
        </div>
    );
}

Application.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
};

Application.defaultProps = {
    title: "Scoreboard",
}


ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));