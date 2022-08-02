import { styles } from '../../../config/styles'
import { BUTTONS_TYPES } from '../../../config/variableOfComponents'

const iconButton = `
  background-color: ${styles.background};
  width: 24px;
  heigth: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 4px;
  border-radius: 50%;
  border: 1px solid ${styles.lowAccent};
  transition: box-shadow .2s ease;
  
  :hover {
    border: 1px solid transparent;
    box-shadow:  ${styles.mediumShadow};
  }
`

const primaryButton = `
  background-color: ${styles.background};
  padding: 8px 32px;
  box-sizing: border-box;
  font-size: 16px;
  color: ${styles.mediumAccent};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid ${styles.lowAccent};
  border-radius: 5px;
  margin: 16px 0;
  transition: box-shadow .2s ease;
  
  :hover {
    border: 1px solid transparent;
    box-shadow:  ${styles.mediumShadow};
    color: ${styles.darkAccent};
  }

  @media(min-width: ${styles.desktopQuery}) {
    display: inline-flex;
    width: auto;
    margin: 8px 16px 8px 0;
  }
`

const secondaryButton = `
  ${primaryButton}
  background-color: ${styles.darkAccent};
  color: ${styles.background};

  > span {
    width: 16px;
  }

  > span svg path {
    stroke: ${styles.background};
    fill: ${styles.background};
  }

  :hover {
    background-color: ${styles.background};
    color: ${styles.darkAccent};
    border: 1px solid ${styles.darkAccent};

    > span > svg > path {
      stroke: ${styles.darkAccent};
    }
  }
  `

const allStylesFromType = {
  [BUTTONS_TYPES.primary]: primaryButton,
  [BUTTONS_TYPES.secondary]: secondaryButton,
  [BUTTONS_TYPES.icon]: iconButton,
  default: primaryButton
}

export const handleSelectStyleFromType = (type) => {
  return allStylesFromType[type] || allStylesFromType.default
}
