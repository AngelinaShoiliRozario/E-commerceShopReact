import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imgURL: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imgURL: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "jackets",
        },
        {
          title: "sneakers",
          imgURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "sneakers",
        },
        {
          title: "womans",
          imgURL: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          size: "large",
          linkUrl: "womans",
        },
        {
          title: "mens",
          imgURL: "https://i.ibb.co/R70vBrQ/mens.png",
          id: 5,
          size: "large",
          linkUrl: "mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          //   <h1>{section.title}</h1>
          <MenuItem key={section.id} section={section} />
        ))}
      </div>
    );
  }
}
export default Directory;
