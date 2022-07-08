import { Fragment } from "react";
//styles
import "../../styles/CardImage.css"


export const CardImage = (props) => {
  const {urlImg} = props;
  
  return (
    <Fragment>
      <div>
        <img src={urlImg} alt="" className="rounded"/>
      </div>
    </Fragment>
  );
};