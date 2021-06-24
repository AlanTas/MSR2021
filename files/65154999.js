function Tab({label, accessibilityState} ) //<== Destructed props.
{
        const active = accessibilityState.selected;
        const icon = !active ? Images.icons[label] : Images.icons[ `${label}Active` ];
        return(
            <Container>
                <Background>
                    <Icon source={icon}/>
                    <Label>{label}</Label>
                </Background>
            </Container>
        );
    }
    
    export default Tab;

function Tab(props ) //<== props.
{
        const active = props.accessibilityState.selected;
        const icon = !active ? Images.icons[label] : Images.icons[ `${props.label}Active` ];
        return(
            <Container>
                <Background>
                    <Icon source={icon}/>
                    <Label>{props.label}</Label>
                </Background>
            </Container>
        );
    }

    export default Tab;
