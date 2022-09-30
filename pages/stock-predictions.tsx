import Layout from './../components/layout'
import StockDashboard from '../components/stock_dashboard'
import PageHeader from '../components/page_header'
import SideBar from '../components/sidebar'

export default function StockPredictions() {
    return (
        <Layout>
            <PageHeader/>
            <SideBar/>
            <StockDashboard/>
        </Layout>
    )
}