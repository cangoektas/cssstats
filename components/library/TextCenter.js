import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const TextCenter = styled('div')(
  [],
  props => ({
    textAlign: 'center'
  }),
  space,
  fontSize,
  width,
  color
)

TextCenter.defaultProps = {}

export default TextCenter
