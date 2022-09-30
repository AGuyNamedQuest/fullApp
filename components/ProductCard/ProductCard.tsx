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

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProductCardProps } from 'types';

 
const TypeQuest: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `0px 4px 6px rgba(3, 0, 161, 0.2)`,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: `390px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Image: any = styled("div")({  
  backgroundImage: `url(assets/images/ProductCard_Image.png)`,  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  alignSelf: `stretch`,  
  height: `171px`,  
  margin: `0px`,  
  overflow: `hidden`,  
});
  
const TextButton: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px 40px 30px 28px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `14px 0px 0px 0px`,  
});
  
const Details: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const ItemName: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `18px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  alignSelf: `stretch`,  
  height: `24px`,  
  margin: `0px`,  
}));
  
const ItemPrice: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `2px 0px 0px 0px`,  
}));
  
const ButtonContained: any = styled(Button)({  
  margin: `14px 0px 0px 0px`,  
});
 
function ProductCard(props: ProductCardProps): JSX.Element {
  return (
    <TypeQuest className={props.className} >
      <Image >
      </Image>
      <TextButton >
        <Details >
          <ItemName >
            {`Moonbase Product`}
              </ItemName>
          <ItemPrice >
            {`$XX.xx`}
              </ItemPrice>
        </Details>
        <ButtonContained variant="contained" size="large" color="primary"    > Buy Now </ButtonContained>
      </TextButton>
    </TypeQuest>
  );
}

export default ProductCard;