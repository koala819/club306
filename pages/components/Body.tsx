import React from 'react';
import Presentation from "./Presentation";
import Adhesion from "./Adhesion";

const Body = ({content}: any) => {
    /*faire un switch case
    * switch (expr) {
  case 'Home':
  * break;
  * case 'Club':
  * break;
  * default :
  * }*/
    return(
        <div>
            <Presentation title={content.presentationTitle} txt={content.presentationTxt} txtButton={content.presentationTxtBtn} />
            <Adhesion title={content.adhesionTitle} txtBtn={content.adhesionTxtBtn} />
        </div>
    )
}

export default Body;