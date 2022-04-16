import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Container, Image, LinkStyled, Title } from './MovieItem.styled';

export default function MovieItem({ id, title, srcImage, from }) {
    const makeSlag = () =>
        slugify(`${title} ${id}`, {
            lower: true,
        });

    return (
        <Container>
            <LinkStyled to={`/movies/${makeSlag()}`} state={{ prevPath: from }}>
                <Image src={srcImage} alt={title} />
                <Title>{title}</Title>
            </LinkStyled>
        </Container>
    );
}

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    srcImage: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
};