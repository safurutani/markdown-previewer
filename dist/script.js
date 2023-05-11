const defaultMarkdown = `# This is the biggest heading \n## This is a subheading
          \nMarkdown is **simple** and **easy to use** to format any web document.
          \nHere is a [link](https://www.markdownguide.org/basic-syntax/ "Markdown syntax guide") if you need more help writing desired elements.
          \nAn example of code snippet would be \`const codingIsFun = true;\`
          \nMore complex code can be included as well:
          \n\`\`\`
          \n    var peopleWhoLikeCoding = 0;\n    if (codingIsFun) \{\n      peopleWhoLikeCoding++;\n      return peopleWhoLikeCoding;\n    \};
          \n\`\`\`\nWe can also include inspiring quotes with a blockquote to especially draw attention to it.\n> The more I study, the more insatiable do I feel my genius to be.\n> -- Ada Lovelace
          \nThere's plenty more you can do that isn't shown.\n- Strikethroughs\n- Horizontal Rules\n- Tables\n- Highlighted Text\n- Footnotes\n- And So Much More!
          \nHopefully this image sums up your experience.\n![I "heart" Markdown](https://th.bing.com/th/id/OIP.SH8aY58n5xc4C30JDo-_agAAAA?pid=ImgDet&rs=1)`;

marked.setOptions({
  breaks: true, gfm: true });


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultMarkdown };

    this.updateText = this.updateText.bind(this);
  }
  updateText(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "items" }, /*#__PURE__*/
      React.createElement("div", { id: "textarea" }, /*#__PURE__*/
      React.createElement("label", null, "Type your Markdown"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("textarea", { type: "text", rows: "50", id: "editor", placeholder: "# Type here to  begin your markdown journey", value: this.state.input, onChange: this.updateText })), /*#__PURE__*/


      React.createElement(Preview, { md: this.state.input })));


  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  getMarkdownText() {
    var rawMarkup = marked.parse(this.props.md);
    return { __html: rawMarkup };
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "previewSection" }, /*#__PURE__*/
      React.createElement("label", null, "This is what it looks like in HTML"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.getMarkdownText() })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Editor, null), document.getElementById("root"));