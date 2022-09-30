/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import HomeImage from 'src/assets/images/breadcrumbs_Home.png';
import SeparatorImage from 'src/assets/images/breadcrumbs_Separator_2.png';
import Separator1Image from 'src/assets/images/breadcrumbs_Separator_1.png';
import Separator2Image from 'src/assets/images/breadcrumbs_Separator.png';
import { styled } from '@mui/material/styles';
import { BreadcrumbsProps } from 'src/types';

 
const ScreenDesktop: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: `1423px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const HeroContent: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px 0px 20px 0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Breadcrumb3: any = styled("div")(({ theme }: any) =>({  
  backgroundColor: theme.palette["Background"]["Paper"],  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  flexGrow: `1`,  
  margin: `0px`,  
  overflow: `hidden`,  
}));
  
const Frame45: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Home: any = styled("img")({  
  height: `22px`,  
  width: `22px`,  
  margin: `0px`,  
});
  
const Separator: any = styled("img")({  
  height: `12.5px`,  
  width: `6px`,  
  margin: `0px 0px 0px 24px`,  
});
  
const CompanySwag: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 24px`,  
}));
  
const Separator1: any = styled("img")({  
  height: `12.5px`,  
  width: `6px`,  
  margin: `0px 0px 0px 24px`,  
});
  
const Clothing: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 24px`,  
}));
  
const Separator2: any = styled("img")({  
  height: `12.5px`,  
  width: `6px`,  
  margin: `0px 0px 0px 24px`,  
});
  
const Latest: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 24px`,  
}));
 
function Breadcrumbs(props: BreadcrumbsProps): JSX.Element {
  return (
    <ScreenDesktop className={props.className} >
      <HeroContent >
        <Breadcrumb3 >
          <Frame45 >
            <Home  src={HomeImage} alt={"Home"}/>
          </Frame45>
          <Separator  src={SeparatorImage} alt={"Separator"}/>
          <CompanySwag >
            {`Company Swag`}
              </CompanySwag>
          <Separator1  src={Separator1Image} alt={"Separator"}/>
          <Clothing >
            {`Clothing`}
              </Clothing>
          <Separator2  src={Separator2Image} alt={"Separator"}/>
          <Latest >
            {`Latest`}
              </Latest>
        </Breadcrumb3>
      </HeroContent>
    </ScreenDesktop>
  );
}

export default Breadcrumbs;
