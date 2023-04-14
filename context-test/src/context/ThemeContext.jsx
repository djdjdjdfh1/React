import React from 'react';

// App과 Toolbar 두 공간에서 쓰기위해
// 컴퍼넌트로 분리해서 사용
const ThemeContext = React.createContext('dark');

// 내보내기 위해 사용
export default ThemeContext;