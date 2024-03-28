import styles from './style.module.scss'
import Card from './card';
import Container from './container';

interface Props {
    primary : string;
    secondary : string;
}
const StatCard = ({primary, secondary} : Props) => {
  return (
    <Card className={styles.stat}>
        <Container direction="column" gap='20'>
        <p>{primary}</p>
        <h4>{secondary}</h4>
    </Container>
    </Card>
  )
}

export default StatCard