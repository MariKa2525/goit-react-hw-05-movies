import { useFetchMovie } from 'hooks/useFetchMovie/useFetchMovie';

export const MovieSubPage = () => {
    const movie = useFetchMovie()
    console.log(movie)

    return (
        <div>
        </div>
    )
}