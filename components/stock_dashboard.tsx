import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Container, Box, SimpleGrid, IconButton, Button, Text } from '@chakra-ui/react'
import stockdata from './data/database.json'
import datjson from './data/AAPL_data.json'
import DashboardItem from './stock_board_row';
import React from 'react'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function StockDashboard() {
    const lineRef = React.useRef(null)
    const resetZoomline = () => { lineRef.current.resetZoom(); }

    return(

        <Container maxW='8xl'>
            <SimpleGrid w='100%' minChildWidth='40%' spacing='1%'>
                <DashboardItem title={'$AAPL'} dat={stockdata.AAPL}/>
                <DashboardItem title={'$GOOG'} dat={stockdata.GOOG}/>
                <DashboardItem title={'$MSFT'} dat={stockdata.MSFT}/>
                <DashboardItem title={'$AMZN'} dat={stockdata.AMZN}/>
            </SimpleGrid>
        </Container>
    )
}
