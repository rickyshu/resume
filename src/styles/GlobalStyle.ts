import { createGlobalStyle } from "styled-components";

// reset.css
const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font: inherit;
	vertical-align: baseline;
	text-decoration:none;

	::-webkit-scrollbar {
  width: 4px;
	}
 
	::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #e41c6f;
	}

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {
	font-family: 'Noto Sans KR', sans-serif;
	@media ${(props) => props.theme.breakpoints.TABLETMIN}{
		font-size:18px;
	}
	@media ${(props) => props.theme.breakpoints.DESKTOPMIN}{
		font-size:20px;
	}
}
body {
	background-color: ${(props) => props.theme.themeStyle.backgroundColor};
	color:${(props) => props.theme.themeStyle.fontColor};
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button,input,textarea{
	font-family: 'Noto Sans KR', sans-serif;
}
button{ 
	cursor: pointer;
	background-color:transparent;
	border:0;
}
u {
    text-decoration: underline;
}
strong {
    font-weight: bold;
}
em {
    font-style: italic;
}
p{
	word-break: break-all;
}
`;

export default GlobalStyle;
