import { Container, Item, List, Title, Link } from './Navigation.styled';

export default function Navigation() {
    return (
        <Container>
            < Title > Navigation: </Title>
            <List>
                <Item>
                    <Link to="cast">Cast</Link>
                </Item>
                <Item>
                    <Link to="reviews">Reviews</Link>
                </Item>
            </List>
        </Container>
    );
}