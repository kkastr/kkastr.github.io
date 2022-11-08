import Layout from './../components/layout'
import PageHeader from '../components/page_header'
import SideBar from '../components/sidebar'
import EidosMDPlayer from '../components/eidosmd-player'

export default function EidosMD() {
    return (
        <Layout>
            <PageHeader/>
            <SideBar/>
            <EidosMDPlayer/>
        </Layout>
    )
}