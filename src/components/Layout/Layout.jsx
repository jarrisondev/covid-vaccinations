import { LayoutStyled } from './styles'

export const Layout = ({ children, theme }) => {
	return <LayoutStyled t={theme} >{children}</LayoutStyled>
}
