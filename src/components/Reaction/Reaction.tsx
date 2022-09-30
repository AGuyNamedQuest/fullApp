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

import { styled } from '@mui/material/styles';
import { ReactionProps } from 'src/types';

 
const StateDefault: any = styled("div")(({ theme }: any) =>({  
  backgroundColor: theme.palette["Background"]["Paper"],  
  borderRadius: `20px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `221px`,  
  height: `42px`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `4px 8px`,  
  boxSizing: `border-box`,  
}));
  
const Emoji: any = styled("div")({  
  textAlign: `center`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `28px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `14px`,  
  textTransform: `none`,  
  margin: `0px`,  
});
 
function Reaction(props: ReactionProps): JSX.Element {
  return (
    <StateDefault className={props.className} >
      <Emoji >
        {`😎`}
          </Emoji>
    </StateDefault>
  );
}

export default Reaction;
