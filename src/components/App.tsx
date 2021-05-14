import React from 'react';
import { connect } from 'react-redux';
import { Todos, fetchTodos, deleteTodos } from '../actions'
import { StoreState } from '../reducers'

interface Appprops {
    todos: Todos[],
    fetchTodos: Function;
    deleteTodos: Function;
}
interface AppState {
    fetching: boolean;
}
class _App extends React.Component<Appprops, AppState> {
    constructor(props: Appprops) {
        super(props)
        this.state = { fetching: false };
    }
    componentDidUpdate(prevProps: Appprops): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false });
        }
    }
    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true });
    }
    onTodoClick = (id: number): void => {
        this.props.deleteTodos(id);
    }
    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todos) => {
            return <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>{todo.title}</div>
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? 'LOADING' : null}
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todos[] } => {
    return { todos };
}

export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodos }
)(_App);