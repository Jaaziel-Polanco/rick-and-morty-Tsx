import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { characters } from '../../api/characters'
import { TypeCharacter } from '../home/interface/character.interface'
import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from '@mui/material'

const CharacterPage: FC = () => {
    const { id } = useParams()

    const [loading, setLoading] = useState<boolean>(true)
    const [character, setCharacter] = useState<TypeCharacter | null>(null)

    useEffect(() => {
        characters
            .getById({ id })
            .then((res) => {
                setCharacter(res.data)
                setLoading(false)
            })
            .catch((err) => console.error(err))
    }, [])

    let statusColorClass: string
    switch (character?.status) {
        case 'Alive':
            statusColorClass = '#66bb6a';
            break;
        case 'Dead':
            statusColorClass = 'red';
            break;
        default:
            statusColorClass = 'yellow';
            break;
    }


    return (
        <Box sx={{ width: '100%' }}>
            <Container>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <CircularProgress />
                    </Box>)
                    :
                    (<Grid container columnSpacing={2} className='mt-5'>
                        <Grid item xs={6}>
                            <Typography variant='h1'>{character!.name}</Typography>
                            <Divider />
                            <Typography variant='h6' >{character!.origin.name}</Typography>
                            <Box className="mt-5">
                                <Chip label={character!.status} variant='outlined' sx={{ color: statusColorClass, border: `1px solid ${statusColorClass}` }} />

                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={character!.image} className='w-full rounded' />
                        </Grid>
                    </Grid>
                    )}
            </Container>
        </Box>
    )
}

export default CharacterPage