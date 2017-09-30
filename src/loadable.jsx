/**
 * Created by fed on 2017/9/30.
 */
import React from 'react';

const STATE_LIST = {
  START: 0,
  PENDING: 1,
  RESOLVED: 2,
  REJECTED: 3,
};

export default function loadable(loader) {
  let Comp;
  let err;
  let state = STATE_LIST.START;
  return class Loadable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: state,
      };
    }
    componentWillMount() {
      if (state === STATE_LIST.START) {
        state = STATE_LIST.PENDING;
        this.setState({
          status: STATE_LIST.PENDING,
        });
        setTimeout(() => {
          loader().then(comp => comp.default).then(c => {
            Comp = c;
            this.setState({
              status: STATE_LIST.RESOLVED,
            });
          }).catch(e => {
            err = e;
            this.setState({
              status: STATE_LIST.REJECTED,
            });
          });
        }, 160);
      }
    }
    render() {
      if (this.state.status === STATE_LIST.RESOLVED) {
        return <Comp {...this.props} />;
      }
      return <div>加载中</div>;
    }
  };
}
