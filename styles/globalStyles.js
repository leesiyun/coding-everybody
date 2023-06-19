import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
  background: #F0EDE8;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

-ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  .css {
    fill: #1572b6;
  }

  .eslint {
    fill: #4b32c3;
  }

  .font-awesome {
    fill: #528dd7;
  }

  .gatsby {
    fill: #663399;
  }

  .html {
    fill: #e34f26;
  }

  .javascript {
    fill: #f7df1e;
  }

  .next_js,
  .notion {
    fill: #000000;
  }

  .styled-components {
    fill: #db7093;
  }

  .typescript {
    fill: #3178c6;
  }

  .vue {
    fill: #4fc08d;
  }
`

export default GlobalStyle
