import BasicButton from '@BasicButton'
import { CONTACT_EMAIL } from '@env'
import Medias from '@Medias'
import useTranslations from '@translation/useTranslations'
import styled from 'styled-components'

const Footer = () => {
  const t = useTranslations()

  return (
    <Container>
      <ButtonContainer>
        <BasicButton type="submit" onClick={onContactButtonClick}>
          <ButtonText aria-label={t.footer.getInTouch} href={`mailto:${CONTACT_EMAIL}`}>{t.footer.getInTouch}</ButtonText>
        </BasicButton>
        <Copyright>{t.footer.copyright}</Copyright>
      </ButtonContainer>
      <MediasContainer>
        <Medias />
      </MediasContainer>
    </Container>
  )
}

const onContactButtonClick = () => {
  global.gtag('event', 'contact', {
    event_category: 'contact',
  })
}

const Container = styled.footer`
background-color: ${(props) => props.theme.mainColor};
display: flex;
color: white;
padding-top: 32px;
padding-bottom: 32px;
align-items: flex-end;
`

const ButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${BasicButton} {
    max-width: 80vw;
    
    :hover {
      background-color: ${(props) => props.theme.tertiaryColor} !important;
    }
  }
}
`

const Copyright = styled.p`
  padding-top: 32px;
  font-family: var(${(props) => props.theme.font.terciary});
`

const MediasContainer = styled.div`
float: right;

${(props) => props.theme.isPhone} {
  display: none;
}
`

const ButtonText = styled.a`
color: white !important;
text-decoration: none;
`

export default Footer
