import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, invert, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${invert ? 'invert' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;