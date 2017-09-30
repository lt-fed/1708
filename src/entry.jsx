/**
 * Created by fed on 2017/9/30.
 */
import React from 'react';
import { render } from 'react-dom';
import { Route as RawRoute, HashRouter, Switch, Link } from 'react-router-dom';

import loadable from './loadable.jsx';
import Happy from './happy.jsx';

const wrapper = Component => props => <Component {...props} params={props.match.params} />
const Route = (props) => <RawRoute {...props} component={wrapper(props.component)}/>

class CounterEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return <div>
      <div onClick={() => setTimeout(() => {
        this.setState({
          count: this.state.count + 1,
        })
      }, 16)}>
        <p>
          <Link to="/wise">聪明的朋友</Link>
        </p>
        <p>
          <Link to="/hello/0">你好，小明</Link>
        </p>
        <p>
          <Link to="/hello/1">你好， 小红</Link>
        </p>
        <p>
          <Link to="/sb">sb</Link>
        </p>
        <p>
          你点了我{this.state.count}次
        </p>
      </div>
      <div>
        <Switch>
          <Route path="/wise" component={Happy} />
          <Route path="/hello/:name?" component={loadable(() => import('./hello.jsx'))} />
        </Switch>
      </div>
    </div>;
  }
}

render(<HashRouter>
  <div>
    <CounterEntry />
    <Route path="/sb" component={loadable(() => import('./sb.jsx'))} />
  </div>
</HashRouter>, document.getElementById('container'));
