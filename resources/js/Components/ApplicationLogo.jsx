export default function ApplicationLogo(props) {
    return (
        // make the logo size compatible with navbar and footer
        <img
            src="/assets/img/logo/logo-samudralaya.png"
            alt="header-logo"
            width={props.width ? props.width : 150}
        />
    );
}
