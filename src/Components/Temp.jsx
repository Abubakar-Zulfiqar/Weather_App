import React, { useEffect, useState } from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import { FaStreetView } from 'react-icons/fa'

const Temp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=88fd19bf779755db9bce7947491bf521`
            const response = await fetch(url)
            const resJson = await response.json()
            // console.log(resJson)
            setCity(resJson.main)
        }
        fetchApi()
    }, [search])


    return (
        <Container>
            <div className='position-absolute top-50 start-50 translate-middle'>
                <Card style={{
                    width: '25rem', height: '28rem', border: '1px solid black', borderRadius: '2rem', background: '#99ddff'
                }}>
                    <Card.Body>
                        <div>
                            <Card.Title style={{ textAlign: 'center' }}>
                                Weather App
                            </Card.Title>

                            <Form.Group className='mb-3 mt-5'>
                                <Form.Control type='search' placeholder='Enter Location'
                                    onChange={(e) => {
                                        setSearch(e.target.value)
                                    }} required
                                />
                            </Form.Group>
                        </div>

                        {!city ? (
                            <p style={{ fontSize: '3rem', fontWeight: 600, marginTop: '5rem' }}>
                                Data not Found
                            </p>
                        ) : (
                            <>
                                <div className='position-absolute top-50 start-50 translate-middle'
                                >
                                    <FaStreetView style={{ width: '2rem', height: '2rem' }} />

                                    <span style={{ fontSize: '3rem' }}>
                                        {search}
                                    </span>

                                    <Card.Text style={{ textAlign: 'center' }}>
                                        <h2>{city.temp}℃</h2>
                                    </Card.Text>

                                </div>
                                <p style={{ fontSize: 20, fontWeight: 500, marginLeft: '4rem', marginTop: '10rem' }}>
                                    Max: {city.temp_min}℃ | Min: {city.temp_max}℃
                                </p>
                            </>
                        )}

                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Temp