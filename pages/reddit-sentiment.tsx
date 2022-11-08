import Layout from './../components/layout'
import SentimentDashboard from '../components/sentiment_dashboard'
import PageHeader from '../components/page_header'
import SideBar from '../components/sidebar'

export default function RedditSentiment() {
    return (
        <Layout>
            <PageHeader/>
            <SideBar/>
            <SentimentDashboard/>
        </Layout>
    )
}