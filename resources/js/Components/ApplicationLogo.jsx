export default function ApplicationLogo(props) {
    return (
        <img
            src="/assets/img/logo/logo-samudralaya.png"
            alt="header-logo"
            width={props.width ? props.width : 150}
        />
    );
}
