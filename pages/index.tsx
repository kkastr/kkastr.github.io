import Layout from './../components/layout'
import ProfileHeader from '../components/profile_header'
import BioSection from '../components/bio_section'
import ProjectSection from '../components/featured_projects'
import SideBar from '../components/sidebar'
import DashboardBar from '../components/dashboard_bar'

export default function Home() {
    return (
        <Layout>

            <ProfileHeader/>

            <SideBar/>

            <DashboardBar/>

            <BioSection/>

            <ProjectSection/>
        </Layout>
    )
}
