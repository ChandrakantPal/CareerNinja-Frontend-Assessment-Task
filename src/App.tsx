import { Route, Switch } from 'react-router'
import Game from './components/Game'
import PickSide from './components/PickSide'
import SelectOpponent from './components/SelectOpponent'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/game" component={Game} />
        <Route path="/side" component={PickSide} />
        <Route path="/" exact component={SelectOpponent} />
      </Switch>
    </>
  )
}

export default App
