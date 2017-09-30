/**
 * Created by fed on 2017/9/30.
 */
import React from 'react';

const table = [
  '小明', '小红',
];

export default ({ params }) => <div>你好啊，{ table[params.name] || '小朋友'}</div>;
