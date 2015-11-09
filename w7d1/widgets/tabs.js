var tabs = [
  {title: "Title1", content:"Content1"},
  {title: "Title2", content:"Content2"},
  {title: "Title3", content:"Content3"},
  {title: "Title4", content:"Content4"},
  {title: "Title5", content:"Content5"},
  {title: "Title6", content:"Content6"},
  {title: "Title7", content:"Content7"}
];

var TabsControl = React.createClass({
  getInitialState: function () {
    return {currentTab: 0};
  },
  selectTab: function (e) {

    this.setState({currentTab: e.currentTarget.attributes[0].value.slice(-1)});
  },
  render: function () {
    var tabHeaders = tabs.map(function(tab){
      return <li onClick={this.selectTab}>{tab.title}</li>;
    }.bind(this));

    var selectedArticleText = tabs[this.state.currentTab].content;
    return <div>
              <ul>
                {tabHeaders}
              </ul>
              <article>
                {selectedArticleText}
              </article>
           </div>;
  }

});
