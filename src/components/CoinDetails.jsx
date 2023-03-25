import { Box, Container } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '..';
import Loader from './Loader';
import {useParams} from 'react-router-dom';

function CoinDetails() {
  const [coins, setCoins] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

const params = useParams();
  useEffect(() => {

    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchCoin();
  }, [params.id])


  return (
    <Container maxW={"container.xl"}>
{
  loading ? <Loader/>:(
    <>


      <Box borderWidth={1} w={"full"}>tes</Box>
    </>
  )
}
    </Container>
  )
}

export default CoinDetails