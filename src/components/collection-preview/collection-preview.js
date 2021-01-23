import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from '../collection-item/collection-item';

//Note: see shop.data for data structure

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((i, idx) => idx < 4)      //filters through to make sure collection preview ONLY shows 4 items per collection item(hats..etc)
          .map((
            {id, ...otherItemProps}
          ) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
