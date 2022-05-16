import Layout from './../components/layout'
import ProfileHeader from '../components/profile_header'
import BioSection from '../components/bio_section'
import ProjectSection from '../components/featured_projects'
import SideBar from '../components/sidebar'

export default function Home() {
    return (
        <Layout>
            <ProfileHeader/>

            <SideBar/>

            <BioSection/>

            <ProjectSection/>
        </Layout>
    )
}
