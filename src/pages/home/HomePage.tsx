import { Box, Button, CircularProgress, Container, Grid, Pagination, Stack } from "@mui/material"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { CardComponent, HeaderComponent } from "../../components"
import { characters } from "../../api/characters"
import { TypeCharacter } from "./interface/character.interface"


export const HomePage: FC = () => {
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(1)
    const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        characters.getAll({ page }).then((res) => {
            setCount(res.data.info.pages)
            setAllCharacters(res.data.results)
            setTimeout(() => setLoading(false), 1000)
        }).catch((err) => {
            console.error(err)
        })
    }, [page])

    const handleChangePage = (_event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };


    return (
        <Container maxWidth='xl'>
            <HeaderComponent title='Hola mundo' description='hola bienvenido'
                element={<Button fullWidth variant="contained">
                    Hola Mundo
                </Button>} />

            {loading ? (<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>) : (
                <>
                    <div>
                        {allCharacters && allCharacters?.length > 0 ? (
                            <Grid sx={{ my: 2 }} container spacing={2} direction='row'>
                                {allCharacters!.map((character) => (
                                    <Grid item xs={3} key={character.id}>
                                        <CardComponent
                                            image={character.image}
                                            name={character.name}
                                            species={character.species}
                                            status={character.status}
                                            id={character.id}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : ('No hay datos')
                        }
                    </div>
                    <Stack spacing={2} alignItems='center' mb={5}>
                        <Pagination count={count} page={page} onChange={handleChangePage} />
                    </Stack>
                </>
            )}



        </Container>
    )
}