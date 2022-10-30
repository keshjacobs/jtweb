
//images
import content1 from "./images/contents/1.png";
import content2 from "./images/contents/2.png";
import content3 from "./images/contents/3.jpeg";
import content4 from "./images/contents/4.jpg";



import jumbo1 from "./images/Jumbo.jpeg";
import appicon from "./icon.png";
import ilightct from "./App.json";

ilightct.icon=appicon;
ilightct.jumbos=[jumbo1];

ilightct.contents[0].image=content1;
ilightct.contents[1].image=content2;
ilightct.contents[2].image=content3;
ilightct.contents[3].image=content4;


export default ilightct;
